import React, { useState, useEffect } from 'react';
import ToneManager from '../../modules/ToneManager';
import ToneGuitarCard from "./ToneGuitarCard"
import ToneAmpCard from "./ToneAmpCard"
import TonePedalList from "./TonePedalList"

const ToneDetails = props => {
    const [tone, setTone] = useState({});
   

    useEffect(() => {
        ToneManager.getWithGuitarAndAmp(props.toneId)
            .then(tone => {
                setTone(tone);
            });
    }, [props.toneId]);

    return (
        <>
        <div className="guitar-card">
                <ToneGuitarCard
                    key={tone.guitarId}
                    guitar={tone.guitar}
                    settings={tone.guitarSettings}
                    {...props}
                />
            
        </div>
        <div className="amp-card">
                <ToneAmpCard
                    key={tone.ampId}
                    amp={tone.amp}
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