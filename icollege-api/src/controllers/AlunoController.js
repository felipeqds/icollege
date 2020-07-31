const Aluno = require('../models/Aluno');

module.exports = {
    async index(req,res){
        const aluno = await Aluno.find().sort('-createAt');
        
        return res.json(aluno);
    },
    async find(req,res){

        const aluno = await Aluno.findById(req.params.id);

        return res.json(aluno);
    },
    async findByCpf(req,res){

        const aluno = await Aluno.find({cpf: req.params.id})

        return res.json(aluno);
    },
    async update(req,res){
        const {nome, codigo, cpf, nascimento, sexo, email,telefone} = req.body;
        const aluno = await Aluno.findOneAndUpdate({_id: req.params.id}, {
            nome,
            codigo,
            cpf, 
            nascimento, 
            sexo, 
            email,
            telefone
        }, {new: true})

        return res.json(aluno);
    },
    async delete(req,res){
        await Aluno.findByIdAndDelete(req.params.id);

        return res.json(Aluno);
    },
    async deleteAll(req,res){
        await Aluno.find().deleteMany(); 
       

        return res.json(Aluno);

    },
    async create(req,res){
        
        const {nome, codigo, cpf, nascimento, sexo, email,telefone} = req.body;

        const aluno = await Aluno.create({
            nome,
            codigo,
            cpf, 
            nascimento, 
            sexo, 
            email,
            telefone
        })

        return res.json(aluno);
    }
};