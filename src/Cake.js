import React from "react";

function Cake(props) {
    return (
        <div>
           <h1>{props.name}</h1>
           <h3>{props.ingridients}</h3>
           <h3>${props.price}</h3>
           <h3>{props.rating}</h3>
        </div>
    )
}

export default Cake