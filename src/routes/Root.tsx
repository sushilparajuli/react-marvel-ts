import { Container, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.component'
import Header from '../components/Header/Header.component'
import { AppWrapper } from './Root.styles'

export default function Root() {
  return (
    <>
      <AppWrapper>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
          }}
        >
          <Container>
            <Outlet />
          </Container>
        </Box>
        <Footer />
      </AppWrapper>
    </>
  )
}
