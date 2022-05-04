import React, { useContext } from "react";

import { v4 as uuidv4 } from 'uuid';

import { Form } from "react-bootstrap";
import { SessionContext } from "../../../core/context";

import './PDFOptions.css';

const PDFOptions = () => {

    const {
        setpdfNameSwitchState,
        pdfNameSwitchState,
        setPdfName,
        pdfName
    } = useContext(SessionContext);

    const handleSwitchState = (e) => {
        if (e.target.checked) {
            setPdfName('')
        } else {
            setPdfName(uuidv4())
        }

        setpdfNameSwitchState(e.target.checked);
    }

    const handleTextboxInput = (e) => {        
        setPdfName(e.target.value);
    }

    console.log("Archivo del switch ", pdfNameSwitchState);

    return (
        <div className={pdfNameSwitchState ? "pdf-options-container" : "pdf-options-container-reduced" }>
            <Form>
                <Form.Check
                    type="switch"
                    id="pdf-default-switch"
                    label="Set filename"
                    onChange={handleSwitchState}
                    checked={pdfNameSwitchState}
                />
                <Form.Check
                    type="text"
                    id="pdf-name-textbox"
                    className={pdfNameSwitchState ? "pdf-name-textbox-visible" : "pdf-name-textbox-hidden"}
                    placeholder="Example:'Im a test!'"    
                    onChange={handleTextboxInput}        
                    value={pdfName}   
                />
            </Form>
        </div>
    );
}

export default PDFOptions;