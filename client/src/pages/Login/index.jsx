import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import { AuthContext } from '../../context/AuthContext'
import { Button } from '../../components/Button'

import {
  ContainerLogin,
  ContentPasswordLogin,
  IconLogin,
  ImageEyELogin,
  InputLogin,
  LabelLogin,
  LoginForm,
  SpanError,
  SpanLink,
  WrapperInput,
  WrapperSubmit
} from './style'

import eye from '../../assets/visibility.svg'
import eyeoff from '../../assets/visibility-off.svg'

const schema = yup
  .object({
    email: yup.string().required('Digite um email válido'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos!')
      .required('A senha é obrigatória!')
  })
  .required()

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { authenticate } = useContext(AuthContext)

  const [inputType, setInputType] = useState('password')
  const [icon, setIcon] = useState(eye)

  const navigate = useNavigate()

  async function handleSubmitLogin(dataForm) {
    console.log(dataForm.email, dataForm.password)
    onFinish(dataForm.email, dataForm.password)
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

  async function onFinish(email, password) {
    try {
      await authenticate(email, password)
      toast('Usuario cadastrado com sucesso!', {
        type: 'success',
        autoClose: 2000
      })
          //Limpa os campos do formulário
          reset();
          //Direciona para Home
          navigate('/')
    } catch (error) {
      toast('Erro ao tentar logar ' + error, { type: 'error', autoClose: 2000 })
    }
  }

  return (
    <ContainerLogin>
      <h1>Iniciar sessão</h1>
      <LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
        <WrapperInput>
          <LabelLogin htmlFor="email">E-mail</LabelLogin>
          <InputLogin {...register('email', { required: true })} type="email" />
          <SpanError>{errors.email?.message}</SpanError>
        </WrapperInput>

        <WrapperInput className="loginPassword">
          <LabelLogin htmlFor="password">Senha</LabelLogin>
          <ContentPasswordLogin>
            <InputLogin
              {...register('password', { required: true })} type={inputType}/>
            <IconLogin onClick={showHide}>
              <ImageEyELogin src={icon} />
            </IconLogin>
            <SpanError>{errors.password?.message}</SpanError>
          </ContentPasswordLogin>
        </WrapperInput>

        <WrapperSubmit>
          <Button type="submit">Iniciar</Button>
          <SpanLink>
            Não é cadastrado? <Link to="/register">Criar conta</Link>
          </SpanLink>
        </WrapperSubmit>
      </LoginForm>
      <ToastContainer />
    </ContainerLogin>
  )
}
