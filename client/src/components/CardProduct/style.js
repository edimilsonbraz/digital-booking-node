import styled from 'styled-components'

export const ContainerCardProduct = styled.div`
  box-shadow: 1px 1px 5px #00000059;
  border-radius: 10px;
  width: 49%;
  max-height: auto;
  margin-bottom: 1.5rem;
  margin-left: 0.2rem;
  background-color: var(--white);
  position: relative;

  &:nth-child(odd) {
    margin-right: 1rem;
  }

  /* REPONSIVIDADE DESKTOP */
  @media screen and (max-width: 1180px) {
    width: 100%;

    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`

export const ContentCard = styled.div`
  display: flex;

  /*RESPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentImage = styled.img`
  object-fit: cover;
  width: 50%;
  max-height: auto;
  background-position: center;
  background-size: cover;
  border-radius: 10px 0 0 10px;

  /*RESPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ContentDescription = styled.div`
  width: 52%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  /*RESPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ContentAvaliation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: space-between;
`

export const Stars = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0.8rem;
  }

  p {
    display: inline;
    color: var(--title);
    margin-right: 0.5rem;
  }
`

export const Avaliation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  right: 5px;
  top: 5px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;

    background: var(--title);
  }

  span {
    color: var(--white);
  }

  p {
    color: var(--text);
    text-align: center;
    font-size: 0.875rem;
  }

  /*RESPONSIVIDADE TABLET */
  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;

    > div {
      background: var(--white);
    }

    span {
      color: var(--title);
    }

    p {
      color: var(--white);
    }
  }
`

export const ContentIcons = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  svg {
    width: 16px;
    color: var(--title);
  }

  p {
    margin-right: 0.875rem;
  }
`

export const ContentText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const ContentButton = styled.div`
  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 6px;
    color: var(--white);
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--primary);
    border: 1px solid transparent;
    margin-top: 1rem;
    transition: all ease-in-out 0.2s;

    &:hover {
      background: var(--white);
      color: var(--primary);
      border: 1px solid var(--primary);
    }
  }
`
