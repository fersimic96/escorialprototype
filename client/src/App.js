import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import styled from 'styled-components';
import memories from './images/memories.png';
import { Navbar } from './components/Navbar';
const Container = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
  
`;
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
   <>
      <Navbar/>
     
        <Container>
         
           
              <Posts setCurrentId={setCurrentId} />
           
           
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            
      
        </Container>
     
        </>
  );
};

export default App;
