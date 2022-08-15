import { useState, useContext } from "react";
import FacturaContext from "../../FacturaContext";

export default function Modal (){
    const {facturaSeleccionada, setFacturaSeleccionada, notaSeleccionada, setNotaSeleccionada, showModal, setShowModal} = useContext(FacturaContext)
  const seguirAsignando = () =>{
    setFacturaSeleccionada([])
    setNotaSeleccionada([])
    setShowModal(false)
  }
  return (
    <>
      <button
        className={`bg-indigo-600 text-white px-5 py-2 my-2 rounded ${showModal? 'blur-lg': ''}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Asignar
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                <div className="px-5 py-5">
                    Nota de crédito asignada corrrectamente.
                    Factura Seleccionada: {facturaSeleccionada[3]}
                    Nota de crédito seleccionada: {notaSeleccionada[3]}
                </div>
                <div className="">
                  <button
                        className="bg-indigo-600 text-white px-5 py-2 my-2 rounded "
                        type="button"
                        onClick={seguirAsignando}
                    >
                        Seguir asignando
                    </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};