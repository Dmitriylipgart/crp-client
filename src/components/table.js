import React from 'react';
import City from "./city";

const Table = ({cities}) =>{

    const cityList = cities.map(city =>
        <City key={city.name} city={city}/>
    );

    return (

        <div className="table-responsive-lg">
            <div className="text-center mt-2">
                {cityList.length ? <h3>Reachable cities with 50 mph average speed</h3> : ""}
            </div>
            <table className="table table-hover mt-2">
                <tbody>
                <tr scope="row">
                    <th scope="col">Name</th>
                    <th scope="col">Distance in miles</th>
                </tr>
                {cityList}
                </tbody>
            </table>
        </div>

    )
};

export default Table;