const pool = require('../db');

const getClientes = async (req, res) => {
  try {
    const  allClientes= await pool.query('SELECT * FROM cliente_tbl') 
   
    res.json(allClientes.rows)
   
  } catch (error) {

    console.log(error.message);
  }
 
}

const getCliente = async (req, res) => {
    try {
      const { id } = req.params;	
    const reusult = await pool.query('SELECT * FROM cliente_tbl WHERE id = $1', [id]) 
    
    if ( reusult.rows.length == 0) 
    return res.status(404).json({
    message: 'Cliente no encontrado'});

    res.json(reusult.rows[0]);  

    } catch (error) {
    console.log(error.message);  
    }
  }

  const postCliente = async (req, res) => {
    try {
      const { nombre, apellido, fecha_nacimiento, identificacion, ciudad, email, telefono, ocupacion } = req.body;
  
      const result = await pool.query('INSERT INTO cliente_tbl (nombre, apellido, fecha_nacimiento, identificacion, ciudad, email, telefono, ocupacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
        nombre,
        apellido,
        fecha_nacimiento,
        identificacion,
        ciudad,
        email,
        telefono,
        ocupacion
      ]);
  
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: `Error encontrado: ${error.message}`
      });
    }
  };


//NO TOCAR LOS DE ARRIBAAAAAA----------------------------------------------------------------------- YA FUNCIONA//



const deleteCliente = async (req, res) => {

  const { id } = req.params;
  const result = await pool.query("DELETE FROM cliente_tbl WHERE id = $1", [id]);
  if (result.rowCount === 0)
  return res.status(404).json({
  message: "cliente no encontrado"
  });
  return res.sendStatus(204);
}


const putCliente = async (req, res) => {
  
  try {
    const { id } = req.params;
  const {nombre, apellido, fecha_nacimiento, identificacion , ciudad, email, telefono, ocupacion } = req.body;

  const reusult = await  pool.query(
    "UPDATE cliente_tbl SET nombre = $1, apellido = $2, fecha_nacimiento = $3, identificacion  = $4,ciudad = $5, email = $6, telefono = $7, ocupacion = $8 WHERE id = $9 RETURNING *",
    [nombre, 
    apellido,
    fecha_nacimiento,
    identificacion ,
    ciudad,
    email,
    telefono,
    ocupacion,
    id]   
    );
    if (reusult.rowCount === 0) 
    return res.status(404).json({
    message: "cliente no encontrado"  
    });
    return res.json(reusult.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
  }

module.exports = {
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}
