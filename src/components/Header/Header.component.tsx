import { Navbar } from './Header.styles'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export default function Header() {
  return (
    <>
      <Navbar>
        <Link to="/">
          <Box
            component="img"
            sx={{
              maxWidth: 60,
            }}
            src="/icon-512x512.png"
            alt="Universe of Superheroes"
          />
        </Link>
      </Navbar>
    </>
  )
}
