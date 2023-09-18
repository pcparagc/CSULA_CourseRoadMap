import { Chip, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { ArcherContainer } from "react-archer";
import Logo from "../../assets/images/csula_logo.png";
import Block from "../../components/Block";
import DialogBox from "../../components/DialogBox";
import data from "../../data/courses.json";
import { getCourseType } from "../../utils";

const offered_sessions = [
  {
    title: "Offered in fall",
    initials: "F",
  },
  {
    title: "Offered in spring",
    initials: "S",
  },
  {
    title: "Offered in summer",
    initials: "X",
  },
];

const course_type = [
  "General Education",
  "Lower Division",
  "Upper Division",
  "Senior Design",
  "Technical Elective",
];
const Home = () => {
  const { sections, headerDetail } = data;
  console.log("courses", sections);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({});
  const handleClickOpen = (course) => {
    setOpenDialog(true);
    setDialogContent(course);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
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
    <>
      <Paper elevation={3} style={{ padding: "20px", background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {headerDetail.school_name}
            </Typography>

            <Typography variant="subtitle1">
              {headerDetail.department}
            </Typography>
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
              style={{
                margin: "20px",
                background: "lightgrey",
                padding: "0px",
              }}
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
              <ArcherContainer>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {section.courses.map((course, innerIndex) => (
                    <div
                      style={{ margin: "20px", cursor: "pointer" }}
                      onClick={() => handleClickOpen(course)}
                    >
                      <Block key={innerIndex} data={course} />
                    </div>
                  ))}
                </div>
              </ArcherContainer>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: "flex" }}>
          <div>
            <Typography type="block">
              Course typically offered at CSULA
            </Typography>
            {offered_sessions?.map((session, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                <Chip
                  label={session.initials}
                  color="primary"
                  size="small"
                  style={{ margin: "5px", backgroundColor: "#2E3092" }}
                />
                <Typography style={{ textAlign: "center" }}>
                  {session.title}
                </Typography>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <div style={{ display: "flex" }}>
                <Typography>Color Key:</Typography>
                {course_type.map((type) => (
                  <div
                    style={{
                      ...getCourseType(type),
                      borderRadius: "10px",
                      padding: "0px 10px",
                      margin: "0px 10px",
                      textAlign: "center",
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <Typography>Prerequisite</Typography>
              <Typography>Co-requisite</Typography>
            </div>
          </div>
        </div>
      </Paper>
      <DialogBox
        open={openDialog}
        handleClose={handleClose}
        content={dialogContent}
      />
    </>
  );
};

export default Home;
