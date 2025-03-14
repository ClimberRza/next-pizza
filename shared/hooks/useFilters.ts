import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import React from 'react'

export interface PriceProps {
  priceFrom?: number
  priceTo?: number
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  selectedSizes: Set<string>;
  selectedTypes: Set<string>;
  selectedIngredients: Set<string>;
  selectedPrices: PriceProps;
}

interface ReturnProps extends Filters {
  updatePrice: (name: keyof PriceProps, value: number) => void,
  setSelectedPrices: React.Dispatch<React.SetStateAction<PriceProps>>
  toggleSizes: (key: string) => void
  toggleTypes: (key: string) => void
  toggleIngredient: (key: string) => void
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    const [selectedIngredients, { toggle: toggleIngredient }] = useSet(
      new Set<string>(searchParams.get('ingredients')?.split(','))
    ) 

    const [selectedSizes, { toggle: toggleSizes }] = useSet(new Set<string>(
      searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []
    ))
  
    const [selectedTypes, { toggle: toggleTypes }] = useSet(new Set<string>(
      searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
    ))

    const [selectedPrices, setSelectedPrices] = React.useState<PriceProps>({
      priceFrom: Number(searchParams.get('priceFrom')) || undefined,
      priceTo: Number(searchParams.get('priceTo')) || undefined,
    })

    const updatePrice = (name: keyof PriceProps, value: number) => {
      setSelectedPrices({
        ...selectedPrices,
        [name]: value,
      })
    }

    return {
      selectedIngredients,
      selectedSizes,
      selectedTypes,
      selectedPrices,
      updatePrice,
      setSelectedPrices,
      toggleSizes,
      toggleTypes,
      toggleIngredient
    }
}