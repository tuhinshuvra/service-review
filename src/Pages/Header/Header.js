import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Button, Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Logo from '../../assets/images/logo/online-service.png';
import './Header.css';
import useTitle from '../Hooks/useTitle';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    useTitle('Header');
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log("Error : ", error); })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='pt-2 pb-2'>
            <Container>
                <Link className=' text-decoration-none fw-bolder text-light' to='/'>
                    <Image className='' style={{ width: "125px" }} src={Logo} alt="logo" />
                    <Link to="/" className='text-decoration-none'> <Navbar.Brand>Electronics Doctor</Navbar.Brand></Link>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className='ms-auto'>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/blog" >Blog</Link>


                        <Nav className=' text-light'>
                            {user?.uid ?
                                <>
                                    {user?.displayName}
                                    <Link className=' text-decoration-none text-light fw-bolder me-2' to="/addservice" >Add Service</Link>
                                    <Link className=' text-decoration-none text-light fw-bolder me-2' to="/myReview" >My Reviews</Link>
                                    <div>
                                        <Button onClick={handleLogOut} className=' btn btn-sm btn-danger ms-2'>Logout</Button>
                                    </div>
                                    {
                                        user?.photoURL ?
                                            <OverlayTrigger placement="left" overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}>
                                                {({ ref, ...triggerHandler }) => (
                                                    <Button variant="dark"  {...triggerHandler}>
                                                        <Link to="/profile"><Image ref={ref} roundedCircle style={{ width: '30px' }} src={user?.photoURL} /> </Link>
                                                    </Button>
                                                )}
                                            </OverlayTrigger>
                                            :
                                            <Link to="/profile"> <FaUser onMouseOver={user?.displayName} className='ms-2'></FaUser></Link>
                                    }

                                </>
                                :
                                <>
                                    <Link className=' text-decoration-none text-light fw-bolder me-2' to="/register" >Register</Link>
                                    <Link className=' text-decoration-none text-light fw-bolder' to="/login">Login</Link>
                                </>
                            }
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;