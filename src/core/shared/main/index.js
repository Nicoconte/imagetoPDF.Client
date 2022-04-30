import React from 'react';
import { useEffect } from 'react';

import './Main.css';

import PDF from '../../../pdf/index'
import Images from '../../../images/index'

import SessionService from '../../services/sessionService'
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
            if (!StorageService.exists("session-id")) {
                SessionService.start().then(res => {
                    let sessionID = res.SessionID;
                    StorageService.set("session-id", sessionID);
                });
            } else {
                checkSessionIsAlive();
            }
        }
        createSession();
    }, [])

    return (
        <div className='main-container'>
            <PDF />
            <Images />
        </div>
    );
}

export default Main;