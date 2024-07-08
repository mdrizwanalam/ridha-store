import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import { connect } from 'react-redux';
import { fetchData } from '../store/actions';

const ProductPage = ({ fetchData, data, loading, error }) => {

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // const updateProductsData = () =>{
  //   setShowProductsData((prevGoals) => {
  //     const updatedProducts = [...prevGoals];
  //     updatedProducts.sort(function(a, b){return a.price-b.price});
  //     console.log("updatedProducts",updatedProducts);
  //     return updatedProducts;
  //   });
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // user profile API hit
  // const getProductsData = () => {
  //   getProducts()
  //     .then((resp) => {
  //       let respData = resp.data;
  //       setProducts(respData.slice(1, 12));
  //       setShowProductsData(respData.slice(1, 12));
  //     })
  //     .catch((err) => console.log("errr", err));
  // };

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
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
