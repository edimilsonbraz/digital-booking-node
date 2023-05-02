import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faWifi,
  faSwimmer
} from '@fortawesome/free-solid-svg-icons'
import {
  Avaliation,
  ContainerCardProduct,
  ContentAvaliation,
  ContentButton,
  ContentCard,
  ContentDescription,
  ContentIcons,
  ContentImage,
  ContentText,
  Stars
} from './style'

export function CardProduct({ product }) {
  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate('/produto/' + id)
  }

  return (
    <>
     {product &&
      <ContainerCardProduct>
        <ContentCard>
          <ContentImage src={product.imagens[0].urlImagem}/>
          <ContentDescription>
            <ContentAvaliation>
              <Stars>
                <p>{product.categoria.descricaoCategoria}</p>
                <span>⭐⭐⭐⭐⭐</span>
                <h3>{product.nomeProduto}</h3>
              </Stars>
              <Avaliation>
                <div>
                  <span>{product.categoria.qualificacaoCategoria}</span>
                </div>
                <p>Muito bom</p>
              </Avaliation>
            </ContentAvaliation>

            <ContentIcons>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>A 900 metros da praia</p>
                <FontAwesomeIcon icon={faSwimmer} />
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div></div>
            </ContentIcons>
            <ContentText>
              <p>{product.descricaoProduto}</p>
            </ContentText>
            <ContentButton>
              <button
                onClick={() => {
                  handleNavigate(product.id)
                }}
              >
                Ver mais
              </button>
            </ContentButton>
          </ContentDescription>
        </ContentCard>
      </ContainerCardProduct>
      }
    </>
  )
}
