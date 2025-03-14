import { CartItemDTO } from '../services/dto/cart.dto'

export function calcCartItemTotalPrice(item: CartItemDTO): number {
  return (item.productItem.price + item.ingredients.reduce((acc, ing) => acc + ing.price, 0)) * item.quantity
}