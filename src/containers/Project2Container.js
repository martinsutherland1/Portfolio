import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar.js';

const Project2Container = ({handleChange, selectValue}) => {

    return (
        <div>
            <NavBar/>
            <h1>Project title</h1>

            <select name="portfolio" className="dropdown" onChange={handleChange} value={selectValue}>
                    <option value="" >Select Project</option>
                    <option value="project1" >Gym Class Manager</option>
                    <option value="project2" >Music Quiz</option>
                    <option value="project3">Routes App</option>
                    <option value="project4">Football Stats</option>
                  </select>
           
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

export default Project2Container;