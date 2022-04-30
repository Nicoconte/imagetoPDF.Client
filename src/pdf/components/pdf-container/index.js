import React from "react";

import './PDFContainer.css'

import ConvertPDFButton from "../convert-pdf-button";

import FileUploaderDragDrop from '../../../core/components/file-uploader-drag-drop'

const PDFContainer = () => {
    return (
        <div className="pdf-container">
            <FileUploaderDragDrop />
            <ConvertPDFButton />
        </div>
    );
};

export default PDFContainer;