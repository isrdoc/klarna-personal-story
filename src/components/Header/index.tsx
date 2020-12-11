import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import klarnaLogo from '../../assets/img/Klarna_Logo_black.svg'

const useStyles = makeStyles(() => ({
  appBar: {
    // borderBottom: '1px solid rgba(0,0,0,.1)',
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: 75,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 80,
    paddingLeft: 26,
    position: 'relative',
    top: 2,
  },
}))

export default function Header(): FC {
  const classes = useStyles()
  const { appBar, toolbar, title, logo } = classes

  return (
    <header>
      <AppBar position="fixed" color="transparent" className={appBar}>
        <Toolbar className={toolbar}>
          <Typography variant="h6" className={title}>
            <img className={logo} src={klarnaLogo} alt="Klarna Logo" />
          </Typography>
          <Button color="inherit">All Open Positions</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}
