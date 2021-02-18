import React from "react";
import { Characters } from "./LocationContainer";
import ResidentInfo from "./ResidentInfo";


export const ResidentContainer = () => {
    const data = sessionStorage.getItem('dat')


    const per =  data.map((value)  => {
       Characters(value).then((res) => {
            <ResidentInfo
                        name={res.name}
                        img={res.image}
                        status={res.status}
                        origin={res.origin.name}
                        Nepisodes={res.episode.length}
                    />
               })
    })


    
    return(
        <div>
          {per}
        </div>
    );
}