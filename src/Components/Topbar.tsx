import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LightMode from '@mui/icons-material/LightMode'
import { useDispatch } from 'react-redux'
import { switchMode } from '../Features/settingsSlice'

const Topbar = () => {
  const dispatch = useDispatch()
  const onThemeMode = () => {
    dispatch(switchMode())
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <IconButton color="inherit" onClick={onThemeMode}>
          <LightMode></LightMode>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
