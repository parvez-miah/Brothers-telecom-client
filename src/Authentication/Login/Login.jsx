import React, { useContext } from 'react'
import './Login.css'
import { Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2';


const Login = () => {

    const { signIn, error, loading, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"



    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
               
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    }


    return (
        <Container>
            <div className="font">
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h1>Login</h1>
                        <p>Please fill in this form to Login a account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="psw" required />
                        <hr />

                        <div>
                            <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                            <button type="submit" className="registerbtn">Login</button>
                        </div>

                        <div className="container signin">
                            <p>Dont have an account? < Link to="/signup">Register now</Link>.</p>
                        </div>
                    </div>
                </form>

                {/* <h4>Or Login Using Social Link</h4>
              <hr />

              <div className="font">
                  <button className="btn-primary font" onClick={signInUsingGoole} ><i class="fab fa-google">    <span className="font mx-3">Log in Using Google</span></i></button>
              </div>
              <br />

              <div className="font">
                  <button className="btn-primary font" onClick={logInUsingGithub} ><i class="fab fa-github">    <span className="font mx-3">Log in Using GitHub</span></i></button>
              </div> */}

            </div>
        </Container>
    )
}

export default Login