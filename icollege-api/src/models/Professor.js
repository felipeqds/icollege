const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Professor', ProfessorSchema);