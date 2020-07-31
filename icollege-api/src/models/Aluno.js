const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    codigo:  {
        type: String,
        required: true,
    },
    cpf:  {
        type: String,
        required: true,
    },
    nascimento:  {
        type: Date,
        required: true,
    },
    sexo:  {
        type: String,
        required: true,
    },
    email:  {
        type: String,
        required: true,
    },
    telefone:  {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Aluno', AlunoSchema);