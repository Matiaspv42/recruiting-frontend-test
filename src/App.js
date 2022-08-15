import ListaFactura from './components/ListaFactura/ListaFactura';
import './App.css';
import { useState, useEffect } from 'react';
import receivedInvoices from './data';
import FacturaContext from './FacturaContext';
import ListaNota from './components/ListaNota/ListaNota';

export default function App() {
  const [facturaSeleccionada, setFacturaSeleccionada] = useState([])
  const [notaSeleccionada, setNotaSeleccionada] = useState([])
  // tuve problemas de CORS para acceder al endpoint así que estoy simulando el get con un archivo data.js

  const facturas = receivedInvoices.filter((d) => d.type === 'received')
  const notasDeCredito = receivedInvoices.filter((d) => d.type === 'credit_note')
  
  return (
    <div className="App">
      <FacturaContext.Provider value={{facturaSeleccionada, setFacturaSeleccionada, notaSeleccionada, setNotaSeleccionada}}>
        {facturas && 
          <div className='flex flex-col items-center'>
          <h2 className=''>Seleccione una factura</h2>
          <ListaFactura data={facturas}/>
          </div>
        }
        {
          facturaSeleccionada.length>0 &&
          <div className='flex flex-col items-center'>
            <h2 className=''>Seleccione una nota de crédito</h2>
            <ListaNota data={facturas}/>
          </div>
        }
        {
          notaSeleccionada.length>0 && 
          <button className='bg-sky-800 text-white rounded'>Asignar</button>
        }
      </FacturaContext.Provider>
    </div>
  );
}

