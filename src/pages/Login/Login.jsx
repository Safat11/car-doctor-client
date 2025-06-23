import { Link, useLocation } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input className="btn btn-primary mt-6" type="submit" value="LOGIN" />
                            </fieldset>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;