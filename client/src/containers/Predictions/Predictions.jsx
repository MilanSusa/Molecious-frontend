import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Prediction from "../../components/Prediction/Prediction";

const Predictions = props => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/v1/inferences/users/jwt");
            setPredictions(res.data.data);
        })();
    }, []);

    return (
        <Container>
            {predictions.map(prediction => <Prediction key={prediction.id} prediction={prediction} />)}
        </Container>
    );
};

export default Predictions;
