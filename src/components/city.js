import React from 'react';



const City = ({ city }) =>{
    return(
        <tr scope="row">
            <td>{city.name}</td>
            <td>{parseFloat(city.distanceToSource).toFixed(2)}</td>
        </tr>
    )
};

export default City;