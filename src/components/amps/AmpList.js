import React, { useState, useEffect } from "react";
import AmpCard from "./AmpCard";
import AmpManager from "../../modules/AmpManager";
import { Button, Card, CardDeck } from "react-bootstrap"

const AmpList = (props) => {
    const [amps, setAmps] = useState([]);

    const getAmps = () => {
        return AmpManager.getAll().then(ampsArray => {
            setAmps(ampsArray)
        });
    };


    const deleteAmp = id => {
        AmpManager.delete(id)
            .then(() => AmpManager.getAll().then(setAmps));
    };

    useEffect(() => {
        getAmps();
    }, []);

    return (
        <>
            <Button type="button" bg="dark" variant="dark"
                className="btn"
                onClick={() => { props.history.push("/amps/new") }}>
                Add Amp
                </Button>
            <div className="container-cards">
                {amps.map(amp =>
                    <AmpCard
                        key={amp.id}
                        amp={amp}
                        deleteAmp={deleteAmp}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default AmpList