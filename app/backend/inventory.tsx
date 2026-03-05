import { get } from "./common";

export function getInventory(setItems) {
  get("/api/v1/inventory").then((response) => {
    setItems(response.data);
  });
}
