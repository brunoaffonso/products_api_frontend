import axios from 'axios';

const ipBackend = 'http://localhost:8001/products/';

export async function getProductsData() {
  const response = await axios.get(ipBackend);
  return response.data;
}

export async function createProduct(value) {
  const response = await axios.post(ipBackend, value);
  return response.data;
}

export async function updateProduct(id, value) {
  const response = await axios.put(`${ipBackend}${id}`, value);
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axios.delete(`${ipBackend}${id}`);
  return response.data;
}
