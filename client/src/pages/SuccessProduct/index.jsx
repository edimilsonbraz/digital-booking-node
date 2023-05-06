import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ContainerSuccessP } from './style'
import { Button } from '../../components/Button'

export function SuccessProduct() {
  return (
    <ContainerSuccessP>
      <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} size="4x" />
      <p>Seu produto foi cadastrado com sucesso!</p>
      <Link to="/">
        <Button>Voltar a página inicial</Button>
        {/* <button>Voltar a página inicial</button> */}
      </Link>
    </ContainerSuccessP>
  )
}
