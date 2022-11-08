import React, { useContext, useReducer, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { ButtonGroup, Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import toast from 'react-hot-toast';
import './Login.css';


const Login = () => {
    const { user, setLoading, signIn, googleProviderLogin } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("User Data : ", user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.log("Error : ", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const userData = result.user;
                setError('');
                navigate(from, { replace: true });
                console.log("Google User Data : ", userData);
            })
            .catch(error => console.error("Google Provider Error : ", error))
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    return (
        <div className='container p-5'>

            <h3 className=' text-center fw-bold text-primary'>Login Form</h3>

            <Form onSubmit={handleOnSubmit}>
                <Form.Text className=" text-danger text-center ">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button className="" variant="primary " type="submit">
                    Login
                </Button>
                <p className=' text-primary'>If you are not yet registered <Link to="/register" >go to Register</Link></p>
            </Form>

            <div className=' mt-2 text-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant='outline-primary' className=' mb-1'><FaGoogle /> Login With Google</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;