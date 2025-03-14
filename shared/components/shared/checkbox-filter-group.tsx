'use client'

import { cn } from '@/shared/lib/utils'
import React, { FC } from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Item = {
  text: string,
  value: string
}

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems?: Item[],
  isLoading?: boolean,
  forWhat: string,
  limit?: number
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selectedValues: Set<string>
}

export const CheckboxFiltersGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  isLoading,
  forWhat,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onClickCheckbox,
  defaultValue,
  selectedValues
}) => {
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const list = showAll ? items : (defaultItems || items).slice(0, limit)
  const filteredList = list?.filter(item => 
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  if (isLoading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {new Array(limit).fill(null).map((_, idx) => (
          <Skeleton 
            key={idx} 
            className='h-6 mb-4 rounded-[8px] bg-gray-200' 
          />
        ))}
        <Skeleton className='h-6 w-28 rounded-[8px] bg-gray-200'/>
      </div>
    )
  }

  return (
    <div className={cn('', className)}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input 
            placeholder={searchInputPlaceholder}
            value={searchValue}
            onChange={onChangeSearchInput}
            className='bg-gray-50 border-none'
          />
        </div>
      )}
      
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {filteredList?.map((item, index) => (
          <FilterCheckbox 
            key={index}
            text={item.text}
            forWhat={forWhat}
            value={String(item.value)}
            checked={selectedValues.has(String(item.value))}
            onCheckedChange={() => onClickCheckbox?.(String(item.value))}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  )
}
