import { FC } from 'react'
import SiteWidth from '../../components/SiteWidth'

import { Article as ArticleType } from '../types/Article'

type Props = {
  article: ArticleType
}

export default function Article({ article }: Props): FC {
  const {
    person,
    title,
    mission,
    myIrregularPath,
    workingAtKlarna,
    unreasonablePassion,
    aDayInMyLife,
    takesOnKlarna,
  } = article

  const { am, pm, evening } = aDayInMyLife

  const {
    leadershipPrinciple,
    bestTaskOfTheDay,
    myTeamDescription,
  } = takesOnKlarna

  return (
    <article>
      <SiteWidth>
        <p>Personal story of {person}.</p>
        <p>Their title is {title}</p>
        <p>Their mission is {mission}</p>
        <p>Their myIrregularPath is {myIrregularPath}</p>
        <p>Their workingAtKlarna is {workingAtKlarna}</p>
        <p>Their unreasonablePassion is {unreasonablePassion}</p>

        {am.map((entry, index) => (
          <div key={`am${index}`}>{entry}</div>
        ))}
        {pm.map((entry, index) => (
          <div key={`pm${index}`}>{entry}</div>
        ))}
        {evening.map((entry, index) => (
          <div key={`evening${index}`}>{entry}</div>
        ))}

        <p>Their leadershipPrinciple is {leadershipPrinciple}</p>
        <p>Their bestTaskOfTheDay is {bestTaskOfTheDay}</p>
        <p>Their myTeamDescription is {myTeamDescription}</p>
      </SiteWidth>
    </article>
  )
}
