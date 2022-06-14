import '../../App.css';
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Login from "../Login";
import SignUp from "../SignUp";
import {ErrorPage} from "../ErrorPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Index = () => {
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

export default Index;
