const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    qtdDisciplinas: {
        type: Number,
        required: false,
        default: 0,
    },
});

module.exports = mongoose.model('Curso', CursoSchema);