import { PizzaType } from './../constants/pizza';
import { mapPizzaType, PizzaSize } from '../constants/pizza'
import { Ingredient } from '@prisma/client'

/**
 * Фунция для получения информации по вариации пиццы
 * @param size 
 * @param type 
 * @param ingredients 
 * @param selectedIngredients 
 * @returns Объект
 */
export function getPizzaDetails(
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) {
  const paramsDetails = `${size} см; ${mapPizzaType[type]} тесто`
  const ingredientsDetails = ingredients
  .filter(({id}) => selectedIngredients.has(id))
  .map(ing => ing.name)
  .join(', ')
  return {
    paramsDetails,
    ingredientsDetails
  }
}