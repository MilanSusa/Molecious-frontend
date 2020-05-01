import React from "react";
import Logo from "../Logo/Logo";
import Description from "./Description/Description";
import Container from "react-bootstrap/Container";

const Home = props => {
    return (
        <Container>
            <Logo/>
            <Description/>
        </Container>
    );
};

export default Home;