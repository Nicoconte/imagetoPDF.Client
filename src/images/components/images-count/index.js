import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import { SessionContext } from "../../../core/context";

import './ImagesCount.css'

const ImagesCount = () => {
    const {
        sessionImages
    } = useContext(SessionContext);

    return (
        <div className="images-count-container">
            <Button className="btn btn-primary text-white">
                {sessionImages.length}
            </Button>
        </div>
    );
}


export default ImagesCount