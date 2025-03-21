import { Ingredient } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './apiRoutes'

export const getAll = async () => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
  return data
}