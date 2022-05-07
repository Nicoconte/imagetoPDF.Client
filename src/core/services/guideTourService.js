const GuideTourService = {
    getSteps : () => {
        return [
            {
                selector: ".file-uploader-drag-drop-container",
                content: "Drop your files or click and upload your files manually"
            },
            {
                selector: ".images-preview-container",
                content: "You'll see your uploaded files here"
            },
            {
                selector: "#pdf-default-switch",
                content: "By default it will have a random name but you can set it by pressing the switch"
            },
            {
                selector: ".convert-pdf-button-container",
                content: "Now you're ready to convert your images to pdf!"
            }
        ]
    }
}

export default GuideTourService