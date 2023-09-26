export const getSemesterLabel = (semester) => {
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

export const getCourseType = (course_type) => {
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
    case "Technical Elective":
      return {
        backgroundColor: "#2AD8C4",
        border: "2px solid #019778",
      };
    default:
      return {
        backgroundColor: "#A2D40B",
        border: "2px solid #2AA438",
      };
  }
};

export const highlight = ()=>{
    return{
      backgroundColor: "red",
        border: "2px solid red",
    }
}
