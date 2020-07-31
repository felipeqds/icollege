import React, {Component} from 'react';

import logo from '../images/logo-side@2x.png';
import api from '../services/api';
class Login extends Component{
	state = {
		codigo: '',
		cpf: '',
	};

	handleSubmit = async e =>{
		e.preventDefault();
		try{
			const response =  await api.post('login',{
				codigo: this.state.codigo,
				cpf: this.state.cpf,
			});
			if(response.data.token !== ""){	
				localStorage.setItem('token', response.data.token)
				localStorage.setItem('cpf', response.data.cpf)
				window.location.href ='/admin'
			}
		}catch(err){
			localStorage.setItem('token', "")
			alert("Usuario ou senha incorretos!");
		}
				
	}
	handleChange = e =>{
		this.setState({[e.target.name]: e.target.value})
	}


    render() {
        return(
            <section id="content">

			<div class="content-wrap nopadding">


				<div class="section nobg full-screen nopadding nomargin">
					<div class="container-fluid vertical-middle divcenter clearfix">

						<div class="card divcenter noborder cardLogin" >
							<div class="card-body" >
                                <div class="center">
                                    <img class="imgLogin" src={logo} alt="Canvas Logo"/>
                                </div>
								<form id="login-form" name="login-form" class="nobottommargin" onSubmit={this.handleSubmit}>
									<h4>Faça login para acessar o sistema</h4>

									<div class="col_full">
										<label for="login-form-username">Codigo:</label>
										<input onChange={this.handleChange} type="text" id="codigo" name="codigo" value={this.state.author} class="form-control not-dark" />
									</div>

									<div class="col_full">
										<label for="login-form-password">CPF:</label>
										<input onChange={this.handleChange} type="text" id="cpf" name="cpf" value={this.state.author} class="form-control not-dark" />
									</div>

									<div class="col_full nobottommargin">
										<button class="button button-3d button-blue nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
									</div>
								</form>

							</div>
						</div>


					</div>
				</div>

			</div>

		</section>
        );
    }
}

export default Login;