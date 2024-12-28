import { Container, Filters, ProductsGroupList, Topbar } from '@/components/shared';
import { Title } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-9'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <Topbar />

      <Container className='pb-14 pt-5'>
        <div className='flex gap-[80px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList 
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList 
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList 
                title='Закуски'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                ]}
                categoryId={3}
              />
              <ProductsGroupList 
                title='Коктейли'
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                    items: [{price: 550}]
                  },
                ]}
                categoryId={4}
              />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
