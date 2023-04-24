import useStyles from "@/utils/styles";
import {
  AppBar,
  Container,
  Icon,
  Toolbar,
  Typography,
  Link,
  Badge,
  NoSsr,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import classes from '../styles/style.module.css'

const Layout = ({ title, children }) => {
  // récupérer les cart Items
  const cart = useSelector((state) => state.data.cart);
 
  return (
    <NoSsr>
      <Head>
        <title>{title ? `${title}- Libraire` : "Libraire"}</title>
      </Head>
      <AppBar position="static" sx={{ backgroundColor: "#1a1a38" }} className={classes.navbar}>
        <Toolbar className={classes.MenuSection}>
          <div className={classes.brandSection}>
            <NextLink className={classes.link} href="/" passHref={true}>
              <Typography className={classes.brand}>Libraire</Typography>
            </NextLink>
            <Icon className={classes.icon} component={MenuBookIcon} />
          </div>
          <div className={classes.grow}>
            <NoSsr>
              {cart.cartItems.length > 0 ? (
                <Badge color={"secondary"} badgeContent={cart.cartItems.length}>
                  <NextLink className={classes.link} href="/cart" passHref={true}>
                     <Icon component={ShoppingCartIcon} />
                </NextLink>
                </Badge>
              ) : (
                <NextLink className={classes.link} href="/cart" passHref={true}>
                     <Icon component={ShoppingCartIcon} />
                </NextLink>
             
              )}
            </NoSsr>
            <NextLink className={classes.link} href="/login" passHref={true}>
              <Icon component={AccountCircleIcon} />
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="h6" mt={2}>
          © 2023 Tous droits réservés.
        </Typography>
      </footer>
    </NoSsr>
  );
};

export default Layout;
