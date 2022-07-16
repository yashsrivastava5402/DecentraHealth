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
    <>
    {/* <AppbarContainer >
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

      </MyList>
      <Actions />
    </AppbarContainer> */}

    <nav class="bg-purple-900 text-white flex justify-between">
      <img
        src="https://www.pngmart.com/files/8/Health-PNG-Transparent-Image.png"
        class="h-20 mx-3"
        alt=""
      />
      <span class="font-serif text-6xl pt-2 pr-[400px]  text-white-300">DecentraHealth</span>
      <ul class="mx-14 my-6 flex space-x-11 justify-end text-2xl">
        <li class="cursor-pointer" onClick={() => {navigate("/");}}>Home</li>
        <li class="cursor-pointer" onClick={() => {navigate("/PatientLogin");}}>Patient</li>
        <li class="cursor-pointer" onClick={() => {navigate("/DoctorLogin");}}>Doctors</li>
        <li class="cursor-pointer" onClick={() => {navigate("/HospitalLogin");}}>Hospitals</li>
        <li class="cursor-pointer" onClick={() => {navigate("/");}}>Contact</li>
      </ul>
    </nav>
</>
  );
}