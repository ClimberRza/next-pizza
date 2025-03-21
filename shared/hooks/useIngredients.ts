import { Api } from '@/shared/services/api-client'
import { Ingredient } from '@prisma/client'
import React from 'react'

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  
  React.useEffect(() => {
    Api.ingredients.getAll()
    .then(data => {
      setIngredients(data)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false)
    })
  }, [])
  return { ingredients, isLoading }
}