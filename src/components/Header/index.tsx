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
    minHeight: 74,
    paddingLeft: '3.125rem',
    paddingRight: '3.125rem',
  },
  title: {
    // flexGrow: 1,
  },
  logo: {
    height: 17.8,
    position: 'relative',
    top: 3,
    cursor: 'pointer',
  },
  nav: {
    flexGrow: 1,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    marginLeft: 20,
    padding: 0,

    '& li': {
      marginLeft: 30,
      marginRight: 30,
      fontSize: 14.2,
      letterSpacing: 1,
      fontWeight: 'bold',
      cursor: 'pointer',

      '&:hover': {
        color: '#487b94',
      },
    },
  },
  chevron: {
    color: 'black !important',
    fontSize: 40,
    lineHeight: '1px',
    fontWeight: 'lighter',
    transform: 'rotate(90deg)',
    display: 'inline-block',
    position: 'relative',
    left: 7,
    top: 11,
  },
  positionsButton: {
    height: 32,
    borderRadius: 15,
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 13.5,
    letterSpacing: '-0.15px',
    padding: '2px 17px 1px',
    position: 'relative',
    top: 1,
    cursor: 'pointer',
    transition: '0.3s',

    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: '0.3s',
    },
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
  const {
    appBar,
    toolbar,
    title,
    logo,
    nav,
    navList,
    chevron,
    positionsButton,
  } = classes

  const Chevron = () => <div className={chevron}>&rsaquo;</div>

  return (
    <header>
      <ScrollHandler>
        <AppBar position="fixed" color="transparent" className={appBar}>
          <Toolbar className={toolbar}>
            <Typography variant="h6" className={title}>
              <img className={logo} src={klarnaLogo} alt="Klarna Logo" />
            </Typography>

            <nav className={nav}>
              <ul className={navList}>
                <li>
                  Our culture <Chevron />
                </li>
                <li>
                  Locations <Chevron />
                </li>
                <li>
                  Competences <Chevron />
                </li>
                <li>
                  Application process <Chevron />
                </li>
              </ul>
            </nav>

            <Button
              className={positionsButton}
              color="inherit"
              variant="outlined"
            >
              All Open Positions
            </Button>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
    </header>
  )
}
