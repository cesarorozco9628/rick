import axios from 'axios'

export const  LocationContainer =  async(value) => {
    const URL = `https://rickandmortyapi.com/api/location/${value}`
    const res =  await axios.get (URL)
    return res;
}
 
///////////////////////////////////////////////////////////////////////////////////

export const Characters = async (value) =>{
    const url = value;
    const res = await axios.get(url)
    return res;
}

