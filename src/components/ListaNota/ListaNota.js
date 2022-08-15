import { useEffect, useState, useContext } from 'react'
import receivedInvoices from '../../data'
import FacturaContext from '../../FacturaContext'
export default function ListaNota (props){
    const notas = props.data
    const {notaSeleccionada, setNotaSeleccionada} = useContext(FacturaContext)

    const selectNota = ({target}) =>{
    const values = target.value.split(',')
    setNotaSeleccionada([...values])
    }

    return(
        <ul className='border-solid border-gray border w-5/6'>
           {notas.map((nota, index) => (
            <li key={nota.id} className="rounded border-gray border-solid border"> 
            <label htmlFor="" className='flex justify-around'>
                <span>
                <input type="radio" className='rounded' name='notaAnswer' 
                onClick={selectNota}
                value={`${nota.amount},${nota.currency},${nota.organization_id},${nota.id} `}
                />{`inv_${index+1}`} <span className='text-gray-500'> ({nota.organization_id})</span></span>
                <span className='monto'> {nota.amount} {nota.currency} </span>
                <span className='estado text-gray-500'>{nota.type === "credit_note"? 'Recibido' : `inv_${index +1}`}</span>
            </label> 
            </li>
           ))}
        </ul>
    )
}