import { Person, Story } from './types'

import Competencies from '../Competency/data'
import Levels from '../Level/data'

const IgorSrdoc: Person = {
  id: 'igor-srdoc',
  firstName: 'Igor',
  lastName: 'Srdoč',

  title: {
    id: 'senior-js-engineer',
    name: 'Senior JS Engineer',

    competency: Competencies.find(
      (competency) => competency.id === 'engineering',
    ),

    level: Levels.find((level) => level.id === 'senior'),
  },

  // story: IgorSrdocStory,
}

const IgorSrdocStory: Story = {
  atKlarnaIcan: 'Do things',
  title: 'Senior JS Engineer',
  mission: '',
  myIrregularPath: '',
  workingAtKlarna: '',
  unreasonablePassion: '',
  aDayInMyLife: {
    am: ['', '', ''],
    pm: ['', '', ''],
    evening: ['', '', ''],
  },
  takesOnKlarna: {
    leadershipPrinciple: '',
    bestTaskOfTheDay: '',
    myTeamDescription: '',
  },
}

IgorSrdoc.story = IgorSrdocStory

const people = [IgorSrdoc]

export { people }
