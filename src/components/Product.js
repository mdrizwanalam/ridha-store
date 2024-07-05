import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { getProducts } from "../services/productService";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  // user profile API hit
  const getProductsData = () => {
    getProducts()
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => console.log("errr", err));
  };
  console.log("products", products);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
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
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
