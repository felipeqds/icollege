const express = require('express');
const AlunoController = require('./controllers/AlunoController')
const ProfessorController = require('./controllers/ProfessorController')
const CursoController = require('./controllers/CursoController')
const DisciplinaController = require('./controllers/DisciplinaController')
const AuthenticateController = require('./controllers/AuthenticateControler')
const authMiddleware = require('./middlewares/auth');

var bodyParser = require('body-parser')
 
 
// create application/json parser
var jsonParser = bodyParser.json()

const routes = new express.Router();

//authenticate
routes.post('/login', jsonParser, AuthenticateController.authenticate);
 
routes.use(authMiddleware);

//Aluno
routes.get('/aluno/list', AlunoController.index);
routes.get('/aluno/:id', AlunoController.find);
routes.get('/alunobycpf/:id', AlunoController.findByCpf);
routes.put('/aluno/update/:id', jsonParser, AlunoController.update);
routes.post('/aluno/create', jsonParser, AlunoController.create);
routes.delete('/aluno/:id/delete', AlunoController.delete);
routes.delete('/aluno/deleteall', AlunoController.deleteAll);


//Professor
routes.get('/professor/list', ProfessorController.index);
routes.get('/professor/:id', ProfessorController.find);
routes.post('/professor/create', jsonParser, ProfessorController.create);
routes.put('/professor/update/:id', jsonParser, ProfessorController.update);
routes.delete('/professor/:id/delete', ProfessorController.delete);
routes.delete('/professor/deleteall', ProfessorController.deleteAll);

//Curso
routes.get('/curso/list', jsonParser, CursoController.index);
routes.get('/curso/:id', jsonParser, CursoController.find);
routes.put('/curso/update/:id', jsonParser, CursoController.update);
routes.post('/curso/create', jsonParser, CursoController.create);
routes.delete('/curso/:id/delete', jsonParser, CursoController.delete);
routes.delete('/curso/deleteall', jsonParser, CursoController.deleteAll);

//disciplina
routes.get('/disciplina/list', jsonParser, DisciplinaController.index);
routes.get('/disciplina/:id', jsonParser, DisciplinaController.find);
routes.put('/disciplina/update/:id', jsonParser, DisciplinaController.update);
routes.post('/disciplina/create', jsonParser, DisciplinaController.create);
routes.delete('/disciplina/:id/delete', jsonParser, DisciplinaController.delete);
routes.delete('/disciplina/deleteall', jsonParser, DisciplinaController.deleteAll);




module.exports = routes;