import { get } from "./common";

export function getProducts(setProducts, qParams) {
  get("/api/v1/products", qParams).then((response) => {
    setProducts(response.data);
  });
}
