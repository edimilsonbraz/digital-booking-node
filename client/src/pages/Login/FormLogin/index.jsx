import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Link } from 'react-router-dom'

import { Button } from '../../../components/Button'

import {
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
} from '../style'


const schema = yup
  .object({
    email: yup.string().required('Digite um email válido'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos!')
      .required('A senha é obrigatória!')
  })
  .required()

export function FormLogin({ handleSubmitLogin, showHide, inputType, icon }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
      <WrapperInput>
        <LabelLogin htmlFor="email">E-mail</LabelLogin>
        <InputLogin
          {...register('email', { required: true })}
          type="email"
          aria-label="email"
        />
        <SpanError>{errors.email?.message}</SpanError>
      </WrapperInput>

      <WrapperInput className="loginPassword">
        <LabelLogin htmlFor="password">Senha</LabelLogin>
        <ContentPasswordLogin>
          <InputLogin
            {...register('password', { required: true })}
            type={inputType}
            aria-label="password"
          />
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
  )
}
