'use client'

import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Title } from './title'
import { CheckboxFiltersGroup, RangeSlider } from '.'
import { Input } from '../ui'
import { useIngredients, useFilters, useQueryFilters } from '@/hooks'

interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  const {ingredients, isLoading} = useIngredients()
  const filters = useFilters()
  
  useQueryFilters(filters)

  const ingredientItems = ingredients.map((item) => ({ value: String(item.id), text: item.name }));
  
  return (
    <div className={cn('mt-3', className)}>
      <Title text='Фильтрация' size='sm' className='mb-3 font-bold' />
      <CheckboxFiltersGroup
        title="Тип теста"
        forWhat="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.toggleTypes}
        selectedValues={filters.selectedTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />
      <CheckboxFiltersGroup 
        title='Размеры'
        className='mb-5'
        forWhat='sizes'
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        onClickCheckbox={filters.toggleSizes}
        selectedValues={filters.selectedSizes}
      />
      {/*Фильтр цен*/ }
      <div className='mt-5 border-y border-y-neutral-100'>
        <p className='font-bold mb-3 mt-2'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input 
            type='number' 
            placeholder='0' 
            min={0} 
            max={3000} 
            value={String(filters.selectedPrices.priceFrom || '0')}
            onChange={(e) => filters.updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input 
            type='number' 
            placeholder='3000' 
            min={100} 
            max={3000} 
            value={String(filters.selectedPrices.priceTo || '3000')}
            onChange={(e) => filters.updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
      </div>
      <RangeSlider 
        min={0} 
        max={3000} 
        step={10} 
        value={[
          filters.selectedPrices.priceFrom || 0,
          filters.selectedPrices.priceTo || 3000
        ]} 
        onValueChange={([priceFrom, priceTo]) => filters.setSelectedPrices({priceFrom, priceTo})}
      />
      {/*Нижние чекбоксы (ингредиенты)*/ }
      <CheckboxFiltersGroup 
        isLoading={isLoading}
        title='Ингредиенты'
        className='mt-5'
        limit={6}
        forWhat='ingredients'
        defaultItems={ingredientItems.slice(0, 6)}
        items={ingredientItems}
        onClickCheckbox={filters.toggleIngredient}
        selectedValues={filters.selectedIngredients}
      />
    </div>
  )
}
