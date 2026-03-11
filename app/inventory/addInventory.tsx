import { useState, useEffect } from "react";
import { getProducts } from "app/backend/products";

export function AddInventory() {
  const [products, setProducts] = useState({ results: [], page: 1 });
  const [qParams, setQParams] = useState({});
  const [inventoryChanges, setInventoryChanges] = useState({});

  useEffect(() => getProducts(setProducts, qParams), []);

  const search = () => {
    getProducts(setProducts, qParams);
  };

  const formChange = (event) => {
    setQParams({ ...qParams, [event.target.id]: event.target.value });
  };

  const addChange = (event) => {
    setInventoryChanges({
      ...inventoryChanges,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1> Agregar Inventario </h1>
        </header>
        <header className="flex flex-col items-center gap-9">
          <p>Nombre</p>
          <input
            id="search"
            onChange={formChange}
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 hover:border-gray-400"
          />
          <p>Atributos</p>
          <input
            id="keywords"
            onChange={formChange}
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 hover:border-gray-400"
          />
        </header>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button "
          onClick={search}
        >
          Buscar
        </button>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav>
            <ul>
              {products.results.map((item) => (
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
                      {variation.name}
                      <input
                        type="number"
                        id={variation.id}
                        onChange={addChange}
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 hover:border-gray-400"
                      />
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
