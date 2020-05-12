import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from "axios";

const Predict = props => {
    const [picture, setPicture] = useState(null);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        bsCustomFileInput.init();
    }, []);

    const pictureChangeHandler = e => {
        setError(null);
        setPicture(e.target.files[0]);
    }

    const inferenceSubmitHandler = async e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }
        setValidated(true);

        try {
            const formData = new FormData();
            formData.append("file", picture);
            await axios.post("/api/v1/inferences", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={e => inferenceSubmitHandler(e)}>
                <Form.Group controlId="formBasicPicture">
                    <Form.Label>Choose an image</Form.Label>
                    <Form.File
                        required
                        id="custom-file"
                        label="No file chosen"
                        data-browse="Take a picture"
                        onChange={e => pictureChangeHandler(e)}
                        custom
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Predict
                </Button>
            </Form>
            <br/>
            {error ? <Alert variant="danger">{error}</Alert> : null}
        </Container>
    );
};

export default Predict;