import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import { SessionContext } from "../../../core/context";

import './DeleteImageButton.css'

import ImageService from '../../services/imageService'

const DeleteImageButton = ({
    imageName
}) => {

    const {
        removeSessionImages
    } = useContext(SessionContext);

    const onDeleteImage = () => {
        ImageService.delete(imageName).then(r => {
            if (r.Success) {
                removeSessionImages(imageName);
            } else {
                alert(r.Reason);
            }
        });
    }

    return (
        <div className="delete-image-button-container">
            <Button onClick={onDeleteImage} size="sm" className="text-white btn-danger">
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </div>
    )
}

export default DeleteImageButton;