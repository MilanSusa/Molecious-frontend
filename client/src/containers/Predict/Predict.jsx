import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Prediction from "../../components/Prediction/Prediction";

const Predict = props => {
    const [picture, setPicture] = useState(null);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        bsCustomFileInput.init();
    }, []);

    const pictureChangeHandler = e => {
        setError(null);
        setDisabled(false);
        setPicture(e.target.files[0]);
    }

    const inferenceSubmitHandler = async e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            return;
        }

        setValidated(true);
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("file", picture);
            const res = await axios.post("http://localhost:8080/api/v1/inferences", formData, {
                withCredentials: true
            });
            setResponse(res.data.data);
        } catch (err) {
            setError(err.response.data.message);
        }

        setLoading(false);
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
                <Button variant="dark" type="submit" disabled={disabled}>
                    {loading ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        : null}
                    Predict
                </Button>
                {response ? <Prediction key={response.id} prediction={response}/> : null}
            </Form>
            <br/>
            {error ? <Alert variant="danger">{error}</Alert> : null}
        </Container>
    );
};

export default Predict;