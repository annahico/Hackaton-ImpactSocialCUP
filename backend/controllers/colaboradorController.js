const Colaborador = require('../models/Colaborador');

// Crear nuevo colaborador
exports.crearColaborador = async (req, res) => {
    try {
        const nuevoColaborador = new Colaborador(req.body);
        await nuevoColaborador.save();
        res.json(nuevoColaborador);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear colaborador' });
    }
};

// Obtener colaboradores
exports.obtenerColaboradores = async (req, res) => {
    try {
        const colaboradores = await Colaborador.find();
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener colaboradores' });
    }
};
