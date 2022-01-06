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
      radioButton: '',
      resumoCurriculo: '',
      cargo: '',
      keyAlertCargo: true,
      descricaoCargo: '',
      display: '',
      displayNone: 'none',
    }
    this.handleChange = this.handleChange.bind(this);
    this.validadeCidade = this.validadeCidade.bind(this);
    this.handleAlertCargo = this.handleAlertCargo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearAll = this.clearAll.bind(this);
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

  handleClick() {
    this.setState({
      display: 'none',
      displayNone: '',
    })
  }

  clearAll() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      select: '',
      radioButton: '',
      resumoCurriculo: '',
      cargo: '',
      keyAlertCargo: true,
      descricaoCargo: '',
      display: '',
      displayNone: 'none',
    })
  }


  render() {
    const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

    return (
      <div className='container'>
        <form className='my-forms bg-light'>
          <fieldset style={{ display: this.state.display }}>
            <input className='form-control' value={this.state.nome.toUpperCase()} type="text" name='nome' maxLength={40} required onChange={this.handleChange} placeholder='Nome' />
            <input className='form-control' value={this.state.email} type="text" name='email' maxLength={50} required onChange={this.handleChange} placeholder='Email' />
            <input className='form-control' value={this.state.cpf} type="text" name='cpf' maxLength={11} required onChange={this.handleChange} placeholder='CPF' />
            <input className='form-control' value={this.state.endereco.replace(/[^\w\s]/gi, '')} type="text" name='endereco' maxLength={200} required onChange={this.handleChange} placeholder='Endereço' />
            <input className='form-control' value={this.state.cidade} type="text" name='cidade' maxLength={28} required onChange={this.handleChange} onBlur={this.validadeCidade} placeholder='Cidade' />
            <select className='form-select' value={this.state.select} name="select" onChange={this.handleChange} required>
              {estados.map((estado) => <option value={estado} key={Math.random()}>{estado}</option>)}
            </select >
            <div className="form-check">
              <input className="form-check-input" id='radio-casa' type="radio" value='Casa' name='radioButton' onChange={this.handleChange} required />
              <label className="form-check-label" for="radio-casa">Casa</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id='radio-apartamento' type="radio" value='Apartamento' name='radioButton' onChange={this.handleChange} required />
              <label className="form-check-label" for="radio-apartamento">Apartamento</label>
            </div>

          </fieldset>
          <fieldset style={{ display: this.state.display }}>
            <textarea className="form-control" rows="6" value={this.state.resumoCurriculo} name="resumoCurriculo" maxLength={1000} onChange={this.handleChange} placeholder='Resumo do curriculo' required></textarea>
            <textarea className="form-control" rows="3" value={this.state.cargo} name="cargo" maxLength={40} onMouseEnter={this.handleAlertCargo} onChange={this.handleChange} placeholder='Cargo' required ></textarea>
            <input className='form-control' value={this.state.descricaoCargo} type="text" name='descricaoCargo' maxLength={500} required onChange={this.handleChange} placeholder='Descrição Cargo' />
          </fieldset>
        </form>
        <button className='btn btn-success' onClick={this.handleClick}>Submit</button>
        <button className='btn btn-primary' onClick={this.clearAll}>Clear</button>
        <div>
          <p style={{ display: this.state.displayNone }}>
            Nome: {this.state.nome} <br />
            Email: {this.state.email} <br />
            CPF: {this.state.cpf} <br />
            Endereço: {this.state.endereco} <br />
            Cidade: {this.state.cidade} <br />
            Estado: {this.state.select} <br />
            Moradia: {this.state.radioButton} <br />
            Resumo do Curriculo: {this.state.resumoCurriculo} <br />
            cargo: {this.state.cargo} <br />
            Descrição do cargo: {this.state.descricaoCargo} <br />
          </p>
        </div>

      </div >
    )
  }
}
