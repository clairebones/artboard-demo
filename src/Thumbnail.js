import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './Thumbnail.scss';

const Thumbnail = ({
    artboard,
    id
}) => {
    console.log('artboard', artboard);
    const files = artboard.files;
    const thumbnail = files[0].thumbnails[0];
    console.log('id', id);

    return (
        <Link to={`/`+id} className="thumbnail">
            <div className="imageContainer">
                <img src={thumbnail.url}/>
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