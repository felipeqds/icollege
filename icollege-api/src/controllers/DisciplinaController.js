const Disciplina = require('../models/Disciplinas');
const Cursos = require('../models/Curso');

module.exports = {
    async index(req,res){
        const disciplina = await Disciplina.find().sort('-createAt');

        return res.json(disciplina);
    },
    async find(req,res){

        const disciplina = await Disciplina.findById(req.params.id);

        return res.json(disciplina);
    },
    async update(req,res){
        const {nome,cursoId,cursoNome, materiais, bibliografia} = req.body;

        //Pegar id curso do registro antigo
        const disciplinaAntiga = await Disciplina.findById(req.params.id);
        const curso = await Cursos.findById(disciplinaAntiga.cursoId);
        await Cursos.findOneAndUpdate({_id: disciplinaAntiga.cursoId}, {
            qtdDisciplinas: curso.qtdDisciplinas - 1
        }, {new: true})

        //add 1 no curso novo
        const curso2 = await Cursos.findById(cursoId);
        await Cursos.findOneAndUpdate({_id: cursoId}, {
            qtdDisciplinas: curso2.qtdDisciplinas + 1
        }, {new: true})

        const disciplina = await Disciplina.findOneAndUpdate({_id: req.params.id}, {
            nome,
            cursoId,
            cursoNome: curso2.nome,
            materiais,
            bibliografia
        }, {new: true})

        return res.json(disciplina);
    },
    async delete(req,res){

        const disciplina = await Disciplina.findById(req.params.id);

        const curso = await Cursos.findById(disciplina.cursoId);
        await Cursos.findOneAndUpdate({_id: disciplina.cursoId}, {
            qtdDisciplinas: curso.qtdDisciplinas - 1
        }, {new: true})

        await Disciplina.findByIdAndDelete(req.params.id);

        return res.json(Disciplina);
    },
    async deleteAll(req,res){
        await Disciplina.find().deleteMany(); 
       

        return res.json(Disciplina);

    },
    async create(req,res){
        
        const {nome, cursoId, materiais, bibliografia} = req.body;
        const curso = await Cursos.findById(cursoId);
        await Cursos.findOneAndUpdate({_id: cursoId}, {
            qtdDisciplinas: curso.qtdDisciplinas + 1
        }, {new: true})

        const disciplina = await Disciplina.create({
            nome,
            cursoId,
            cursoNome: curso.nome,
            materiais,
            bibliografia
        })

        return res.json(disciplina);
    }
};