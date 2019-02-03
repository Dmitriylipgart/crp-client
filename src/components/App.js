import React, {Component, Fragment} from 'react';
import '../App.css';
import SearchForm from './search-form';
import Table from "./table";


class App extends Component {

    state = {
        cities: [],
        time: '',
        inputValue: '',
        selectedCityOption: {},
        selectedTimeOption: {}

    };

    // url = "http://52.59.243.58/crp/api/commute/";
    url = "http://localhost:8080/api/commute/";

    onCityChange = (selectedCityOption) => {
        this.setState({
            selectedCityOption: selectedCityOption
        })
    };

    onTimeChange = (e) => {
        this.setState({
            time: e.target.value
        })
    };

    fetchCities = async (inputValue) =>{
        const response = await fetch(this.url + "cities?city=" + inputValue);
        const json = await response.json();
        console.log(json);
        return json.map(e => {
            return{
                value: e,
                label: e
            }
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        fetch(`${this.url}range?city=${this.state.selectedCityOption.value}&minutes=${this.state.time}`).then(
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
                <SearchForm
                    onSubmit={this.onSubmit}
                    onCityChange={this.onCityChange}
                    onTimeChange={this.onTimeChange}
                    selectedCityOption={this.state.selectedCityOption}
                    selectedTimeOption={this.state.selectedTimeOption}
                    loadOptions={this.fetchCities}
                />
                <Table cities={this.state.cities}/>
            </div>
        );
    }
}

export default App;
