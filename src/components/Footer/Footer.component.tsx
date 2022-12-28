import { Box, Container } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          color: 'common.white',
          borderTop: '1px solid grey',
          bgcolor: 'grey.800',
        }}
      >
        <Container>
          <Box
            sx={{
              padding: 2.5,
            }}
          >
            Copyright 2022 . Made with Marvel Api
          </Box>
        </Container>
      </Box>
    </>
  )
}
