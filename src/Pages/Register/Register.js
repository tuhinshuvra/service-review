import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import toast from 'react-hot-toast';
import './Register.css';
import useTitle from '../Hooks/useTitle';

const Register = () => {
    const { setLoading } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    useTitle('Register');

    const { createUser } = useContext(AuthContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        if (password.length < 6) {
            setError('Password must be more than 6 character.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password do not matched');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log("User Data:", result.user);
                toast.success('User created successfully.')

                setError('');
                form.reset();
            })
            .catch(error => {
                console.log("Error : ", error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleTermsAndCondition = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='container p-5'>
            <h3 className=' text-center fw-bold text-primary'>Registration Form</h3>

            <Form onSubmit={handleOnSubmit} >
                <Form.Text className="text-danger text-center">
                    {error}
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type='checkbox'
                        onClick={handleTermsAndCondition}
                        label={<>Accept <Link to="/terms"> Terms and Conditions</Link> </>}
                    ></Form.Check>
                </Form.Group>
                <p className='text-primary'>If you are already registered <Link to="/login">go to Login</Link></p>

                <Button className="" variant="primary " type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div >
    );
};

export default Register;