import React, {useReducer} from "react";
import {AuthReducer, initialLoginDataState} from "../../../modules/Auth/_redux/authRedux";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../Firebase/firebaseConfig"


//Cours : 103
const SignUp = () => {


    const [state, dispatch] = useReducer(AuthReducer, initialLoginDataState);
    const {username, email, password, confirmPassword, isError, helperText} = state;

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();//Block window reload
        const {email, password} = state
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log("USER:", user)
            })
            .catch(error => {
                console.log("error", error.message)
                dispatch({
                    type: "setIsError",
                    payload: true
                })
                dispatch({
                    type: "setHelperText",
                    payload: error.message
                })
            })
    }

    const btnSubmit = username === "" || email === "" || password === "" || password !== confirmPassword
        ? <button disabled>Inscription</button> : <button>Inscription</button>


    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {isError && (<span>{helperText}</span>)}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
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

