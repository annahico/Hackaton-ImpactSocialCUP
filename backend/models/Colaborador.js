const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: String,
    empresa: String,
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
