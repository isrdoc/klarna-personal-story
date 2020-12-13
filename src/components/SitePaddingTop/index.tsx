import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  sitePaddingTop: {
    paddingTop: 100,
  },
}))

export default function SitePaddingTop(): JSX.Element {
  const classes = useStyles()
  const { sitePaddingTop } = classes

  return <div className={sitePaddingTop} />
}
