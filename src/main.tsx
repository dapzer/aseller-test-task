import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline, GlobalStyles } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Layout } from '@/components/layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <GlobalStyles styles={{ html: { height: '100%' }, body: { height: '100%' }, "#root": { height: '100%' } }} />
      <CssBaseline />
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>,
  )
