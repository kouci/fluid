import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import React, { useState } from "react";
import NextLink from 'next/link';
import useStyles from '../utils/styles';
import Layout from "@/components/Layout";
import axios from "axios";
import classes from "../styles/style.module.css"

const Login = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("test")
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      alert('succss login');
    } catch (err) {
      alert(err.message);
    }
  };


  return (
    <Layout title="Login">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography style={{textAlign: 'center'}} component="h2" variant="h2">
         Connexion
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: "email" }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: "password" }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Connexion
            </Button>
          </ListItem>
          <ListItem>
            Vous avez pas un compte? &nbsp;
            <NextLink href="/register" passHref>
              Register
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default Login;
