import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "@/utils/styles";
import NextLink from "next/link";
import db from "@/utils/db";
import Product from "@/models/Product";
import { CardAction } from "@/store/actions/cardAction";
import axios from "axios";
import classes from "../styles/style.module.css"

export default function Home(props) {
  const { products } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  console.log(products);
 

  const addToCartHandler = async (product) => {
    const {data} = await axios.get(`/api/products/${product._id}`);
   
    // check si le produit n'est pas en rupteur de stock
    if(data.countInStock <=0) {
      window.alert("Produit en rupture de stock");
    }
    const existItem = state.cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if(data.countInStock < quantity) {
      window.alert("Produit en rupture de stock");
      return;
    }
    dispatch(CardAction({ ...product,quantity}));
  };
  return (
    <>
      <Layout>
        <div>
          <h1>Nos T-Shirts </h1>
         
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();

  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
