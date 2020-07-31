import React, {Component} from 'react';
import api from '../services/api';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import logoSide from '../images/logo-side.png';
import logo from '../images/logo-side@2x.png';

// import { Container } from './styles';
class Header extends Component {
	state = {
		_id: '',
		nome: '',
		codigo: '',
		cpf: '',
		nascimento: '',
		sexo: '',
		email: '',
		telefone: '',
	}

	async componentDidMount(){
		if(localStorage.getItem('token') === ""){
			window.location.href ='/login'
		}else{

			const response = await api.get('alunobycpf/'+localStorage.getItem('cpf'),{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
			const teste = response.data[0].nascimento;
			const teste2 = teste.toString().split('T');
			const firstDate = parseISO(teste2[0]);
			response.data.nascimento = format(firstDate,"dd'/'MM'/'yyyy");
			this.setState({_id: response.data[0]._id})
			this.setState({nome: response.data[0].nome})
			this.setState({codigo: response.data[0].codigo})
			this.setState({cpf: response.data[0].cpf})
			this.setState({nascimento: response.data[0].nascimento})
			this.setState({sexo: response.data[0].sexo})
			this.setState({email: response.data[0].email})
			this.setState({telefone: response.data[0].telefone})
		}	
		
	}

	handleLogout = e =>{
		localStorage.setItem('token', "")
        localStorage.setItem('cpf', "")
        window.location.href ='/login'
	}

	render() {
		return (
			<header id="header">
		
					<div id="header-wrap">
		
						<div className="container clearfix">
		
							<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
		
							<div id="logo" className="nobottomborder">
								<a href="/" className="standard-logo" ><img src={logoSide} alt="Canvas Logo"></img></a>
								<a href="/" className="retina-logo" ><img src={logo} alt="Canvas Logo"></img></a>
							</div>
		
							<nav id="primary-menu">
		
								<ul>
									<li><div class="blocoDados">
										<p>{this.state.nome}</p>
										<p>{this.state.codigo}</p>
										<p>{this.state.email}</p>
										</div></li>
									<li><a href="/admin"><div>Admin</div></a></li>
									<li><a href="/meusdados"><div>Meus dados</div></a></li>
									<li><a href="#" onClick={() => this.handleLogout()}><div>Logout</div></a></li>
								</ul>
		
							</nav>
		
						</div>
		
					</div>
		
				</header>
		
		  );
	}
  
}

export default Header;
 