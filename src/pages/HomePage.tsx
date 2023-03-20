import React, { FC, useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import { ProductsTable } from '@/components/home-page/ProductsTable'
import { ProductType } from '@/types/ProductType'
import { getAllProductsApi } from '@/api/product'

interface HomePageProps {

}

export const HomePage: FC<HomePageProps> = () => {
  const [productList, setProductList] = useState<ProductType[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Имитация получение продуктов с апи
    getAllProductsApi()
      .then((res) => {
        setProductList(res)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>Список товаров</Typography>
      <ProductsTable products={productList} isLoading={loading} />
    </Container>
  )
}
