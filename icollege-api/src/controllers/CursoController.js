const Curso = require('../models/Curso');

module.exports = {
    async index(req,res){
        const curso = await Curso.find().sort('-createAt');

        return res.json(curso);
    },
    async find(req,res){

        const curso = await Curso.findById(req.params.id);

        return res.json(curso);
    },
    async update(req,res){
        const {nome,qtdDisciplinas} = req.body;
        const curso = await Curso.findOneAndUpdate({_id: req.params.id}, {
            nome,
            qtdDisciplinas
        }, {new: true})

        return res.json(curso);
    },
    async delete(req,res){
        await Curso.findByIdAndDelete(req.params.id);


        return res.json(Curso);
    },
    async deleteAll(req,res){
        await Curso.find().deleteMany(); 
       

        return res.json(Curso);

    },
    async create(req,res){
        
        const {nome,qtdDisciplinas} = req.body;

        const curso = await Curso.create({
            nome,
            qtdDisciplinas
        })

        return res.json(curso);

    }
};