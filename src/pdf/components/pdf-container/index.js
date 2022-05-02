import React from "react";

import './PDFContainer.css'

import ConvertPDFButton from "../convert-pdf-button";

import FileUploaderDragDrop from '../../../core/components/file-uploader-drag-drop'
import PDFOptions from "../pdf-options";

const PDFContainer = () => {
    return (
        <div className="pdf-container">
            <FileUploaderDragDrop />
            <PDFOptions />
            <ConvertPDFButton />
        </div>
    );
};

export default PDFContainer;