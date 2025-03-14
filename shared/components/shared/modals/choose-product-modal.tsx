'use client'

import { Dialog } from '@/shared/components/ui'
import { DialogContent } from '@/shared/components/ui/dialog'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { ChooseProductForm } from '../choose-product-form'
import { ProductWithRelations } from '@/@types/prisma'
import { ChoosePizzaForm } from '../choose-pizza-form'

interface Props {
  product: ProductWithRelations
}

export const ChooseProductModal: FC<Props> = ({product}) => {
  const router = useRouter()
  const isPizzaForm = !!product.items[0].pizzaType


  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[560px] bg-white overflow-hidden">
        {isPizzaForm ? (
          <ChoosePizzaForm 
            imageUrl={product.imageUrl} 
            name={product.name} 
            ingredients={product.ingredients}
            items={product.items}
          />
        ): (
          <ChooseProductForm
            imageUrl={product.imageUrl} 
            name={product.name} 
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
