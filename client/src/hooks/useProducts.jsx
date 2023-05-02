import { useEffect, useState } from 'react'
import api from '../service/api'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [filteredProductQnt, setFilteredProductQnt] = useState({
    apartamento: 0,
    resort: 0,
    hotel: 0,
    beiraMar: 0
  })

  useEffect(() => {
    getProdutos();
  }, [])

  async function getProdutos() {
    try {
      const response = await api
        .get('produtos')
        .then((response) => response.data)
      setProducts(response)

      //Filtrando Quant de Produto por Categoria
      setFilteredProductQnt({
        apartamento: response.filter(
          (produto) => produto.categoria.descricaoCategoria === 'Apartamentos'
        ).length,
        resort: response.filter(
          (produto) => produto.categoria.descricaoCategoria === 'Resorts'
        ).length,
        hotel: response.filter(
          (produto) => produto.categoria.descricaoCategoria === 'Hoteis'
        ).length,
        beiraMar: response.filter(
          (produto) => produto.categoria.descricaoCategoria === 'Beira Mar'
        ).length
      })
    } catch (error) {
      console.log('Erro ao buscar produtos' + error)
    }
  }

  return {
    products,
    filteredProductQnt
  }
}
