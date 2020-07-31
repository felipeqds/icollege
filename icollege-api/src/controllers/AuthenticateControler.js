const Aluno = require('../models/Aluno');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {    
    async authenticate(req,res){
        const {codigo, cpf} = req.body;

        const aluno = await Aluno.findOne({ codigo }).select('+cpf');

        if(!aluno)
            return res.status(400).send({ error: 'Usuario nao encontrado' });

        
        if(await parseInt(cpf) != parseInt(aluno.cpf))
            return res.status(400).send({ error: 'Cpf invalido' });


        const token = jwt.sign({ cpf : aluno.cpf }, authConfig.secret, {
            expiresIn: 86400,
        });   
        console.log(aluno);
        return res.send({ cpf, token });

    }
};