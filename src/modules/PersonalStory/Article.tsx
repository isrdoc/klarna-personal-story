import SiteWidth from '../../components/SiteWidth'

import Hero, { Content as HeroContent, Styles as HeroStyles } from './Hero'

import { Article as ArticleType } from './types'

interface Props {
  article: ArticleType
}

export default function Article({ article }: Props): JSX.Element {
  const {
    person,
    atKlarnaIcan,
    title,
    mission,
    myIrregularPath,
    workingAtKlarna,
    unreasonablePassion,
    aDayInMyLife,
    takesOnKlarna,
    images,
  } = article

  const { am, pm, evening } = aDayInMyLife

  const {
    leadershipPrinciple,
    bestTaskOfTheDay,
    myTeamDescription,
  } = takesOnKlarna

  const { main } = images

  const heroContent: HeroContent = {
    heading: `${person}.`,
    subHeading: `At Klarna, ${atKlarnaIcan}`,
  }

  const heroStyles: HeroStyles = {
    heroCss: { backgroundImage: `url(${main})` },
  }

  // TODO: remove
  const removeMeStyle = { minHeight: '150vh' }

  return (
    <article style={removeMeStyle}>
      <Hero isSiteTop={true} content={heroContent} styles={heroStyles} />

      {false && (
        <SiteWidth>
          <p>Their title is {title}</p>
          <p>Their mission is {mission}</p>
          <p>Their myIrregularPath is {myIrregularPath}</p>
          <p>Their workingAtKlarna is {workingAtKlarna}</p>
          <p>Their unreasonablePassion is {unreasonablePassion}</p>

          {am.map((entry: string, index: number) => (
            <div key={`am${index}`}>{entry}</div>
          ))}
          {pm.map((entry: string, index: number) => (
            <div key={`pm${index}`}>{entry}</div>
          ))}
          {evening.map((entry: string, index: number) => (
            <div key={`evening${index}`}>{entry}</div>
          ))}

          <p>Their leadershipPrinciple is {leadershipPrinciple}</p>
          <p>Their bestTaskOfTheDay is {bestTaskOfTheDay}</p>
          <p>Their myTeamDescription is {myTeamDescription}</p>
        </SiteWidth>
      )}
    </article>
  )
}
