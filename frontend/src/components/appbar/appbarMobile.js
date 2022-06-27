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
}