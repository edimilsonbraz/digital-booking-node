import { useProducts } from '../../hooks/useProducts'

import { CardCategory } from '../../components/CardCategory'
import { CardProduct } from '../../components/CardProduct'
import { Search } from '../../components/Search'
import { SearchForm } from './SearchForm'

import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ButtonLogin,
  ContainerBuscador,
  ContainerCard,
  ContainerCategory,
  ContainerRecomendacao,
  ContentRecomendacao,
  HeaderList,
  HeaderListItem
} from './style'
import { useCities } from '../../hooks/useCities'
import { Link } from 'react-router-dom'

export function Home() {
  const { products, filteredProductQnt } = useProducts()
  const { cities } = useCities()

  return (
    <>
      <ContainerBuscador>
        <HeaderList>
          <HeaderListItem className="active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </HeaderListItem>
          <HeaderListItem className="">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </HeaderListItem>
          <HeaderListItem className="">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de carros</span>
          </HeaderListItem>
          <HeaderListItem className="">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </HeaderListItem>
          <HeaderListItem className="">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Táxis(aeroporto)</span>
          </HeaderListItem>
        </HeaderList>

        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <p className="headerDesc">
          Seja recompensado por suas viagens - desbloqueie economia instantânea
          de 10% ou mais criando uma conta digital booking gratuita.
        </p>

        <ButtonLogin>
          <Link to="/register">Registrar</Link>          
        </ButtonLogin>

        {/* <SearchForm cities={cities} /> */}
        <Search cities={cities}/>
      </ContainerBuscador>

      <ContainerCategory className="containerGlobal">
        <h2>Buscar por tipo de acomodação</h2>

        <CardCategory filteredProductQnt={filteredProductQnt} />
      </ContainerCategory>

      <ContainerRecomendacao className="containerGlobal">
        <ContentRecomendacao>
          <h2>Recomendações</h2>

          <ContainerCard>
            <CardProduct />
            {products ? (
              products.map((product) => (
                <CardProduct product={product} key={product.id} />
              ))
            ) : (
              <p>Não há produtos cadastrados</p>
            )}
          </ContainerCard>
        </ContentRecomendacao>
      </ContainerRecomendacao>
    </>
  )
}
