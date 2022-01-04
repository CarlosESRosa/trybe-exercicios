import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './css/Pokedex.css'


class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            indexOfPokemon: 0,
            pokeElement: 'All',
            keyAble: '',
            pokemonsOfType: ['', '', '', '', '', '', '', '', ''],
        }
        this.handleClick = this.handleClick.bind(this);
        this.filterPokemon = this.filterPokemon.bind(this);
        this.elementButtons = this.elementButtons.bind(this);
        this.arrayOfTypes = this.arrayOfTypes.bind(this);
    }

    handleClick() {
        if (this.state.indexOfPokemon === this.state.pokemonsOfType.length - 1) {
            this.setState({ indexOfPokemon: 0 });
        } else {
            this.setState({ indexOfPokemon: this.state.indexOfPokemon + 1 });
        }
    }

    filterPokemon(type) {
        if (type === 'All') {
            return this.props.pokemons;
        } else {
            return this.props.pokemons.filter((pokemon) => pokemon.type === type);
        }
    }

    elementButtons(event, elemento) {
        const elementPokemons = this.props.pokemons.filter((pokemon) => pokemon.type === elemento);
        if (elemento === "All") {
            this.setState({ keyAble: '', pokemonsOfType: ['', '', '', '', '', '', '', '', ''] })
        } else {
            if (elementPokemons.length <= 1) {
                this.setState({ keyAble: 'disabled' })
            } else {
                this.setState({ keyAble: '' })
            }
        }
        if (elemento !== "All") {
            this.setState({ pokemonsOfType: elementPokemons })
        }
        this.setState({
            indexOfPokemon: 0,
            pokeElement: elemento,
        })
    }

    arrayOfTypes() {
        const arrayOfElements = this.props.pokemons.map((pokemon) => pokemon.type);
        const uniq = [...new Set(arrayOfElements)]; // delete duplicated elements from array
        return uniq;
    }

    render() {
        const types = this.arrayOfTypes();
        const filtredPokemon = this.filterPokemon(this.state.pokeElement);
        return (
            <div className="pokedex">
                {<Pokemon
                    key={filtredPokemon[this.state.indexOfPokemon].id}
                    pokemon={filtredPokemon[this.state.indexOfPokemon]}
                />}
                <div id='Buttons-div'>
                    <Button element="All" myFunc={this.elementButtons} />
                    {types.map((type) => <Button element={type} myFunc={this.elementButtons} key={Math.random()} />)}
                    {/* this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) */}
                </div>
                <button id='next-button' onClick={this.handleClick} disabled={this.state.keyAble}>Next</button>
            </div >
        );
    }
}

export default Pokedex;