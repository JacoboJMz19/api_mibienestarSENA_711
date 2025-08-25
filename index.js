const express = require('express');
const { sequelize } = require('./models'); // ajusta según tu carpeta
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

// Conectar BD y levantar servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la BD establecida con éxito.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar con la BD:', err));
