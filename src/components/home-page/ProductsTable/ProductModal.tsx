import React, { FC } from 'react'
import { UiModal } from '@/components/ui/Modal'
import { List, ListItem, Typography } from '@mui/material'
import { ProductType } from '@/types/ProductType'
import { toCurrency } from '@/utils/toCurrency'
import { productModalStyles } from '@/components/home-page/ProductsTable/styles'

interface ProductModalProps {
  handleOpen: () => void
  product: ProductType
}

export const ProductModal: FC<ProductModalProps> = (props) => {
  const {
    handleOpen,
    product,
  } = props

  return (
    <UiModal isOpenedDefault={true} customHandler={handleOpen}>
      <List
        sx={productModalStyles}>
        <ListItem>
          <Typography variant='body1'>Фото товара:</Typography>
          <UiModal>
            <img src={product.preview} alt={product.description} />
          </UiModal>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Описание товара: {product.description}</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Дата добавления
            товара: {new Date(Number(product.added_date)).toLocaleDateString()}</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Цена товара: {toCurrency(product.price, 'RUB')}</Typography>
        </ListItem>
      </List>
    </UiModal>
  )
}
