import React, { Component, Fragment } from 'react';
import '../App.css';
import SearchForm from './search-form';
import Table from "./table";


class App extends Component {

  state = {
    cities: [],
    city: '',
    time: ''
  };

  url = "http://52.59.243.58/crp/api/commute/range?";

  onChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };


  onSubmit = (e) => {
    e.preventDefault();
    fetch(`${this.url}city=${this.state.city}&minutes=${this.state.time}`).then(
        response => response.json().then(
            data => {
                console.log(data);
                this.setState({
                    cities: data
                })
            }
        )
    )
  };

  render() {
    return (
        <div className="container">
            <SearchForm onSubmit={this.onSubmit} onChange={this.onChange}/>
            <Table cities={this.state.cities}/>
        </div>
    );
  }
}

export default App;
