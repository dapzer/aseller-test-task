import React, { FC } from 'react'
import { Box } from '@mui/material'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <Box minHeight='100%' display='flex' flexDirection='column'>
      <Box component='main' flex='1 1 auto' minHeight='100%'>{children}</Box>
    </Box>
  )
}
