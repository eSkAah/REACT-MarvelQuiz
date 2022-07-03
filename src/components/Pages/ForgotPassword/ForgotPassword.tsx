import {Link} from "react-router-dom";
import React, {ChangeEvent, useReducer, useState} from "react";
import {AuthReducer, initialLoginDataState} from "../../../modules/Auth/_redux/authRedux";


//VIDEO COURS 116.16      11MINS
const ForgotPassword = () => {

    const [state, dispatch] = useReducer(AuthReducer, initialLoginDataState);
    const {isError, helperText} = state;
    const [btn, setBtn] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const disabled = email === "";


    const handleSubmit = () => {
        console.log("Form submit")
    }


    console.log(email)

    return (
        <div className="box">
            <div className="slContainer">
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {isError && <span className="error">{helperText}</span>}
                        <h2>Forgot Password</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input type="text" value={email}
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                       id="email"
                                       autoComplete="off"
                                       required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            {<button disabled={disabled}>Send</button>}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déja inscrit? Veuillez vous connecter.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;