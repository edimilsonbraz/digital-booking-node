import styled from 'styled-components'
import visible_eye from '../../assets/visibility.svg'
import invisible_eye from '../../assets/visibility-off.svg'

export const ContainerLogin = styled.section`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 578px) {
    /* width: 90%; */
    /* margin: 0 2rem; */
  }
`

export const LoginForm = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 578px) {
    /* width: 95%; */
    margin: 0 2rem;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;

  .loginPassword {
    position: relative;
  }
`

export const LabelLogin = styled.label`
  margin-bottom: 0.5rem;
`

export const InputLogin = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  box-shadow: 1px 1px 5px #00000034;
  padding: 5px;
  font-size: 1rem;

  .border-error {
    border: 12px;
    background-color: rgba(255, 109, 109, 0.589);
  }
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

export const ContainerError = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--white);
  border: 2px solid rgba(255, 48, 48, 0.849);
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: red;
  border-radius: 5px;
`

export const UlError = styled.ul``

export const LiError = styled.li`
  margin: 5px;
  list-style: none;
`

export const ContentIcon = styled.div`
  &#icon {
    width: 20px;
    height: 18px;
    cursor: pointer;
    margin: -20px 0 0 470px;
    /* position: absolute; */
    transform: translateY(-50%);
    background: url(${visible_eye});
    background-size: cover;
  }

  &#icon.hide {
    width: 20px;
    height: 18px;
    cursor: pointer;
    margin: -20px 0 0 470px;
    /* position: absolute; */
    transform: translateY(-50%);
    background: url(${invisible_eye});
    background-size: cover;
  }

  @media screen and (max-width: 578px) {
    /* position: absolute; */
    /* top: 0px; */
    /* width: 90%; */
    /* margin: 0 2rem; */
  }
`
