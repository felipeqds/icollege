import React, {Component} from 'react';
import api from '../../../services/api';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

class Professores extends Component {
	state = {
		professores: [],
		_id: '',
		nome: '',
		cpf: '',
		nascimento: '',
		sexo: '',
		email: '',
		telefone: '',
	}
	
	handleNewProfessor = async id =>{
		window.location.href ='/admin/professoresforms';
	} 
	handleEditProfessor = async id =>{
		window.location.href ='/admin/professoresforms/'+id;
	} 

	handleDelete = async id =>{
		await api.delete('/professor/'+id+'/delete',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
		
	} 

	async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
			const response = await api.get('professor/list',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
			response.data.forEach(professores => {
				const teste = professores.nascimento;
				const teste2 = teste.toString().split('T');
				const firstDate = parseISO(teste2[0]);
				professores.nascimento = format(firstDate,"dd'/'MM'/'yyyy");
			});
			this.setState({professores: response.data})
		}	
		
	}
	render() {
		return (
			<div className="table-responsive">
				<div className="cboth">
					<h3 className="fleft">Professores</h3>
					<a href="#" onClick={() => this.handleNewProfessor()}  class="button button-3d button-rounded button-blue fright">Cadastrar novo professor</a>
					<br className="cboth"></br>
				</div>
				<table id="professores" className="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>Nome</th>
							<th>CPF</th>
							<th>Data de Nascimento</th>
							<th>Sexo</th>
							<th>Email</th>
							<th>Telefone</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
							{this.state.professores.map(professores =>(
								<tr>
									<td>{professores.nome}</td>
									<td>{professores.cpf}</td>
									<td>{professores.nascimento}</td>
									<td>{professores.sexo}</td>
									<td>{professores.email}</td>
									<td>{professores.telefone}</td>
									<td className="center">
										<a href="#" onClick={() => this.handleEditProfessor(professores._id)} ><i className="icon-pencil rightmargin10"></i></a>
										<a href="" onClick={() => this.handleDelete(professores._id)}><i className="icon-remove"></i></a>
									</td>
								</tr>
							)) }
							
					</tbody>
				</table>
			</div>
		);
	}
}


export default Professores;
