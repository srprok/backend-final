const app = require('./server/server')
require('dotenv').config();
require('./database/db');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})