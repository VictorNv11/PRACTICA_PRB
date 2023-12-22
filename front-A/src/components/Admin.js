import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Admin() {

  const [cliente, setCliente ]= useState ([])

  const loadClientes = async() =>{
    const res = await fetch('http://localhost:4600/clientes')
    const data = await res.json()
    setCliente(data)
  }
  useEffect(() => {
    loadClientes()
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4600/clientes/${id}`);
      
      console.log(response);
  
      if (response.status === 200) {
        console.log('Cliente eliminado con éxito');
        // Puedes realizar acciones adicionales después de la eliminación si es necesario
      } else {
        console.error('Error al eliminar el cliente:', response.statusText);
        // Puedes manejar el error de acuerdo a tus necesidades
      }
    } catch (error) {
      console.error('Error en la solicitud DELETE:', error.message);
      // Puedes manejar errores de red u otros errores aquí
    }
  };
  

  return (
  <>
  <h1>Admin</h1>
  {
    cliente.map(clientes =>
      <div className="card container"  style={{ marginBottom: '0.8rem', backgroundColor: 'aliceblue' }}>
        <div className="card-body" style={{display:'flex', justifyContent:'space-between'}}>
            <br/>
            {clientes.nombre}
            <br/>
            {clientes.apellido}
            <br/>
            {clientes.fecha_nacimiento}
            <br/>
            {clientes.identificacion}
            <br/>
            {clientes.ciudad}
            <br/>
            {clientes.email}
            <br/>
            {clientes.telefono}
            <br/> 
            {clientes.ocupacion}
            <br/>
            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-primary" type="button" onClick={() => console.log('Editando')}>Editar</button>
              <button className="btn btn-danger" style={{marginLeft:'1rem'}} type="button" onClick={() => handleDelete(cliente.id)}>Eliminar</button>
            </div>

       
      </div>
    </div>
    
    )}
  </>
  )
}
