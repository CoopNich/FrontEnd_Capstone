import React, { useState } from "react";
import AmpManager from "../../modules/AmpManager"
import { Form, Button } from "reactstrap"


const AmpForm = props => {
    const [amp, setAmp] = useState({ name: "" })
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...amp };
        stateToChange[evt.target.id] = evt.target.value;
        setAmp(stateToChange);
    };

    const constructNewAmp = evt => {
        evt.preventDefault();
        if (amp.name === "") {
            window.alert("Please enter a name");
        } else {
            setIsLoading(true);
            const newAmp = {
                ...amp,
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            AmpManager.post(newAmp)
                .then(() => props.history.push("/amps"));
        }
    };

    return (
        <>
            <Form className="ampForm_Form">
               
                    <div className="formgrid">
                        <div>
                        {/* <label htmlFor="title">Title</label> */}
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
                            onClick={constructNewAmp}
                        >Submit</Button>
                    </div>
              
            </Form>
        </>
    );

}

export default AmpForm