import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme/theme'
import Home from './Pages/Home'
import Error from './Pages/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

function App() {
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
