import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  mainCss: {
    // marginTop: 100,
  },
}))

type Props = {
  children: ReactNode
}

export default function Main({ children }: Props): JSX.Element {
  const classes = useStyles()
  const { mainCss } = classes

  return <main className={mainCss}>{children}</main>
}
