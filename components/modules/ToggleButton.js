import { IconButton } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ToggleButton() {
    const {isDarkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <IconButton onClick={toggleTheme} sx={{border:"1px solid",borderRadius:3}} >
            {
                isDarkMode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon /> 
            }
        </IconButton>
    </div>
  )
}

export default ToggleButton