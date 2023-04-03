import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../styles/checkdetail.css"

function CheckDetail(props){
    const [amount, setAmount] = useState(0);
    const [origin, setOrigin] = useState({});

    const {id} = useParams();
    const navi = useNavigate();

    useEffect(()=>{
        setOrigin(
            props.getitemdetail(id)
        )
    },[id,props]);


    function Itemdetail(){
        return(
            <div className="itembox">
                <div className="imgdiv" >
                    <img src={origin.image} alt={origin.id} />
                </div>
                <div className="infodiv">
                    <p>Name :: {origin.name}</p>
                    <p>Price :: {origin.price}</p>
                    <p>Remaining Item :: {origin.remainingitem}</p>
                    <p>Description :: {origin.description}</p>
                    <div className="btndiv">
                        <button className="decreasebtn" onClick={() => substractFun()}>-</button>
                        <span>{amount}</span>
                        <button className="increasebtn" onClick={() => addFun()}>+</button>
                    </div>
                    <button className="addtocartbtn" onClick={() => addtocartFun()}>Add to Cart</button>
                </div>
            </div>
        );
    }

    function addFun(){
        if(amount === origin.remainingitem){
            console.log("You can't click more");
        }else{
            setAmount(amount + 1);
        }
    }

    function substractFun(){
        if(amount === 0){
            console.log("You can't click more");
        }else{
            setAmount(amount - 1);
        }
    }

    function addtocartFun(){
        if(amount !== 0){
            props.changeamountfun(amount);
            navi(-1, {replace : true});
        }else{
            console.log("it doesn't work");
        }
        
    }

    return (
        <div id="checkdetail">
            <Itemdetail />
        </div>
    );
}

export default CheckDetail;