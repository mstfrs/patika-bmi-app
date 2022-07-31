import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useState } from "react";
import bmiData from "../data/bmiData";

const Calculator = () => {
  const [user, setUser] = useState({
    name: "",
    weight: "",
    height: "",
    result: "",
    bmiType: "",
  });

  function handleChangeName(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handleChangeWeight(e) {
    setUser({ ...user, weight: e.target.value });
  }
  function handleChangeHeight(e) {
    setUser({ ...user, height: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const heightSquare = (user.height / 100) * (user.height / 100);
    const bmiResult = (user.weight / heightSquare).toFixed(1);
    console.log(bmiResult);
    setUser({
      ...user,
      result: bmiResult,
    });
    // console.log(bmiResult);

    if (user.result < 18.5) {
      setUser({ ...user, bmiType: "Underweight" });
    } else if (user.result >= 18.5 && user.result < 24.9) {
      setUser({ ...user, bmiType: "Healty" });
    } else if (user.result >= 25 && user.result < 29.9) {
      setUser({ ...user, bmiType: "Overweight" });
    } else if (user.result >= 30) {
      setUser({ ...user, bmiType: "Obesity" });
    }

    console.log(user);

    // {
    //   bmiData.map((data) => {
    //     data;
    //   });
    // }
  }

  return (
    <div style={{ width: "100vh", paddingBottom: "5rem" }}>
      <Container
        maxWidth="sm"
        style={{
          height: "40vh",
          width: "20rem",
          padding: "20px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            id="outlined-start-adornment"
            // className={clsx(classes.margin, classes.textField)}

            variant="outlined"
            onChange={handleChangeName}
          />
          <br />
          <br />
          <br />
          <TextField
            label="Your Weight"
            id="outlined-start-adornment"
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
            id="outlined-start-adornment"
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

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.result}
              {user.bmiType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default Calculator;
