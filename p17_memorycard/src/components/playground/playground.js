import React, {useState,useEffect} from "react";
import "../../styles/playground.css";

const imagearr = [
    "https://media.istockphoto.com/id/1141529240/vector/simple-apple-in-flat-style-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=VsxP5eRL4ETz_Se_lpH2XLPs0YWLV72Obk-hAQK2v9Y=",
    "https://media.istockphoto.com/id/980474902/vector/banana-flat-design-fruit-icon.jpg?s=1024x1024&w=is&k=20&c=Ive09xuFS7CxyYp6Bag6Quu7qwGAjwG3F1gVSaC4hIo=",
    "https://media.istockphoto.com/id/486114949/vector/orange-fruit-slice.jpg?s=1024x1024&w=is&k=20&c=ueC_bQc7qFuarPeTUqGXUwXreZctD931jnJROiZMYSU=",
    "https://media.istockphoto.com/id/1133948238/vector/realistic-3d-detailed-whole-coconut-half-and-green-leaf-vector.jpg?s=1024x1024&w=is&k=20&c=TtFzKufSwJGokBOXphqmunxx079Ki6MkW_cEOnq2vRQ=",
    "https://media.istockphoto.com/id/1273773987/vector/strawberry-fruit-logo.jpg?s=1024x1024&w=is&k=20&c=C7zhooT-BJR_Z4bsfpDuQBCmCCkvEkbwLR16vFbwoyo=",
    "https://media.istockphoto.com/id/1092160428/vector/grapes-vector-icon-illustration-design.jpg?s=1024x1024&w=is&k=20&c=yHQbAf7U6rD7hwPTudsHo6w5myJW2jsrlIfnE-Ft2Pw=",
    "https://media.istockphoto.com/id/811045912/vector/vector-illustration-of-a-realistic-style-of-litchy-whole-fruit-and-a-cut-litchi-isolated-on.jpg?s=1024x1024&w=is&k=20&c=yLQB_cPmC2zPuEtmaFvkjh6BeIag4bvhGGcG5VGF0Rw=",
    "https://media.istockphoto.com/id/979230742/vector/papaya-icon-vector-isolated-illustration.jpg?s=1024x1024&w=is&k=20&c=WbuxnyYu8XXwVbdxJwn8SrhHtPxbFGB3re-e6-JGVYI=",
    "https://media.istockphoto.com/id/1217848093/vector/pineapple-colorful-icon.jpg?s=1024x1024&w=is&k=20&c=NlXJhjSnvCphzM2YCsI7UFtzkgT61JUBaKbzOgv94WE=",
    "https://media.istockphoto.com/id/958726768/vector/flat-durian-and-cut-piece-vector-with-isolated-white-background-king-of-fruit-tropical-friut.jpg?s=1024x1024&w=is&k=20&c=gW-Wj5LGsjoPVmyifx3ln5ZJ0WiO5X_tjoVEbPlubBY=",
    "https://media.istockphoto.com/id/595151156/vector/watermelon-slice-cartoon-style-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=HTF4a3NO-ZB3OSNvJovDxyAQShpdVbI3FzwWqjPX0pg=",
    "https://media.istockphoto.com/id/697404054/vector/whole-carambola-and-carambola-in-section-flat-isolated.jpg?s=1024x1024&w=is&k=20&c=1XIhmT3gPCrmchhzoUsrOIGtMXsv0sdAfVz0z2sL8D0=",
    "https://media.istockphoto.com/id/1316081627/vector/vector-illustration-of-exotic-fruit-rambutan-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=wZp5E8VY82zaZ4c8sRgcVb7wwjhM8tWl4XHHhwrqAwk=",
    "https://media.istockphoto.com/id/1271340936/vector/mangosteen-whole-fruit-with-piece-flat-design.jpg?s=1024x1024&w=is&k=20&c=I8rvAu2KY8a5368YAKrH5NKBFRINEFMTuRNkDPoPi90=",
    "https://media.istockphoto.com/id/1170164115/vector/red-dragon-fruit-whole-fruit-and-half-tropical-fruits-for-healthy-lifestyle-realistic-3d.jpg?s=1024x1024&w=is&k=20&c=qfrEb5lQfV4MYUuCTUT-V2tICLtzGhIEwYP-PeCciFs=",
];

function initialassign(){
    let arr = [];
    for(let a = 0; a < 9; a++){
        let randomvalue = Math.floor(Math.random() * 14);
        arr.push(
            <div className="imageBox">
                <img id={randomvalue} src={imagearr[randomvalue]} alt={randomvalue} />
            </div>
        );
    }
    return arr;
}

export default function Playground(){
    
    const [point, setpoint] = useState(0);
    const [maxpoint, setmaxpoint] = useState(0);
    const [arrmemory, setArrData] = useState([]);
    const [gameover, setGameover] = useState([false]);
    const [arrdiv, setarrdiv] = useState(initialassign());


    function increasepoint(value){
        // console.log(value);
        if(!arrmemory.includes(parseInt(value))){ 

            if(point >=14){
                setpoint(point + 1);
                setmaxpoint(point + 1);
                setGameover(true);
            }else{
                setArrData(
                    [...arrmemory,parseInt(value)]
                );
        
                // console.log(arrmemory);
                
                setpoint(point + 1);
                if(maxpoint <= point){
                    setmaxpoint(point + 1);
                }
            }
        }else{
            setpoint(0);
            setArrData([]);
        }

    }

    function Game(){
        if(gameover === true){
            return (
                <div>
                    <p>Congratulations!!! You reach the max points [15].</p>
                    <button onClick={() =>{window.location.reload(true);}}>Click to Restart Game</button>
                </div>
            )
        }else{
            return (
                <div id="gamediv">
                    <div id="imagegrid">
                        <ArrinDiv />
                    </div>
                </div>
            );
        }
    }


    

    useEffect(() => {
        let allimageboxes = document.getElementsByTagName("img");
        for(let b = 0; b < allimageboxes.length; b++){
            allimageboxes[b].addEventListener("click",(e) =>{
                // console.log(e.target.id);

                let newarr = arrdiv;
                newarr.splice(b, 1);
                let randomvalue = Math.floor(Math.random() * 14);
                newarr.push(
                    <div className="imageBox">
                        <img id={randomvalue} src={imagearr[randomvalue]} alt={randomvalue} />
                    </div>
                );

                setarrdiv([...newarr]);

                increasepoint(e.target.id);
            });
        }
    });

    
    function ArrinDiv(){
        return arrdiv;
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
                <p>Current Score : <b>{point}</b></p>
                <p>Highest Score : <b>{maxpoint}</b></p>
            </div>
            <Game />
        </div>
    );
}