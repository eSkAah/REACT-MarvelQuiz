import * as CSS from "csstype";

const batman = require("../../images/batman.png");

const centerH2: CSS.Properties = {
    textAlign: "center",
    marginTop: "50px"
}

const centerImg: CSS.Properties = {
    display: "block",
    margin: "40px auto",
}

export const ErrorPage = () => {


    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oops ! Cette page n'éxiste pas.</h2>
                <img style={centerImg} src={batman} alt="error_page"/>
            </div>
        </div>
    )
}

