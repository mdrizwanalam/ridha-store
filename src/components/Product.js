import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../store/product/product.action";
import { addToCart } from "../store/cart/cart.action";

const ProductPage = ({ fData }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  useEffect(() => {
    setFilteredData(applyFilter(data, fData));
  }, [data, fData]);

  const addProduct = (payload) => {
    dispatch(addToCart(payload));
  };

  const applyFilter = (data, filter) => {
    console.log("filter", filter);

    if (filter == "") {
      return data;
    }

    if (filter == "low_to_high") {
      return data.sort((a, b) => a.price - b.price);
    }

  };

  if (loading) {
    return (
      <div className="loading_container">
        <CircularProgress />;
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log("data", data);
  // console.log("filteredData", filteredData);

  return (
    <Grid container spacing={3} className="main_box">
      {filteredData.map((product) => (
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => addProduct(product)}
              >
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
