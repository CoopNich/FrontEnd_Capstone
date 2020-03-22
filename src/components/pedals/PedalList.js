import React, { useState, useEffect } from "react";
import PedalCard from "./PedalCard";
import PedalManager from "../../modules/PedalManager";
import { Button, Card, CardDeck } from "react-bootstrap"

const PedalList = (props) => {
    const [pedals, setPedals] = useState([]);

    const getPedals = () => {
        return PedalManager.getAll().then(pedalsArray => {
            setPedals(pedalsArray)
        });
    };


    const deletePedal = id => {
        PedalManager.delete(id)
            .then(() => PedalManager.getAll().then(setPedals));
    };

    useEffect(() => {
        getPedals();
    }, []);

    return (
        <>
            <Button type="button" bg="dark" variant="dark"
                className="btn"
                onClick={() => { props.history.push("/pedals/new") }}>
                Add Pedal
                </Button>
            <div className="container-cards">
                {pedals.map(pedal =>
                    <PedalCard
                        key={pedal.id}
                        pedal={pedal}
                        deletePedal={deletePedal}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default PedalList