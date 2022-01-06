import './App.css';
import React from 'react';
import Form from './components/Form';

class App extends React.Component {

  render() {
    return (
      <>
        <h1 id='title' className='my-5'>Rosa's Forms</h1>
        <Form />

      </>

    )
  }
}

export default App;
