import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header'
import Main from './components/Main'

import { ArticleWithData as Article } from './modules/PersonalStory'

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Main>
        {/* <Article id="igor-srdoc" /> */}
        <Article id="alexandre-borel" />
      </Main>
    </ThemeProvider>
  )
}
