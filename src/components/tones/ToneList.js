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
    const deleteTone = id => {
        ToneManager.delete(id)
            .then(() => ToneManager.getAll().then(setTones));
    };

    useEffect(() => {
        getTones();
    }, []);

    const addTone = () => {
        props.removeDisplay()
        props.history.push("/tones/new")
    };
    

    return (
        <>
                    <Button type="button" bg="dark" variant="dark"
                className="btn"
                onClick={addTone}>
                Add Tone
                </Button>
            <div className="container-cards">
                {tones.map(tone =>
                    <ToneCard
                        key={tone.id}
                        tone={tone}
                        deleteTone={deleteTone}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default ToneList