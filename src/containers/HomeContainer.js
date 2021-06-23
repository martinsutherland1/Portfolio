import React, {Component, Fragment, useState} from 'react';
import image1 from './images/screen1.png';
import linked from './images/linked.png';
import github from './images/github.png';
import Project1Container from './Project1Container';
import Project2Container from './Project2Container';
import Project3Container from './Project3Container';
import Project4Container from './Project4Container';
import NavBar from '../NavBar.js';


const HomeContainer = () => {

    const [selectValue, setSelectValue] = useState();

    const handleChange = (e) => {
      setSelectValue(e.target.value)
    }

    console.log(`selectValue`, selectValue);

    if (selectValue === undefined) {
        return (
<div>
           
<div id="bio">
<NavBar/>
<div id="dropdown">
                <select name="portfolio"  onChange={handleChange} value={selectValue}>
                    <option value="" >Select Project</option>
                    <option value="project1">Gym Class Manager</option>
                    <option value="project2">Music Quiz</option>
                    <option value="project3">Routes App</option>
                    <option value="project4">Football Stats</option>
                  </select>
            </div>
                  
                
                <h4>Martin Sutherland</h4>
            <div id="bio-image-div">
                        <img  id="bio-image"src={image1} />
                        
                    </div>
            <p>Junior Developer</p>
            <p>Glasgow / Liverpool</p>
            <div id="links">
            <p><a id="link" href="https://github.com/martinsutherland1"><img  id="linked"src={linked}/></a></p>
            <p><a id="git" href="https://www.linkedin.com/in/martin-sutherland-90/"><img  id="github"src={github}/></a></p> 
            </div>
            
            
    </div>
    <div id="about">
            <p>I am a junior software developer looking for my first role in the industry. I am a hardworking and determined individual with a passion for learning and problem solving. Having worked in a team and a customer facing environment throughout my career, I thrive from meeting and working with new people. My previous role involved me travelling around the UK to work with colleagues within different departments of the business. This was an area I particularly enjoyed as it gave me an insight into how other areas of the business operated, further developed my communication skills, and allowed me to meet the people on the receiving end of our IT support. Whilst working in IT, I had the opportunity to work closely with developers and this is what gave me the motivation to improve my skill set. Seeing developers create software or applications that can make everyday tasks easier and more time efficient has given me the motivation to transition into this field. I attended college part time to get an introduction to developing and completed my education during a 16-week boot camp. I am enthusiastic about professional development and love learning new skills. With my creative mindset and determination, I feel I could contribute strongly to this field.</p>
            </div>
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