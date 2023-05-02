import styled from 'styled-components'
import bg_search from '../../assets/bg-search-box.jpg'

export const ContainerBuscador = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg_search}) no-repeat center center;
  background-size: cover;
  opacity: 0.8;
  padding: 2rem 4rem;
  text-align: center;
  margin-bottom: 100px;

  h1 {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--white);
  }

  /* REPONSIVIDADE TABLET */
  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

export const HeaderList = styled.div`
  color: var(--white);
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 80px;
`

export const HeaderListItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid transparent;
  cursor: pointer;

  &.active {
    border: 1px solid var(--primary);
    padding: 10px;
    border-radius: 8px;
  }
`

export const ButtonLogin = styled.div` 
  display: block;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 15px;
  width: 180px;
  margin: 15px auto 0;
  cursor: pointer;
`

export const ContainerCategory = styled.section`
  h2 {
    margin: 2rem 0;
  }

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1400px) {
    padding: 0 2rem;
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const ContainerRecomendacao = styled.section`
  margin-top: 4rem;
  margin-bottom: 6rem;

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1400px) {
    padding: 0 2rem;
  }

  /* RESPONSIVIDADE MOBILE */
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const ContentRecomendacao = styled.div`
  h2 {
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`
