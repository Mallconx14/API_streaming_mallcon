const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const musicaSchema = new mongoose.Schema({
    titulo: String,
    artista: String,
    genero: String,
    ano: Number,
    duracao: Number,
    disponivel: Boolean,
    detalhes: Object
});

const Musica = mongoose.model('musicas', musicaSchema);

router.get('/', async(req, res) => {
    try {
        const musicas = await Musica.find();
        res.status(200).json(musicas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router