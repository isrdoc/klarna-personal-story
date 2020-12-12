import { FC, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  siteWidth: {
    maxWidth: 1440,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '9.375rem',
    paddingRight: '9.375rem',
  },
}))

type Props = {
  children: ReactNode
}

export default function SiteWidth({ children }: Props): FC {
  const classes = useStyles()
  const { siteWidth } = classes

  return <div className={siteWidth}>{children}</div>
}
