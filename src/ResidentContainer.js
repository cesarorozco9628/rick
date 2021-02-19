import React from "react";
// import { Characters } from "./LocationContainer";
// import ResidentInfo from "./ResidentInfo";



    const data = JSON.parse(sessionStorage.getItem('dat'))



    // const resp = data.map((da) => {
    //     Characters(da).then((res) => {
    //         <ResidentInfo
    //             img={res.image}
    //             name={res.name}
    //             status={res.status}
    //             origins={res.origin.name}
    //             Nepisodes={res.episode.length}
    //         />
    //     })
    // })
    // profesor intente hacer un llamado a la API desde la const resp pero en consolo me dice que map no esta definida y estuve intentando por cuatro dia y nada 





export const ResidentContainer = () => {
    
    return(
        <div>
           {/* {resp}  */}
        </div>
    );
}