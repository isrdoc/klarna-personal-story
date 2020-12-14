import SiteWidth from '../../components/SiteWidth'

import Hero, { Content as HeroContent, Styles as HeroStyles } from './Hero'

import Section, {
  Content as SectionContent,
  Styles as SectionStyles,
} from './Section'

import SectionTwoCols, {
  Content as SectionTwoColsContent,
  Styles as SectionTwoColsStyles,
} from './SectionTwoCols'

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

  const { main, more } = images

  const heroContent: HeroContent = {
    heading: `${person}.`,
    subHeading: `At Klarna, ${atKlarnaIcan}`,
  }
  const heroStyles: HeroStyles = {
    containerCss: { backgroundImage: `url(${main})` },
  }

  const missionContent: SectionContent = {
    heading: `${title} - ${mission}`,
  }
  const missionStyles: SectionStyles = {
    containerCss: { paddingTop: 50 },
    contentCss: { paddingBottom: 0 },
  }

  const pathContent: SectionTwoColsContent = {
    heading1: 'My irregular path.',
    text1: (
      <>
        <p>{myIrregularPath}</p>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, marginTop: 40 }}>
          Working at Klarna.
        </h3>
        <p style={{ margin: 0, marginTop: 10 }}>{workingAtKlarna}</p>
      </>
    ),
    text2: (
      <img
        src={more[0]}
        style={{ maxWidth: '85%', float: 'right', marginTop: 40 }}
      />
    ),
  }
  const pathStyles: SectionTwoColsStyles = {
    containerCss: { paddingTop: 20 },
    contentCss: { paddingBottom: 0 },
    column1Css: { width: '55%' },
    column2Css: { width: '45%' },
    heading1Css: { fontSize: 56, paddingBottom: 20 },
  }

  const passionContent: SectionTwoColsContent = {
    text1: <img src={more[1]} style={{ maxWidth: '90%', marginTop: 40 }} />,
    heading2: "Something I'm unreasonably passionate about.",
    text2: unreasonablePassion,
  }
  const passionStyles: SectionTwoColsStyles = {
    containerCss: { paddingTop: 20 },
    column1Css: { width: '53%' },
    column2Css: { width: '47%' },
    heading2Css: { paddingTop: 200 },
  }

  return (
    <article>
      <Hero isSiteTop={true} content={heroContent} styles={heroStyles} />
      <Section content={missionContent} styles={missionStyles} />
      <SectionTwoCols content={pathContent} styles={pathStyles} />
      <SectionTwoCols content={passionContent} styles={passionStyles} />

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
