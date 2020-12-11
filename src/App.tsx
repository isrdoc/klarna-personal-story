import { ReactElement } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './styles/theme'

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  )
}

export default App
