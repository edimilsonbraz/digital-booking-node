import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  checkName,
  checkConfirmPassword,
  checkEmail,
  checkPassword
} from '../../Scripts/validateForm'
import styles from './styles.module.css'
import api from '../../service/api'
import { ContainerError, ContainerRegister, ContentButton, ContentPassword, RegisterButton, RegisterContent, RegisterForm, RegisterInput, WrapperInput } from './style'
import { Button } from '../../components/Button'

export function Register() {
  const passwRef = useRef()
  const confirmPasswRef = useRef()
  const iconRef = useRef()
  const nomeRef = useRef()
  const sobrenomeRef = useRef()

  const [email, setEmail] = useState('')

  //Gerenciamento de erros do form com useState
  const [firstname, setNome] = useState(false)
  const [lastname, setSobrenome] = useState(false)
  const [password, setPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const navigate = useNavigate()

  async function registerUser(userData) {
    return await api.post('api/v1/auth/register', userData)
  }

  const handlerSubmit = async (event) => {
    event.preventDefault()

    const userData = {
      firstname: nomeRef.current.value,
      lastname: sobrenomeRef.current.value,
      email: email,
      password: passwRef.current.value
    }

    console.log(userData)

    try {
      const response = await registerUser(userData)
      navigate('/Login')
      alert('Usuario cadastrado! Agora só logar.')
      console.log(response) // Tratar a resposta do servidor aqui
    } catch (error) {
      console.log(error) // Tratar o erro aqui
      alert('Erro ao se cadastrar  ' + error)
    }

    checkName(nomeRef.current.value) ? setNome(false) : setNome(true)
    checkName(sobrenomeRef.current.value)
      ? setSobrenome(false)
      : setSobrenome(true)
    checkEmail(email) ? setEmailError(false) : setEmailError(true)
    checkPassword(passwRef.current.value)
      ? setPassword(false)
      : setPassword(true)
    checkConfirmPassword(passwRef.current.value, confirmPasswRef.current.value)
      ? setConfirmPassword(false)
      : setConfirmPassword(true)
  }

  const showHide = () =>
    //Função para visualização de senha do campo input
    {
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
      <RegisterForm>
        <RegisterContent>
          <WrapperInput>
            <label htmlFor="name">Nome</label>
            <RegisterInput
              className={firstname ? 'border-error' : ''}
              ref={nomeRef}
              type="text"
              name=""
              id="name"
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="lastname">Sobrenome</label>
            <RegisterInput
              className={lastname ? 'border-error' : ''}
              ref={sobrenomeRef}
              type="text"
              name=""
              id="lastname"
              required
            />
          </WrapperInput>
        </RegisterContent>
        <WrapperInput>
          <label htmlFor="email">E-mail</label>
          <RegisterInput
            className={emailError ? 'border-error' : ''}
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="password">Senha</label>
          <ContentPassword>
            <RegisterInput
              className={password ? 'border-error' : ''}
              ref={passwRef}
              type="password"
              name=""
              id="password"
              required
            />

            <div ref={iconRef} id={styles.icon} onClick={showHide}></div>
          </ContentPassword>
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="confirmpassword">Confirmar Senha</label>
          <RegisterInput
            className={confirmPassword ? 'border-error' : ''}
            ref={confirmPasswRef}
            type="password"
            name=""
            id="confirmpassword"
            required
          />
        </WrapperInput>
        <ContentButton>
          <Button type="submit" onClick={handlerSubmit}>
            Criar conta
          </Button>
          
          <span>
            Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
          </span>
        </ContentButton>
      </RegisterForm>
      {firstname || lastname || password || confirmPassword || emailError ? (
        <ContainerError className={styles.containerError}>
          <ul>
            {firstname ? <li> * O nome digitado não é válido</li> : ''}
            {lastname ? <li> * O sobrenome digitado não é válido</li> : ''}
            {emailError ? <li> * E-mail digitado não é válido</li> : ''}
            {password ? (
              <li> * A senha deve ter mais de seis caracteres.</li>
            ) : (
              ''
            )}
            {confirmPassword ? <li> * As senhas devem ser idênticas</li> : ''}
          </ul>
        </ContainerError>
      ) : (
        ''
      )}
    </ContainerRegister>
  )
}
