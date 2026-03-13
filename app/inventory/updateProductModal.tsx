import { useState } from "react";
import { updateVariation } from "app/backend/products";

export function UpdateProductModal({ variation, recall }) {
  const [variationForm, setVariationForm] = useState({});

  const saveChanges = () => {
    updateVariation(variation.id, variationForm, (response) => {
      recall();
      setVariationForm({});
      alert("Guardado");
    });
  };

  const formChange = (event) => {
    setVariationForm({
      ...variationForm,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <span>
      <button
        command="show-modal"
        commandfor={variation.id}
        className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
      >
        {variation.name}
      </button>
      <el-dialog>
        <dialog
          id={variation.id}
          aria-labelledby="dialog-title"
          className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
        >
          <el-dialog-backdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

          <div
            tabIndex="0"
            className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
          >
            <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      id="dialog-title"
                      className="text-base font-semibold text-white"
                    >
                      Editar Variacion
                    </h3>
                    <div className="mt-2">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="price"
                          className="block text-sm/6 font-medium text-white"
                        >
                          Precio
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                              $
                            </div>
                            <input
                              onChange={formChange}
                              id="price"
                              type="text"
                              name="price"
                              className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={saveChanges}
                  type="button"
                  command="close"
                  commandfor={variation.id}
                  className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  command="close"
                  commandfor={variation.id}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </span>
  );
}
