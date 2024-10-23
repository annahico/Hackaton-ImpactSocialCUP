const mongoose = require('mongoose');

const participanteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    entradasCompradas: { type: Number, default: 1 },
});

module.exports = mongoose.model('Participante', participanteSchema);
