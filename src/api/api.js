import axios from 'axios';

const baseURL = 'http://localhost:8001/products/';

export async function getProductsData() {
  const response = await axios.get(baseURL);
  return response.data;
}

export async function createProduct(value) {
  const response = await axios.post(baseURL, value);
  return response.data;
}

export async function updateProduct(id, value) {
  const response = await axios.put(`${baseURL}${id}`, value);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axios.delete(`${baseURL}${id}`);
  return response.data;
}
