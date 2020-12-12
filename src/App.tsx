import { FC } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'

import Header from './components/Header'

import { ArticleWithData as Article } from './modules/PersonalStory'

export default function App(): FC {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Article id="igor-srdoc" useMock={true} />
    </ThemeProvider>
  )
}
