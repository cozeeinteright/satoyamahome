import { Toolbar ,Typography, Link } from '@mui/material'
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";

interface Category {
  category: String
}

export default function Header(props: Category) {
  const sideMenu = props.category === "document"?< MenuIcon fontSize="large" sx={{mr:2, display:{xs:'block',md:'none'}}}/>:<></>
  return (
    <>
      <Toolbar sx={{display:'flex'}}>
        {sideMenu}
        <AdUnitsIcon fontSize="large" sx={{mr:2}}/>
        <Typography variant="body1" sx={{flexGrow: 1}}>里山生物多様性プロジェクト</Typography>
        <GitHubIcon fontSize="large" sx={{mx:1, border: 1, borderRaduios: 2, borderColor: 'primary.main'}} />
        <MenuIcon fontSize="large" sx={{display:{xs:'block',sm:'none'}, mr:2}}/>
      </Toolbar>
      <Toolbar sx={{display:{xs:'none',sm:'flex'},justifyContent: 'space-evenly'}}>
        <Typography variant="body1">
          <Link
            component={RouterLink}
            to="/document"
           >
            ドキュメント
          </Link>
        </Typography>
        <Typography variant="body1">寄附</Typography>
        <Typography variant="body1">活動</Typography>
      </Toolbar>
    </>
  )
}