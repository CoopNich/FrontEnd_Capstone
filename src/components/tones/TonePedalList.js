import React, { useState, useEffect } from "react";
import TonePedalCard from "./TonePedalCard";
import ToneManager from "../../modules/ToneManager";

const TonePedalList = (props) => {
    const [pedals, setPedals] = useState([]);

    const getPedals = () => {
        return ToneManager.getWithPedals(props.toneId).then(pedalsArray => {
            setPedals(pedalsArray)
        });
    };


    useEffect(() => {
        getPedals();
    }, [props.toneId]);

    return (
        <>
            <div className="pedal-cards">
                {pedals.map(pedal =>
                    <TonePedalCard
                        key={pedal.id}
                        pedal={pedal}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default TonePedalList