import React, {Component, Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './images/screen1.png'
import image2 from './images/home2.png';

const Project1Container = ({handleChange, selectValue}) => {

    

    return (
        <div>
            <h1>Project title</h1>

            <select name="portfolio" className="dropdown" onChange={handleChange} value={selectValue}>
                    <option value="" >Select Answer</option>
                    <option value="project1" >Gym Class Manager</option>
                    <option value="project2" >Music Quiz</option>
                    <option value="project3">Routes App</option>
                    <option value="project4">Football Stats</option>
                  </select>

<Carousel>
                <div id="image1">
                    <img src={image1} />
                    <p className="legend">Class Schedule</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image2}/>
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            
             <h4>Scope</h4>
            <p>
                scope here
            </p>
            <h4>Challenges</h4>
            <p>
                Challenges here
            </p>
            <h4>Acheivements</h4>
            <p>
                Acheivements here
            </p>
        </div>
    )
  
};

export default Project1Container;