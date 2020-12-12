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
  atKlarnaIcan: 'I can do things',
  title: 'Senior JS Engineer',
  mission: 'My mission',
  myIrregularPath: 'My irregular path is a curve',
  workingAtKlarna: 'Working at Klarna seems exciting',
  unreasonablePassion: 'Unreasonably passionate about making thing work',
  aDayInMyLife: {
    am: ['Morning 1', 'Morning 2', 'Morning 3'],
    pm: ['Afternoon 1', 'Afternoon 2', 'Afternoon 3'],
    evening: ['Evening 1', 'Evening 2', 'Evening 3'],
  },
  takesOnKlarna: {
    leadershipPrinciple: 'Leadership principle is Detailed Thinking',
    bestTaskOfTheDay: 'Best task of the day is...',
    myTeamDescription: 'My team is a bunch of people who know more than me',
  },
}

IgorSrdoc.story = IgorSrdocStory

const people = [IgorSrdoc]

export { people }
