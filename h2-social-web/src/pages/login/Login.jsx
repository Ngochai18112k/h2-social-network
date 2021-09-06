import { useContext, useRef } from 'react';
import './login.scss';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">H2 Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on H2 Social
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email} />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress color="white" size="20px" /> : 'Log In'}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/" style={{ width: "100%", display: "flex", textDecoration: "none" }}>
                            <button className="loginRegisterButton">
                                {isFetching ? <CircularProgress color="white" size="20px" /> : 'Create a new Account'}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login