import React, {useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

const Navigation = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post("/api/v1/users/jwt");
                setUser(res.data.data);
            } catch (err) {
                setUser(null);
            }
        })();
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {!user ?
                        <React.Fragment>
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </React.Fragment>
                        : null}
                    {user ?
                        <React.Fragment>
                            <Nav.Link href="/predict">Predict</Nav.Link>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </React.Fragment>
                        : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;