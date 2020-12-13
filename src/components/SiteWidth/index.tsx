import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  siteWidthCss: (styles: Styles | undefined) => ({
    display: 'flex',
    width: '100%',
    maxWidth: 1440,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '9.375rem',
    paddingRight: '9.375rem',
    ...styles?.siteWidthCss,
  }),
})

type Props = {
  children?: ReactNode
  styles?: Styles
}

export type Styles = {
  siteWidthCss?: Record<string, unknown>
}

export default function SiteWidth({ children, styles }: Props): JSX.Element {
  const classes = useStyles(styles)
  const { siteWidthCss } = classes

  return <div className={siteWidthCss}>{children}</div>
}
