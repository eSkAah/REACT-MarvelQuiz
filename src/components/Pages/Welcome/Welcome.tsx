import {Logout} from "../../Logout/Logout";
import {Quiz} from "../../Quiz/Quiz";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../../Firebase/firebaseConfig"
import {useNavigate} from "react-router-dom";

const Welcome = () => {

    const navigate = useNavigate();
    const [userSession, setUserSession] = useState<any>(null);

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            user ? setUserSession(user) : navigate("/")
        });

    }, [navigate]);

    return userSession === null ? (
            <>
                <div className="loader"/>
                <p className="loaderText">Loading...</p>
            </>
        )
        :
        (
            <div className="quiz-bg">
                <div className="container">
                    <Logout/>
                    <Quiz/>
                </div>
            </div>
        )
}

export default Welcome;
