import React, { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import { SessionContext } from '../../context'

import ImageService from '../../../images/services/imageService'

import './FileUploaderDragDrop.css'

const FileUploaderDragDrop = () => {

    const {
        addSessionImages
    } = useContext(SessionContext);

    const fileTypes = ["png", "jpg", "jpeg"];

    const onFilesUploaded = (filesUploaded) => {
        let formData = new FormData();

        filesUploaded = [...filesUploaded];

        filesUploaded.forEach(f => {
            formData.append("images", f);
        })

        ImageService.upload(formData).then(r => {
            if (r.success) {
                let files = []

                r.filename.forEach(path => {
                    let pathSplitted = path.split("/");
                    let name = pathSplitted[pathSplitted.length - 1]

                    files.push({
                        name: name,
                        path: path
                    })
                })
                
                addSessionImages(files)
            }
        })
    }

    return (
        <div className="file-uploader-drag-drop-container">
            <FileUploader handleChange={onFilesUploaded} name="images" types={fileTypes} multiple={true} />
        </div>
    );
};

export default FileUploaderDragDrop;