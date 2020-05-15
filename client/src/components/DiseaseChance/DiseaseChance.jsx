import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DiseaseChance = props => {

    const convertToChance = probability => {
        return (probability * 100).toFixed(2);
    };

    return (
      <Card>
          <Card.Body>
              <Row>
                  <Col>
                      {props.disease}
                  </Col>
                  <Col>
                      {convertToChance(props.probability)}%
                  </Col>
              </Row>
          </Card.Body>
      </Card>
    );
};

export default DiseaseChance;