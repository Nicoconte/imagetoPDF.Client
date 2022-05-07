import React from "react";
import { Button } from "react-bootstrap";

import { useTour } from "@reactour/tour";

import './GuideTour.css'

const GuideTour = () => {

    const { setIsOpen } = useTour();

    return (
        <div className="guide-tour-container">
            <Button size="lg" onClick={() => setIsOpen(true)}>
                How to use
            </Button>
        </div>
    )
}


export default GuideTour;