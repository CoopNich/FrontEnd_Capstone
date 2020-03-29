import React, { useState, useEffect } from "react";
import ToneManager from "../../modules/ToneManager"
import GuitarManager from "../../modules/GuitarManager"
import AmpManager from "../../modules/AmpManager"
import PedalManager from "../../modules/PedalManager"
import TonePedalList from "./TonePedalList"
import { Button, Input, Form, FormGroup, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const ToneForm = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [guitars, setGuitars] = useState([]);
    const [selectedGuitar, setSelectedGuitar] = useState({ name: "" });
    const [selectedAmp, setSelectedAmp] = useState({ name: "" });
    const [amps, setAmps] = useState([]);
    const [pedals, setPedals] = useState([]);
    const [selectedPedal, setSelectedPedal] = useState({ name: "" });
    const [tone, setTone] = useState({ id: "", name: "" })
    const [newTonePedals, setNewTonePedals] = useState([]);
    const [pedalTone, setPedalTone] = useState({})
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    const handleFieldChange = evt => {
        const stateToChange = { ...tone };
        stateToChange[evt.target.id] = evt.target.value;
        setTone(stateToChange);
    };

    const handlePedalFieldChange = evt => {
        const stateToChange = { ...pedalTone };
        stateToChange[evt.target.id] = evt.target.value;
        setPedalTone(stateToChange);
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

    const handlePedalChange = evt => {
        const stateToChange = { ...pedalTone };
        stateToChange["pedalId"] = parseInt(evt.target.value);
        setPedalTone(stateToChange);
        const stateToChange2 = { ...selectedPedal };
        stateToChange2["name"] = evt.target.name;
        setSelectedPedal(stateToChange2)
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

    const getAllPedals = () => {
        return PedalManager.getAll().then(pedalsArray => {
            setPedals(pedalsArray)
        });
    };

    useEffect(() => {
        getAllPedals();
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

    const constructNewToneAndAddPedals = evt => {
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
                .then(newFetchedTone => setTone(newFetchedTone));
        }
    };

    const constructNewPedalTone = evt => {
        evt.preventDefault();
        if (pedalTone.pedalId === "" || pedalTone.settings === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            const newPedalTone = {
                ...pedalTone,
                toneId: tone.id
            }
            PedalManager.postPedalTone(newPedalTone);
        }
    };

    return (
        <><Form>
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
                    {selectedGuitar.name === ""
                        ?
                        "Choose a Guitar"

                        : selectedGuitar.name}
                </DropdownToggle>
                <DropdownMenu >
                    {guitars.map(guitar =>
                        <DropdownItem key={guitar.id} value={guitar.id} name={guitar.name} onClick={handleGuitarChange} >
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
                    {selectedAmp.name === ""
                        ?
                        "Choose an Amp"

                        : selectedAmp.name}
                </DropdownToggle>
                <DropdownMenu >
                    {amps.map(amp =>
                        <DropdownItem key={amp.id} name={amp.name} value={amp.id} onClick={handleAmpChange} >
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
            {tone.id === ""

                ? <><Button
                    className="btn" bg="dark" variant="dark"
                    type="button"
                    disabled={isLoading}
                    onClick={constructNewToneAndAddPedals}
                >Add Pedals</Button>
                    <Button
                        className="btn" bg="dark" variant="dark"
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewTone}
                    >Finish Tone</Button></>


                : <><Dropdown isOpen={dropdownOpen3} toggle={toggle3} >
                    <DropdownToggle caret>
                        {selectedPedal.name === ""
                            ?
                            "Choose a Pedal"

                            : selectedPedal.name}
                    </DropdownToggle>
                    <DropdownMenu >
                        {pedals.map(pedal =>
                            <DropdownItem key={pedal.id} name={pedal.name} value={pedal.id} onClick={handlePedalChange} >
                                {pedal.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>

                    <FormGroup>
                        <Label for="settings">Settings</Label>
                        <Input type="text"
                            required
                            onChange={handlePedalFieldChange}
                            id="settings"
                            placeholder="Level, Decay, etc."
                        />
                    </FormGroup>
                    <Button
                        className="btn" bg="dark" variant="dark"
                        type="button"
                        onClick={constructNewPedalTone}
                    >Add Pedal</Button>
                    <Button
                        className="btn" bg="dark" variant="dark"
                        type="button"
                        onClick={() => (props.history.push("/tones"))}
                    >Finish</Button>

                </>
            }



        </Form>
        </>
    );

}


export default ToneForm
