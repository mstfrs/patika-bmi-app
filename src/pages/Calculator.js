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
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [bmiType, setBmiType] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeWeight(e) {
    setWeight(e.target.value);
  }
  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBmiType("");

    const heightSquare = (height / 100) * (height / 100);
    const bmiResult = (weight / heightSquare).toFixed(1);
    console.log(bmiResult);
    setResult(bmiResult);
    // console.log(bmiResult);

    if (result < 18.5) {
      setBmiType("Underweight");
    } else if (result >= 18.5 && result < 24.9) {
      setBmiType("Healty");
    } else if (result >= 25 && result < 29.9) {
      setBmiType("Overweight");
    } else if (result >= 30) {
      setBmiType("Obesity");
    }

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
              {result}
              {bmiType}
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
