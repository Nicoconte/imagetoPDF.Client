import { v4 as uuidv4 } from 'uuid';

import { createContext, useState } from "react";

import SessionService from "../../sessions/services/sessionService";
import StorageService from "../services/storageService";

const SessionContext = createContext();


const SessionProvider = (props) => {
    const [sessionStatus, setSessionStatus] = useState(false);
    const [sessionImages, setSessionImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pdfNameSwitchState, setpdfNameSwitchState] = useState(false);
    const [pdfName, setPdfName] = useState(uuidv4());

    const resetPdfConfig = () => {
        setpdfNameSwitchState(false);
        setPdfName(uuidv4())
    }

    const startNewSession = () => {
        SessionService.start()
        .then(res => {
            let sessionID = res.SessionID;
            StorageService.set("session-id", sessionID);
            setSessionStatus(true);
        })
        .catch(err => {
            if (StorageService.exists("session-id")) {
                StorageService.remove("session-id");
            }
            setSessionStatus(false);
        })
    }

    const manageSession = () => {
        if (!StorageService.exists("session-id")) {
            startNewSession();

        } else {
            SessionService.checkStatus().then(r => {
                if (!r.Status) {
                    SessionService.end().then(r => {
                        if (r.Success) {
                            alert("Session expired");
                            startNewSession();
                        }                        
                    });
                } 

                setSessionStatus(r.Status);
            })
            .catch(err => {
                if (StorageService.exists("session-id")) {
                    StorageService.remove("session-id");
                    startNewSession();                
                }                
            })             
        }
    }

    const removeSessionImages = (imgName) => {
        let files = [...sessionImages];

        let index = files.findIndex(i => i.name === imgName);
        
        files.splice(index, 1);

        setSessionImages([...files]);
    }

    const addSessionImages = (files) => {
        sessionImages.concat([...files]);
        let newFiles = sessionImages.concat([...files])
        setSessionImages(newFiles);
    }

    const removeAllSessionImages = () => {
        setSessionImages([]);
    }

    return (
        <SessionContext.Provider value={{
            setLoading,
            loading,
            manageSession,
            sessionImages,
            addSessionImages,
            removeSessionImages,
            removeAllSessionImages,
            sessionStatus,
            setSessionStatus,
            pdfNameSwitchState,
            setpdfNameSwitchState,
            pdfName,
            setPdfName,
            resetPdfConfig,
        }}>
            {props.children}
        </SessionContext.Provider>
    );

}

export { SessionContext, SessionProvider }


