const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    disciplina:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    },
    professor:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor'
    },
    turno:  {
        type: String,
        required: true,
    },
    dataInicio:  {
        type: Date,
        required: true,
    },
    nVagas:  {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Turma', TurmaSchema);