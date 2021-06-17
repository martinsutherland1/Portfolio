import React, {Component, Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from './images/am.jpeg';

const Project1Container = () => {

    

    return (
        <div>

<Carousel>
                <div>
                    <img src={image}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image}/>
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            <h1>Project title</h1>
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