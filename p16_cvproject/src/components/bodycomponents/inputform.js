import React, {Component} from "react";
import "../../styles/inputformdesign.css";
import uniqid from "uniqid";

class InputForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            singleform : {
                id : uniqid(),
                name : "",
                gender : "",
                email : "",
                phone : "",
                education : [],
                experience : [],
            },
            edunum : 1,
            expnum : 1,
        }

        // const {printdata} = this.props;
    }

    EducationForm = () =>{
        let num = this.state.edunum;
        let list = [];
        for(let a = 0; a < num; a++){
            list.push(
                <div className="eduformdiv eedesign">
                    <div>
                        <label htmlFor={"eduname"+a}>Education Name</label>
                        <input type="text" id={"eduname"+a} name={"eduname"+a} />
                    </div>
                    <div>
                        <label htmlFor={"edustartyear"+a}>Start Year</label>
                        <input type="number" id={"edustartyear"+a} name={"edustartyear"+a} />
                    </div>
                    <div>
                    <label htmlFor={"eduendyear"+a}>End Year</label>
                        <input type="number" id={"eduendyear"+a} name={"eduendyear"+a} />
                    </div>
                </div>
            );
        }
        return list;
    }

    ExperienceForm = () =>{
        let num = this.state.expnum;
        let List = [];
        for (let b = 0; b < num; b ++){
            List.push(
                <div className="expformdiv eedesign">
                    <div>
                        <label htmlFor={"expname"+b}>Work Name</label>
                        <input type="text" id={"expname"+b} name={"expname"+b} />
                        
                    </div>
                    <div>
                        <label htmlFor={"expstartyear"+b}>Start Year</label>
                        <input type="number" id={"expstartyear"+b} name={"expstartyear"+b} />
                    </div>
                    <div>
                        <label htmlFor={"expendyear"+b}>End Year</label>
                        <input type="number" id={"expendyear"+b} name={"expendyear"+b} />
                    </div>
                </div>
            );
        }
        return List;
    }

    increaseEdunum = () => {
        this.setState({
            edunum : this.state.edunum + 1,
        })
    }

    increaseExpnum = () => {
        this.setState({
            expnum : this.state.expnum + 1,
        })
    }

    edumodel = (name,start,end) =>{
        const edu = {
            eduname : name,
            edustartyear : start,
            eduendyear : end
        }
        return edu;
    }

    expmodel = (name,start,end) =>{
        const exp = {
            expname : name,
            expstartyear : start,
            expendyear : end
        }
        return exp;
    }

    getValue = () => {
        let eduid = this.state.edunum;
        let expid = this.state.expnum; 

        const getform = document.forms.cvform;
        let formvalue = new FormData(getform);

        let newarrid = [];
        newarrid.push("name");
        newarrid.push("gender");
        newarrid.push("email");
        newarrid.push("phone");
        
        let eduarray =[];
        let exparray =[];
        for(let x =0; x < eduid; x++){
            eduarray.push(this.edumodel(formvalue.get(`eduname${x}`),formvalue.get(`edustartyear${x}`),formvalue.get(`eduendyear${x}`)));
            newarrid.push(`eduname${x}`);
            newarrid.push(`edustartyear${x}`);
            newarrid.push(`eduendyear${x}`);
        }

        for(let y =0; y < expid; y++){
            exparray.push(this.expmodel(formvalue.get(`expname${y}`),formvalue.get(`expstartyear${y}`),formvalue.get(`expendyear${y}`)));
            newarrid.push(`expname${y}`);
            newarrid.push(`expstartyear${y}`);
            newarrid.push(`expendyear${y}`);
        }
        this.updateValue(
            formvalue.get("name"),
            formvalue.get("gender"),
            formvalue.get("email"),
            formvalue.get("phone"),
            eduarray,
            exparray,
        );

        this.clearForm(newarrid);
    }

    clearForm = (arr)=>{
        for(let p = 0; p < arr.length; p++){
            const newid = document.getElementById(arr[p]);
            newid.value = null;
        }
    };

    updateValue =(cvname,cvgender,cvemail,cvphone, eduarr,exparr)=>{
        this.setState(
            (prevstate) => {
                const newstate = {...(prevstate.singleform)};
                newstate.id = uniqid();
                newstate.name =cvname;
                newstate.gender = cvgender;
                newstate.email = cvemail;
                newstate.phone = cvphone;
                newstate.education = eduarr;
                newstate.experience = exparr;
                return {singleform : newstate};
            },
            ()=>{
                const printdata = this.props.getform;
                console.log(this.state.singleform);
                printdata(this.state.singleform);
            }
        );
    }


    render(){

        return (
            <div id="formInput">
                <form action="" method="" id="cvform">
                    <div>
                        <label htmlFor="name">Enter Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="gender">Select Gender</label>
                        <select name="gender" id="gender" required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Enter Phone Number</label>
                        <input type="number" id="phone" name="phone" required/>
                    </div>
                    <div>
                        <div className="formmini">
                            <span className="formminititle">Education</span>
                            <this.EducationForm />
                            <button type="button" onClick={this.increaseEdunum}>Add more</button>
                        </div>
                        <div className="formmini">
                            <span className="formminititle">Experience</span>
                            <this.ExperienceForm />
                            <button type="button" onClick={this.increaseExpnum}>Add more</button>
                        </div>
                    </div>
                    <div id="mainbtn">
                        <button type="button" onClick={this.getValue}>Add to CV</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default InputForm;