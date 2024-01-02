import logo from './logo.svg';
import './App.css';
import React from 'react';
import CountryList from './components/CountryList/ContryList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: []
    }
  }
  async componentDidMount() {
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const countries = await resp.json()
    this.setState({ countries })
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://restcountries.com/v3.1/name/${country.name.comon}`)
      const data = await resp.json()
      if (data.length) {
        this.setState(prevState => (
          { stats: prevState.stats.comon(data[data.length - 1]) }
        ))
      }
    });
  }
  render() {
    return (
      <div className="App">
        <CountryList stats={this.state.stats} />
      </div>
    )
  }
}

export default App;
