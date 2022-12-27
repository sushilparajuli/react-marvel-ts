import { Box, Container } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'grey.900',
          color: 'common.white',
        }}
      >
        <Container>
          <Box
            sx={{
              padding: 2,
            }}
          >
            Copyright 2022 . Made with Marvel Api
          </Box>
        </Container>
      </Box>
    </>
  )
}
