const nome1 = document.querySelector('#nome-1');
const sobrenome1 = document.querySelector('#sobrenome-1');
const nome2 = document.querySelector('#nome-2');
const sobrenome2 = document.querySelector('#sobrenome-2');

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

//actions type
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        nome: 'Carlos',
      }
    case CHANGE_LAST_NAME:
    return {
      ...state,
      sobrenome: 'Rosa',
    }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        nome: 'Rosa',
      }
    case CHANGE_LAST_NAME:
    return {
      ...state,
      sobrenome: 'Carlos',
    }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
})

const store = Redux.createStore(rootReducer);

function changeName(){
  return {
    type: CHANGE_NAME
  }
}

function changeLastName(){
  return {
    type: CHANGE_LAST_NAME
  }
}

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeName())
    store.dispatch(changeLastName())
  }, 3000);
};

store.subscribe(() => {
  const state = store.getState();
  nome1.innerHTML = state.meuPrimeiroReducer.nome;
  sobrenome1.innerHTML = state.meuPrimeiroReducer.sobrenome;
  nome2.innerHTML = state.meuSegundoReducer.nome;
  sobrenome2.innerHTML = state.meuSegundoReducer.sobrenome;

})