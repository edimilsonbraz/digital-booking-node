import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import api from '../../service/api'
import { ToastContainer, toast } from 'react-toastify'

import {
  ContainerRegister,
  ContentButton,
  ContentPassword,
  RegisterContent,
  RegisterForm,
  RegisterInput,
  WrapperInput
} from './style'
import { Button } from '../../components/Button'

import styles from './styles.module.css'

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
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const passwRef = useRef()
  const confirmPasswRef = useRef()
  const iconRef = useRef()

  const navigate = useNavigate()

  async function registerUser(userData) {
    try {
      await api.post('api/v1/auth/register', userData).then((result) => {
        if (result.status == 200) {
          toast('Usuario cadastrado! Agora só logar., ', {
            type: 'success',
            autoClose: 2000
          })

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

  const showHide = () => {
    //Função para visualização de senha do campo input
    if (passwRef.current.type === 'password') {
      passwRef.current.type = 'text'
      iconRef.current.className = `${styles.hide}`
    } else {
      passwRef.current.type = 'password'
      iconRef.current.className = ''
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
              // ref={passwRef}
              type="password"
            />
            <span>{errors.password?.message}</span>
            <div ref={iconRef} id={styles.icon} onClick={showHide}></div>
          </ContentPassword>
        </WrapperInput>
        <WrapperInput>
          <label>Confirmar Senha</label>
          <RegisterInput
            {...register('confirmPassword', { required: true })}
            // ref={confirmPasswRef}
            type="password"
          />
          <span>{errors.confirmPassword?.message}</span>
        </WrapperInput>
        <ContentButton>
          <Button type="submit">Criar conta</Button>

          <span>
            Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
          </span>
        </ContentButton>
      </RegisterForm>
      <ToastContainer />
    </ContainerRegister>
  )
}
