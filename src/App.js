import ListaFactura from './components/ListaFactura/ListaFactura';
import './App.css';
import { useState, useEffect } from 'react';
import receivedInvoices from './data';
import FacturaContext from './FacturaContext';
import ListaNota from './components/ListaNota/ListaNota';
import Modal from './components/Modal/Modal';

export default function App() {
  const [facturaSeleccionada, setFacturaSeleccionada] = useState([])
  const [notaSeleccionada, setNotaSeleccionada] = useState([])
  const [showModal, setShowModal] = useState(false);
  // tuve problemas de CORS para acceder al endpoint así que estoy simulando el get con un archivo data.js

  const facturas = receivedInvoices.filter((d) => d.type === 'received')
  const notasDeCredito = receivedInvoices.filter((d) => d.type === 'credit_note')
  
  return (
    <div className="App">
      <FacturaContext.Provider value={{facturaSeleccionada, setFacturaSeleccionada, notaSeleccionada, setNotaSeleccionada, showModal, setShowModal}}>
        {facturas && 
          <div className={`flex flex-col items-center ${showModal? 'blur-lg': ''}`}>
          <h2 className=' my-2'>Seleccione una factura</h2>
          <ListaFactura data={facturas}/>
          </div>
        }
        {
          facturaSeleccionada.length>0 &&
          <div className={`flex flex-col items-center ${showModal? 'blur-lg': ''}`}>
            <h2 className=' my-2'>Seleccione una nota de crédito</h2>
            <ListaNota data={notasDeCredito}/>
          </div>
        }
        {
          notaSeleccionada.length>0 && 
          <Modal/>
        }
      </FacturaContext.Provider>
    </div>
  );
}

