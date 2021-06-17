import React, {Component, Fragment} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.jpeg";

const Project4Container = () => {

   

    return (
        <Carousel>
                <div>
                    <img src={image1} width="200" height="100" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} width="20" height="100"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} width="200" height="100"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} width="200" height="100"/>
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
    )
  
};

export default Project4Container;