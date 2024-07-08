import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cart/cart.action";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.cart);

  const remove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: 20,
        maxWidth: 600,
        margin: "auto",
        marginTop: 20,
        backgroundColor: "aqua",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>
      <Link to="/">GO BACK</Link>
      {data.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={`$${item.price.toFixed(2)}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => remove(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default Cart;
