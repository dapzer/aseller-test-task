import React, { FC, useState } from 'react'
import { ProductType } from '@/types/ProductType'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { ProductModal } from '@/components/home-page/ProductsTable/ProductModal'
import { productsDataGridStyles } from '@/components/home-page/ProductsTable/styles'
import { productColumns } from '@/components/home-page/ProductsTable/model'

interface ProductsTableProps {
  products?: ProductType[]
}


export const ProductsTable: FC<ProductsTableProps> = (props) => {
  const { products } = props
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  return (
    <>
      {!!products?.length && (
        <Box height={'600px'} minHeight='600px' width={'100%'} flex={1}>
          <DataGrid
            sx={productsDataGridStyles}
            columns={productColumns}
            rows={products}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            onRowClick={(params) => setSelectedRow(params.row.id)}
            disableVirtualization
            disableRowSelectionOnClick
          />
        </Box>
      )}

      {selectedRow && products && (
        <ProductModal handleOpen={() => setSelectedRow(null)}
                      product={products.find((el) => el.id === selectedRow)!} />
      )}
    </>
  )
}
