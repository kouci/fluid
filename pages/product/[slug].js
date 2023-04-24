import Layout from "@/components/Layout";
import data from "@/utils/data";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  ListItem,
  Card,
  List,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useStyles from "@/utils/styles";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import db from "@/utils/db";
import Product from "@/models/Product";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { CardAction } from "@/store/actions/cardAction";
import classes from "../../styles/style.module.css"

const productScreen = (props) => {
  // state store
  const dispatch = useDispatch();
  const router = useRouter()
  const state = useSelector((state) => state.data);
 
  const {product} = props;
  const [word, setWord] = useState();
  

 
  
  const { slug } = router.query;
  /**
   *  pour récupérer les produits statiquement 
   * const product = data.products.find((e) => e.slug === slug);
  console.log(product);
   */

  const addToCartHandler = async () => {
    const {data} = await axios.get(`/api/products/${product._id}`);
   
   
    const existItem = state.cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if(data.countInStock < quantity) {
      window.alert("Le produit en rupture de stock");
    }
    dispatch(CardAction({...product,quantity}));
    router.push("/cart");
  }
  
  if (!product) {
    return <div>Produit non trouvé</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink className={classes.link} href="/" passHref>
          <Typography variant="h5">Retour</Typography>
        </NextLink>
        <div className={classes.containerDesc}>
          <div className={classes.cardDescImage}>
            <Image
              src={product.image}
              alt={product.name}
              style={{heigh: '100%'}}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div  className={classes.cardDesc} >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs aria-label="basic tabs example">
                <Tab label="Résumé" />
              </Tabs>
            </Box>
            <Typography className={classes.description} index={0}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <div className={classes.sectionPrice}>
              <Grid item>
                <Card>
                  <List>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography>Prix :</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>€ {product.price}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography>Statut:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>En stock</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Button fullWidth variant="contained" color="primary" onClick={addToCartHandler}>
                        Ajoter au panier
                      </Button>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default productScreen;

export async function getServerSideProps(context) {
  const {params} = context;
  const {slug} = params;
  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();

  return {
    props: {
      product: db.convertDocToObj(product)
    },
  };
}

