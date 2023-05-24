import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'

import { FormLogin } from './FormLogin'
import { AuthContext } from '../../context/AuthContext'

import { useForm } from 'react-hook-form'
 
import eye from '../../assets/visibility.svg'
import eyeoff from '../../assets/visibility-off.svg'

import { ContainerLogin } from './style'

export function Login() {
  const { reset } = useForm()

  const [inputType, setInputType] = useState('password')
  const [icon, setIcon] = useState(eye)

  const { authenticate } = useContext(AuthContext)

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
      reset()
      //Direciona para Home
      navigate('/')
    } catch (error) {
      toast('Erro ao tentar logar ' + error, { type: 'error', autoClose: 2000 })
    }
  }

  return (
    <ContainerLogin>
      <h1>Iniciar sessão</h1>

      <FormLogin
        handleSubmitLogin={handleSubmitLogin}
        showHide={showHide}
        inputType={inputType}
        icon={icon}
      />

      <ToastContainer />
    </ContainerLogin>
  )
}
