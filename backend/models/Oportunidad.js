const mongoose = require('mongoose');

const oportunidadSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    estado: { type: String, enum: ['nueva', 'en proceso', 'cerrada'], default: 'nueva' },
    descripcion: String,
});

module.exports = mongoose.model('Oportunidad', oportunidadSchema);
