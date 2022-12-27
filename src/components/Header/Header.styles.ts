import { styled, Toolbar } from '@mui/material'

export const Navbar = styled(Toolbar)(() => ({
  backgroundColor: 'red',
  justifyContent: 'center',
  display: 'flex',

  '& > img': {
    maxWidth: '60px',
  },
}))
