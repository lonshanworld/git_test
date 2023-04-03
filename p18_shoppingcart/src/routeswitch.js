import React,{ useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import Shop from "./components/shop";
import App from "./App";
import Nav from "./components/nav";
import Footer from "./components/footer";
import CheckDetail from "./components/checkdetail";

const listofitems = [
    {
        "image" : "https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=1024x1024&w=is&k=20&c=ZpnWFU4355v8gt37qLl1v4tf5Ha3QX4vhDZrqUDHhCQ=",
        "name" : "Yellow Dress",
        "id" : "SS-0001",
        "price" : 12000,
        "remainingitem" : 45,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1345115725/photo/beautiful-vintage-dress-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=M37d6a2e8Wldl27_OSCykjrm9hmE_KdDjC2mhLsch_g=",
        "name" : "Rose Color Dress",
        "id" : "SS-0002",
        "price" : 14000,
        "remainingitem" : 12,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=n-53sp-rgdEyhzQLT5YTUEcafMj2qhf4Ke7mMWAQpxs=",
        "name" : "Black Shirt",
        "id" : "SS-0003",
        "price" : 3600,
        "remainingitem" : 102,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/482949611/photo/blank-white-t-shirt-front-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=58bLtJ17YJYQ9QrQdMczQ53x_zMM7Owx7b1oepsExWk=",
        "name" : "White Shirt",
        "id" : "SS-0004",
        "price" : 3600,
        "remainingitem" : 102,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1280295051/vector/vector-3d-realistic-plastic-round-black-rimmed-eye-glasses-icon-closeup-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=mdYzeQFkMgHDfrSMFca9c1MP5mXwaeut6F-3DjaR8jA=",
        "name" : "Glasses",
        "id" : "SS-0005",
        "price" : 40000,
        "remainingitem" : 30,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1146412896/photo/blue-silk-tie-on-white-background.jpg?s=1024x1024&w=is&k=20&c=WzdFjTQ2VPB54CCw68gnTJXpMVpHm2fw-Cq66s8RdIc=",
        "name" : "Blue color Ties",
        "id" : "SS-0006",
        "price" : 11900,
        "remainingitem" : 20,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/898399056/photo/yellow-tie.jpg?s=1024x1024&w=is&k=20&c=VhU_qteCzRhl4V4-nn5z4e2oNIuu0KnyFfI0HL3QNgY=",
        "name" : "Golden Color Ties",
        "id" : "SS-0007",
        "price" : 12900,
        "remainingitem" : 10,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1149654373/photo/creative-minimal-paper-idea-concept-white-shoe-with-white-background-3d-render-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=9HN481QAehGnJvKvDBp7RPnItSenX1pHy4ARHtylCqQ=",
        "name" : "White Shoes",
        "id" : "SS-0008",
        "price" : 89000,
        "remainingitem" : 38,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1168124826/photo/pink-shoes-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=uAp0usZBEfVXveKU3w5SLJQuhHOloqJFVrYE_gc-vTA=",
        "name" : "Pink Shoes",
        "id" : "SS-0009",
        "price" : 79000,
        "remainingitem" : 40,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/465388887/photo/a-bright-red-high-heel-womans-shoe-by-itself.jpg?s=1024x1024&w=is&k=20&c=h4tY0BjlIp8p2SBMgSazPkdfVf3zTDK84Ox-VYORIwk=",
        "name" : "Red High Heel",
        "id" : "SS-0010",
        "price" : 60000,
        "remainingitem" : 70,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/173943143/photo/pink-patent-high-heeled-shoe-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=Lal-C7AII8wQE16Q-2AMY3w6KPN_jUA9BAAlZ3XJvXA=",
        "name" : "Purple High Heel",
        "id" : "SS-0011",
        "price" : 60000,
        "remainingitem" : 3,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1158095251/vector/textile-tote-bag-for-shopping-mockup.jpg?s=1024x1024&w=is&k=20&c=S9P55RIRbJNHyMzHrmTbsE1xKQburbtuqlaEo2GtEg0=",
        "name" : "White Bag",
        "id" : "SS-0012",
        "price" : 2200,
        "remainingitem" : 5,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/618731934/photo/orange-handbag.jpg?s=1024x1024&w=is&k=20&c=1L3LhIwz_JI0aBLVxIkUkiAk4LOa50_KkpEaK4syoR4=",
        "name" : "Orange Bag",
        "id" : "SS-0013",
        "price" : 68000,
        "remainingitem" : 15,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1334510184/photo/blue-jeans-trouser-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=JEGfSSs2SBiNZIA5Qmk6ZnrpkrXLEMra_vuX5yozUaM=",
        "name" : "Blue Jean Trouser",
        "id" : "SS-0014",
        "price" : 15000,
        "remainingitem" : 50,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1224545469/photo/close-up-green-sport-pants-sweatpants-jogging-for-men-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=pIBNwe8r3aeRDL5mcgGojtGRqYCYh9xzFeMvV9jaB3I=",
        "name" : "Green Trouser",
        "id" : "SS-0015",
        "price" : 15000,
        "remainingitem" : 50,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "image" : "https://media.istockphoto.com/id/1360311770/photo/trekking-trousers.jpg?s=1024x1024&w=is&k=20&c=k1su4EoatzJdshr4Ts_UR9wWYzBhdsHWJimlfLEVdqM=",
        "name" : "Gray Trouser",
        "id" : "SS-0016",
        "price" : 15000,
        "remainingitem" : 50,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];

function RouteSwitch(){

    const [items, setitems] = useState(listofitems);
    const [currentarrid, setcurrentarrid] = useState(0);
    const [cartitem, setCartItem] = useState([]);

    function getsingleitemdetail(id){
        let index;
        for(let a = 0; a< items.length; a++){
            if(id === items[a].id){
                index = a;
                break;
            }
        }
        setcurrentarrid(index)
        return items[index];
    }

    function changeamount(value){
        let newitemsarr = items;
        newitemsarr[currentarrid].remainingitem = newitemsarr[currentarrid].remainingitem - value;
        let newitem = newitemsarr[currentarrid]
        setitems(newitemsarr);
        assignIntoCart(newitem,value);
    }

    function assignIntoCart(item,value){
        let newItem = {
            "image" : item.image,
            "name" : item.name,
            "id" : item.id,
            "price" : item.price,
            "itemamount" : value,
        }

        setCartItem([...cartitem,newItem]);
    }

    function clearcartItem(){
        let newarr = [];
        setCartItem([...newarr]);
    }

    return(
        <BrowserRouter>
            <Nav cartlength = {cartitem.length}/>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/shop" element={<Shop getitems={items} />} />
                <Route path="/shop/:id" element={<CheckDetail getitemdetail={getsingleitemdetail} changeamountfun ={changeamount} />} />
                <Route path="/cart" element={<Cart cartItem={cartitem} clearcart={clearcartItem} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RouteSwitch;