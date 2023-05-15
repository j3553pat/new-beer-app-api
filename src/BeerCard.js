import React from "react";


function AlcoholCard(props) {
    const {name, productPic, description, brewed, tips, likes, toggleLike} =props
    return (
    <li>
        {name}
        <br />
        <img src={productPic} alt="beer-pictures"></img>
        <br />
        {description}
        <br />
        {brewed}
        <br />
        {tips}
        <br />
        {!likes ? <button onClick={toggleLike}>Click to Like!</button>:<button onClick={toggleLike}>Liked!</button>}
        {/* <button onClick={props.toggleLike} style={!props.likes?{color:"red"} :{color:"green"} }>Click to Like!</button> */}
        <hr />
    </li>

    )
}

export default AlcoholCard;