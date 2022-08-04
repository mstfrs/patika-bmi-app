import {
  Button,
  Container,
  InputAdornment,
  TextField,
  List,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useEffect, useState } from "react";
import React from "react";
import bmiData from "../data/bmiData";
import breakfast from "../static/avatar/breakfast.PNG";
import lunch from "../static/avatar/lunch.PNG";
import dinner from "../static/avatar/dinner.PNG";

const Calculator = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [bmiType, setBmiType] = useState("");
  const [diet, setDiet] = useState({});

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeWeight(e) {
    setWeight(e.target.value);
  }
  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }
  useEffect(() => {
    if (result < 18.5 && result > 0) {
      setBmiType("Underweight");
    } else if (result >= 18.5 && result < 24.9) {
      setBmiType("Healthy");
    } else if (result >= 25 && result < 29.9) {
      setBmiType("Overweight");
    } else if (result >= 30) {
      setBmiType("Obesity");
    } else {
      setBmiType("");
    }

    bmiData.map((data) => {
      if (data.bmiType === bmiType) {
        setDiet(data.diet);
      }
      // data.bmiType === bmiType ?  : setDiet([]);
    });
    console.log(diet);
  }, [result, bmiType, diet]);

  function handleSubmit(e) {
    e.preventDefault();
    setBmiType("");

    const heightSquare = (height / 100) * (height / 100);
    const bmiResult = (weight / heightSquare).toFixed(1);
    console.log(bmiResult);
    setResult(parseFloat(bmiResult));
    localStorage.setItem("name", name);
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);

    // console.log(bmiResult);
  }

  return (
    <div className="container">
      <div>
        <Container
          // maxWidth="100%"
          style={{
            height: "40vh",
            width: "20rem",
            padding: "20px",
            backgroundColor: "white",
            marginTop: "50px",

            justifyContent: "space-between",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              className="outlined-start-adornment"
              // className={clsx(classes.margin, classes.textField)}

              variant="outlined"
              onChange={handleChangeName}
            />
            <br />
            <br />
            <br />
            <TextField
              label="Your Weight"
              className="outlined-start-adornment"
              // className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Kg</InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChangeWeight}
            />
            <br />
            <br />
            <br />
            <TextField
              label="Your Height"
              className="outlined-start-adornment"
              // className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Cm</InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChangeHeight}
            />
            <br />
            <br />
            <br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              // className={classes.button}
              endIcon={<SendIcon />}
            >
              Calculate
            </Button>

            {/* <input type="submit" value="Submit" /> */}
          </form>
        </Container>
      </div>
      <br />
      <br />
      <br />

      {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {result}
              {bmiType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {diet.breakfast}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}
      <div>
        <Typography
          sx={{
            color: "white",
          }}
          gutterBottom
          variant="h3"
          component="div"
        >
          {result}
          <br />
          {bmiType}
          <br />
        </Typography>
      </div>

      {bmiType == "" ? null : (
        <div>
          <List
            sx={{
              width: "100%",

              bgcolor: "background.paper",
              display: "flex",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img src={breakfast} alt="" />
                {/* <Avatar alt="Remy Sharp" src="../static/avatar/breakfast.PNG" /> */}
              </ListItemAvatar>
              <ListItemText
                primary="Breakfast"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {diet.breakfast}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img src={lunch} alt="" />
                {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
              </ListItemAvatar>
              <ListItemText
                primary="Lunch"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {diet.lunch}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img src={dinner} alt="" />
                {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
              </ListItemAvatar>
              <ListItemText
                primary="Dinner"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {diet.dinner}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
};

export default Calculator;
