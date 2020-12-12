export type Article = {
  id: string
  person: string
  atKlarnaIcan: string
  role: string
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
