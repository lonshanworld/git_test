import React,{useState, useEffect} from "react";

export default function Gamediv(props){
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
    ];


    return (
        <div>
            <button onClick={()=>props.increase()}>Increase Point</button>
            <button onClick={()=>props.decrease(3)}>Decrease Point</button>
        </div>
    );
}