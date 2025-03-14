'use client'

import React from 'react';
import { cn } from '@/shared/lib/utils'
import { Title } from './title'
import { Button } from '../ui'
import { PizzaImage } from './pizza-image'
import { GroupVariants } from './group-variants'
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'
import { IngredientCard } from './'
import { calcTotalPizzaPrice, getPizzaDetails, usePizzaOptions } from '@/shared/lib'

interface Props {
  imageUrl: string
  name: string
  items: ProductItem[]
  ingredients: Ingredient[]
  onClickAddCart?: VoidFunction
  className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({ 
  className,
  imageUrl,
  name,
  items,
  ingredients,
  onClickAddCart,
}) => {
  
  const {
    type,
    size,
    setType,
    setSize,
    availablePizzaSizes,
    selectedIngredients,
    addIngredient
  } = usePizzaOptions(items)

  const totalPrice = calcTotalPizzaPrice(items, ingredients, selectedIngredients, type, size)

  const {paramsDetails, ingredientsDetails} = getPizzaDetails(size, type, ingredients, selectedIngredients)

  const handleClickAdd = () => {
    onClickAddCart?.()
  }

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage 
        imageUrl={imageUrl}
        size={size}
      />

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} className='font-extrabold mb-1' />
        <p className='text-gray-400'>{paramsDetails}</p>
        <p className='text-gray-400'>{ingredientsDetails}</p>
        <div className='flex flex-col gap-2 mt-3'>
          <GroupVariants 
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(newSize) => setSize(+newSize as PizzaSize)}
          />
          <GroupVariants 
            items={pizzaTypes}
            value={String(type)}
            onClick={(newType) => setType(+newType as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className='grid grid-cols-3 gap-3'>
            {ingredients.map(ing => (
              <IngredientCard
                key={ing.id}
                imageUrl={ing.imageUrl} 
                name={ing.name} 
                price={ing.price}
                active={selectedIngredients.has(ing.id)}
                onClick={() => addIngredient(ing.id)}
              />
            ))}
          </div>
        </div>
        <Button 
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-6'
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
