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
    flexDirection: 'row',
    width: '100%',
    flexGrow: 1,
    paddingTop: '1.5rem',
    paddingBottom: '4.5rem',
    fontSize: 16,
    lineHeight: '25px',
    ...styles?.contentCss,
  }),
  column1Css: (styles: Styles | undefined) => ({
    width: '100%',
    margin: 0,
    ...styles?.column1Css,
  }),
  column2Css: (styles: Styles | undefined) => ({
    width: '100%',
    margin: 0,
    ...styles?.column2Css,
  }),
  heading1Css: (styles: Styles | undefined) => ({
    width: '100%',
    fontSize: 32,
    lineHeight: '40px',
    margin: 0,
    marginTop: 20,
    ...styles?.heading1Css,
  }),
  heading2Css: (styles: Styles | undefined) => ({
    width: '100%',
    fontSize: 32,
    lineHeight: '40px',
    margin: 0,
    marginTop: 20,
    ...styles?.heading2Css,
  }),
  text1Css: (styles: Styles | undefined) => ({
    width: '100%',
    fontSize: 16,
    lineHeight: '25px',
    margin: 0,
    marginTop: 20,
    ...styles?.text1Css,
  }),
  text2Css: (styles: Styles | undefined) => ({
    width: '100%',
    fontSize: 16,
    lineHeight: '25px',
    margin: 0,
    marginTop: 20,
    ...styles?.text2Css,
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
  column1Css?: Record<string, unknown>
  column2Css?: Record<string, unknown>
  heading1Css?: Record<string, unknown>
  heading2Css?: Record<string, unknown>
  text1Css?: Record<string, unknown>
  text2Css?: Record<string, unknown>
}

export interface Content {
  heading1?: ReactNode
  heading2?: ReactNode
  text1?: ReactNode
  text2?: ReactNode
}

export default function SectionTwoCols({
  isSiteTop = false,
  children,
  styles,
  content = {},
}: Props): JSX.Element {
  const classes = useStyles(styles)

  const {
    containerCss,
    contentCss,
    column1Css,
    column2Css,
    heading1Css,
    heading2Css,
    text1Css,
    text2Css,
  } = classes

  const { heading1, heading2, text1, text2 } = content

  return (
    <div className={containerCss}>
      {isSiteTop && <SitePaddingTop />}

      <SiteWidth styles={{ siteWidthCss: { flexGrow: 1 } }}>
        <div className={contentCss}>
          <div className={column1Css}>
            {heading1 && <h2 className={heading1Css}>{heading1}</h2>}
            {text1 && <p className={text1Css}>{text1}</p>}
          </div>

          <div className={column2Css}>
            {heading2 && <h2 className={heading2Css}>{heading2}</h2>}
            {text2 && <p className={text2Css}>{text2}</p>}
          </div>
        </div>

        {children}
      </SiteWidth>
    </div>
  )
}
