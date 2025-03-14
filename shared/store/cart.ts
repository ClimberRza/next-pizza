import { create } from 'zustand'
import { Api } from '../services/api-client'
import { getCartDetails } from '../lib'
import { CartStateItem } from '../lib/get-cart-details'



export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Запрос на добавление товара в корзину */
  // TODO: типизировать values
  addCartItem: (values: any) => Promise<void>;

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false })
      const data = await Api.cart.getCart()
      set(getCartDetails(data));
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  removeCartItem: async () => {},
  updateItemQuantity: async () => {},
  addCartItem: async () => {}
}))
