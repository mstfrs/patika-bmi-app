import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container maxWidth="md" style={{ height: "100vh" }}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            padding: "0 30px",
          }}
        >
          <h1>What is body mass index (BMI)?</h1>
          <Typography variant="body1" align="justify">
            Body mass index (BMI) is a medical screening tool that measures the
            ratio of your height to your weight to estimate the amount of body
            fat. Healthcare providers calculate BMI by using weight in kilograms
            (kg) divided by the square of height in meters (m2). In most people,
            BMI relates to body fat — the higher the number, the more body fat
            you may have — but it’s not accurate in some cases. BMI alone does
            not diagnose health. Healthcare providers use BMI and other tools
            and tests to assess someone’s health status and risks. High body fat
            may lead to heart disease, stroke and Type 2 diabetes. Low body fat
            may be related to malnutrition. Just the right amount of body fat
            helps vitamins and minerals get into your body. It also provides a
            source of energy for your body, helps maintain body temperature and
            protects your organs. You should not use the standard BMI chart to
            evaluate a child’s or teenager’s weight. Talk to your child's
            healthcare provider about the optimum weight range for their age and
            height.
          </Typography>
          <Typography variant="h5" sx={{ color: "red" }}>
            Diagnosing weight types with BMI
          </Typography>
          <Typography variant="body1">
            In general, the following BMI ranges (in kg/m2) classify different
            weight types:
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemText primary="Underweight: Less than 18.5." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Optimum range: 18.5 to 24.9." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Overweight: 25 to 29.9." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Class I obesity: 30 to 34.9." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Class II obesity: 35 to 39.9." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Class III obesity: More than 40." />
            </ListItem>
          </List>
          <Button variant="outlined" onClick={() => navigate("/calculate")}>
            Calculate BMI
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Main;
