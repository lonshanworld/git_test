import React from "react";
import "../styles/footer.css";

export default function Footer(){
    let newdate = new Date();
    let currentyear = newdate.getFullYear();

    return(
        <footer>
            <p>Copyright &copy; <span>{currentyear}</span> . All rights reserved to Lon shan.</p>
        </footer>
    );
} 