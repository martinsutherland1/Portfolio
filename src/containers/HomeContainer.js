import React, {Component, Fragment, useState} from 'react';
import image1 from './images/screen1.png'
import Project1Container from './Project1Container';
import Project2Container from './Project2Container';
import Project3Container from './Project3Container';
import Project4Container from './Project4Container';


const HomeContainer = () => {

    const [selectValue, setSelectValue] = useState();

    const handleChange = (e) => {
      setSelectValue(e.target.value)
    }

    console.log(`selectValue`, selectValue);

    if (selectValue === undefined) {
        return (
<div id="bio">
                  <select name="portfolio" className="dropdown" onChange={handleChange} value={selectValue}>
                    <option value="" >Select Answer</option>
                    <option value="project1">Gym Class Manager</option>
                    <option value="project2">Music Quiz</option>
                    <option value="project3">Routes App</option>
                    <option value="project4">Football Stats</option>
                  </select>
                
                <h4>Martin Sutherland</h4>
            <div id="bio-image-div">
                        <img  id="bio-image"src={image1} />
                        
                    </div>
            <p>Junior Developer</p>
            <div id="links">
            <p><a id="git" href="https://github.com/martinsutherland1">GitHub</a></p>
            <p><a id="link" href="https://www.linkedin.com/in/martin-sutherland-90/">LinkedIn</a></p> 
            </div>
            
            <p>info here</p>
    </div>
            
        )

    }

    if (selectValue === "project1"){
        return (
            <Project1Container handleChange={handleChange} selectValue={selectValue}/>
        )
    }

    if (selectValue === "project2"){
        return (
            <Project2Container handleChange={handleChange} selectValue={selectValue}/>
        )
    }

    if (selectValue === "project3"){
        return (
            <Project3Container handleChange={handleChange} selectValue={selectValue}/>
        )
    }

    if (selectValue === "project4"){
        return (
            <Project4Container handleChange={handleChange} selectValue={selectValue}/>
        )
    }

   
  
};

export default HomeContainer;