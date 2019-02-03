import React from 'react';
import AsyncSelect from 'react-select/lib/Async';

const SearchForm = (props) => {

    const noOptMessage = (inputValue) => {
        if (inputValue.length) return null;
        return "Please input city";
    };


    return (
        <form onSubmit={props.onSubmit} className="mt-3">
            <div className="row">
                {/*<div className="form-group">*/}
                {/*<label>Enter city name</label>*/}
                {/*<input type="text"*/}
                {/*className="form-control"*/}
                {/*placeholder="Enter city name"*/}
                {/*name="city"*/}
                {/*onChange={props.onChange}*/}
                {/*/>*/}
                {/*</div>*/}

                <div className="form-group col-4">
                    <label>City</label>
                    <AsyncSelect
                        cacheOptions
                        value={props.selectedCityOption}
                        noOptionsMessage={noOptMessage}
                        // getOptionValue={this.getOptionValue}
                        // getOptionLabel={this.getOptionLabel}
                        loadOptions={props.loadOptions}
                        placeholder="Select city"
                        onChange={props.onCityChange}
                    />
                </div>

                <div >
                    <label>Time</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Time to ride"
                           name="time"
                           required
                           onChange={props.onTimeChange}/>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-primary w-75">Submit</button>
                </div>
            </div>

        </form>
    )
};

export default SearchForm;

