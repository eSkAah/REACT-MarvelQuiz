import {useEffect, useState} from "react";
import {auth} from "../Firebase/firebaseConfig"
import {signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom";


export const Logout = () => {

    const navigate = useNavigate();
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    useEffect(() => {
        if (checked) {
            console.log("disconnected")
            signOut(auth)
                .then(() => {
                    console.log("You are disconnected")
                    setTimeout(() => {
                        navigate("/")
                    }, 1000)
                })
                .catch((error) => {
                    console.log(error)
                })


        }
    }, [checked]);


    return (

        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={handleCheckedChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round"/>
            </label>
        </div>
    )
}

