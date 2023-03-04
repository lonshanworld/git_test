import React, {useState,useEffect} from "react";
import "../../styles/playground.css";
import Gamediv from "./gamediv";

export default function Playground(){
    
    const [point, setpoint] = useState(0);
    const [maxpoint, setmaxpoint] = useState(0);

    function increasepoint(){
        setpoint(point + 1);
        if(maxpoint <= point){
            setmaxpoint(point + 1);
        }
    }

    function decreasepoint(value){
        console.log(value);
    }

    return (
        <div id="playground">
            <div id="instructions">
                <ol>
                    <li>Please choose the photos without <span className="intromainwords">Overlapping.</span></li>
                    <li>Please Click the <span className="intromainwords">Skip</span> button if you think this is the same image you chose previously.</li>
                    <li>Violation of the rules will result in loosing all points you have collected.</li>
                </ol>
            </div>
            <div>
                <p>Current Score : {point}</p>
                <p>Highest Score : {maxpoint}</p>
            </div>
            <Gamediv increase={increasepoint} decrease={decreasepoint} />
        </div>
    );
}