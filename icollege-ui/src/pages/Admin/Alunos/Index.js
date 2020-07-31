import React, {Component} from 'react';
import api from '../../../services/api';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

class Alunos extends Component {
	state = {
		alunos: [],
		_id: '',
		nome: '',
		codigo: '',
		cpf: '',
		nascimento: '',
		sexo: '',
		email: '',
		telefone: '',
	}


	handleNewAluno = async id =>{
		window.location.href ='/admin/alunosforms';
	} 
	handleEditAluno = async id =>{
		window.location.href ='/admin/alunosforms/'+id;
	} 
	handleDelete = async id =>{
		await api.delete('/aluno/'+id+'/delete',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
		
	} 

	async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{
			const response = await api.get('aluno/list',{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
			response.data.forEach(alunos => {
				const teste = alunos.nascimento;
				const teste2 = teste.toString().split('T');
				const firstDate = parseISO(teste2[0]);
				alunos.nascimento = format(firstDate,"dd'/'MM'/'yyyy");
			});
			this.setState({alunos: response.data})
		}	
		
	}
	render() {
		return (
			<div className="table-responsive">
				<div className="cboth">
					<h3 className="fleft">Alunos</h3>
					<a href="#" onClick={() => this.handleNewAluno()} class="button button-3d button-rounded button-blue fright">Cadastrar novo aluno</a>
					<br className="cboth"></br>
				</div>
				<table id="alunos" className="table table-striped table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Codigo</th>
							<th>CPF</th>
							<th>Data de Nascimento</th>
							<th>Sexo</th>
							<th>Email</th>
							<th>Telefone</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
							{this.state.alunos.map(alunos =>(
								<tr>
									<td>{alunos.nome}</td>
									<td>{alunos.codigo}</td>
									<td>{alunos.cpf}</td>
									<td>{alunos.nascimento}</td>
									<td>{alunos.sexo}</td>
									<td>{alunos.email}</td>
									<td>{alunos.telefone}</td>
									<td className="center">
										<a href="#" onClick={() => this.handleEditAluno(alunos._id)}  ><i className="icon-pencil rightmargin10"></i></a>
										<a href="" onClick={() => this.handleDelete(alunos._id)}><i className="icon-remove"></i></a>
									</td>
								</tr>
							)) }
							
					</tbody>
				</table>
			</div>
		);
	}
}


export default Alunos;
