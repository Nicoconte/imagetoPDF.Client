import React from 'react';
import { useEffect } from 'react';

import './Main.css';

import PDFContainer from '../../../pdf/components/pdf-container/index'
import ImagesContainer from '../../../images/components/images-container/index'

import SessionService from '../../../sessions/services/sessionService'
import StorageService from '../../services/storageService'

const Main = () => {

    useEffect(() => {

        const checkSessionIsAlive = () => {
            SessionService.checkStatus().then(r => {
                if (!r.Status) {
                    SessionService.end().then(r => {
                        if (r.Success) {
                            alert("Session expired");
                            StorageService.remove("session-id");
                        }                        
                    });
                }
            });
        }

        const createSession = () => {
            SessionService.start().then(res => {
                let sessionID = res.SessionID;
                StorageService.set("session-id", sessionID);
            });
        }

        if (!StorageService.exists("session-id")){
            createSession();
        } else {
            checkSessionIsAlive();
        }

    }, [])

    return (
        <div className='main-container'>
            <PDFContainer />
            <ImagesContainer />
        </div>
    );
}

export default Main;