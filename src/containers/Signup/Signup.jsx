import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {withRouter} from "react-router";
import Alert from "react-bootstrap/Alert";

const Signup = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);

    const firstNameChangeHandler = e => {
        setError(null);
        setFirstName(e.target.value);
    }

    const lastNameChangeHandler = e => {
        setError(null);
        setLastName(e.target.value);
    }

    const emailChangeHandler = e => {
        setError(null);
        setEmail(e.target.value);
    }

    const passwordChangeHandler = e => {
        setError(null);
        setPassword(e.target.value);
    }

    const submitHandler = async e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }
        setValidated(true);

        try {
            await axios.post("http://localhost:8080/api/v1/users/sign-up", {
                firstName,
                lastName,
                email,
                password
            });
            props.history.push("/login");
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={e => submitHandler(e)}>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        placeholder="First name"
                        onChange={e => firstNameChangeHandler(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        placeholder="Last name"
                        onChange={e => lastNameChangeHandler(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
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
                    Submit
                </Button>
            </Form>
            <br/>
            {error ? <Alert variant="danger">{error}</Alert> : null}
        </Container>
    );
};

export default withRouter(Signup);