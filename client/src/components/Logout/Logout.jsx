import {useEffect} from "react";
import axios from "axios";
import {withRouter} from "react-router";

const Logout = props => {
    useEffect(() => {
        (async () => {
            await axios.post("/api/v1/users/logout");
            props.history.push("/");
        })();
    }, []);

    return null;
};

export default withRouter(Logout);