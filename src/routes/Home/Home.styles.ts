import styled from '@emotion/styled'
import InputBase from '@mui/material/InputBase'

export const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '1.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  margin: '0 auto 3rem',
  width: 550,
  display: 'flex',
}))

export const SearchIconWrapper = styled('div')(() => ({
  padding: '0 1rem',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  flex: '1 1 auto',
  '& .MuiInputBase-input': {
    padding: '1rem 1rem 1rem 0',
    // vertical padding + font size from searchIcon
    paddingLeft: 'calc(1em + 1.5rem)',
    transition: 'width',
    width: '100%',
  },
}))
