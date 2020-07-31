import React, {Component} from 'react';
import api from '../../../services/api';

class Cursos extends Component {
	state = {
		cursos: [],
		_id: '',
		nome: '',
		qtdDisciplinas: '',
	}
	
	handleNewCurso = async id =>{
		window.location.href ='/admin/cursoforms';
	} 
	handleEditCurso = async id =>{
		window.location.href ='/admin/cursoforms/'+id;
	} 

	handleDelete = async id =>{
		await api.delete('/curso/'+id+'/delete',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
		
	} 

	async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
			const response = await api.get('curso/list',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
			
			this.setState({cursos: response.data})
		}	
		
	}
	render() {
		return (
			<div className="table-responsive">
				<div className="cboth">
					<h3 className="fleft">Cursos</h3>
					<a href="#" onClick={() => this.handleNewCurso()}  class="button button-3d button-rounded button-blue fright">Cadastrar novo curso</a>
					<br className="cboth"></br>
				</div>
				<table id="cursos" className="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Quantidade de Disciplinas</th>
							
							<th></th>
						</tr>
					</thead>
					<tbody>
							{this.state.cursos.map(curso =>(
								<tr>
									<td>{curso.nome}</td>
									<td>{curso.qtdDisciplinas}</td>
									<td className="center">
										<a href="#" onClick={() => this.handleEditCurso(curso._id)} ><i className="icon-pencil rightmargin10"></i></a>
										<a href="" onClick={() => this.handleDelete(curso._id)}><i className="icon-remove"></i></a>
									</td>
								</tr>
							)) }
							
					</tbody>
				</table>
			</div>
		);
	}
}


export default Cursos;
