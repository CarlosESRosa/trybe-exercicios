import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        {conteudos.map((element) => (<section>
          <h4>{`O conteudo é: ${element.conteudo}`}</h4>
          <p>{`status: ${element.status}`} </p>
          <p>{`bloco: ${element.bloco}`}</p>
        </section>
        ))}
      </>
    )
  }
}

export default Content;