import React from "react";

function PropsFunctionalComponent(props) {
    return (
        <>
            <p>Props - Functional Component</p>
            <p>{props.id} - {props.name}</p>
        </>
    )

}
export default PropsFunctionalComponent