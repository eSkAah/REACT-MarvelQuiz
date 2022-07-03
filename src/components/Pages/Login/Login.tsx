import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useReducer, useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {AuthReducer, initialLoginDataState} from "../../../modules/Auth/_redux/authRedux";
import {auth} from "../../Firebase/firebaseConfig";

const Login = () => {

    const [state, dispatch] = useReducer(AuthReducer, initialLoginDataState);
    const {isError, helperText} = state;
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [btn, setBtn] = useState<boolean>(false);
    
    useEffect(() => {
        if (password.length > 5 && email.length > 5) {
            setBtn(true);
        } else if (btn) {
            setBtn(false);
        }
    }, [password, email, btn]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log("USER:", user)
                navigate("/welcome")
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


    console.log({email: email, password: password})

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {isError && <span className="error">{helperText}</span>}
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} type="text" value={email} id="email"
                                       autoComplete="off"
                                       required/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input type="password" onChange={e => setPassword(e.target.value)} value={password}
                                       id="password"
                                       autoComplete="off" required/>
                                <label htmlFor="password">Password</label>
                            </div>
                            {<button disabled={!btn}>Login</button>}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Vous n'êtes pas inscrit? Veuillez vous
                                inscrire.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;