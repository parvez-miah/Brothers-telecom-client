
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import useCart from '../../Hooks/useCart';




const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = ()=>{
        logOut()
            .then(() => { })
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img className="logo" src="https://i.ibb.co/n6wQpKK/logo.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/">Home</Link>
                            <Link to="/products">Explore</Link>
                            <Link to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart> <div className="badge badge-secondary">+{cart?.length || 0}</div></Link>
                            {

                                user? <>
                                   
                                    <Button className='btn-logOut' onClick={handleLogOut} variant="warning">LogOut</Button>{' '}


                                </>
                                :
                                <>
                                        <Link to="/signup"> <button className="btn-logOut">Sign Up</button></Link>

                                </>
                            }
                        </Nav>
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}

export default NavigationBar