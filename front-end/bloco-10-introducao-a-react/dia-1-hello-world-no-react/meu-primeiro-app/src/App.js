import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {

  render() {
    const arrayOfTasks = ['estudar', 'comer', 'jogar'];
    function Task(value) {
      return (
        <li>{value}</li>
      );
    }
    return (
      <>
        <Header />
        <Content />
        <Footer />
        {/*  <ol>
          {arrayOfTasks.map((element) => Task(element))}
        </ol>
        */}
      </>

    );
  }
}

export default App;
