import { ReactElement } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './styles/theme'

import Header from './components/Header'

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}
