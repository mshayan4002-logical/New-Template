import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import safeWay from "./image.jpg";


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    position: "relative"
  },
  active: {
     opacity:0.6,
     background:"Gray",
     
  },
  display:{
    display:"none"
  },
  block:{
    display:"inline",

  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
const [active, setActive] = useState(true)

  return (
    <Card className={`${classes.root} ${active && classes.active}`} onClick={() => {setActive(true)}} onDoubleClick={() => {setActive(false)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="540"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className="text-center" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="p" className="text-center text-xs text-blue-900" component="p">
            ${props.price}
           </Typography>
          </CardContent>
      </CardActionArea>
     {active && 
      <div style={
        {"width":"100%","border":"2px solid","height":"100%","position":"absolute","top":"0","bottom":"0","right":"0","left":"0","display":"flex","justifyContent":"center","background":"black","opacity":"0.75"}
      }>
      <CheckCircleOutlineIcon style={
          {"color":"white","fontSize":"90px","margin":"auto"}
      } />
      </div>
     }
      </Card>
  );
}
