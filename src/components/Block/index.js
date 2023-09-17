import { Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ArcherElement } from "react-archer";
import { getSemesterLabel, getCourseType } from "../../utils";

const Block = (props) => {
  const { data } = props;

  const courseStyle = getCourseType(data.course_type);

  const relations = data.co_requisite.map((item, index) => ({
    targetId: item,
    targetAnchor: "right",
    sourceAnchor: "top",
    style: { strokeDasharray: "5,5" },
  }));

  const renderBlock = (course_data) => {
    return (
      <Card sx={{ maxWidth: 150, maxHeight: 150 }} style={courseStyle}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            {course_data.course_code}
          </Typography>
          <Typography variant="subtitle2">
            {course_data.course_title}
          </Typography>
        </CardContent>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {course_data.offered_sessions?.map((semester, index) => (
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
            {course_data.course_unit}
          </Typography>
        </div>
      </Card>
    );
  };
  return (
    <>
      <ArcherElement id={props.id} relations={relations}>
        {renderBlock(data)}
      </ArcherElement>
    </>
  );
};

export default Block;
