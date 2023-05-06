import styled from 'styled-components'

export const ContainerSuccessR = styled.div`
  width: 500px;
  height: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 10px;
  box-shadow: 1px 1px 5px #00000044;
  border-radius: 10px;

  h1 {
    font-size: 1.6rem;
  }

  p {
    font-weight: 300;
    font-size: 1.4rem;
  }

  button {
    padding: 8px;
  }

  @media (max-width: 560px) {
    width: 320px;

    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`

export const ContentReserva = styled.div`
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }
`

export const ReservaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    font-weight: bold;
  }
`
