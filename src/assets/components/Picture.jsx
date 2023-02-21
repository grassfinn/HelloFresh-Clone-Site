import React from "react";

export default function Picture(props) {
    return (
        <div>
            <img src={props.img} alt={props.alt} />
            <h3>{props.user}</h3>
            <p>{props.desc}</p>

        </div>
    )
}