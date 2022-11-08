import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className=' text-decoration-none fw-bolder text-light' to='/'>
                    <Image className=' me-2' style={{ width: "55px" }}
                    // src="" alt=""
                    >

                    </Image>
                    <Link to="/" className=' text-decoration-none'> <Navbar.Brand>Electronics Doctor</Navbar.Brand></Link>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className='ms-auto'>
                        {/* <Link className=' text-decoration-none text-light fw-bolder me-2 d-none d-lg-block' to="/">Home</Link> */}
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/blog" >Blog</Link>

                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/reviews" >My Reviews</Link>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/addservice" >Add Service</Link>
                        <Link className=' text-decoration-none text-light fw-bolder me-2 ' to="/logout">LogOut</Link>

                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/register" >Register</Link>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/login">Login</Link>

                        {/* <Nav className=' d-lg-none'> <LeftSideNav></LeftSideNav></Nav> */}
                        {/* <Nav className=' text-light'>
                            {user?.uid ?
                                <div>
                                    {user?.displayName}
                                    <Button onClick={handleLogOut} className=' btn btn-sm btn-danger ms-2'>Logout</Button>
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

                                </div>
                                :
                                <>
                                    <Link className=' text-decoration-none text-light fw-bolder me-2' to="/register" >Register</Link>
                                    <Link className=' text-decoration-none text-light fw-bolder' to="/login">Login</Link>
                                </>
                            }
                        </Nav> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;