import { FC } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'

import Header from './components/Header'
import Main from './components/Main'

import { ArticleWithData as Article } from './modules/PersonalStory'

export default function App(): FC {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Main>
        <Article id="igor-srdoc" useMock={true} />
      </Main>
    </ThemeProvider>
  )
}
