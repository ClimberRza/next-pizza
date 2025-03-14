import { Container, GroupVariants,  Title } from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import React from 'react'



const ProductPage = async ({params: {id}}: { params: {id: string} }) => {
  const product = await prisma.product.findFirst({
    where: {id: Number(id)}
  })


  if (!product) {
    return notFound()
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        {/* <ProductImage imageUrl={product.imageUrl} size={40} className=''/> */}
        <img src={product.imageUrl} className='w-[250px] h-[250px]' alt='image'/>
        <div className='w-[490px] bg-[#f7f6f5] p-7'>
          <Title text={product.name} size='md' className='font-extrabold mb-1'/>

          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita eligendi quasi assumenda laborum vel
          </p>
          <GroupVariants
            value='2'
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
                disabled: true
              },
            ]} 
          />
        </div>
      </div>
    </Container>
  )
}

export default ProductPage;