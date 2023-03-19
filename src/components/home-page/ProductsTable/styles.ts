import { grey } from '@mui/material/colors'
import { SxProps } from '@mui/material'

export const productsDataGridStyles: SxProps = {
  '&.MuiDataGrid-root .MuiDataGrid-row': {
    padding: '20px 0',
    minHeight: '100px !important',
    maxHeight: '300px !important',
    height: 'fit-content',
    alignItems: 'center',
    borderBottom: `1px solid ${grey[500]}`,
  },
  '&.MuiDataGrid-root .MuiDataGrid-cell': {
    border: 'none !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
    height: 'fit-content',
    whiteSpace: "unset !important"
  }
}

export const productModalStyles: SxProps = {
  listStyleType: 'disc',
  pl: 2,
  '& .MuiListItem-root': {
    display: 'list-item',
  },
}
