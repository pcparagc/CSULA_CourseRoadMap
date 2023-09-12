import React,{Component} from "react";
import './courseBox.css';

export class CourseBox extends Component{
    
    render(){
        
        return (
            <div className="coursebox">
               <div className="card_course" >
                    <div className="card-body">
                        <h5 className="course-title">{this.props.courses.course_title}</h5>
                        <p className="course-code">{this.props.courses.course_code}</p>
                        <p className="course-category">{this.props.courses.category}</p>
                    </div>
                </div>   
            </div>
        );
            
    }
}

export default CourseBox;