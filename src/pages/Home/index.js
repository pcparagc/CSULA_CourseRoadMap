import React from "react";
import Block from "../../components/Block";
import data from "../../data/courses.json";
import { Chip, Grid, Paper, Typography } from "@mui/material";
import Logo from "../../assets/images/csula_logo.png";
const Home = () => {
  const { sections, headerDetail } = data;
  console.log("courses", sections);

  const SquareWithNumber = ({ number }) => {
    const squareStyle = {
      width: "30px",
      height: "30px",
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const numberStyle = {
      color: "white",
      fontWeight: "bold",
      fontSize: "12px",
    };

    return (
      <Paper elevation={3} style={squareStyle}>
        <Typography variant="body1" style={numberStyle}>
          {number}
        </Typography>
      </Paper>
    );
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", background: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {headerDetail.school_name}
          </Typography>

          <Typography variant="subtitle1">{headerDetail.department}</Typography>
        </div>
        <Typography style={{ alignSelf: "center" }}>
          {headerDetail.title}
        </Typography>
        <img
          src={Logo}
          alt="CSULA Logo"
          width="65"
          height="80"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid
            item
            xs={12}
            key={index}
            style={{ margin: "20px", background: "lightgrey", padding: "0px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", flex: 1, textAlign: "center" }}
              >
                {section.title}
              </Typography>
              <SquareWithNumber number={section.unit1 + section.unit2} />
            </div>
            <div style={{ display: "flex" }}>
              {section.courses.map((course, innerIndex) => (
                <Grid xs={12} sm={4} lg={2}>
                  <div style={{ margin: "20px" }}>
                    <Block key={innerIndex} data={course} />
                  </div>
                </Grid>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Home;
