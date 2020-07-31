import React, {Component} from 'react';

import api from '../../../services/api';
// import { Container } from './styles';

class Cursos extends Component {
    state = {
		_id: '',
		nome: '',
    }
    
    handleSubmit = async e =>{
		e.preventDefault();
		try{
            
            if(this.props.match.params.id === undefined) {
                await api.post('/curso/create',{
                    nome: this.state.nome,
                },{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                window.location.href ='/admin'
            }else{
                await api.put('curso/update/'+this.props.match.params.id, {
                    nome: this.state.nome,
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
                const response = await api.get('curso/'+this.props.match.params.id,{ headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                
                this.setState({_id: response.data._id})
                this.setState({nome: response.data.nome})
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


export default Cursos;
