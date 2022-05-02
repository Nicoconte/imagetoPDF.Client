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
            <Spinner animation="border" variant="danger" role="status" hidden={!isLoading}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default LoadingSpinner