import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export const Productdisplay = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      console.log(y.data);
      setdata(y.data);
    });
  },[]);

  return (
    <div>
      {data.map((value, index) => {
        return (
          <div key={index}>
            <Card  sx={{ maxWidth: 345 }} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={value.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {value.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {value.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
             
            </Card>
          </div>
        );
      })}
    </div>
  );
};
