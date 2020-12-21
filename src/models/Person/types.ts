import { Title } from '../Title/types'

export interface Person {
  id: string
  firstName: string
  lastName: string

  story?: Story
  title?: Title
}

export interface Story {
  id: string
  atKlarnaIcan: string
  title: Title['name']
  mission: string
  myIrregularPath: string
  workingAtKlarna: string
  unreasonablePassion: string
  aDayInMyLife: ADayInMyLife
  takesOnKlarna: TakesOnKlarna
  images: StoryImages
}

export interface ADayInMyLife {
  am: string[]
  pm: string[]
  evening: string[]
}

export interface TakesOnKlarna {
  leadershipPrinciple: string
  bestTaskOfTheDay: string
  myTeamDescription: string
}

export interface StoryImages {
  main: string
  more: string[]
}
