import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface HomePageProps {

}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div>
      <Typography variant='h1'>Hi!</Typography>
    </div>
  )
}
