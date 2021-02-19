import React, { useState, useEffect } from "react";
import LocationInfo from "./LocationInfo";
import {LocationContainer} from './LocationContainer'
import { ResidentContainer } from "./ResidentContainer";


const SearchBox = () => {
  
    const [searchUbication, setSearchUbication] = useState(""); 
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [residents, setResidents] = useState("");
    const [query, setQuery] = useState("");
  


    useEffect(() => {
      if (query) {
        LocationContainer(query).then((res) => {
          setName(res.data.name)
          setType(res.data.type)
          setDimension(res.data.dimension)
          setResidents(res.data.residents)
        })
      }
    }, [query]);

    useEffect(()=>{
      if(query){
        LocationContainer(query).then((res) => {
          sessionStorage.setItem('dat', JSON.stringify(res.data.residents.slice(0,10)))
        })
      }
    },[query])

   
    const handleSearch= (value) => {
      setQuery(value);
    };

    return (
        <div className='container'>
            <div className='card'>
                <label>Ingrese la Dimension</label>
                <input onChange={(e) => setSearchUbication(e.target.value)} />
                <button onClick={() => handleSearch(searchUbication)}>Search</button>
            </div>
            {query ? 
                <LocationInfo 
                  name={name}
                  type={type}
                  dimension={dimension}
                  residents={residents.length}
                /> : null
            }
            {query ? 
              <ResidentContainer/>
            : null
              }
        </div>
    );
} 
export default SearchBox;