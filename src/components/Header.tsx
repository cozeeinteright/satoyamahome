import { Toolbar ,Typography} from '@mui/material'
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <>
      <Toolbar sx={{display:'flex'}}>
        <AdUnitsIcon fontSize="large" sx={{mr:2}}/>
        <Typography variant="body1" sx={{flexGrow: 1}}>里山生物多様性プロジェクト</Typography>
        <GitHubIcon fontSize="large" sx={{mx:1, border: 1, borderRaduios: 2, borderColor: 'primary.main'}} />
        <MenuIcon fontSize="large" sx={{display:{xs:'block',sm:'none'}, mr:2}}/>
      </Toolbar>
      <Toolbar sx={{display:{xs:'none',sm:'flex'},justifyContent: 'space-evenly'}}>
        <Typography variant="body1">ドキュメント</Typography>
        <Typography variant="body1">寄附</Typography>
        <Typography variant="body1">活動</Typography>
      </Toolbar>
    </>
  )
}