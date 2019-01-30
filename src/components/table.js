import React from 'react';
import City from "./city";

const Table = ({cities}) =>{

    const cityList = cities.map(city =>
        <City key={city.name} city={city}/>
    );

    return (

        <div className="table-responsive-lg">
            <table className="table table-hover mt-2">
                <tbody>
                <tr scope="row">
                    <th scope="col">Name</th>
                </tr>
                {cityList}
                </tbody>
            </table>
        </div>

    )
};

export default Table;