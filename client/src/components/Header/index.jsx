import { NavLink, useNavigate } from 'react-router-dom'
import { ToggleMenu } from '../ToggleMenu'
import { useContext, useEffect } from 'react'
import logo1 from '../../assets/logo1.svg'
import { AuthContext } from '../../context/AuthContext'
import { ButtonsHeader, ContainerHeader, ContentButtons, HeaderImg } from './style'

export function Header() {
  const { user, getUserLocalStorage, logout, isLogged, toggleIsLogged } =
    useContext(AuthContext)

  const navigate = useNavigate()

  // Função para lidar com o logout do usuárioloca
  function handleLogout() {
    logout()
    toggleIsLogged() // Altera o estado de logado
    navigate('/')
    window.location.reload()
  }

  useEffect(() => {
    getUserLocalStorage()
  }, [])

  return (
    <ContainerHeader>
      <HeaderImg>
        <NavLink to="/" end title="Home">
          <img src={logo1} alt="" />
        </NavLink>
        <p>Digital Booking</p>
      </HeaderImg>
      <ToggleMenu />

      {isLogged ? (
        <ContentButtons>
          {user && <span>Olá {user.name}!</span>}
          <NavLink to="/cadastrar-produto">
            <ButtonsHeader>Gerenciar</ButtonsHeader>
          </NavLink>
          <ButtonsHeader onClick={handleLogout}>Sair</ButtonsHeader>
        </ContentButtons>
      ) : (
        <ContentButtons>
          <NavLink to="/register" end title="Criar conta">
            <ButtonsHeader>Criar conta</ButtonsHeader>
          </NavLink>
          <NavLink to="/login" end title="Iniciar sessão">
            <ButtonsHeader>Iniciar sessão</ButtonsHeader>
          </NavLink>
        </ContentButtons>
      )}
    </ContainerHeader>
  )
}
