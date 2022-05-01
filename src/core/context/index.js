import { createContext, useState } from "react";

import SessionService from "../../sessions/services/sessionService";
import StorageService from "../services/storageService";

const SessionContext = createContext();

const SessionProvider = (props) => {
    const [sessionStatus, setSessionStatus] = useState(false);
    const [sessionImages, setSessionImages] = useState([]);

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
            });             
        }
    }

    const removeSessionImages = (imgName) => {
        let files = [...sessionImages];

        let index = files.findIndex(i => i.name === imgName);
        
        files.splice(index, 1);

        setSessionImages([...files]);
    }

    const addSessionImages = (files) => {
        files.concat([...sessionImages]);
        setSessionImages(files);
    }

    return (
        <SessionContext.Provider value={{
            manageSession,
            sessionImages,
            addSessionImages,
            removeSessionImages
        }}>
            {props.children}
        </SessionContext.Provider>
    );

}

export { SessionContext, SessionProvider }


