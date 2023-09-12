import React, { Component, useState } from "react";
import './popup.css'

function PopUp(props){

    

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button
            className="btn-close"
                type="button"
                onClick={() => {
                props.setTrigger(false);
               
            }}>
            </button>
                <div className="popup-header">

                <h3>{props.courses.course_title}</h3>
                <h5>{props.courses.course_code}</h5>
                <h5>Category : {props.courses.category}</h5>
                <h6>Offered Sessions : {props.courses.offered_sessions}</h6>
                <h6>course : {props.courses.course}</h6>
                <h6>prerequisite : {props.courses.prerequisite}</h6>
                <h6>co_requisite : {props.courses.co_requisite}</h6>
                </div>
                <div className="popup-body">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                </div>
            </div>

        </div>
    ): "";

}


export  default PopUp;