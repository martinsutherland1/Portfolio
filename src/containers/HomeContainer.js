import React, {Component, Fragment} from 'react';
import image1 from './images/screen1.png'

const HomeContainer = () => {

    return (


        <div id="bio">
            
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
  
};

export default HomeContainer;