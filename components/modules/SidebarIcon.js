import { Box, Divider, IconButton, List, ListItem, ListItemButton, Paper } from "@mui/material";
import Home from "../icon/Home";
import User from "../icon/User";
import ToggleButton from "./ToggleButton";
import Layer from "../icon/Layer";
import Magnifer from "../icon/Magnifer";
import Help from "../icon/Help";
import Setting from "../icon/Setting";
import styles from "./SidebarTest.module.css";
import { useState } from "react";
import Logo from "./Logo";

function SidebarIcon() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };
  console.log(isFocused)

  return (
    <div style={{ display: "flex" }}>
      <Box
        component={Paper}
        elevation={10}
        width={"60px"}
        sx={{ height: "100vh",borderRadius:2 }}
        zIndex={200}
        onMouseEnter={handleFocus}
      >
        <List sx={{alignItems:"center",mt:2}}>
          <ListItem sx={{pl:1,mt:1}}>
            <ToggleButton />
          </ListItem>
          <ListItemButton sx={{pl:.5, mt:1}}>
            <Home />
          </ListItemButton>
          <ListItemButton sx={{pl:.5,mt:1}}>
            <User />
          </ListItemButton>
          <ListItemButton sx={{pl:.5,mt:1}}>
            <Layer />
          </ListItemButton>
          <ListItemButton sx={{pl:.5,mt:1}}>
            <Magnifer />
          </ListItemButton>
          <ListItemButton sx={{pl:.5,mt:1}}>
            <Help />
          </ListItemButton>
          <ListItemButton sx={{pl:.5,mt:1}}>
            <Setting />
          </ListItemButton>
        </List>
      </Box>
      <div
        className={`${isFocused ? styles.focused : styles.sidebar}`}
        onMouseLeave={handleFocus}
      >
        <List sx={{}}>
          <ListItemButton sx={{height:"90px",width:"90px",justifyContent:"center"}}>
              <Logo />
          </ListItemButton>
          <Divider variant="middle" role="presentation" />
          <ListItemButton sx={{p:3}}>
              Home
          </ListItemButton>
          <ListItemButton sx={{mt:1,p:3}}>
              Profile
          </ListItemButton>
          <ListItemButton sx={{mt:1,p:3}}>
              Dashboard
          </ListItemButton>
          <ListItemButton sx={{mt:1,p:3}}>
              Search
          </ListItemButton>
          <ListItemButton sx={{mt:1,p:3}}>
              Support
          </ListItemButton>
          <ListItemButton sx={{mt:1,p:3}}>
              Setting
          </ListItemButton>
        </List>
        {/* <ul>
          <li>home</li>
          <li>user</li>
          <li>dashboard</li>
          <li>search</li>
          <li>support</li>
          <li>setting</li>
        </ul> */}
      </div>
      {/* <div className={styles.leftside}></div> */}
    </div>
  );
}

export default SidebarIcon;
