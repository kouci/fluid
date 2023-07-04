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
import classes from "../styles/style.module.css";
import Image from "next/image";

const Layout = ({ title, children }) => {
  // récupérer les cart Items
  const cart = useSelector((state) => state.data.cart);

  return (
    <NoSsr>
      <Head>
        <title>{title ? `${title}- Libraire` : "Libraire"}</title>
      </Head>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#6AD9BB" }}
        className={classes.navbar}

      >
        <Toolbar className={classes.MenuSection}>
          <div className={classes.brandSection}>
            <NextLink className={classes.link} href="/" passHref={true}>
              <Image
                src="/images/logo_blanc.png"
                className={classes.icon}
                width={200}
                height={70}
                style={{ objectFit: "contain" }}
              />
            </NextLink>
          </div>
          <div className={classes.grow}>
            <NoSsr>
              {cart.cartItems.length > 0 ? (
                <Badge color={"secondary"} badgeContent={cart.cartItems.length}>
                  <NextLink
                    className={classes.link}
                    href="/cart"
                    passHref={true}
                  >
                    <Icon
                      component={ShoppingCartIcon}
                      style={{ fontSize: "25px" }}
                    />
                  </NextLink>
                </Badge>
              ) : (
                <NextLink className={classes.link} href="/cart" passHref={true}>
                  <Icon
                    component={ShoppingCartIcon}
                    style={{ fontSize: "25px" }}
                  />
                </NextLink>
              )}
            </NoSsr>
          </div>
        </Toolbar>
      </AppBar>
      {title === "Home" ? (
        <div className={classes.main}>{children}</div>
      ) : (
        <Container className={classes.main}>{children}</Container>
      )}

      <footer className={classes.footer}>
        <Typography variant="h6" mt={2}>
          © 2023 Tous droits réservés.
        </Typography>
      </footer>
    </NoSsr>
  );
};

export default Layout;
