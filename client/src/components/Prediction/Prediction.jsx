import React from 'react';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiseaseChance from "../DiseaseChance/DiseaseChance";

const Prediction = props => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Image src={props.prediction.imageUrl} fluid/>
                    </Col>
                </Row>
                <br/>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <strong>Disease:</strong>
                            </Col>
                            <Col>
                                <strong>Chance:</strong>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <br/>
                <DiseaseChance
                    disease={"Actinic Keratoses"}
                    probability={props.prediction.actinicKeratosesProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Basal Cell Carcinoma"}
                    probability={props.prediction.basalCellCarcinomaProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Benign Keratosis Like Lesions"}
                    probability={props.prediction.benignKeratosisLikeLesionsProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Dermatofibroma"}
                    probability={props.prediction.dermatofibromaProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Melanoma"}
                    probability={props.prediction.melanomaProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Melanocytic Nevi"}
                    probability={props.prediction.melanocyticNeviProbability}
                />
                <br/>
                <DiseaseChance
                    disease={"Vascular Lesions"}
                    probability={props.prediction.vascularLesionsProbability}
                />
            </Card.Body>
        </Card>
    )
};

export default Prediction;