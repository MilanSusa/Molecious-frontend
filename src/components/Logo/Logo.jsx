import React from "react";
import logo from "../../assets/images/molecious-logo.png";
import Image from "react-bootstrap/Image";

const Logo = props => {
    return (
        <Image src={logo} fluid/>
    );
};

export default Logo;