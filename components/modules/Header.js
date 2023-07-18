import { Box, IconButton, Paper } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

function Header() {
  return (
    <div>
        <Box display={"flex"} component={Paper} sx={{borderRadius:3,alignItems:"center",position:{xs:"fixed",md:"sticky"}}} elevation={10} >
            <IconButton size="sm" sx={{border:"1px solid",borderRadius:3,m:3}}>
                <MenuIcon />
            </IconButton>
            <Box flexGrow={1}>
            <Logo />
            </Box>
            <ToggleButton />
        </Box>
    </div>
  )
}

export default Header