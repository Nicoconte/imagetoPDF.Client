import React, { useContext } from "react";
import './ConvertPDFButton.css';

import { SessionContext } from '../../../core/context'
import PDFService from '../../services/pdfService'

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ConvertPDFButton = () => {

    const {
        sessionImages,
        removeAllSessionImages,
        setLoading,
        resetPdfConfig,
        pdfName,
        pdfNameSwitchState
    } = useContext(SessionContext)


    const onSubmit = () => {

        if (pdfName.length <= 0 && pdfNameSwitchState) {
            alert("You should insert a name");
            return;
        }

        console.log("Nombre ", pdfName);

        setLoading(true);

        setTimeout(() => {
            PDFService.convert(pdfName)
            .then(_ => {
                removeAllSessionImages();
                resetPdfConfig();
            });

            setLoading(false);
        }, 500)
    }

    return (
        <div className="convert-pdf-button-container">
            <Button 
                onClick={onSubmit} 
                className="w-100 btn-danger text-white text-center"
                size="lg"
                disabled={!sessionImages.length}
            > 
                Convert to PDF
                <FontAwesomeIcon icon={faArrowCircleRight} />                
            </Button>
        </div>
    );
}

export default ConvertPDFButton;