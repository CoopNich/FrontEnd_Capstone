import React, { useState, useEffect } from "react"
import AmpManager from "../../modules/AmpManager"
import { Form, Button } from "reactstrap"

const AmpEditForm = props => {
    const [amp, setAmp] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...amp };
        stateToChange[evt.target.id] = evt.target.value;
        setAmp(stateToChange);
    };

    const updateExistingAmp = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedAmp = {
            id: props.match.params.ampId,
            name: amp.name,
            userId: amp.userId
        };

        AmpManager.update(editedAmp)
            .then(() => props.history.push("/amps"))
    }

    useEffect(() => {
        AmpManager.get(props.match.params.ampId)
            .then(amp => {
                setAmp(amp);
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
                        value={amp.name}
                    />
                </div>
                <div>
                    <Button className="btn" bg="dark" variant="dark" type="button"
                        type="button" disabled={isLoading}
                        onClick={updateExistingAmp}
                        className="btn btn-primary">
                        Update
                </Button>
                </div>
            </Form>
        </>
    );

}

export default AmpEditForm