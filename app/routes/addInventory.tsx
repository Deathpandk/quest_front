import type { Route } from "./+types/home";
import { AddInventory } from "../inventory/addInventory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <AddInventory />;
}
