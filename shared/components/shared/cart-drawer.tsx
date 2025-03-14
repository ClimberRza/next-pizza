'use client'

import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib'
import { useCartStore } from '@/shared/store'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'

interface Props {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  const { totalAmount, items, fetchCartItems, } = useCartStore(state => state)

  React.useEffect(() => {
    fetchCartItems()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
        <SheetHeader>
          <SheetTitle>
            В корзине <span className='font-bold'>{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto flex-1'>
          {items.map(item => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              className='mb-2'
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              details={item.pizzaType && item.pizzaSize 
                ? getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingredients)
                : ''
              }
            />
          ))}
        </div>
        
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/checkout">
              <Button
                type="submit"
                className="w-full h-12 text-base">
                  Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

