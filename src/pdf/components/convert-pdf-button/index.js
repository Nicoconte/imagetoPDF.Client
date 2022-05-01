import React from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import './ConvertPDFButton.css';

const ConvertPDFButton = () => {

    return (
        <div className="convert-pdf-button-container">
            <Button 
                onClick={() => alert("A")} 
                className="w-100 btn-danger text-white text-center"
                size="lg"
            >
                <FontAwesomeIcon icon={faFilePdf} /> 
                Convert to PDF
            </Button>
        </div>
    );
}

export default ConvertPDFButton;