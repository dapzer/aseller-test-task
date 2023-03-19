import { GridColDef } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import { toCurrency } from '@/utils/toCurrency'

export const productColumns: GridColDef[] = [
  {
    headerName: 'Фото товара',
    field: 'preview',
    flex: 1,
    renderCell: params => (
      <img src={params.value} alt={`Image ${params.id}`} />
    ),
  },
  {
    headerName: 'Описание товара',
    field: 'description',
    flex: 1,
    renderCell: params => (
      <Typography variant='h6'>{params.value}</Typography>
    ),
  },
  {
    headerName: 'Дата добавления товара',
    field: 'added_date',
    flex: 1,
    renderCell: params => (
      <Typography variant='body1'>{new Date(Number(params.value)).toLocaleDateString()}</Typography>
    ),
  },
  {
    headerName: 'Цена товара',
    field: 'price',
    type: 'number',
    flex: 1,
    renderCell: params => (
      <Typography variant='body2'>{toCurrency(params.value, 'RUB')}</Typography>
    ),
  },
]
