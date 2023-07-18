import { Box, List, ListItemButton, ListItemText, Paper } from "@mui/material";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function Sidebar() {
  return (
    <div>
      <Box
        component={Paper}
        sx={{ width: "300px", height: "100vh" }}
        elevation={5}
      >
        <Box display={"flex"}>
          <Box flexGrow={1} sx={{ml:3}}>
            <Logo />
          </Box>
          <ToggleButton />
        </Box>
        <Box>
          <List sx={{ml:3}}>
            <ListItemButton>
                <HomeRoundedIcon />
                <ListItemText sx={{ml:3}} >Home</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <HomeRoundedIcon />
                <ListItemText sx={{ml:3}} >Home</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <HomeRoundedIcon />
                <ListItemText sx={{ml:3}} >Home</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <HomeRoundedIcon />
                <ListItemText sx={{ml:3}} >Home</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <HomeRoundedIcon />
                <ListItemText sx={{ml:3}} >Home</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;
