import { useEffect, useState, useContext } from 'react'
import receivedInvoices from '../../data'
import FacturaContext from '../../FacturaContext'
export default function ListaFactura (props){
    const facturas = props.data
    const {facturaSeleccionada, setFacturaSeleccionada} = useContext(FacturaContext)

    const selectFactura = ({target}) =>{
    const values = target.value.split(',')
    setFacturaSeleccionada([...values])
    }

    return(
        <ul className='border-solid border-gray border w-5/6'>
           {facturas.map((factura, index) => (
            <li key={factura.id} className="rounded border-gray border-solid border"> 
            <label htmlFor="" className='flex justify-around'>
                <span>
                <input type="radio" className='rounded' name='facturaAnswer' 
                onClick={selectFactura}
                value={`${factura.amount},${factura.currency},${factura.organization_id},${factura.id} `}
                />{`inv_${index+1}`} <span className='text-gray-500'> ({factura.organization_id})</span></span>
                <span className='monto'> {factura.amount} {factura.currency} </span>
                <span className='estado text-gray-500'>{factura.type === "received"? 'Recibido' : `inv_${index}`}</span>
            </label> 
            </li>
           ))}
        </ul>
    )
}