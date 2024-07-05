import axios from "axios";

export const getProducts = (value) => {
  return axios({
    method: "GET",
    url: 'https://api.escuelajs.co/api/v1/products?sort=asc&filter=Clothes&page=1&limit=10',
    headers: {
      "Content-type": "application/json",
    },
  });
};
