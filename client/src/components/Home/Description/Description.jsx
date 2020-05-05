import React from "react";

const Description = props => {
    return (
        <React.Fragment>
            <p className="text-justify">
                Have you ever wondered if that strange looking mole you have is
                <strong> potentially dangerous?</strong>
            </p>
            <p className="text-justify">
                You probably wanted to schedule an appointment at the local dermatologist but you just
                <strong> couldn't find the time </strong>
                for it. And when you had some free time, you just forgot about it. After some time passed, you
                remembered the mole and started
                <strong> stressing out </strong>
                about it again.
            </p>
            <p className="text-justify">
                Forget about this tedious process of not managing to find time to visit a dermatologist and
                stressing about that mole and find out if it is potentially dangerous
                <strong> by just taking a picture of it!</strong>
            </p>
        </React.Fragment>
    );
};

export default Description;