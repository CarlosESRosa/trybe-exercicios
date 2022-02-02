const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const randomColorButton = document.querySelector('#random-color');
const container = document.querySelector('#container');
const value = document.querySelector('#value');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';


const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      if(state.index < state.colors.length - 1){ 
        return {
          ...state,
          index: state.index + 1
        } 
      } else {
        return {
          ...state,
          index: state.colors.length - 1
        } 
      }
    case PREVIOUS_COLOR:
      if(state.index > 0){
        return {
          ...state,
          index: state.index - 1
        }
      } else {
        return {
          ...state,
          index: 0
        }
      }
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      }
    default:
      return ESTADO_INICIAL;
  }
}
// const rootReducer = Redux.combineReducers({
// })

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  value.innerHTML = state.colors[state.index] 
  container.style.background = state.colors[state.index]
  console.log(state);
})

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

function nextColor(){
  return {
    type: NEXT_COLOR
  }
}

function previousColor(){
  return {
    type: PREVIOUS_COLOR
  }
}

function randomColor(){
  return {
    type: RANDOM_COLOR
  }
}

nextButton.addEventListener('click', () => {
  store.dispatch(nextColor());
})

previousButton.addEventListener('click', () => {
  store.dispatch(previousColor());
})

randomColorButton.addEventListener('click', () => {
  store.dispatch(randomColor())
})