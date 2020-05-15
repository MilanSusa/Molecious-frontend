import {useEffect} from "react";
import axios from "axios";

const Logout = props => {
    useEffect(() => {
        (async () => {
            await axios.post("/api/v1/users/logout");
            window.location = "/";
        })();
    }, []);

    return null;
};

export default Logout;