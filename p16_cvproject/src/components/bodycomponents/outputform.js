import React, {Component} from "react";
import "../../styles/outputformdesign.css";

class OutputForm extends Component{
    // constructor(props){
    //     super(props);
    // }

    Expdiv = ()=>{
        const exp = this.props.getdata["experience"];
        const list=[];
        for(let b = 0; b < exp.length; b++){
            list.push(
                <div className="outputminibox">
                    <p className="numbertitle">Experience {b+1}</p>
                    <div>
                        <span><span className="outputtitle">Job Name : </span> {exp[b]["expname"]}</span>
                        <span><span className="outputtitle">Job Start-Year : </span> {exp[b]["expstartyear"]}</span>
                        <span><span className="outputtitle">Job End-Year : </span> {exp[b]["expendyear"]}</span>
                    </div>
                </div>
            );
        }

        return list;
    }

    Edudiv = ()=>{
        const edu = this.props.getdata["education"];
        const list=[];
        for(let b = 0; b < edu.length; b++){
            list.push(
                <div className="outputminibox">
                    <p className="numbertitle">Education {b+1}</p>
                    <div>
                        <span><span className="outputtitle">Education Name : </span> {edu[b]["eduname"]}</span>
                        <span><span className="outputtitle">Education Start-Year : </span> {edu[b]["edustartyear"]}</span>
                        <span><span className="outputtitle">Education End-Year : </span> {edu[b]["eduendyear"]}</span>
                    </div>
                </div>
            );
        }

        return list;
    }


    
    render(){

        const {getdata,getid} = this.props;
        const deletefun = this.props.getdelete;

        return (
            <div className="mainoutput">
                <p className="numbertitle">{getid + 1}.</p>
                <p><span className="outputtitle">Name : </span> {getdata["name"]}</p>
                <p><span className="outputtitle">Gender : </span> {getdata["gender"]}</p>
                <p><span className="outputtitle">Email : </span> {getdata["email"]}</p>
                <p><span className="outputtitle">Ph no : </span> {getdata["phone"]}</p>
                <div>
                    <this.Edudiv />
                </div>
                <div>
                    <this.Expdiv />
                </div>
                <button onClick={() => deletefun(getdata["id"])} >Delete</button>
            </div>
        );
    }
}

export default OutputForm;