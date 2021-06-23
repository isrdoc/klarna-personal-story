import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SiteWidth from '../../components/SiteWidth'
import SitePaddingTop from '../../components/SitePaddingTop'

const useStyles = makeStyles({
  containerCss: (styles: Styles | undefined) => ({
    display: 'flex',
    width: '100%',
    minHeight: '90vh',
    backgroundColor: '#a3b2d1',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    ...styles?.containerCss,
  }),
  contentCss: (styles: Styles | undefined) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    flexGrow: 1,
    paddingTop: '1.5rem',
    paddingBottom: '4.5rem',
    ...styles?.contentCss,
  }),
  headingCss: (styles: Styles | undefined) => ({
    width: '75%',
    fontSize: 60,
    lineHeight: '70px',
    fontWeight: 900,
    margin: 0,
    marginTop: 40,
    ...styles?.headingCss,
  }),
  subHeadingCss: (styles: Styles | undefined) => ({
    width: '50%',
    fontSize: 20,
    lineHeight: '28px',
    margin: 0,
    marginTop: 15,
    ...styles?.subHeadingCss,
  }),
})

interface Props {
  isSiteTop?: boolean
  children?: ReactNode
  styles?: Styles
  content?: Content
}

export interface Styles {
  containerCss?: Record<string, unknown>
  contentCss?: Record<string, unknown>
  headingCss?: Record<string, unknown>
  subHeadingCss?: Record<string, unknown>
}

export interface Content {
  heading?: ReactNode
  subHeading?: ReactNode
}

export default function Hero({
  isSiteTop = false,
  children,
  styles,
  content = {},
}: Props): JSX.Element {
  const classes = useStyles(styles)

  const { containerCss, contentCss, headingCss, subHeadingCss } = classes
  const { heading, subHeading } = content

  return (
    <div className={containerCss}>
      {isSiteTop && <SitePaddingTop />}

      <SiteWidth styles={{ siteWidthCss: { flexGrow: 1 } }}>
        <div className={contentCss}>
          {heading && <h1 className={headingCss}>{heading}</h1>}
          {subHeading && <p className={subHeadingCss}>{subHeading}</p>}
          {children}
        </div>
      </SiteWidth>
    </div>
  )
}
