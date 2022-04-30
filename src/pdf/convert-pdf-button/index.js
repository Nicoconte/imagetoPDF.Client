import React from "react";
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
                Convert to PDF
            </Button>
        </div>
    );
}

export default ConvertPDFButton;