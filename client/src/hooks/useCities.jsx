import { useEffect, useState } from "react"
import api from "../service/api"


export function useCities() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities()
  }, [])

  async function getCities() {
    try {
      const response = await api.get('cidades')
      setCities(response.data)
    } catch (error) {
      console.log('Erro ao buscar cidades' + error)
    }
  }

  return {
    cities
  }
}