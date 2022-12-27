import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer.component'
import Header from '../../components/Header/Header.component'
import { AppWrapper } from './Layout.styles'

export default function Layout() {
  return (
    <>
      <AppWrapper>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </AppWrapper>
    </>
  )
}
