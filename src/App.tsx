import { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './styles/theme'

import Header from './components/Header'
import PersonalStoryArticleScreen from './modules/PersonalStory/screens/Article'

import IgorSrdocStory from './modules/PersonalStory/data/IgorSrdoc'

export default function App(): FC {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PersonalStoryArticleScreen personalStory={IgorSrdocStory} />
    </ThemeProvider>
  )
}
