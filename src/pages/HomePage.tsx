import React, { FC, useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import { ProductsTable } from '@/components/home-page/ProductsTable'
import { ProductType } from '@/types/ProductType'
import products from '@/mock/products.json'

interface HomePageProps {

}

export const HomePage: FC<HomePageProps> = () => {
  const [productList, setProductList] = useState<ProductType[]>()

  useEffect(() => {
    // Имитация получение продуктов с апи
    setProductList(products)
  }, [])

  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>Список товаров</Typography>
      <ProductsTable products={productList} />
    </Container>
  )
}
