import React from 'react'

const ResidentInfo = (props) => {
    return(
        <div className='card'>
            <div className='bg-img' style={{backgroundImage: props.img}}></div>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.origin}</p>
            <p>{props.Nepisodes}</p>
        </div>
    );
}

export default ResidentInfo;