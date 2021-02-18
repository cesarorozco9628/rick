import axios from 'axios'

export const  LocationContainer =  (value) => {
    const URL = `https://rickandmortyapi.com/api/location/${value}`
    const res =  axios.get (URL)
    return res;
}
 
///////////////////////////////////////////////////////////////////////////////////

export const Characters = (value) =>{
    const url = value;
    const res = axios.get(url)
    return res;
}

