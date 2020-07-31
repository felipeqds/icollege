import React, { Component } from 'react';
import api from '../services/api';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

class MeusDados extends Component {
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

	async componentDidMount() {
		if (localStorage.getItem('token') === "") {
			window.location.href = '/login'
		} else {
				const response = await api.get('alunobycpf/' + localStorage.getItem('cpf'), { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
				console.log(response.data)
				const teste = response.data[0].nascimento;
				const teste2 = teste.toString().split('T');
				const firstDate = parseISO(teste2[0]);
				response.data[0].nascimento = format(firstDate, "dd'/'MM'/'yyyy");
				this.setState({ _id: response.data[0]._id })
				this.setState({ nome: response.data[0].nome })
				this.setState({ codigo: response.data[0].codigo })
				this.setState({ cpf: response.data[0].cpf })
				this.setState({ nascimento: response.data[0].nascimento })
				this.setState({ sexo: response.data[0].sexo })
				this.setState({ email: response.data[0].email })
				this.setState({ telefone: response.data[0].telefone })
		}

	}

	render() {
		return (
			<section id="content">

				<div className="content-wrap">

					<div className="container clearfix">

						<div className="row clearfix">

							<div className="col-md-12">

								

								<div className="clear"></div>

								<div className="row clearfix">

									<div className="col-lg-12">

										<div className="row clearfix tabs tabs-alt clearfix" >
											<div className="heading-block noborder">
												<h3>Meus dados</h3>
											</div>
											<div className="col-lg-12">
													<input type="hidden" value={this.state._id} id="_id" name="_id"></input>
													<div class="form-group row">
														<div className="col-12">
															<label for="text" >Nome:</label>
															{this.state.nome}
														</div>
													</div>
													<div class="form-group row ">
														<div className="col-6">
															<label for="template-contactform-subject">Código: </label>
															{this.state.codigo}
														</div>

														<div className="col-6">
															<label for="sub">CPF:</label>
															{this.state.cpf}
														</div>
													</div>

													<div class="form-group row ">
														<div className="col-6">
															<label for="template-contactform-subject">Nascimento: </label>
															{this.state.nascimento}
														</div>

														<div className="col-6">
															<label for="sub">Sexo:</label>
															{this.state.sexo}
														</div>
													</div>

													<div class="form-group row ">
														<div className="col-6">
															<label for="template-contactform-subject">Email: </label>
															{this.state.email}
														</div>

														<div className="col-6">
															<label for="sub">Telefone:</label>
															{this.state.telefone}
														</div>
													</div>
											</div>
											<hr class="col-lg-12"></hr>
											<div className="heading-block noborder">
												<h3>Minhas Turmas</h3>
											</div>
											<div class="col-lg-12">
											<table id="minhasturmas" className="table table-striped table-bordered" cellspacing="0" width="100%">
												<thead>
													<tr>
														<th>Codigo</th>
														<th>Disciplina</th>
														<th>Professor</th>
														<th>Turno</th>
														<th>Data de inicio</th>
														<th>Vagas</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
															
														
												</tbody>
											</table>
			
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

export default MeusDados;