import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/shop.css"




function Shop(props){
    

    const navi = useNavigate();

    function Boxes(){
        let arr = [];
        for(let a = 0; a < props.getitems.length; a++){
            arr.push(
                <div key={props.getitems[a].id} id={props.getitems[a].id} className="singlebox" >
                    <div className="imgbox">
                        <img src={props.getitems[a].image} alt={a} />
                    </div>
                    <div>
                        <span>Name :: {props.getitems[a].name}</span>
                        <hr/>
                        <span>Price ::  {props.getitems[a].price}</span>
                        <hr/>
                        <span>Remaining Item ::  {props.getitems[a].remainingitem} </span>
                    </div>
                    <button className="checkdetailbtn" onClick={()=>navi(`/shop/${props.getitems[a].id}`,{replace : false})}>Check details</button>
                </div>
            );
        }
        return arr;
    }

    // function gotoCheckpage(e){
    //     // let itemid;
    //     // items.map((e) =>{
    //     //     e.
    //     // });
    //     let navigate = useNavigate();

    //     navigate(`/shop/${e.target.parentNode.id}`,{replace : false});
        
    // }

    // function addtocartfun(e){
    //     let getid = e.target.parentNode.id;
    //     let newitems = items;
    //     for(let b = 0; b < newitems.length; b++){
    //         if(newitems[b].id === getid){
    //             newitems[b].remainingitem = newitems[b].remainingitem - 1;
    //         }
    //     }
    //     setitems([...newitems]);
    // }

    return (
        <div id="shopdiv">
            <div id="shop">
                <Boxes />
            </div>
        </div>
    );
}

export default Shop;