import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import MeusDados from './pages/MeusDados';
import Admin from './pages/Admin/Index';
import ProfessoresForms from './pages/Admin/Professores/Form';
import AlunosForms from './pages/Admin/Alunos/Form';
import CursosForms from './pages/Admin/Cursos/Form';
import DisciplinasForms from './pages/Admin/Disciplinas/Form';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/admin/professoresforms/:id?" exact component={ProfessoresForms}/>
            <Route path="/admin/alunosforms/:id?" component={AlunosForms}/>
            <Route path="/admin/cursoforms/:id?" component={CursosForms}/>
            <Route path="/admin/disciplinaforms/:id?" component={DisciplinasForms}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/meusdados" exact component={MeusDados}/>
        </Switch>
    );
}

export default Routes;