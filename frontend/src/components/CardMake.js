import React from "react"
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
// import { Colors } from "../theme";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(1),
    // marginTop:theme.spacing(1),
    backgroundColor:"#90EE90",
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
export default function CardMake(){
  const classes = useStyles();
const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Card className={classes.card}>
     <CardActionArea>
        <CardMedia className={classes.media} title="My Post" />
        <CardContent>
          <Typography  variant="h5">
            Hello
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        
        {/* <BannerDescription variant="subtitle">
         Got you!
         Here to help you to maintain unending records of Medical Care
         <br/> */}
         
        {/* </BannerDescription> */}
      </CardContent>
    </Card>
    
  );
}