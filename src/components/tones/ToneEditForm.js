import React, { useState, useEffect } from "react";
import ToneManager from "../../modules/ToneManager"
import GuitarManager from "../../modules/GuitarManager"
import AmpManager from "../../modules/AmpManager"
import { Button, Input, Form, FormGroup, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const ToneEditForm = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [guitars, setGuitars] = useState([]);
    const [selectedGuitar, setSelectedGuitar] = useState({ name: "" });
    const [selectedAmp, setSelectedAmp] = useState({ name: "" });
    const [amps, setAmps] = useState([]);
    const [tone, setTone] = useState({})
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    const handleFieldChange = evt => {
        const stateToChange = { ...tone };
        stateToChange[evt.target.id] = evt.target.value;
        setTone(stateToChange);
    };
    const handleGuitarChange = evt => {
        const stateToChange = { ...tone };
        stateToChange["guitarId"] = parseInt(evt.target.value);
        setTone(stateToChange);
        const stateToChange2 = { ...selectedGuitar };
        stateToChange2["name"] = evt.target.name;
        setSelectedGuitar(stateToChange2)
    };
    const handleAmpChange = evt => {
        const stateToChange = { ...tone };
        stateToChange["ampId"] = parseInt(evt.target.value);
        setTone(stateToChange);
        const stateToChange2 = { ...selectedAmp };
        stateToChange2["name"] = evt.target.name;
        setSelectedAmp(stateToChange2)
    };

    const getGuitars = () => {
        return GuitarManager.getAll().then(guitarsArray => {
            setGuitars(guitarsArray)
        });
    };

    const getAmps = () => {
        return AmpManager.getAll().then(ampsArray => {
            setAmps(ampsArray)
        });
    };


    const getTone = () => {
        setIsLoading(true)
        ToneManager.getWithGuitarAndAmp(props.match.params.toneId)
            .then(tone => {
                setTone(tone);
                // setSelectedGuitar(tone.guitar.name)
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getGuitars();
        getTone()
        getAmps();
    }, []);

    const updateExistingTone = evt => {
        evt.preventDefault()

        const editedTone = {
            id: props.match.params.toneId,
            name: tone.name,
            userId: tone.userId,
            ampId: tone.ampId,
            ampSettings: tone.ampSettings,
            guitarId: tone.guitarId,
            guitarSettings: tone.guitarSettings
        };

        ToneManager.update(editedTone)
            .then(() => props.history.push("/tones"))
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Tone Name</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="name"
                        value={tone.name}
                    />
                </FormGroup>
               
                <select value={tone.guitarId} onChange={handleGuitarChange}>
                {guitars.map(guitar =>
                            <option key={guitar.id} value={guitar.id} name={guitar.name}  >
                                {guitar.name}
                            </option>
                        )}
                </select>

                <FormGroup>
                    <Label for="guitarSettings">Settings</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="guitarSettings"
                        value={tone.guitarSettings}
                    />
                </FormGroup>

                <select value={tone.ampId} onChange={handleAmpChange}>
                {amps.map(amp =>
                            <option key={amp.id} value={amp.id} name={amp.name} >
                                {amp.name}
                            </option>
                        )}
                </select>

                <FormGroup>
                    <Label for="ampSettings">Settings</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="ampSettings"
                        value={tone.ampSettings}
                    />
                </FormGroup>
                <Button
                    className="btn" bg="dark" variant="dark"
                    type="button"
                    disabled={isLoading}
                    onClick={updateExistingTone}
                >Submit</Button>



            </Form>


        </>
    );

}

export default ToneEditForm