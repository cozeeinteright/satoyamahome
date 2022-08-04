import Header from './Header'
import SideMenu from './SideMenu'
import { Box } from '@mui/material' 
import DocumentMain from './DocumentMain'

export default function MyDocument() {
  return (
    <>
      <Box display="flex">
        <Box sx={{display:{xs:'none', md:'block'}, width: 250}}>
          <SideMenu />
        </Box>
        <Box sx={{flexGrow: 1}}>
          <Header category="document"/>
          <DocumentMain />
        </Box>
      </Box>
    </>
  );
}
