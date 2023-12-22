const express = require('express')
const {Router} = require('express')
const {getClientes, getCliente, postCliente, putCliente, deleteCliente,} = require('../controller/clienteController')
const pool = require('../db')

const router = Router()

router.get('/clientes', getClientes)

router.get('/clientes/:id', getCliente)

router.post('/cliente', postCliente)

router.delete('/clientes/:id', deleteCliente)

router.put('/clientes/:id', putCliente)
    


module.exports = router



//SELECCIONAR UN CLIENTE POR ID Y QUE PASE POR PARAMETRO
/*router.get('/:id', async (req, res) => { 
    const clienteId = req.params.id
        try{
            if(!mongoose.Types.ObjectId.isValid(clienteId)){
                return res.status(500).json({
                    success: false,
                    msg:  `id invalido`
                })
            }else{
                const cliente = await Cliente.findById(clienteId)
                console.log(cliente)
                if(!cliente){
                    res.status(404).json(
                        {
                            success: false,
                            msg:"No se encontro el cliente"
                        }
                    )
                }else{
                    return res.status(200).json(
                    {
                        success: true,
                        data: cliente
                    })
                }
            }
        }catch (error){
            res.status(500).json({
                success: false,
                msg: error.message
            })
        }

})

//CREAR UN CLIENTE
router.post('/', async (req, res) => {
    try{
        const newCliente = await Cliente.create(req.body)
        res.status(200).json({
            success: true,
            data: newCliente
        })
    }catch (error){
        res.status(500).json({
            success: false,
            msg: `error encontrado: ${error.message}`
        })
    }
})  
//ACTUALIZZAR CLIENTE POR ID
router.put('/:id', async (req, res)=>{
    const clienteId = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(clienteId)){
            
            return res.status(500).json({
                success: false,
                msg:  `id invalido`
            })
    }else{
            const clientes = await Clientes .findByIdAndUpdate
            (clienteId, req.body,
                {
                    new: true,
                })
                console.log(clientes)
                if(!clientes){
                    res.status(404).json(
                        {
                            success: false,
                            msg: "cliente no encontrado"
                        }
                    )
                }else{
                    return res.status(200).json(
                        {
                            success: true,
                            data: clientes 
                        })
                }
            }
        }catch(error){
            res.status(500).json({
                success: false,
                msg: error.message
            })
        }
})
// //ELIMINAR CLIENTE POR ID
// router.delete('/:id', async(req, res)=>{
//     clienteId = req.params.id
//     await Cliente.finByIdAndDelete(clienteId)
//     return res.json({
//         success: true,
//         data: []
//     })
// })*/