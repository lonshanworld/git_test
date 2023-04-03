import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "../styles/assignplayer.css";

import {auth} from "../config/firebase_config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function AssignPlayer(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const {type} = useParams(); 
    const navi = useNavigate();

    async function assigntoFirebase(){
        if(type === "signup"){
            if(password === confirm){
                try{
                    let value = await createUserWithEmailAndPassword(auth, email,password);
                    console.log(value);
                }catch(err){
                    alert(`Some Error Occured.  ${err.message}`);
                }
            }else{
                alert("Password need to be same with Confirmed Password.");
            }
        }else{
            try{
                let value = await signInWithEmailAndPassword(auth, email, password);
                console.log("hiiii");
                console.log(value);
            }catch(err){
                alert(`Some Error Occured.  ${err.message}`);
            }
        }
    }

    return(
        <div id="formdiv">
            <form action="" method="">
                <div>
                    <label htmlFor="email" className="normaltxt">Enter Email</label>
                    <input type="email" id="email" name="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" className="normaltxt">Enter Password</label>
                    <input type="password" id="password" name="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                </div>
                {(type === "signup") ? (
                    <div>
                        <label htmlFor="confirm" className="normaltxt">Confirm Password</label>
                        <input type="password" id="confirm" name="confirm" placeholder="Confirm Password ..." onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                )   :   (
                    <div>
                    </div>
                )
                }
                <div id="formbtns">
                    <button type="button" className="cancelbtn" onClick={() => navi(-1, {replace : true})}>Cancel</button>
                    {(type === "signup") ? (
                        <button type="button" className="signupbtn" onClick={() => assigntoFirebase()}>Sign Up</button>
                    ) : (
                        <div>
                             <button type="button" className="loginbtn" onClick={() => assigntoFirebase()} >Log In</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default AssignPlayer;