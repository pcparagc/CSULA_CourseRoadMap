import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const Block = (props) => {
  const { data } = props;
  const getSemesterLabel = (semester) => {
    switch (semester) {
      case "fall":
        return "F";
      case "summer":
        return "X";
      case "spring":
        return "S";
      default:
        return "";
    }
  };
  const getCourseType = (course_type) => {
    switch (course_type) {
      case "General Education":
        return {
          backgroundColor: "#FFBD01",
          border: "2px solid #F7951E",
        };
      case "Lower Division":
        return {
          backgroundColor: "#A2D40B",
          border: "2px solid #2AA438",
        };
      case "Upper Division":
        return {
          backgroundColor: "#9FDAE8",
          border: "2px solid #28AAE3",
        };
      case "Senior Design":
        return {
          backgroundColor: "#D4F3ED",
          border: "2px solid #28AAE3",
        };
      default:
        return {
          backgroundColor: "#A2D40B",
          border: "2px solid #2AA438",
        };
    }
  };
  const courseStyle = getCourseType(data.course_type);
  return (
    <Card sx={{ maxWidth: 150, maxHeight: 150 }} style={courseStyle}>
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          {data.course_code}
        </Typography>
        <Typography variant="subtitle2">{data.course_title}</Typography>
      </CardContent>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {data.offered_sessions?.map((semester, index) => (
            <Chip
              key={index}
              label={getSemesterLabel(semester)}
              color="primary"
              size="small"
              style={{ margin: "5px", backgroundColor: "#2E3092" }}
            />
          ))}
        </div>
        <Typography style={{ margin: "5px", color: "#fff" }}>
          {data.course_unit}
        </Typography>
      </div>
    </Card>
  );
};

export default Block;
