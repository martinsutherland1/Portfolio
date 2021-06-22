import React, {Component, Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Project4Container = ({handleChange, selectValue}) => {

   

    return (
       

      <div>
           <select name="portfolio" className="dropdown" onChange={handleChange} value={selectValue}>
        <option value="" >Select Answer</option>
        <option value="project1" >Gym Class Manager</option>
        <option value="project2" >Music Quiz</option>
        <option value="project3">Routes App</option>
        <option value="project4">Football Stats</option>
      </select>

      <p>Project 4</p>
      </div>
    )
  
};

export default Project4Container;