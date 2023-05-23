import styled from 'styled-components'

export const ContainerRegister = styled.div`
  width: 500px;
  min-height: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 5px;

  h1 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 578px) {
    width: 90%;
  }
`

export const RegisterForm = styled.form`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;  
`

export const RegisterContent = styled.div`
  display: flex;
  gap: 0.875rem;
  justify-content: space-between;

  @media screen and (max-width: 578px) {
    flex-direction: column;
  }
`

export const WrapperInput = styled.div`
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  span {
    color: red;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 578px) {
    label {
      margin-top: 0.5rem;
    }
  }
`

export const RegisterInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  box-shadow: 1px 1px 5px #00000034;
  padding: 10px;
  font-size: 1rem;
`

export const ContentPassword = styled.div`
  /* display: flex;
  justify-content: space-between; */
  position: relative;

`

export const PasswordIcon = styled.span` 
  position: absolute;
  top: 8px;
  right: 10px;
`

export const ImageEyE = styled.img` 
  width: 25px;
	height: 25px;
	cursor: pointer;
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: var(--primary);
  }
`
