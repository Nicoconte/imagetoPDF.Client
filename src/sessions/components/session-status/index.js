import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { SessionContext } from "../../../core/context";

import './SessionStatus.css'

const SessionStatus = () => {

    const {
        sessionStatus
    } = useContext(SessionContext);

    return (
        <div className="session-status-container">
            <FontAwesomeIcon icon={faUserCircle} className={sessionStatus ? "text-success" : "text-danger"}/>
        </div>
    );
}

export default SessionStatus