const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
require('dotenv').config();

app.use('/api/colaboradores', colaboradorRoutes);

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido al CRM de gestión de eventos');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
