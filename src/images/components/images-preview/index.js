import React, { useContext } from "react";
import { SessionContext } from "../../../core/context";
import ImagePreviewItem from "../image-preview-item";

import './ImagesPreview.css';

const ImagesPreview = () => {
    const {
        sessionImages : images
    } = useContext(SessionContext);

    return (
        <div className="images-preview-container">
            {!images.length && <h1>No files :C {images.length}</h1>}
            {images.map(img => (
                <ImagePreviewItem
                    key={img.name}
                    imageName={img.name}
                    imagePath={img.path}
                />
            ))}             
        </div>
    );
}

export default ImagesPreview