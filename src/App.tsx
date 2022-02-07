import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './Theme/theme'
import Home from './Pages/Home'
import Error from './Pages/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const themeMode = useSelector((state: RootState) => state.settings.mode)
  const [theme, setTheme] = useState(getTheme(themeMode))

  useEffect(() => {
    setTheme(getTheme(themeMode))
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display={'flex'} height={'100vh'} flexDirection={'column'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
