import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Signup";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import Demo from "./Demo";

const App = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Demo}/>
                    <Route path="/register" Component={Signup}/>
                    <Route path="/login" Component={Login}/>
                    <Route path="/home" Component={Home}/>
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;