import App from "../App";
import React from "react";
import Button from "./Button";
import "./ButtonList.css"

const ButtonList = (props) => {

    const buttonData = props.buttonData;
        console.log (props)
    const listOfButtons = buttonData.map(data => {
        console.log (data)
        return (
            <li className="oneButton" key={data.image_url}>
                <Button image_url={data.image_url} name={data.name}/>
            </li>
        );
    });

    return (
        <section>
            <ul>
                {listOfButtons}
            </ul>
        </section>
    );
}

export default ButtonList;




































