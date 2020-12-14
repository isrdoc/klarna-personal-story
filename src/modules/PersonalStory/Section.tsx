import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SiteWidth from '../../components/SiteWidth'
import SitePaddingTop from '../../components/SitePaddingTop'

const useStyles = makeStyles({
  containerCss: (styles: Styles | undefined) => ({
    display: 'flex',
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    ...styles?.containerCss,
  }),
  contentCss: (styles: Styles | undefined) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
    paddingTop: '1.5rem',
    paddingBottom: '4.5rem',
    fontSize: 16,
    lineHeight: '25px',
    ...styles?.contentCss,
  }),
  headingCss: (styles: Styles | undefined) => ({
    width: '100%',
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 700,
    margin: 0,
    marginTop: 20,
    ...styles?.headingCss,
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
}

export interface Content {
  heading?: ReactNode
}

export default function Section({
  isSiteTop = false,
  children,
  styles,
  content = {},
}: Props): JSX.Element {
  const classes = useStyles(styles)

  const { containerCss, contentCss, headingCss } = classes
  const { heading } = content

  return (
    <div className={containerCss}>
      {isSiteTop && <SitePaddingTop />}

      <SiteWidth styles={{ siteWidthCss: { flexGrow: 1 } }}>
        <div className={contentCss}>
          {heading && <h2 className={headingCss}>{heading}</h2>}
          {children}
        </div>
      </SiteWidth>
    </div>
  )
}
