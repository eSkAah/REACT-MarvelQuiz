import '../../App.css';
import Header from "../Pages/Header/Header";
import Landing from "../Pages/Landing/Landing";
import Footer from "../Pages/Footer/Footer";
import Welcome from "../Pages/Welcome/Welcome";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import {ErrorPage} from "../Pages/ErrorPage/ErrorPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'/welcome'} element={<Welcome/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signup'} element={<SignUp/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
