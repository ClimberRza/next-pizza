import { Ingredient, ProductItem } from '@prisma/client'
import { PizzaSize, PizzaType } from '../constants/pizza'

/**
 * Функция для посчёта общей стоимости пиццы
 * @param items - вариации пиццы
 * @param ingredients - все возможные ингредиенты
 * @param selectedIngredients - выбранные игредиенты
 * @param type - выбранный тип теста
 * @param size - выбранный размер
 * @returns общая стоимость выбранной вариации + ингредиентов
 */
export function calcTotalPizzaPrice(
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
  type: PizzaType,
  size: PizzaSize
) {
  const pizzaVariantPrice = items.find(el => el.pizzaType === type && el.size === size)?.price || 0
  const totalIngredientsPrice = ingredients.reduce((acc, {id, price}) => {
  if (selectedIngredients.has(id)) {
    acc += price
  }
    return acc
  }, 0)
  return pizzaVariantPrice + totalIngredientsPrice
}
