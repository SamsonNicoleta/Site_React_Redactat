import React from "react";
import "./HeadTittle.css";
import PropTypes from "prop-types";

const HeadTittle = ({backgroundImage, titleText}) => {
    return (
        <>
            <style>
                {`
                    body {
                        background-image: url(${backgroundImage});
                        background-attachment: scroll;

                    }
                `}
            </style>
            <article className="title">
                <h1>
                    {titleText}
                </h1>
            </article>
        </>
    );
};

HeadTittle.propTypes = {
    backgroundImage: PropTypes.string,
    titleText: PropTypes.string
};

export default HeadTittle;