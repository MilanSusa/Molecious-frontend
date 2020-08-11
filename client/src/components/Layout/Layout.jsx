import React from "react";
import Navigation from "../../containers/Navigation/Navigation";

const Layout = props => {
    return (
        <React.Fragment>
            <Navigation/>
            {props.children}
        </React.Fragment>
    );
};

export default Layout;