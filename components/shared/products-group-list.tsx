'use client'
import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { ProductCard, Title } from './'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface Props {
  className?: string
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
}

export const ProductsGroupList: FC<Props> = ({
    className,
    title,
    items,
    categoryId,
    listClassName
  }) => {
    const { setActiveId } = useCategoryStore()
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
      threshold: 0.4
    });

    React.useEffect(() => {
      if (intersection?.isIntersecting) {
        setActiveId(categoryId)
      }
    }, [intersection?.isIntersecting])

  return (
    <div id={title} ref={intersectionRef} className={cn('', className)}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
