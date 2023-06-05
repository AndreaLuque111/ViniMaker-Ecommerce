import axios from "axios"
import mock from "../../src/components/mocks/products.json"

export async function productsData() {
  const products = mock
  return products;
 /*const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;*/
}
