import React, {useReducer, useState} from "react";
import {AuthReducer, initialLoginDataState} from "../../../modules/Auth/_redux/authRedux";


//Cours : 101.11 23min44
const SignUp = () => {


    const [state, dispatch] = useReducer(AuthReducer, initialLoginDataState);
    const [loginData, setLoginData] = useState();


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        switch (id) {
            case 'username':
                dispatch({
                    type: "setUsername",
                    payload: event.target.value
                })
                break;
            case 'email':
                dispatch({
                    type: "setEmail",
                    payload: event.target.value
                })
                break;
            case 'password':
                dispatch({
                    type: "setPassword",
                    payload: event.target.value
                })
                break;
            case 'confirmPassword':
                dispatch({
                    type: "setconfirmPassword",
                    payload: event.target.value
                })
                break;
        }
    }

    const btnSubmit = state.username === "" || state.email === "" || state.password === "" || state.password !== state.confirmPassword
        ? <button disabled>Inscription</button> : <button>Inscription</button>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        <h2>Inscription</h2>
                        <form>
                            <div className="inputBox">
                                <input onChange={handleInputChange} type="text" id="username" autoComplete="off"
                                       required/>
                                <label htmlFor="username">Username</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" onChange={handleInputChange} id="email" autoComplete="off" required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input type="password" onChange={handleInputChange} id="password" autoComplete="off"
                                       required/>
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="inputBox">
                                <input type="password" onChange={handleInputChange} id="confirmPassword"
                                       autoComplete="off" required/>
                                <label htmlFor="confirmPassword">Confirm password</label>
                            </div>

                            {btnSubmit}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

