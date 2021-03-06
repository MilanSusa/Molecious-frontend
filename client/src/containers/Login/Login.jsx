import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);

    const emailChangeHandler = e => {
        setError(null);
        setEmail(e.target.value);
    }

    const passwordChangeHandler = e => {
        setError(null);
        setPassword(e.target.value);
    }

    const loginSubmitHandler = async e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }
        setValidated(true);

        try {
            await axios.post("/api/v1/users/authenticate", {
                username: email,
                password
            });
            window.location = "/predict";
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={e => loginSubmitHandler(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter e-mail"
                        onChange={e => emailChangeHandler(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        onChange={e => passwordChangeHandler(e)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            <br/>
            {error ? <Alert variant="danger">{error}</Alert> : null}
        </Container>
    );
};

export default Login;