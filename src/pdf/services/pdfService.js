import API from "../../core/services/apiConfig"

import StorageService from "../../core/services/storageService"

const PDFService = {
    convert: async(pdfName) => {
        let response = await API.pdf.get("/pdf/test", {
            headers: {
                "session-key": StorageService.get("session-id"),
                "Content-Type": "multipart/form-data"
            },
            responseType: 'arraybuffer',
        });

        let link = document.createElement("a");

        link.href = window.URL.createObjectURL(new Blob([response.data]), {
            type: "application/pdf"
        });

        link.download = `${pdfName}.pdf`
        link.click();

        URL.revokeObjectURL(link.href)
    }
}


export default PDFService;