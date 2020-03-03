import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './Thumbnail.scss';

const Thumbnail = ({
    artboard,
    id
}) => {
    const files = artboard.files;
    const thumbnail = files[0].thumbnails[0];

    return (
        <Link to={`/`+id} className="thumbnail">
            <div className="imageContainer">
                <img src={thumbnail.url} role="presentation"/>
            </div>
            <span className="artboardName">{artboard.name}</span>
        </Link>
    )
};

Thumbnail.propTypes = {
    artboard: PropTypes.object,
    id: PropTypes.string
};

export default Thumbnail;