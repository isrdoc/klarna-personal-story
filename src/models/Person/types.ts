import { Title } from '../../Title/types/Title'

export type Person = {
  id: string
  firstName: string
  lastName: string

  // Embeds
  story: ?Story

  // References
  title: ?Title
}

export type Story = {
  atKlarnaIcan: string
  title: string
  mission: string
  myIrregularPath: string
  workingAtKlarna: string
  unreasonablePassion: string
  aDayInMyLife: ADayInMyLife
  takesOnKlarna: TakesOnKlarna
}

export type ADayInMyLife = {
  am: string[]
  pm: string[]
  evening: string[]
}

export type TakesOnKlarna = {
  leadershipPrinciple: string
  bestTaskOfTheDay: string
  myTeamDescription: string
}
