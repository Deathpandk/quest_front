import { get, patch } from "./common";

export function getProducts(setProducts, qParams) {
  get("/api/v1/products", qParams).then((response) => {
    setProducts(response.data);
  });
}

export function updateVariation(id, data, success) {
  patch(`/api/v1/variations/${id}/`, data).then((response) => {
    success(response);
  });
}
