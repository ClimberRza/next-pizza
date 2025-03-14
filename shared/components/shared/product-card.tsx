import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import React, { FC } from 'react'
import { Title } from '.'
import { Button } from '../ui'
import { Plus } from 'lucide-react'

interface Props {
  className?: string
  id: number
  name: string
  price: number
  imageUrl: string
}

export const ProductCard: FC<Props> = ({ className, id, name, price, imageUrl }) => {
  return (
    <div className={cn('', className)}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>
      </Link>

      <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

      <p className='text-sm text-gray-400'>
        Description
      </p>

      <div className='flex justify-between items-center mt-4'>
        <span className='text-[20px]'>
          от <b>{price} ₽</b>
        </span>
        <Button variant='secondary' >
          <Plus size={20} className='mr-1' />
          Добавить
        </Button>
      </div>
    </div>
  )
}
