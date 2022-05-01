import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Button } from "react-bootstrap";

import './DeleteImageButton.css'

const DeleteImageButton = () => {
    return (
        <div className="delete-image-button-container">
            <Button size="sm" className="text-white btn-danger">
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </div>
    )
}

export default DeleteImageButton;