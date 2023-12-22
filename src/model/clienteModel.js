const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    numDoc: {
        type: Number,
        required: [true, "El numero de documento es requerido"],
        unique: true,
        primaryKey: true
    },
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        unique: true
    },
    lastname: {
        type: String,
        required: [true, "El apellido es requerido"],
        unique: true
    },
    birthdate: {
        type: Date,
        required: [true, "La fecha de nacimiento es requerida"],
        unique: true
    },
    city: {
        type: String,
        required: [true, "La ciudad es requerida"],
        unique: true,
        enum: ['Bogotá', 'Medellín', 'Barranquilla', 'Bucaramanga']
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, "El telefono es requerido"],
        unique: true,
        maxlength: 10
    },
    ocupation: {
        type: String,
        required: [true, "La ocupacion es requerida"],
        unique: true
    }   
})
module.exports = mongoose.model('Cliente', ClienteSchema);

