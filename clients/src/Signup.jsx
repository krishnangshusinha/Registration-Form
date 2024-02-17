import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    // states to store entered values of name,password,email
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();    // The useNavigate hook provides a simple and intuitive API for navigating between pages in your React application. It's designed to be used with functional components and hooks, and it simplifies the process of handling URL changes in your application

    const handleSubmit = (event) => {
        event.preventDefault();     // preventing default submit

        // posting the data( name, email ,password) to the backend
        axios.post('https://registration-form-5dyq.onrender.com/register', {name,email,password})      // send/posts data to this url    
        .then(result => {
            console.log(result);
            navigate("/login");   // this redirects to the login page when a user successfully registers
        })
        .catch(err => console.log(err))

    }

    return (
        <>

            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input type="text" placeholder="Enter Name.." autoComplete="off" name="email" className="form-control rounded-0" onChange={(event) => setName(event.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(event) => setEmail(event.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input type="password" placeholder="Enter password" name="password" className="form-control rounded-0" onChange={(event) => setPassword(event.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    </form>

                    <p> Already have an Account ? </p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                    </Link>

                </div>
            </div>

        </>
    );
}

export default Signup;
