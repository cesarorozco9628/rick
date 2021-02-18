import React from 'react'


const LocationInfo = (props) => {
    return(
        <div className='card'>
            <div>
                <h2 className='c'>{props.name}</h2>
                <p className='d'>{props.type}</p>
                <p className='df'>{props.dimension}</p>
                <p className='o'>{props.residents}</p>
            </div>
        </div>
    );
}

export default LocationInfo;