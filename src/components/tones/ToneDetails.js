import React, { useState, useEffect } from 'react';
import ToneManager from '../../modules/ToneManager';
import ToneGuitarCard from "./ToneGuitarCard"
import ToneAmpCard from "./ToneAmpCard"
import TonePedalList from "./TonePedalList"

const ToneDetails = props => {
    const [guitar, setGuitar] = useState({ name: "" });
    const [amp, setAmp] = useState({ name: "" });

    useEffect(() => {
        ToneManager.getWithGuitar(props.toneId)
            .then(tone => {
                setGuitar({
                    name: tone.guitar.name
                });
            });
    }, [props.toneId]);

    useEffect(() => {
        ToneManager.getWithAmp(props.toneId)
            .then(tone => {
                setAmp({
                    name: tone.amp.name
                });
            });
    }, [props.toneId]);


    return (
        <>
        <div className="guitar-card">
                <ToneGuitarCard
                    key={guitar.id}
                    guitar={guitar}
                    {...props}
                />
            
        </div>
        <div className="amp-card">
                <ToneAmpCard
                    key={amp.id}
                    amp={amp}
                    {...props}
                />
            
        </div>
        <div className="pedal-list">
            <TonePedalList 
            {...props}
            />
        </div>
        </>
    );
}

export default ToneDetails;