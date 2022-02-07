import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Topbar from '../Components/Topbar'

const Error = () => {
  const navigate = useNavigate()

  const onGotoHome = () => {
    navigate('/')
  }

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography align="center">Nothing to see here!</Typography>
        <Button onClick={onGotoHome}>Go to Homepage</Button>
      </Box>
    </>
  )
}

export default Error
