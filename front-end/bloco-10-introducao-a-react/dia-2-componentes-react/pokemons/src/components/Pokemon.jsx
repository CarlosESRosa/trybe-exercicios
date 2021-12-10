import React, { Component } from 'react';


class Pokemon extends Component {

  render() {
    const { nome, type, weight, image } = this.props
    return (
      <section className='pokemon-box'>
        <div>
          <p>
            {nome} <br />
            {type} <br />
            {`Average weight: ${weight.value} ${weight.measurementUnit}`}
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </section>
    )

  }
}

export default Pokemon;