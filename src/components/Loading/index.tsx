import LinearProgress from '@material-ui/core/LinearProgress'

export default function Loading(): JSX.Element {
  return (
    <div style={{ position: 'absolute', top: 75, width: '100%' }}>
      <LinearProgress />
    </div>
  )
}
