import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ReservationContext } from '../../context/ReservationContext'
import { ContainerSuccessR, ContentReserva, ReservaItem } from './style'
import { Button } from '../../components/Button'

export function SuccessReservation() {
  const { dataReserva } = useContext(ReservationContext)
  console.log(dataReserva)
  return (
    <ContainerSuccessR>
      <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} size="4x" />
      <h1>Muito obrigado!</h1>
      <p>Sua reserva foi feita com sucesso!</p>

      <ContentReserva>
        <h3>Dados da reserva</h3>
        <div>
          <ReservaItem>
            <p>Inicio:</p>
            <span>{dataReserva.dataCheckIn}</span>
          </ReservaItem>

          <ReservaItem>
            <p>Fim:</p>
            <span>{dataReserva.dataCheckOut}</span>
          </ReservaItem>

          <ReservaItem>
            <p>Horario check-in: </p>
            <span>{dataReserva.horaInicioReserva}</span>
          </ReservaItem>
        </div>
      </ContentReserva>
      <Link to="/">
        <Button>Voltar a página inicial</Button>
      </Link>
    </ContainerSuccessR>
  )
}
