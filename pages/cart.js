import Layout from "@/components/Layout";
import React from "react";
import { useSelector } from "react-redux";
import NextLink from "next/link";
import Image from "next/image";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
  NoSsr,
} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CardAction } from "@/store/actions/cardAction";
import { RemoveCardAction } from "@/store/actions/removeCardAction";
import { useRouter } from "next/router";

const CartScreen = () => {
  const router = useRouter();
  //redux store
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    console.log(quantity);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Rupture en stock");
      return;
    }
    // sinon on dispatch l'action d'ajout
    dispatch(CardAction({ ...item, quantity }));
  };

  const removeItemHandler = async (item) => {
    console.log(item);
    dispatch(RemoveCardAction(item));
  };

  const checkoutHandler = () => {
    router.push("/register");
  };

  return (
    <Layout title="Shopping Cart">
      <NoSsr>
        <Typography component="h2" variant="h2">
          Votre panier
        </Typography>
        {cartItems.length === 0 ? (
          <div>
            Pannier est vide.{" "}
            <NextLink href="/">Retourner à l'accueil</NextLink>
          </div>
        ) : (
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Nom de produit</TableCell>
                      <TableCell align="right">Quantité</TableCell>
                      <TableCell align="right">Prix</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>
                          <NextLink href={`/product/${item.slug}`} passHref>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            ></Image>
                          </NextLink>
                        </TableCell>

                        <TableCell>
                          <NextLink href={`/product/${item.slug}`} passHref>
                            <Typography>{item.name}</Typography>
                          </NextLink>
                        </TableCell>
                        <TableCell align="right">
                          <Select
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>
                                {x + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell align="right">${item.price}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => removeItemHandler(item)}
                          >
                            x
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h4">
                      Total ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      Produits) : {"  "}
                      {cartItems.reduce(
                        (a, c) => a + c.quantity * c.price,
                        0
                      )}{" "}
                      €
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={checkoutHandler}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Acheter
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        )}
      </NoSsr>
    </Layout>
  );
};

export default CartScreen;
