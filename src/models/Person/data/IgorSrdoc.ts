import { Person } from '../types'

import Competencies from '../../Competency/data/Competencies'
import Levels from '../../Level/data/Levels'

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

  story: {
    atKlarnaIcan: 'Do things',
  },
}

export default IgorSrdoc
