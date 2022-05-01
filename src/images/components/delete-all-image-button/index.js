import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import ImageService from "../../services/imageService";

import { SessionContext } from '../../../core/context'

import './DeleteAllImageButton.css'

const DeleteAllImageButton = () => {

    const {
        removeAllSessionImages
    } = useContext(SessionContext)

    const handleEndSession = () => {
        if (!window.confirm("Do you want to delete all files?")) return;

        ImageService.deleteAll().then(r => {
            if (r.Success) {
                removeAllSessionImages();
            } else {
                alert(r.Reason);
            }
        })
    }

    return (
        <div className="delete-all-image-button-container">
            <Button onClick={handleEndSession} className="btn btn-danger text-white">
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </div>
    )
}

export default DeleteAllImageButton;