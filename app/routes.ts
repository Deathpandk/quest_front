import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/inventario", "routes/inventory.tsx"),
  route("/inventario/agregar", "routes/addInventory.tsx"),
] satisfies RouteConfig;
