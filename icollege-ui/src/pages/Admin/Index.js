import React, {Component} from 'react';

import Alunos from './Alunos/Index';
import Professores from './Professores/Index';
import Cursos from './Cursos/Index';
import Disciplinas from './Disciplinas/Index';

class Admin extends Component {

    
	handleLogout = e =>{
		localStorage.setItem('token', "")
        localStorage.setItem('cpf', "")
        window.location.href ='/login'
	}
    render() {
    return (
        <section id="content">

            <div className="content-wrap">

                <div className="container clearfix">

                    <div className="row clearfix">

                        <div className="col-md-12">

                            <div className="heading-block noborder">
                                <h3>iCollege</h3>
                            </div>

                            <div className="clear"></div>

                            <div className="row clearfix">

                                <div className="col-lg-12">

                                    <div className="row clearfix tabs tabs-alt clearfix" id="tabs-profile">

                                        <div className="col-lg-9">

                                            <div className="tab-container">

                                                <div className="tab-content clearfix" id="tab-alunos">
                                                    <Alunos />
                                                </div>
                                                <div className="tab-content clearfix" id="tab-professores">
                                                    <Professores />
                                                </div>
                                                <div className="tab-content clearfix" id="tab-curso">
                                                    <Cursos />
                                                </div>
                                                <div className="tab-content clearfix" id="tab-disciplinas">
                                                    <Disciplinas />
                                                </div>

                                            </div>
                                        </div>

                        
                                        <div className="col-lg-3">
                                            <ul className="list-group" style={{listStyle: "none"}}>
                                                <li><a href="#tab-alunos" className="list-group-item list-group-item-action clearfix">Alunos <i className="icon-user float-right"></i></a></li>
                                                <li><a href="#tab-professores" className="list-group-item list-group-item-action clearfix">Professores <i className="icon-user float-right"></i></a></li>
                                                <li><a href="#tab-sub" className="list-group-item list-group-item-action clearfix">Turmas <i className="icon-laptop2 float-right"></i></a></li>
                                                <li><a href="#tab-disciplinas" className="list-group-item list-group-item-action clearfix">Disciplinas <i className="icon-envelope2 float-right"></i></a></li>
                                                <li><a href="#tab-curso" className="list-group-item list-group-item-action clearfix">Cursos <i className="icon-envelope2 float-right"></i></a></li>
                                            </ul>
                                            <ul className="list-group" style={{listStyle: "none"}}>
                                                <li><a href="#" onClick={() => this.handleLogout()} className="list-group-item list-group-item-action clearfix">Logout <i className="icon-line2-logout float-right"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
        );
    }
}

export default Admin;