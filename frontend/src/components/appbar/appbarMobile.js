<<<<<<< Updated upstream
import { IconButton } from "@material-ui/core"
import { MenuOutlined, SearchOutlined } from "@material-ui/icons"
import React from "react"
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import Actions from "../../styles/appbar/action"

export default function AppbarMobile({matches}){
   return(
    <AppbarContainer >
      <IconButton>
        <MenuOutlined>
       
        </MenuOutlined>
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">Welcome to DecentraHealth</AppbarHeader>
      <IconButton>
        <SearchOutlined></SearchOutlined>
      </IconButton>
      <Actions matches={matches}/>
    </AppbarContainer>
   )
=======
import React from "react";
import { AppbarContainer, AppbarHeader } from ".";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
>>>>>>> Stashed changes
}