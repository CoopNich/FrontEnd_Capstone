import React, { useState } from "react";
import GuitarManager from "../../modules/GuitarManager"
import { Form, Button } from "reactstrap"


const GuitarForm = props => {
    const [guitar, setGuitar] = useState({ name: "" })
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...guitar };
        stateToChange[evt.target.id] = evt.target.value;
        setGuitar(stateToChange);
    };

    const constructNewGuitar = evt => {
        evt.preventDefault();
        if (guitar.name === "") {
            window.alert("Please enter a name");
        } else {
            setIsLoading(true);
            const newGuitar = {
                ...guitar,
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            GuitarManager.post(newGuitar)
                .then(() => props.history.push("/guitars"));
        }
    };

    return (
        <>
            <Form className="guitarForm_Form">
               
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
                            onClick={constructNewGuitar}
                        >Submit</Button>
                    </div>
              
            </Form>
        </>
    );

}

export default GuitarForm