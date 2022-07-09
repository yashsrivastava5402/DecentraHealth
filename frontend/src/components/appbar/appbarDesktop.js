import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Container, ListItemText } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { SearchOutlined } from "@material-ui/icons";
import Actions from "../../styles/appbar/action";
// import { AppbarContainer } from "../../styles/appbar";
export default function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  return (
    <AppbarContainer >
      <AppbarHeader style={{ color: "darkgreen" }}> DecentraHealth</AppbarHeader>
      <MyList type="row">
        <Button size="small" variant="outlined"
          type='submit' style={{ height: "40px", width: "40px", margin: "10px 5px 5px 50px", textAlign: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#013220", color: "white", }} onClick={() => {
            navigate("/");
          }}>Home</Button>
        <Button size="small" variant="outlined"
          type='submit' style={{ height: "40px", width: "auto", margin: "10px 5px 5px 5px", textAlign: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#013220", color: "white", }} onClick={() => {
            navigate("/DoctorLogin");
          }}>Doctor</Button>
        <Button size="small" variant="outlined" style={{ height: "40px", width: "auto", margin: "10px 5px 5px 5px", alignItems: "center", justifyContent: "center", backgroundColor: "#013220", color: "white" }} onClick={() => {
          navigate("/PatientLogin");
        }}>Patient</Button>
        <Button size="small" variant="outlined" style={{ height: "40px", width: "auto", margin: "10px 5px 5px 5px", alignItems: "center", justifyContent: "center", backgroundColor: "#013220", color: "white" }} onClick={() => {
          navigate("/HospitalLogin");
        }}>Hospital</Button>
        <Button size="small" variant="outlined"
          type='submit' style={{ height: "40px", width: "auto", margin: "10px 5px 5px 5px", textAlign: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#013220", color: "white", }} onClick={() => {
            navigate("/");
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
      <Actions />
    </AppbarContainer>

  );
}