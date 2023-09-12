import React, { useState } from "react";
import CourseBox from "../../components/courseBox/courseBox";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Home/style.css";
import data from "../../data/courses.json";
import PopUp from "../../components/courseBox/popUp";

const Home = () => {
  const courses = data.courses;
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setButtonPopUp(true);
  };

  return (
    <div>
      <div className="coursebox-container row container ">
        {courses.map((element, index) => (
          <div className="col-sm-3" key={element.category_id}>
            <div onClick={() => handleCourseClick(element)}>
              <CourseBox key={index} courses={element} className="col-sm"></CourseBox>
            </div>
            {buttonPopUp && selectedCourse === element && (
              <PopUp
                trigger={buttonPopUp}
                courses={selectedCourse}
                setTrigger={setButtonPopUp}
              >
              </PopUp>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
