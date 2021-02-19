import React from 'react'


const LocationInfo = (props) => {
    return(
        <div className='card card-info'>
            <div>
                <h2>{props.name}</h2>
                <p>{props.type}</p>
                <p>{props.dimension}</p>
                <p>{props.residents}</p>
            </div>
        </div>
    );
}

export default LocationInfo;