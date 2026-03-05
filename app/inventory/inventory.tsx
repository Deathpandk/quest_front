import { useState, useEffect } from "react";
import { getInventory } from "app/backend/inventory";

export function Inventory() {
  const [items, setItems] = useState({ results: [], page: 1 });

  useEffect(() => getInventory(setItems), []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1> Inventario </h1>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav>
            <ul>
              {items.results.map((item) => (
                <li
                  key={item.id}
                  className="rounded-3xl mt-3 border border-gray-200 p-6 dark:border-gray-700 space-y-4"
                >
                  <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                    {item.name}
                  </p>
                  <hr />
                  {item.variations.map((variation) => (
                    <p
                      className="leading-6 text-gray-700 dark:text-gray-200 text-center"
                      key={variation.id}
                    >
                      {variation.name} {variation.inventory}
                    </p>
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
