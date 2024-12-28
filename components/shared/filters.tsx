import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Title } from './title'
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '.'
import { Input } from '../ui'

interface Props {
  className?: string
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn('mt-3', className)}>
      <Title text='Фильтрация' size='sm' className='mb-4 font-bold' />
      {/*Верхние чекбоксы*/ }
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>
      {/*Фильтр цен*/ }
      <div className='mt-5 border-y border-y-neutral-100'>
        <p className='font-bold mb-3 mt-2'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' placeholder='1000' min={100} max={1000} />
        </div>
      </div>
      <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      {/*Нижние чекбоксы (ингредиенты)*/ }
      <CheckboxFiltersGroup 
        title='Ингредиенты'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
          {
            text: 'Красный лук',
            value: '5'
          },
          {
            text: 'Томаты',
            value: '6'
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
          {
            text: 'Красный лук',
            value: '5'
          },
          {
            text: 'Томаты',
            value: '6'
          },
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
          {
            text: 'Красный лук',
            value: '5'
          },
          {
            text: 'Томаты',
            value: '6'
          },
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
          {
            text: 'Красный лук',
            value: '5'
          },
          {
            text: 'Томаты',
            value: '6'
          },
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
          {
            text: 'Красный лук',
            value: '5'
          },
          {
            text: 'Томаты',
            value: '6'
          },
        ]}
      />
    </div>
  )
}