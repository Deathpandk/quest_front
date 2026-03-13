import { useState, useEffect } from "react";
import { getInventory } from "app/backend/inventory";
import { NavLink } from "react-router";
import { UpdateProductModal } from "./updateProductModal";

export function Inventory() {
  const [items, setItems] = useState({ results: [], page: 1 });

  const callGetInventory = () => {
    getInventory(setItems);
  };

  useEffect(callGetInventory, []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1> Inventario </h1>
        </header>
        <header className="flex flex-col items-center gap-9">
          <NavLink
            to="/inventario/agregar"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar Inventario
          </NavLink>
        </header>
        <div className="max-w-[700px] w-full space-y-6 px-4">
          <nav>
            <ul>
              {items.results.map((item, i) => (
                <li
                  key={i}
                  className="rounded-3xl mt-3 border border-gray-200 p-6 dark:border-gray-700 space-y-4"
                >
                  <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                    {item.name}
                  </p>
                  <hr />
                  {item.variations.map((variation, i) => (
                    <span key={i}>
                      <UpdateProductModal
                        key={i}
                        variation={variation}
                        recall={callGetInventory}
                      />
                      : {variation.inventory} Disponibles ${variation.price}
                      <br />
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
