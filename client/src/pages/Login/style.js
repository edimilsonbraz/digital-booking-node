import styled from 'styled-components'

export const ContainerLogin = styled.section`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 578px) {
    width: 90%;
  }
`

export const LoginForm = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 578px) {
    margin: 0 2rem;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelLogin = styled.label`
  margin-bottom: 0.5rem;
`

export const ContentPasswordLogin = styled.div`
  position: relative;
`

export const IconLogin = styled.span`
  position: absolute;
  top: 8px;
  right: 10px;
`

export const ImageEyELogin = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

export const InputLogin = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  box-shadow: 1px 1px 5px #00000034;
  padding: 10px;
  font-size: 1rem;
`

export const WrapperSubmit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SpanLink = styled.span`
  a {
    color: var(--primary);
  }
`

export const SpanError = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`

