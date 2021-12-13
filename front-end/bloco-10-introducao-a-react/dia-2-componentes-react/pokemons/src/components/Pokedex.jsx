import React, { Component } from 'react';
import Data from '../data';
import Pokemon from './Pokemon';
class Pokedex extends Component {
  render() {
    return (
      <>
        {Data.map((pokemon) => (
          <Pokemon nome={pokemon.name} type={pokemon.type} weight={pokemon.averageWeight} image={pokemon.image} />
        ))}
      </>
    )
  }
}

export default Pokedex;