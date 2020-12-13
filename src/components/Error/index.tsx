import { useState, SyntheticEvent } from 'react'
import Snackbar, { SnackbarCloseReason } from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

type Props = {
  message?: string
}

const defaultMessage = 'There was an error. Please try reloading the page'

export default function Error({
  message = defaultMessage,
}: Props): JSX.Element {
  const [open, setOpen] = useState(true)

  const handleClose = (
    _event: SyntheticEvent<Element, Event>,
    reason?: SnackbarCloseReason,
  ): void => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  )
}
