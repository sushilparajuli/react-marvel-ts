import { styled, Stack } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export const AppWrapper = styled(Stack)(() => ({
  minHeight: '100vh',
  background: `${deepOrange[50]}`,
}))
