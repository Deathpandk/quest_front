import { get, post } from "./common";

export function getInventory(setItems) {
  get("/api/v1/inventory/").then((response) => {
    setItems(response.data);
  });
}

export function createChanges(data, success) {
  post("/api/v1/inventory/change/", data).then((response) => {
    success();
  });
}
