import express from 'express';
import textsRouter from './routes/text';

const { dbConnect } = require('./config/mongo')

const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pigned here!!');
    res.send('pong');
});

app.use('/api/texts', textsRouter)
dbConnect()
app.listen(PORT, () => {
    console.log(`Server running oin port ${PORT}`);
});