import React from 'react';

const SearchForm = (props) => {

        return (
            <form onSubmit={props.onSubmit} className="mt-3">
                <div className="row">
                    <div className="form-group">
                        <label>Enter city name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter city name"
                               name="city"
                               onChange={props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Time to ride"
                               name="time"
                               onChange={props.onChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
};

export default SearchForm;

