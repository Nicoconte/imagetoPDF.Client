import API from "../../core/services/apiConfig";

import StorageService from '../../core/services/storageService';

const ImageService = {
    upload: async(formData) => {
        let response = await API.image.post("/image", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "session-key": StorageService.get("session-id")
            }
        })

        return response.data;
    },
    delete: async(imageName) => {
        let response = await API.image.delete(`/image/${imageName}`, {
            headers: {
                "session-key": StorageService.get("session-id")
            }
        })

        return response.data;
    }
}

export default ImageService;