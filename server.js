const express = require ('express');
const mongoose = require ('mongoose');
const cors= require('cors');
const dotenv = require ('dotenv');
dotenv.config();

const app = express ();
app.use(cors());
app.use(express.json());

mongoose.connect (process.env.MONGO_URI)
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

const musicasRoutes = require('./routes/musicas');
const filmesRoutes = require('./routes/filmes');
const jogosRoutes = require('./routes/jogos');
const livrosRoutes = require('./routes/livros');
const seriesRoutes = require('./routes/series');

app.use('/musicas', musicasRoutes);
app.use('/filmes', filmesRoutes);
app.use('/jogos', jogosRoutes);
app.use('/livros', livrosRoutes);
app.use('/series', seriesRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

