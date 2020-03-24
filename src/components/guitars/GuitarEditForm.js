import React, { useState, useEffect } from "react"
import GuitarManager from "../../modules/GuitarManager"
import { Form, Button } from "reactstrap"

const GuitarEditForm
 = props => {
    const [guitar, setGuitar] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...guitar };
        stateToChange[evt.target.id] = evt.target.value;
        setGuitar(stateToChange);
    };

    const updateExistingGuitar = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedGuitar = {
            id: props.match.params.guitarId,
            name: guitar.name,
            userId: guitar.userId
        };

        GuitarManager.update(editedGuitar)
            .then(() => props.history.push("/guitars"))
    }

    useEffect(() => {
        GuitarManager.get(props.match.params.guitarId)
            .then(guitar => {
                setGuitar(guitar);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Form>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="name"
                        value={guitar.name}
                    />
                </div>
                <div>
                    <Button className="btn" bg="dark" variant="dark" type="button"
                        type="button" disabled={isLoading}
                        onClick={updateExistingGuitar}
                        className="btn btn-primary">
                        Update
                </Button>
                </div>
            </Form>
        </>
    );

}

export default GuitarEditForm

