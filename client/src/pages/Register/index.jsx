import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import api from '../../service/api'
import { ToastContainer, toast } from 'react-toastify'

import { Button } from '../../components/Button'

import {
  ContainerRegister,
  ContentButton,
  ContentPassword,
  ImageEyE,
  PasswordIcon,
  RegisterContent,
  RegisterForm,
  RegisterInput,
  WrapperInput
} from './style'

import eye from '../../assets/visibility.svg'
import eyeoff from '../../assets/visibility-off.svg'

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório!'),
    lastName: yup.string().required('O sobrenome é obrigatório!'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório!'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos!')
      .required('A senha é obrigatória!'),
    confirmPassword: yup
      .string()
      .required('Confirmar a senha é obrigatório!')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })
  .required()

export function Register() {
  const {
    register,
    handleSubmit, reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const [inputType, setInputType] = useState('password')
  const [icon, setIcon] = useState(eye)

  const navigate = useNavigate()

  async function registerUser(userData) {
    try {
      await api.post('api/v1/auth/register', userData).then((result) => {
        if (result.status == 200) {
          toast('Usuario cadastrado com sucesso!', {
            type: 'success',
            autoClose: 2000
          })
          //Limpa os campos do formulário
          reset();
          
          //Espera 3s para enviar o usuario p/ page Login
          setTimeout(() => {
            navigate('/Login')
          }, 3000)
        }
      })
    } catch (error) {
      toast('Erro ao tentar Cadastrar usuário ' + error, {
        type: 'error',
        autoClose: 2000
      })
    }
  }

  async function formData(dataForm) {
    const userData = {
      firstname: dataForm.name,
      lastname: dataForm.lastName,
      email: dataForm.email,
      password: dataForm.password
    }

    await registerUser(userData)
  }

  //Função para visualização de senha do campo input
  const showHide = () => {
    if (inputType === 'password') {
      setInputType('text')
      setIcon(eyeoff)
    } else {
      setInputType('password')
      setIcon(eye)
    }
  }

  return (
    <ContainerRegister>
      <h1>Criar conta</h1>
      <RegisterForm onSubmit={handleSubmit(formData)}>
        <RegisterContent>
          <WrapperInput>
            <label>Nome</label>
            <RegisterInput
              {...register('name', { required: true })}
              type="text"
            />
            <span>{errors.name?.message}</span>
          </WrapperInput>
          <WrapperInput>
            <label>Sobrenome</label>
            <RegisterInput
              {...register('lastName', { required: true })}
              type="text"
            />
            <span>{errors.lastName?.message}</span>
          </WrapperInput>
        </RegisterContent>
        <WrapperInput>
          <label>E-mail</label>
          <RegisterInput
            {...register('email', { required: true })}
            type="text"
          />
          <span>{errors.email?.message}</span>
        </WrapperInput>
        <WrapperInput>
          <label>Senha</label>
          <ContentPassword>
            <RegisterInput
              {...register('password', { required: true })}
              type={inputType}
            />
            <PasswordIcon className='password-icon' onClick={showHide}>
              <ImageEyE src={icon}/>
            </PasswordIcon>
            <span>{errors.password?.message}</span>
          </ContentPassword>
        </WrapperInput>
        <WrapperInput>
          <label>Confirmar Senha</label>
          <RegisterInput
            {...register('confirmPassword', { required: true })}
            type="password"
          />
          <span>{errors.confirmPassword?.message}</span>
        </WrapperInput>
        <ContentButton>
          <Button type="submit" disabled={isSubmitting}>Criar conta</Button>

          <span>
            Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
          </span>
        </ContentButton>
      </RegisterForm>
      <ToastContainer />
    </ContainerRegister>
  )
}
