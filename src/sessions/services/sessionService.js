import API from "../../core/services/apiConfig";

import StorageService from '../../core/services/storageService';

const SessionService = {
    start: async() => {
        let response = await API.session.post("/session");        
        return response.data;
    },
    end: async() => {
        let sessionId = StorageService.get('session-id');
        let response = await API.session.delete(`/session/${sessionId}`);
        return response.data;
    },
    checkStatus: async() => {
        let sessionId = StorageService.get('session-id');
        let response = await API.session.get(`/session/status/${sessionId}`);
        return response.data;       
    }
}


export default SessionService;