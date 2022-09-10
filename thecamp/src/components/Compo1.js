import React from "react";

function DisplayImages(data) {
    console.log(data);
    return (
        
        <>
            {(data && data[2]) &&
              <div>
                <p>{data[2].name}</p>
              <img src={data[2].galerie[0].url} alt={data.name}></img>
              </div>
            }
        </>
    )
}

export default { DisplayImages };

