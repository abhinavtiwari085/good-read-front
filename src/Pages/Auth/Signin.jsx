
import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/AuthSlice";

export default function Signin() {
//useDispatch is another hook provided by React Redux, which allows functional components to dispatch actions to the Redux store
// enabling components to trigger state changes.
// usenavigate use totake pages forward or backward
//useSelector is a hook provided by React Redux that allows functional components to extract and access data from the Redux store

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth);

    const [signinDetails, setSignInDetails] = useState({
        email: '',
        password: '',
    });

    function handleFormChange(e) {
        const {name, value} = e.target;
        setSignInDetails({
            ...signinDetails,
            [name]: value
        });
    }

    function resetForm() {
        setSignInDetails({
            email: '',
            password: '',
        });
    }
    
    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signinDetails);
        const response = await dispatch(signin(signinDetails));
        if(response?.payload?.data) {
           navigate("/dashboard");
        }
        resetForm();
    }
    console.log(state);

    // useEffect(() => {
    //     if(state.isLoggedIn) {
    //         navigate("/dashboard");
    //     }
    // }, []);

    return (
        <Layout>
            <div className="h-[100vh] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-white text-5xl">Login to your account</h1>
                </div>
                <div className="mt-4">
                    <p className="text-white">
                        Donot have an account ? 
                        <Link to="/signup">
                            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                                Sign Up
                            </button>
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                        <div className="my-5 w-1/3 text-black">
                            <input
                                autoComplete="off"
                                type="email"
                                placeholder="email..."
                                className="px-8 py-3 bg-white w-full"
                                name="email"
                                onChange={handleFormChange}
                                value={signinDetails.email}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">
                            <input
                                autoComplete="off"
                                type="password"
                                placeholder="password..."
                                className="px-8 py-3 bg-white w-full"
                                name="password"
                                onChange={handleFormChange}
                                value={signinDetails.password}
                            />
                        </div>
                        <div className="my-5 w-1/3">
                            <button className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400" type="submit">
                                Submit
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Layout>
    );
}