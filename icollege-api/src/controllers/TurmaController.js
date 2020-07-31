const Turma = require('../models/Turma');

module.exports = {
    async index(req,res){
        const turma = await Turma.find().sort('-createAt');

        return res.json(turma);
    },
    async update(req,res){

        const turma = await turma.findById(req.params.id);

        return res.json(turma);
    },
    async delete(req,res){
        await Turma.findByIdAndDelete(req.params.id);

        await Turma.save();

        return res.json(Turma);
    },
    async deleteAll(req,res){
        await Turma.find().remove(); 
       
        await Turma.save();

        return res.json(Turma);

    },
    async create(req,res){
        
        const {codigo, disciplina, professor, turno, dataInicio, nVagas} = req.body;

        const turma = await Turma.create({
            codigo,
            disciplina,
            professor, 
            turno, 
            dataInicio, 
            nVagas
        })

        return res.json(turma);
    }
};