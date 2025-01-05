import { Container, Filters, ProductsGroupList, Topbar } from '@/components/shared';
import { Title } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  })
  return (
    <>
      <Container className='mt-9'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <Topbar
        categories={categories.filter(cat => cat.products.length)}
      />

      <Container className='pb-14 pt-5'>
        <div className='flex gap-[80px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {
                categories.map(categorie => (
                  categorie.products.length > 0 && (
                    <ProductsGroupList
                      key={categorie.id}
                      title={categorie.name}
                      categoryId={categorie.id}
                      items={categorie.products}
                    />
                  )
                ))
              }
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
