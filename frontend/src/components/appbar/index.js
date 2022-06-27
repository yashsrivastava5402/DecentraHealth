<<<<<<< Updated upstream
import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";


export default function Appbar(){
  const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('md'));

  return(
  <>
    {matches? <AppbarMobile matches={matches}/> :<AppbarDesktop matches={matches}
    />}
  </>
  );

  
=======
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import React from "react";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/>}
    </>
  );
>>>>>>> Stashed changes
}