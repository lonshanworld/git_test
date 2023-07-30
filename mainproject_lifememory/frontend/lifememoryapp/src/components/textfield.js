import React, { useRef, useState } from "react";

function CustomInput({ inputref, inputtype, inputid, labeltext}){
    const [label, setLabel] = useState(`Enter your ${labeltext}`);
    const labelRef = useRef();

    function handleFocus(){
        setLabel(labeltext);
        labelRef.current.classList.add("labelclassani");
    }

    function handleBlur(){
        if(inputref.current.value === "" || inputref.current.value === null || inputref.current.value === undefined){
            setLabel(`Enter your ${labeltext}`);
            labelRef.current.classList.remove("labelclassani");
        }    
    }

    return (
        <div>
            <input
                onBlur={handleBlur} 
                onFocus={handleFocus} 
                ref={inputref} 
                type={inputtype}
                id={inputid} 
                name={inputid}
                className="inputclass"
                required/>
            <label ref={labelRef} htmlFor={inputid} className="labelclass">{label}</label>
        </div>
    );
}

export default CustomInput;