import React, {Component} from 'react';

import api from '../../../services/api';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
// import { Container } from './styles';

class Alunos extends Component {
    state = {
		_id: '',
		nome: '',
        cpf: '',
        codigo: '',
		nascimento: '',
		sexo: '',
		email: '',
		telefone: '',
    }
    
    handleSubmit = async e =>{
		e.preventDefault();
		try{
            
            if(this.props.match.params.id === undefined) {
                await api.post('/aluno/create',{
                    nome: this.state.nome,
                    cpf: this.state.cpf,
                    codigo: this.state.codigo,
                    nascimento: this.state.nascimento,
                    sexo: this.state.sexo,
                    email: this.state.email,
                    telefone: this.state.telefone,
                },{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                window.location.href ='/admin'
            }else{
                await api.put('aluno/update/'+this.props.match.params.id, {
                    nome: this.state.nome,
                    cpf: this.state.cpf,
                    codigo: this.state.codigo,
                    nascimento: this.state.nascimento,
                    sexo: this.state.sexo,
                    email: this.state.email,
                    telefone: this.state.telefone,
                },{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                window.location.href ='/admin'
            }     
			
		}catch(err){
		}
				
	}
	handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
        
    }

    async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
            if(this.props.match.params.id !== undefined){
                const response = await api.get('aluno/'+this.props.match.params.id,{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                const teste = response.data.nascimento;
                const teste2 = teste.toString().split('T');
                const firstDate = parseISO(teste2[0]);
                response.data.nascimento = format(firstDate,"dd'/'MM'/'yyyy");
                this.setState({_id: response.data._id})
                this.setState({nome: response.data.nome})
                this.setState({codigo: response.data.codigo})
                this.setState({cpf: response.data.cpf})
                this.setState({nascimento: response.data.nascimento})
                this.setState({sexo: response.data.sexo})
                this.setState({email: response.data.email})
                this.setState({telefone: response.data.telefone})
            }
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
                                            <div className="col-6">
                                                <label for="template-contactform-subject">Código: <small>*</small></label>
                                                <input onChange={this.handleChange}   type="text" value={this.state.codigo} class="form-control" id="codigo" name="codigo" placeholder="Código"/>
                                            </div>

                                            <div className="col-6">
                                                <label for="sub">CPF:</label>
                                                <input onChange={this.handleChange}  type="text" value={this.state.cpf} class="form-control" id="cpf" name="cpf" placeholder="CPF"/>
                                            </div>
                                        </div>

                                        <div class="form-group row ">
                                            <div className="col-6">
                                                <label for="template-contactform-subject">Nascimento: <small>*</small></label>
                                                <input onChange={this.handleChange}  type="text" value={this.state.nascimento} class="form-control" id="nascimento" name="nascimento" placeholder="Nascimento"/>
                                            </div>

                                            <div className="col-6">
                                                <label for="sub">Sexo:</label>
                                                <input onChange={this.handleChange}  type="text" value={this.state.sexo} class="form-control" id="sexo" name="sexo" placeholder="Sexo"/>
                                            </div>
                                        </div>

                                        <div class="form-group row ">
                                            <div className="col-6">
                                                <label for="template-contactform-subject">Email: <small>*</small></label>
                                                <input onChange={this.handleChange}  type="text" value={this.state.email} class="form-control" id="email" name="email" placeholder="Email"/>
                                            </div>

                                            <div className="col-6">
                                                <label for="sub">Telefone:</label>
                                                <input onChange={this.handleChange}  type="text" value={this.state.telefone} class="form-control" id="telefone" name="telefone" placeholder="Telefone"/>
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
