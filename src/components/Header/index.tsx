import { FC, cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useScrollTrigger } from '@material-ui/core'

import klarnaLogo from '../../assets/img/Klarna_Logo_black.svg'

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: 73,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 17.8,
    paddingLeft: 26,
    position: 'relative',
    top: 3,
  },
}))

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  })

  return cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? 'white' : 'transparent',
      transition: trigger ? '0.1s' : '0.3s',
      borderBottom: trigger ? '1px solid rgba(0,0,0,.1)' : 'none',
    },
  })
}

export default function Header(): FC {
  const classes = useStyles()
  const { appBar, toolbar, title, logo } = classes

  return (
    <header>
      <ScrollHandler>
        <AppBar position="fixed" color="transparent" className={appBar}>
          <Toolbar className={toolbar}>
            <Typography variant="h6" className={title}>
              <img className={logo} src={klarnaLogo} alt="Klarna Logo" />
            </Typography>
            <Button color="inherit">All Open Positions</Button>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </header>
  )
}
