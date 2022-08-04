import { Box, Typography } from '@mui/material'


export default function FirstView() {
  return (
    <>
      <Box sx={{heigth:{xs: 250, sm: 450}, dislpay:'flex', alignItems: 'center'}}>
        <Typography variant="h6" sx={{ml: 2}}>日本の里山を</Typography>
        <Typography variant="h6" sx={{ml: 3}}>環境保全を学んだわかものたちが活躍する場所へ</Typography>
      </Box>
    </>
  )
}