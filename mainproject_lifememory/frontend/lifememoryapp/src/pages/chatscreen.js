import React, { useEffect,useState,useContext, useRef, useCallback } from "react";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";
import { getApiRequest } from "../utils/apiRequests";
import getImageUrl from "../utils/imagetype";
import { ShowChatScreenContext } from "../pages/mainscreen";
import messageModel from "../models/message_model";
import Logo from "../assets/logo.png";
import { ShowLoadingContext } from "../customhooks/showloadingscreen";
import Chatmessage from "../components/rightchats/chatmessage";
import VideoCall from "../components/rightchats/videocall";
import Peer from "simple-peer";

function ChatScreen(props){
    const [cookies] = useCookies(["jwtforlifememory"]);
    const [frienddata, setFrienddata] = useState(Object);
    const [imgurl, setImgurl] = useState("");
    const {toggleShowloading} = useContext(ShowLoadingContext);
    const [originuserimgurl , setOriginuserimgurl] = useState("");
    const [ChatList, setChatlist] = useState([]);
    const [chatroomId, setChatroomId] = useState("");
    
    const {showchatscreenFunc} = useContext(ShowChatScreenContext);
    const [showCall , setShowCall] = useState(false)
    const [showacceptcall, setShowacceptcall] = useState(false);
    const inputRef = useRef();
    const myvideoRef = useRef();
    const othervideoRef = useRef();
    const connectionRef = useRef();
    const [mystream, setmyStream] = useState(null);
    const [otherstream, setotherSteam] = useState(null);

    const [othersocketId, setOthersocketId] = useState("");

    
    const socket = io(`http://localhost:5000`,{
        path : "/chatsocket"
    });

    function changelist (newmessage){
        
        const scroller = document.getElementById("scrollcontroller");
        console.log("Checking image urls");
        console.log("user image "+ originuserimgurl);
        console.log("friend image " + imgurl);
        setChatlist(prevarr => [...prevarr, newmessage]);

        scroller.scrollTop = scroller.scrollHeight;
        
    };

    function sendMessagefunc(e){

        e.preventDefault();
     
        const newmessage = {
            userName : props.originaluserInfo.userName,
            userId : props.originaluserInfo._id,
            text : inputRef.current.value,
            img : null
        };
        socket.emit("sendMessage",newmessage,chatroomId);
        
        inputRef.current.value = "";
        
    }

    async function getImagedata(imgId){
        if(imgId !== null){
            const response = await getApiRequest(`${process.env.REACT_APP_BASE_API}image?imageId=${imgId}`, cookies.jwtforlifememory);
            const responsetext = await response.json();

            const url = getImageUrl(responsetext.message.imageDetailInfo.image.data);
            console.log(url);
            console.log("geting image url from url for friend =================");
            setImgurl(url);
        }
    }

    async function getfriendData(){
        const response = await getApiRequest(
            `${process.env.REACT_APP_BASE_API}user?userId=${props.id}`,
            cookies.jwtforlifememory,
        );
        const data = await response.json();
        setFrienddata(data["message"]["userData"]);
        getImagedata(data["message"]["userData"]["profileImg"]);
    }

    async function getcurrentuserprofile(){
        if(props.originaluserInfo.profileImg !== null){
            const response = await getApiRequest(`${process.env.REACT_APP_BASE_API}image?imageId=${props.originaluserInfo.profileImg}`, cookies.jwtforlifememory);
            const responsetext = await response.json();

            const url = getImageUrl(responsetext.message.imageDetailInfo.image.data);
            console.log(url);
            console.log("get iamge data for self ==============================");
            setOriginuserimgurl(url);
        }
    }
    
    

    async function getchatsocketid(){
        const response = await getApiRequest(
            `${process.env.REACT_APP_BASE_API}chat?friendId=${props.id}`,
            cookies.jwtforlifememory,
        );
        const data = await response.json();
        const chatId = data["chatId"];
        setChatroomId(chatId);
        startsocket(chatId)
    }

    const fetchdata = async()=>{
        toggleShowloading(true);
        await getfriendData();
        await getcurrentuserprofile();
        await getchatsocketid();
        toggleShowloading(false);
    }

    const allchatlist = useCallback(()=>{
        return ChatList;
    },[ChatList]);


    function startsocket(chatid){
        socket.emit("joinRoom", chatid);   
        socket.on("receiveMessage",(txt)=>{
          
            const newmessage = new messageModel(
                txt["userName"],
                txt["userId"],
                txt["userId"] === props.originaluserInfo._id ? originuserimgurl : imgurl,
                txt["text"],
                txt["img"],
                txt["datetime"], 
            );
            changelist(newmessage)
        });
        
        socket.on("sendsocketIds",(idlist)=>{
     
            console.log("This is inside sendidlist");
            idlist.map(singleid =>{
                if(singleid !== socket.id){
                    console.log(singleid);
                    setOthersocketId(singleid);
                }
            });
        })

        socket.on("usercalled",()=>{
            console.log("inside usercalled");
            setShowacceptcall(true);
        });

        socket.on("callaccepted",()=>{
            // show both videos
            console.log("Inside call accepted");
            // peer.signal(othersocketId);
        });

        socket.emit("getallsocketId",chatid);
    }


    function getvideocall(){
        setShowCall(true);
        // console.log(myvideoRef);
        navigator.mediaDevices.getUserMedia({
            video : true,
            audio : true,
        }).then(stream =>{
            setmyStream(stream);
            myvideoRef.current.srcObject = stream;
        
            // console.log(myvideoRef.current.srcObject);
        })
    }

    function acceptCall(){
        setShowacceptcall(false);
        const peer = new Peer({
            initiator : false,
            trickle: false,
            mystream,
        });
        peer.on("signal",()=>{
            console.log("accept call on signal");
            socket.emit("answercall",othersocketId);
        });
        peer.on("stream",(currentstream)=>{
            console.log("accept call on stream");
            setotherSteam(currentstream);
            othervideoRef.current.srcObject = currentstream;
        });
        peer.signal(othersocketId);
        getvideocall();
        
        connectionRef.current = peer;
    }

    function callother(){
        const peer = new Peer({
            initiator : true,
            trickle: false,
            mystream,
        });

        peer.on("signal",()=>{
            console.log("call other on signal" + othersocketId);
            socket.emit("calluser",othersocketId)
        });

        peer.on("stream",(currentstream)=>{
            console.log("call other on stream");
            setotherSteam(currentstream);
            othervideoRef.current.srcObject = currentstream;
        });
        getvideocall();
        socket.on("callaccepted",()=>{
            // show both videos
            console.log("Inside call accepted");
            peer.signal(othersocketId);
        });
        connectionRef.current = peer;
    }

    function endCall(){
        setShowCall(false);
        myvideoRef.current.srcObject = null;
        othervideoRef.current.srcObject = null;
        mystream.getTracks().forEach((track)=>{
            // if(track.readyState !== "ended"){
            //     track.st
            // }
            track.stop();
        });
        setmyStream(null);
    }

    useEffect(()=>{
        fetchdata();
    
        return () => {
            socket.disconnect();
        };
    },[]);

    return (
        <div 
        id="chatdimension"
        className="relative h-screen w-full">
            
            <div className="absolute z-10 px-8 appbarshadow h-12 w-full bg-cuswood flex justify-between items-center flex-row rounded-b-lg">
                <div className="text-white">
                    <button
                    onClick={()=>showchatscreenFunc(false, "")} 
                    className="border border-white rounded-full w-7 h-7">
                        <i className="fa-solid fa-angle-left fa-lg"></i>
                    </button>
                    <span className="pl-2">Go back to new feeds</span>
                </div>
                <div>
                    <button className="button mr-2">
                        <i className="fa-solid fa-phone fa-lg"></i>
                    </button>
                    <button
                    onClick={callother}  
                    className="button ml-2">
                        <i className="fa-solid fa-video fa-lg"></i>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center pt-12 w-full bgClr">
                <div className="flex justify-center items-center w-4/6 border-b border-cuswoodlight h-12">
                    <img src={imgurl === "" ? Logo : imgurl} className="rounded-full h-10 w-10"/>
                    <span className="pl-2 text-sm truncate">{frienddata["userName"]}</span>
                </div>
            </div>
            {showacceptcall&& <button
                onClick={acceptCall} 
                className="flex flex-col justify-center px-3 py-2 bg-green-300 text-black items-center active:text-blue-500 rounded-md">
                    <span className="">Your friend is calling you!</span>
                    <div className="text-base flex justify-center items-center">
                        <span>Accept</span>
                        <i className="fa-solid fa-check fa-lg pl-1"></i>
                    </div>
                </button>}
            {showCall && <VideoCall myvideo={myvideoRef} othervideo={othervideoRef} getvideoFunc={endCall}/>}
            <div 
            id="scrollcontroller"
            className="w-full max-h-screen overflow-y-scroll flex-col absolute bottom-14 pb-5">
                {/* {
                    AllChatList.map((chat)=><Chatmessage chatobj={chat} currentuserId={props.originaluserInfo._id} />)
                } */}
                <Chatmessage allchat={allchatlist} currentuserId={props.originaluserInfo._id} friendImg={imgurl} selfImg={originuserimgurl}/>
            </div>
            <div className="backgroundClr txtinputshadow bottom-0 h-14 w-full absolute flex justify-evenly items-center rounded-t-lg">
                <i className="fa-solid text-gray-400 fa-image fa-xl active:bg-gray-500 hover:bg-gray-500 active:text-white hover:text-white px-2.5 py-5 ml-2 rounded-full transition-all ease-in-out duration-200"></i>
                <i className="fa-solid text-gray-400 fa-video fa-xl active:bg-gray-500 hover:bg-gray-500 active:text-white hover:text-white px-2.5 py-5 mx-2 rounded-full transition-all ease-in-out duration-200"></i>
                <form onSubmit={sendMessagefunc} className="h-full w-full flex justify-center items-center">
                    <input 
                    className="bgClr w-full h-8 px-4 rounded-full border-2 border-blue-500 outline-none"
                    ref={inputRef}/>
                </form>
                <i 
                className="fa-solid z-10 text-gray-400 fa-paper-plane fa-xl active:bg-gray-500 hover:bg-gray-500 active:text-white hover:text-white px-2.5 py-5 mx-2 rounded-full transition-all ease-in-out duration-200"
                onClick={sendMessagefunc}></i>
            </div>
        </div>
    );
}

export default ChatScreen;