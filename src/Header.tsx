import React from "react";
import './Header.css'
class ClassHeader extends React.Component{
    constructor(props:object){
        super(props)
        this.state={currVal:""};
    }


    render():JSX.Element{
        return (
            <html lang="en" dir="ltr">

            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>PX Dynamics</title>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </head>

            <nav>
            <div className="menu">
            <div className="logo">
                <a href="#">PX Dynamics</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
            </div>
            </nav>

            <div className="img"></div>
            <div className="center">
            <div className="title">Capture life's moments with precision and clarity—discover our premium cameras today!</div>
            <div className="btns">
                <button>Learn More</button>
                <button>Subscribe</button>
            </div>
            </div>

            </html>
        )
    }
}

export default ClassHeader;
