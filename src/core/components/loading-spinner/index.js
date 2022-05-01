import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { SessionContext } from "../../context";

import './LoadingSpinner.css'

const LoadingSpinner = () => {
    const {
        loading : isLoading
    } = useContext(SessionContext)

    return (
        <div className="loading-spinner-container">
            {!isLoading && <Spinner animation="border" variant="info" role="status" hidden={true} />}
            {isLoading && <Spinner animation="border" variant="info" role="status" hidden={false} />}            
        </div>
    )
}

export default LoadingSpinner