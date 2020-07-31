import React, {Component} from 'react';
import api from '../../../services/api';

class Disciplinas extends Component {
	state = {
		disciplinas: [],
	}


	handleNewDisciplina = async id =>{
		window.location.href ='/admin/disciplinaforms';
	} 
	handleEditDisciplina = async id =>{
		window.location.href ='/admin/disciplinaforms/'+id;
	} 
	handleDelete = async id =>{
		await api.delete('/disciplina/'+id+'/delete',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
		
	} 

	async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
			const response = await api.get('disciplina/list',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
			
			this.setState({disciplinas: response.data})
		}	
		
	}
	render() {
		return (
			<div className="table-responsive">
				<div className="cboth">
					<h3 className="fleft">Disciplinas</h3>
					<a href="#" onClick={() => this.handleNewDisciplina()} class="button button-3d button-rounded button-blue fright">Cadastrar nova disciplina</a>
					<br className="cboth"></br>
				</div>
				<table id="disciplinas" className="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Curso</th>
							<th>Materiais</th>
							<th>bibliografia</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
							{this.state.disciplinas.map(disciplina =>(
								<tr>
									<td>{disciplina.nome}</td>
									<td>{disciplina.cursoNome}</td>
									<td>{disciplina.materiais}</td>
									<td>{disciplina.bibliografia}</td>
									<td className="center">
										<a href="#" onClick={() => this.handleEditDisciplina(disciplina._id)}  ><i className="icon-pencil rightmargin10"></i></a>
										<a href="" onClick={() => this.handleDelete(disciplina._id)}><i className="icon-remove"></i></a>
									</td>
								</tr>
							)) }
							
					</tbody>
				</table>
			</div>
		);
	}
}


export default Disciplinas;
