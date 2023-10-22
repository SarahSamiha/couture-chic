import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [loginSuccess, setLoginSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();

    const handleLogin = e => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');

        signIn(email, password)
            .then(() => {
                setLoginSuccess('Login Successful')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col  w-full max-w-sm text-darkGreen text-xl font-bold">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl rounded-xl  bg-primary bg-opacity-30">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control w-[300px]">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-12">
                                    {
                                        showPassword ?
                                            <AiFillEyeInvisible></AiFillEyeInvisible> :
                                            <AiFillEye></AiFillEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary border-none">Login</button>
                            </div>
                        </form>
                        {
                            loginSuccess && <p className="text-success text-lg text-center pb-3">
                                {loginSuccess}
                            </p>
                        }
                        {
                            loginError && <p className="text-error text-lg text-center pb-3">
                                {loginError}
                            </p>
                        }
                        <div className="text-center">
                            <button onClick={signInWithGoogle} className="btn btn-outline border-none">
                                <FaGoogle></FaGoogle>
                                Login with Google</button>
                        </div>
                        <p className="text-center pt-3 pb-3 ">Do not have an account? <Link className="text-error" to='/signUp'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;