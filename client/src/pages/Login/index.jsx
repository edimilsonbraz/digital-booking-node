import { useRef, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkEmail, checkPassword } from '../../Scripts/validateForm'

import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

import {
  ContainerError,
  ContainerLogin,
  ContentIcon,
  InputLogin,
  LabelLogin,
  LiError,
  LoginForm,
  SpanLink,
  UlError,
  WrapperInput,
  WrapperSubmit
} from './style'
import { Button } from '../../components/Button'

export function Login() {
  const { authenticate } = useContext(AuthContext)
  const passwRef = useRef()
  const iconRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  // Gerenciamento de erros do formulário com useState
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    onFinish(email, password)
  }

  const showHide = () => {
    if (passwRef.current.type === 'password') {
      passwRef.current.type = 'text'
      iconRef.current.className = 'hide'
    } else {
      passwRef.current.type = 'password'
      iconRef.current.className = ''
    }
  }

  async function onFinish(email, password) {
    try {
      const isEmailValid = checkEmail(email)
      const isPasswordValid = checkPassword(passwRef.current.value)

      setEmailError(!isEmailValid)
      setPasswordError(!isPasswordValid)

      await authenticate(email, password)
      toast('Bem-vindo, ', { type: 'success', autoClose: 2000 })
      navigate('/')
    } catch (error) {
      toast('Erro ao tentar logar ' + error, { type: 'error', autoClose: 2000 })
    }
  }

  return (
    <ContainerLogin>
      <h1>Iniciar sessão</h1>
      <LoginForm>
        <WrapperInput>
          <LabelLogin htmlFor="email">E-mail</LabelLogin>
          <InputLogin
            className={emailError ? 'border-error' : ''}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </WrapperInput>

        <WrapperInput className="loginPassword">
          <LabelLogin htmlFor="password">Senha</LabelLogin>
          <InputLogin
            className={passwordError ? 'border-error' : ''}
            ref={passwRef}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <ContentIcon
            ref={iconRef}
            id="icon"
            onClick={showHide}
          ></ContentIcon>
        </WrapperInput>

        <WrapperSubmit>
          <Button type="submit" onClick={handleSubmit}>
            Iniciar
          </Button>
          <SpanLink>
            Não é cadastrado? <Link to="/register">Criar conta</Link>
          </SpanLink>
        </WrapperSubmit>
      </LoginForm>
      {passwordError || emailError ? (
        <ContainerError>
          <UlError>
            {emailError && <LiError> * E-mail digitado não é válido</LiError>}
            {passwordError ? (
              <LiError>* A senha deve ter mais de seis caracteres.</LiError>
            ) : (
              ''
            )}
          </UlError>
        </ContainerError>
      ) : (
        ''
      )}
      <ToastContainer />
    </ContainerLogin>
  )
}
