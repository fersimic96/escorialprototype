import React from 'react';
import { Grid, CircularProgressr } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Post2 from './Post/Post2';
import useStyles from './styles';
const Container = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
`;
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
 

  return (
    !posts.length ? "CARGANDO" : (
      <Container>
        {posts.map((post) => (
         
            <Post2 post={post} setCurrentId={setCurrentId} />
         
        ))}
      </Container>
    )
  );
};

export default Posts;
