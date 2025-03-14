import React from 'react'
import { PizzaSize, pizzaSizes, PizzaType } from '../constants/pizza'
import { ProductItem } from '@prisma/client'
import { Variant } from '../components/shared/group-variants'
import { useSet } from 'react-use'

interface ReturnType {
  availablePizzaSizes: Variant[],
  selectedIngredients: Set<number>,
  addIngredient: (key: number) => void,
  type: PizzaType,
  size: PizzaSize,
  setSize: (size: PizzaSize) => any,
  setType: (type: PizzaType) => any
}

/**
 * 
 * @param type 
 * @param size 
 * @param items 
 * @param setSize 
 * @returns Объект, содержащий стейты типа и размера + доступные варианты размеров
 */
export function usePizzaOptions(items: ProductItem[]): ReturnType {
    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)
    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]))
    const availablePizzas = items.filter(item => item.pizzaType === type)
    const availablePizzaSizes = pizzaSizes.map(item => ({
      ...item,
      disabled: !availablePizzas.some(pizza => Number(pizza.size) === +item.value)
    }))
    
    React.useEffect(() => {
      if (!availablePizzas.find(pizza => pizza.size === size)) {
        setSize(availablePizzas[0].size as PizzaSize)
      }
    }, [type])

    return {
      setSize,
      setType,
      size,
      type,
      selectedIngredients,
      addIngredient,
      availablePizzaSizes
    }
}