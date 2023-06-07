import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/IMG_1593.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image" src={pfp}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Phillip Dickey</div>
            <div className="brief_description">
              I like turtles
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}