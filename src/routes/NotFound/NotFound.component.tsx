import { Typography, Stack, Button } from '@mui/material'
import { Title } from './Notfound.styles'
const NotFound = () => {
  return (
    <Stack
      sx={{
        maxWidth: 600,
        minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Title variant="h2" fontWeight={400} mb={3}>
        404 PAGE NOT FOUND
      </Title>
      <Typography textAlign="center" variant="body1" mb={2}>
        Check that you typed the address correctly, go back to your previous
        page or try using our site search to find something specific.
      </Typography>
      <Button color="info" href="/" variant="contained">
        Go back to Home
      </Button>
    </Stack>
  )
}

export default NotFound
