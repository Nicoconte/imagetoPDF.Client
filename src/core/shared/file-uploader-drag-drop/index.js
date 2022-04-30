import React from "react";

import './FileUploaderDragDrop.css'

import { FileUploader } from "react-drag-drop-files";


const FileUploaderDragDrop = () => {
    return (
        <div className="file-uploader-drag-drop-container">
            <FileUploader />
        </div>
    );
};

export default FileUploaderDragDrop;