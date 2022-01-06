import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      select: '',
      resumoCurriculo: '',
      cargo: '',
      keyAlertCargo: true,
      descricaoCargo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.validadeCidade = this.validadeCidade.bind(this);
    this.handleAlertCargo = this.handleAlertCargo.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  validadeCidade({ target }) {
    if ('0123456789'.includes(target.value[0])) {
      this.setState({ cidade: '' })
    }
  }

  handleAlertCargo() {
    if (this.state.keyAlertCargo) alert('Preencha com cuidado esta informação.');
    this.setState({ keyAlertCargo: false });
  }

  render() {
    const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

    return (
      <div>
        <fieldset>
          <input value={this.state.nome.toUpperCase()} type="text" name='nome' maxLength={40} required onChange={this.handleChange} placeholder='Nome' />
          <input value={this.state.email} type="text" name='email' maxLength={50} required onChange={this.handleChange} placeholder='Email' />
          <input value={this.state.cpf} type="text" name='cpf' maxLength={11} required onChange={this.handleChange} placeholder='CPF' />
          {/*.replace(/[^\w\s]/gi, '' remove special characteres */}
          <input value={this.state.endereco.replace(/[^\w\s]/gi, '')} type="text" name='endereco' maxLength={200} required onChange={this.handleChange} placeholder='Endereço' />
          <input value={this.state.cidade} type="text" name='cidade' maxLength={28} required onChange={this.handleChange} onBlur={this.validadeCidade} placeholder='Cidade' />
          <select value={this.state.select} name="select" onChange={this.handleChange} required>
            {estados.map((estado) => <option value={estado} key={Math.random()}>{estado}</option>)}
          </select>
          <label>
            <input type="radio" name='radioButton' required />Casa
          </label>
          <label >
            <input type="radio" name='radioButton' required />Apartamento
          </label>
        </fieldset>
        <fieldset>
          <textarea value={this.state.resumoCurriculo} name="resumoCurriculo" cols="60" rows="15" maxLength={1000} onChange={this.handleChange} required></textarea>
          <textarea value={this.state.cargo} name="cargo" cols="30" rows="10" maxLength={40} onMouseEnter={this.handleAlertCargo} onChange={this.handleChange} required ></textarea>
          <input value={this.state.descricaoCargo} type="text" name='descricaoCargo' maxLength={500} required onChange={this.handleChange} placeholder='Descrição Cargo' />
        </fieldset>

        <button onClick={<div>teste</div>}>My.Button</button>

      </div >
    )
  }
}
