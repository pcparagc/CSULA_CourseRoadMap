import { Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { getCourseType, getSemesterLabel } from "../../utils";
import { ArcherContainer, ArcherElement } from 'react-archer';

const Block = (props) => {
  const { data } = props;

  const courseStyle = getCourseType(data.course_type);
  

  const renderBlock = (course_data) => {

    const cardStyle = {
      width: 170,
      height: 150,
      transition: 'border 0.3s'
    };

    const handleMouseOver = () => {
      setCardHovered(true);
    };

    const handleMouseOut = () => {
      setCardHovered(false);
    };

    return (
      
      <Card
        sx={{ Width: 150, Height: 150 }}
        className={props.className}
        style={{ ...cardStyle, ...courseStyle, border: cardHovered ? '3px solid #FF5722' : 'none' }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
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
  const [cardHovered, setCardHovered] = React.useState(false);
  return <>{renderBlock(data)}</>;
};

export default Block;