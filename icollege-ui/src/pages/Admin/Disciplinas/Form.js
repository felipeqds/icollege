import React, {Component} from 'react';

import api from '../../../services/api';
// import { Container } from './styles';

class Alunos extends Component {
    state = {
		cursos: [],
		_id: '',
		nome: '',
        cursoId: '',
        cursoNome: '',
		materiais: '',
		bibliografia: '',
    }
    
    handleSubmit = async e =>{
		e.preventDefault();
		try{
            
            if(this.props.match.params.id === undefined) {
                await api.post('/disciplina/create',{
                    nome: this.state.nome,
                    cursoId: this.state.cursoId,
                    cursoNome: this.state.cursoNome,
                    materiais: this.state.materiais,
                    bibliografia: this.state.bibliografia,
                },{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                window.location.href ='/admin'
            }else{
                await api.put('disciplina/update/'+this.props.match.params.id, {
                    nome: this.state.nome,
                    cursoId: this.state.cursoId,
                    cursoNome: this.state.cursoNome,
                    materiais: this.state.materiais,
                    bibliografia: this.state.bibliografia,
                },{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                window.location.href ='/admin'
            }     
			
		}catch(err){
		}
				
	}
	handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
            if(this.props.match.params.id !== undefined){
                const response = await api.get('disciplina/'+this.props.match.params.id,{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                this.setState({_id: response.data._id})
                this.setState({nome: response.data.nome})
                this.setState({cursoId: response.data.cursoId})
                this.setState({cursoNome: response.data.cursoNome})
                this.setState({materiais: response.data.materiais})
                this.setState({bibliografia: response.data.bibliografia})
           
            }
            const responseCursos = await api.get('curso/list',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });       
            
            this.setState({cursos: responseCursos.data})
		}	
		
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
                                    <form onSubmit={this.handleSubmit}>
                                        <input onChange={this.handleChange} type="hidden" value={this.state._id} id="_id" name="_id"></input>
                                        <div class="form-group row">
                                            <div className="col-12">
                                                <label for="text" >Nome:</label>
                                                <input onChange={this.handleChange} type="text" value={this.state.nome} class="form-control" id="nome" name="nome" placeholder="Nome"/>
                                            </div>
                                        </div>
                                        <div class="form-group row ">
                                            <div className="col-12">
                                                <label for="template-contactform-subject">Curso:  </label>
                                                <select className="sm-form-control" value={this.state.cursoId} onChange={this.handleChange} id="cursoId" name="cursoId">
                                                <option value="">Selecione um curso</option>
                                                    {this.state.cursos.map(curso =>(
                                                        <option value={curso._id}>{curso.nome}</option>
                                                    )) }
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row ">
                                            <div className="col-12">
                                                <label for="template-contactform-subject">Materiais:  </label>
                                                <textarea onChange={this.handleChange}  type="text" value={this.state.materiais} class="form-control" id="materiais" name="materiais"/>
                                            </div>
                                        </div>

                                        <div class="form-group row ">
                                            <div className="col-12">
                                                <label for="template-contactform-subject">Bibliografia:  </label>
                                                <textarea onChange={this.handleChange} type="text" value={this.state.bibliografia} class="form-control" id="bibliografia" name="bibliografia" />
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Salvar</button>
                                        </div>
                                    </form>
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


export default Alunos;
