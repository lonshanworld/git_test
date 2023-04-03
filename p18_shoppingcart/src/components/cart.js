import React from "react";
import "../styles/cart.css";

function Cart(props){

    function CartItemlist(){
        let arr = [];
        let list = props.cartItem;
        if(list.length === 0){
            return (
                <h3>There is no item in cart.</h3>
            );
        }else{
            for(let c =0; c < list.length; c++){
                arr.push(
                    <div key={list[c].id} className="cart">
                        <img src={list[c].image} alt={list[c].id} />
                        <div>
                            <span>{list[c].name}</span>
                            <span>{list[c].price}</span>
                        </div>
                        <span>{list[c].itemamount}</span>
                    </div>
                );
            }
    
            return arr;
        }
    }

    function checkoutFun(){
        props.clearcart();
        alert("Thank you for your purchase.");
    }

    return(
        <div id="cartDiv">
            <CartItemlist />
            <button onClick={() => checkoutFun()}>Purchase</button>
        </div>
    );
}

export default Cart;