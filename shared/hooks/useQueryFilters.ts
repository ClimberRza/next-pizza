import { useRouter } from 'next/navigation'
import { Filters } from './useFilters'
import React from 'react'
import qs from 'qs'

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()
  
  React.useEffect(() => {
      const params = {
        ...filters.selectedPrices,
        pizzaTypes: Array.from(filters.selectedTypes),
        sizes: Array.from(filters.selectedSizes),
        ingredients: Array.from(filters.selectedIngredients)
      }

      const query = qs.stringify(params, {
        arrayFormat: 'comma'
      })
      
      router.push(`?${query}`, {
        scroll: false
      })
    }, [filters, router])
}