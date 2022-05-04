import React, { useContext, useEffect } from "react";
import { SessionContext } from "../../../core/context";

import './SessionManager.css';

import ImageService from '../../../images/services/imageService'

const SessionManager = ({ children }) => {

    const {
        manageSession
    } = useContext(SessionContext);

    useEffect(() => {
        manageSession();

        window.addEventListener('beforeunload', async(event) => {
            // Cancel the event as stated by the standard.
            event.preventDefault();
               
            await ImageService.deleteAll();

            // Chrome requires returnValue to be set.
            event.returnValue = '';
        });

    }, [])

    return (
        <div className="session-manager-container">
            {children}
        </div>
    );
}

export default SessionManager;