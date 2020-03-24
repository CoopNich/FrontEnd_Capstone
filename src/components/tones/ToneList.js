import React, { useState, useEffect } from "react";
import ToneCard from "./ToneCard";
import ToneManager from "../../modules/ToneManager";
import { Button, Card, CardDeck } from "react-bootstrap"

const ToneList = (props) => {
    const [tones, setTones] = useState([]);

    const getTones = () => {
        return ToneManager.getAll().then(tonesArray => {
            setTones(tonesArray)
        });
    };

    useEffect(() => {
        getTones();
    }, []);

    return (
        <>
            <div className="container-cards">
                {tones.map(tone =>
                    <ToneCard
                        key={tone.id}
                        tone={tone}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default ToneList