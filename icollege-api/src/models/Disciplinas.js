const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cursoId:  {
        type: String,
    },
    cursoNome:  {
        type: String,
    },
    materiais: {
        type: String,
    },
    bibliografia: {
        type: String,
    },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);