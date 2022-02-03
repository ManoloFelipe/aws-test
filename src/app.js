const express = require('express');
const cors = require('cors');
const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send('Hola Mundo!!!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));