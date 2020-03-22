import React, { useState } from "react";
import PedalManager from "../../modules/PedalManager"
import { Form, Button } from "reactstrap"


const PedalForm = props => {
    const [pedal, setPedal] = useState({ name: "" })
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...pedal };
        stateToChange[evt.target.id] = evt.target.value;
        setPedal(stateToChange);
    };

    const constructNewPedal = evt => {
        evt.preventDefault();
        if (pedal.name === "") {
            window.alert("Please enter a name");
        } else {
            setIsLoading(true);
            const newPedal = {
                ...pedal,
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            PedalManager.post(newPedal)
                .then(() => props.history.push("/pedals"));
        }
    };

    return (
        <>
            <Form className="PedalForm_Form">
               
                    <div className="formgrid">
                        <div>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Name/Model"
                        />
                        </div>
                    </div>
                    <div>
                        <Button
                         className="btn" bg="dark" variant="dark"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewPedal}
                        >Submit</Button>
                    </div>
              
            </Form>
        </>
    );

}

export default PedalForm