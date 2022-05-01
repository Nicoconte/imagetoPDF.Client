import React, { useContext, useEffect } from "react";
import { SessionContext } from "../../../core/context";

import './SessionManager.css';

const SessionManager = ({ children }) => {
    
    const {
        manageSession
    } = useContext(SessionContext);

    useEffect(() => {
        manageSession();
    }, [])

    return (
        <div className="session-manager-container">
            { children }
        </div>
    );
}

export default SessionManager;