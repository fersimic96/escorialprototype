import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import styled from 'styled-components';
import moment from 'moment';

import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Container = styled.div`
       margin-left: 30px;
   margin-right: 30px;
  
    
   
    height: 190px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;      
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    border: 1px solid #ededed9e;
`

const Image = styled.img`
height:190px;
max-width: 200px;


justify-content: center;
cursor:pointer;

 
         `

const AmountContainer = styled.div`
    flex:1;
    border:10;
    border-color:black;
    width: 90%;
    display: flex;    
    flex-direction: row;           
    ;`



const Title = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
font-size: 20px;
    z-index: 3;
    font-weight: bold;
`;
const Titleprice = styled.div`
display: flex;
text-align: center;
flex-direction: row;
text-align: center;
justify-content: center;
align-items: center;
font-size: 20px;
    z-index: 3;
    font-weight: bold;
`;

const Imagecontainer = styled.div`
display: flex;
flex: 1;
z-index: 3;

  
`;
const Pricecontainer = styled.div`
flex:0.5;
width: 100%;

  
`;

const Itemcontainer = styled.div`  
  flex: 1;
`
const Containerstockquant = styled.div`
flex:2;
display: flex;

align-items: center;

flex-direction: column;
  
`;
const Containerstockquant2 = styled.div`

margin-top: 78px;
display: flex;
justify-content: center;
flex-direction: column;
  
`;
const Iconcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
flex-direction: column;


  
`;
const Containersubtotal = styled.div`

display: flex;
align-items: center;
justify-content: center;
width:100px;
flex: 2;
  
`;
const Button = styled.button`
    z-index: 3;
    display: flex;
    justify-content: center;
    background-color: RED;
    color: white;
    font-size: 17px;
    font-weight: 400;
    border: none;
    align-items: center;
    padding:15px;
    border-radius: 3px;
    height: 40px;
    width: 80%;
    margin-top: 1px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 5px 5px 10px #e8427f4b;
    transition: all 0.5s ease;
    -webkit-tap-highlight-color: transparent;
    &:hover{
        transform: scale(1.03);
    }
`;


const Post2 = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();


  return (<>



    <Container>
      <Imagecontainer>
        <Image src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      </Imagecontainer>
      <Pricecontainer>
        <h2>{post.title}</h2>


      </Pricecontainer>
      <Itemcontainer>

        <h4>LINEA {post.linea}</h4>
        <p><strong>TIPO DE FALLA: {post.tipofalla} </strong></p>
        <p><strong>MINUTOS PERDIDOS: {post.minper} </strong></p>
        <p>{post.message}</p>
      

      </Itemcontainer>
      <AmountContainer>
        <Containerstockquant>
          <p> {moment(post.createdAt).format("YYYY-MM-DD hh:mm")}</p>
          {moment(post.createdAt).fromNow()}


        </Containerstockquant>
        <Containersubtotal>
          <Title>
            <p> {post.creator}</p>
            {post.tags.map((tag) => `#${tag} `)}
          </Title>
        </Containersubtotal>
        <Iconcontainer>
          <Button onClick={() => dispatch(likePost(post._id))}> {post.likeCount} </Button>
          <Button onClick={() => dispatch(deletePost(post._id))}> DELETE </Button>

          <Button onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </Iconcontainer>
      </AmountContainer>
    </Container>













  </>
  );
};

export default Post2;
