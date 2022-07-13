import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import styled from 'styled-components';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Container = styled.div`
  display:flex;
  max-width: 500px;
`;
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' ,tipofalla: '',minper: '',linea: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '',tipofalla: '',minper: '',linea: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Container>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Formulario CODIGO'}</Typography>
        <TextField name="Responsable" variant="outlined" label="Responsale" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="descripcion" variant="outlined" label="Descripcion" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="Maquinas" variant="outlined" label="Maquinas(coma, agregar varias)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

        <TextField type="number" name="tipofalla" variant="outlined" label="Falla" fullWidth value={postData.tipofalla} onChange={(e) => setPostData({ ...postData, tipofalla: e.target.value})} />
        <TextField type="number" name="minPer" variant="outlined" label="minutosPerdidos" fullWidth value={postData.minper} onChange={(e) => setPostData({ ...postData, minper: e.target.value})} />
        <TextField type="text" name="Linea" variant="outlined" label="LINEA" fullWidth value={postData.linea} onChange={(e) => setPostData({ ...postData, linea: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        {/* <div className="btn #64b5f6 blue darken-1">
          <span>Uplaod Image</span>
          <input type="file" onChange={(e) => setPostData({...postData, selectedFile:e.target.files[0]})} />
        </div> */}


        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Container>
  );
};

export default Form;
