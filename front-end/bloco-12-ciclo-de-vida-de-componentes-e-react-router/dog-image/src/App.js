import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dataImage: '',
      dataName: '',
      dogList: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('lastUrl')) {
      const array = JSON.parse(localStorage.getItem('lastUrl'));
      console.log(array[0].image);
      this.setState({
        loading: false,
        dataImage: array[0].image,
        dataName: array[0].name,
      });
    } else {
      this.fetchApi();
    }
  }

  shouldComponentUpdate(nextProps, { dataImage }) {
    if (dataImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  fetchApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((element) => element.json())
      .then((data) => {
        this.setState({
          dataImage: data.message,
          loading: false,
        });
        alert(data.message.split('/')[4]);
      });
  }

  saveData() {
    const { dataName, dataImage, dogList } = this.state;
    const myObj = { name: dataName, image: dataImage };
    this.setState((prevState) => ({
      dogList: [...prevState.dogList, myObj],
    }), () => {
      const { dogList } = this.state;
      localStorage.setItem('lastUrl', JSON.stringify(dogList));
    });
  }

  render() {
    const { loading, dataImage, dataName } = this.state;
    return (
      <>
        {loading ? 'loading...' : <h1>
          {dataName}
          {' '}
        </h1> }
        {loading ? 'loading...' : <img src={ dataImage } alt="foto cachorro" /> }
        <input type="text" id="dataName" onChange={ this.handleChange } />
        <button type="button" onClick={ this.fetchApi }>Run</button>
        <button type="button" onClick={ this.saveData }>Save</button>
      </>
    );
  }
}

export default App;
