import React, { useEffect, useState } from "react";
import "../styles/footer.css"

function Footer(){
    const [curyear, setcuryear] = useState(0);

    useEffect(() => {
        let date = new Date();
        let year = date.getFullYear();
        setcuryear(year);
    },[]);

    return (
        <footer>
            <span>Copyright &copy; {curyear}.  All Rights reaserved to Lon Shan.</span>
        </footer>
    );
}

export default Footer;