import React, { useState, useEffect } from "react";
import GuitarCard from "./GuitarCard";
import GuitarManager from "../../modules/GuitarManager";
import { Button, Card, CardDeck } from "react-bootstrap"

const GuitarList = (props) => {
    const [guitars, setGuitars] = useState([]);

    const getGuitars = () => {
        return GuitarManager.getAll().then(guitarsArray => {
            setGuitars(guitarsArray)
        });
    };


    const deleteGuitar = id => {
        GuitarManager.delete(id)
            .then(() => GuitarManager.getAll().then(setGuitars));
    };

    useEffect(() => {
        getGuitars();
    }, []);

    return (
        <>
            <Button type="button" bg="dark" variant="dark"
                className="btn"
                onClick={() => { props.history.push("/guitars/new") }}>
                Add Guitar
                </Button>
            <div className="container-cards">
                {guitars.map(guitar =>
                    <GuitarCard
                        key={guitar.id}
                        guitar={guitar}
                        deleteGuitar={deleteGuitar}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default GuitarList
