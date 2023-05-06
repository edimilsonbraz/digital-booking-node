import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--light);
`

export const HeaderImg = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  p {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--text);
    font-weight: 300;
    letter-spacing: 0.2rem;
  }
`

export const ContentButtons = styled.div`
  display: flex;
  gap: 0.625rem;

  span {
    font-size: 1.125rem;
    font-style: italic;
    color: var(--text);
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding-right: 5rem;
    padding-top: 0.5rem;
  }

  /* RESPONSIVIDADE TABLET */
  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const ButtonsHeader = styled.button`
  width: 12.875rem;
  height: 2.5rem;
  color: var(--primary);
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background: var(--white);
  transition: all ease-in-out 0.2s;

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`
