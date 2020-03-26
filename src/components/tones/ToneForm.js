import React, { useState, useEffect } from "react";
import ToneManager from "../../modules/ToneManager"
import GuitarManager from "../../modules/GuitarManager"
import AmpManager from "../../modules/AmpManager"
import { Button, Input, Form, FormGroup, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const ToneForm = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [guitars, setGuitars] = useState([]);
    const [amps, setAmps] = useState([]);
    const [tone, setTone] = useState({ name: "", })
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
    };
    const handleAmpChange = evt => {
        const stateToChange = { ...tone };
        stateToChange["ampId"] = parseInt(evt.target.value);
        setTone(stateToChange);
    };

    const getGuitars = () => {
        return GuitarManager.getAll().then(guitarsArray => {
            setGuitars(guitarsArray)
        });
    };

    useEffect(() => {
        getGuitars();
    }, []);

    const getAmps = () => {
        return AmpManager.getAll().then(ampsArray => {
            setAmps(ampsArray)
        });
    };

    useEffect(() => {
        getAmps();
    }, []);

    const constructNewTone = evt => {
        evt.preventDefault();
        if (tone.name === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            const newTone = {
                ...tone,
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            ToneManager.post(newTone)
                .then(() => props.history.push("/tones"));
        }
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Tone Name</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="name"
                        placeholder="Name your tone"
                    />
                </FormGroup>

                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                    <DropdownToggle caret>
                        Choose a Guitar
               </DropdownToggle>
                    <DropdownMenu >
                        {guitars.map(guitar =>
                            <DropdownItem key={guitar.id} value={guitar.id} onClick={handleGuitarChange} >
                                {guitar.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>

                <FormGroup>
                    <Label for="guitarSettings">Settings</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="guitarSettings"
                        placeholder="Volume,Pickups,etc."
                    />
                </FormGroup>

                <Dropdown isOpen={dropdownOpen2} toggle={toggle2} >
                    <DropdownToggle caret>
                        Choose an Amp
               </DropdownToggle>
                    <DropdownMenu >
                        {amps.map(amp =>
                            <DropdownItem key={amp.id} value={amp.id} onClick={handleAmpChange} >
                                {amp.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>

                <FormGroup>
                    <Label for="ampSettings">Settings</Label>
                    <Input type="text"
                        required
                        onChange={handleFieldChange}
                        id="ampSettings"
                        placeholder="Gain, Treble, Volume, etc."
                    />
                </FormGroup>
                <Button
                         className="btn" bg="dark" variant="dark"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewTone}
                        >Submit</Button>



            </Form>


        </>
    );

}


export default ToneForm
