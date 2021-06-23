import React, {Component, Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Project1Container from './Project1Container';
import Project2Container from './Project2Container';
import Project3Container from './Project3Container';
import Project4Container from './Project4Container';
import HomeContainer from './HomeContainer.js';


const MainContainer = () => {

  
return (
      <Router>
      <Fragment>
        
        
        
      
      <Switch>
      <Route path="/" component={HomeContainer} />
        <Route path="/Portfolio" component={HomeContainer} />
        </Switch>
  
  
      </Fragment>
      </Router>
  
  )




  


  

  

  

  



 
  


  


  

 
  
}

export default MainContainer;