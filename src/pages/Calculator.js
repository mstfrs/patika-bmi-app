import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Container,
  TextField,
} from "@mui/material";
import React from "react";

const Calculator = () => {
  return (
    <div>
      <Container maxWidth="sm" style={{ height: "100vh", padding: "20px" }}>
        <FormControl sx={{ display: "flex", color: "white" }}>
          <TextField
            id="name-input"
            label="Your Name"
            type="text"
            variant="filled"
            placeholder="Mustafa"
            sx={{ color: "white" }}
          />
          <br />
          <TextField
            id="name-input"
            label="Your Name"
            type="text"
            variant="filled"
            placeholder="Mustafa"
            sx={{ color: "white" }}
          />
        </FormControl>
      </Container>
    </div>
  );
};

export default Calculator;
