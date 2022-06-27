<<<<<<< Updated upstream
import React from "react";
import {AppbarContainer, AppbarHeader, MyList} from "../../styles/appbar";
import { Container, ListItemText } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { SearchOutlined } from "@material-ui/icons";
import Actions from "../../styles/appbar/action";
// import { AppbarContainer } from "../../styles/appbar";
export default function AppbarDesktop({matches}){
  const navigate = useNavigate();
   return(
    <AppbarContainer >
          <AppbarHeader  style={{color:"darkgreen"}}>
           Welcome to DecentraHealth
          </AppbarHeader>
          <MyList type="row">
                    <Button size ="small" variant="outlined" 
           type='submit' style={{height:"40px",width:"40px",margin:"10px 5px 5px 50px",textAlign:"center",alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white",}}onClick={()=>{ navigate("/");
      }}>Home</Button>
          <Button size ="small" variant="outlined" 
           type='submit' style={{height:"40px",width:"auto",margin:"10px 5px 5px 5px",textAlign:"center",alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white",}}onClick={()=>{ navigate("/DoctorLogin");
      }}>Doctor</Button>
          <Button size="small" variant="outlined" style={{height:"40px",width:"auto",margin:"10px 5px 5px 5px",alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white"}} onClick={()=>{
          navigate("/PatientLogin");}}>Patient</Button>
          <Button size="small" variant="outlined" style={{height:"40px",width:"auto",margin:"10px 5px 5px 5px",alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white"}} onClick={()=>{
          navigate("/HospitalLogin");}}>Hospital</Button>
          <Button size ="small" variant="outlined" 
           type='submit' style={{height:"40px",width:"auto",margin:"10px 5px 5px 5px",textAlign:"center",alignItems:"center",justifyContent:"center",backgroundColor: "#013220",color:"white",}}onClick={()=>{ navigate("/");
      }}>Contact Us</Button>
         
    
           
    
          {/* <ListItemText primary="Doctors"/>
          <ListItemText primary="Patients"/>
          <ListItemText primary="Contact Us"/> */}
          {/* <ListItemButton>
            <ListItemIcon>
              <SearchOutlined/>
            </ListItemIcon>
          </ListItemButton> */}
            
          </MyList>
          <Actions/>
    </AppbarContainer>

   );
=======
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
>>>>>>> Stashed changes
}