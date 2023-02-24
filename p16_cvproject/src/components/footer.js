import React,{Component} from "react";
import "../styles/footer.css"

class Footer extends Component{
    newdate = new Date();
    currentyear = this.newdate.getFullYear();

    render(){
        return (
            <footer>
                <span>Copyright &copy; <span>{this.currentyear}</span> . All Rights reserved to Lon Shan. </span>
            </footer>
        );
    }
}

export default Footer;