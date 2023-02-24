import React, {Component} from "react";
import InputForm from "./inputform";
import OutputForm from "./outputform";
import "../../styles/index.css";

class Mainform extends Component{
    constructor(props){
        super(props);

        this.state = {
            forms : []
        }
    }

    printdata = (data)=>{
        const newitem = data;
        const arr = this.state.forms;
        arr.push(newitem);
        this.setState({
            forms : [...arr]
        });
    }

    Outputformlooping = ()=>{
        let allforms = this.state.forms;
        let list = [];
        for( let a = 0 ; a < allforms.length; a++){
            list.push (<OutputForm getdata={allforms[a]} getid={a} getdelete={this.deletefun} />);
        }

        return list;
    }

    deletefun = (id) => {
        const arr = this.state.forms;
        const newarr = [];
        for(let d = 0; d < arr.length; d++){
            if(arr[d].id !== id){
                newarr.push(arr[d]);
            }
        }

        this.setState({
            forms : [...newarr],
        });
    }


    render(){
        return (
            <div id="mainform">
                <p>Please Enter Your Information</p>
                <InputForm getform={this.printdata}/>
                <this.Outputformlooping />
            </div>
        );
    };
}

export default Mainform;