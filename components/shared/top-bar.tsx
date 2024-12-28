import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { Categories, Container, SortPopup } from './'

interface Props {
  className?: string
}

export const Topbar: FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}