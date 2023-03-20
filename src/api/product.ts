import { ProductType } from '@/types/ProductType'

export const getAllProductsApi = async (): Promise<ProductType[]> => {
  const data = await import('@/mock/products.json')
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.default)
    }, 2000)
  })
}
