import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../store/product/product.action";
import { addToCart } from "../store/cart/cart.action";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);


  const addProduct = (payload) => {
    dispatch(addToCart(payload))
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("data", data);

  return (
    <Grid container spacing={3}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.images[0]}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.title}
              </Typography>
              <Typography variant="h6" color="textPrimary">
                ${product.price}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => addProduct(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductPage;
