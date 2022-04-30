import React from "react";

import './PDF.css'

import ConvertPDFButton from "./convert-pdf-button";

import FileUploaderDragDrop from '../core/shared/file-uploader-drag-drop'

const PDF = () => {
    return (
        <div className="pdf-container">
            <FileUploaderDragDrop />
            <ConvertPDFButton />
        </div>
    );
};

export default PDF;