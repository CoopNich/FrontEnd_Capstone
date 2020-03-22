import React, { useState, useEffect } from "react"
import PedalManager from "../../modules/PedalManager"
import { Form, Button } from "reactstrap"

const PedalEditForm = props => {
    const [pedal, setPedal] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...pedal };
        stateToChange[evt.target.id] = evt.target.value;
        setPedal(stateToChange);
    };

    const updateExistingPedal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedPedal = {
            id: props.match.params.pedalId,
            name: pedal.name,
            userId: pedal.userId
        };

        PedalManager.update(editedPedal)
            .then(() => props.history.push("/pedals"))
    }

    useEffect(() => {
        PedalManager.get(props.match.params.pedalId)
            .then(pedal => {
                setPedal(pedal);
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
                        value={pedal.name}
                    />
                </div>
                <div>
                    <Button className="btn" bg="dark" variant="dark" type="button"
                        type="button" disabled={isLoading}
                        onClick={updateExistingPedal}
                        className="btn btn-primary">
                        Update
                </Button>
                </div>
            </Form>
        </>
    );

}

export default PedalEditForm