const Professor = require('../models/Professor');

module.exports = {
    async index(req,res){
        const professor = await Professor.find().sort('-createAt');

        return res.json(professor);
    },
    async find(req,res){

        const professor = await Professor.findById(req.params.id);

        return res.json(professor);
    },
    async update(req,res){
        const {nome,  cpf, nascimento, sexo, email,telefone} = req.body;

        const professor = await Professor.findOneAndUpdate({_id: req.params.id}, {
            nome,            
            cpf, 
            nascimento, 
            sexo, 
            email,
            telefone
        }, {new: true})

        return res.json(professor);
    },
    async delete(req,res){
        await Professor.findByIdAndDelete(req.params.id);


        return res.json(Professor);
    },
    async deleteAll(req,res){
        await Professor.find().deleteMany(); 
       

        return res.json(Professor);

    },
    async create(req,res){
        
        const {nome, cpf, nascimento, sexo, email,telefone} = req.body;

        const professor = await Professor.create({
            nome,
            cpf, 
            nascimento, 
            sexo, 
            email,
            telefone
        })

        return res.json(professor);
    }
};