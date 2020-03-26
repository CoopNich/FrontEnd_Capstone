import React, { useState, useEffect } from "react";
import GuitarManager from "../../modules/GuitarManager"
import { Input, Form, FormGroup, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const ToneForm = props => {
    const [guitars, setGuitars] = useState([]);
    const [tone, setTone] = useState({ name: "",  })
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleFieldChange = evt => {
        const stateToChange = { ...tone };
        stateToChange[evt.target.id] = evt.target.value;
        setTone(stateToChange);
    };
    const handleGuitarChange = evt => {
        const stateToChange = { ...tone };
        stateToChange["guitarId"] = evt.target.value;
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

    return (
        <>
        <Form>
        <FormGroup>
                    <Label for="name">Tone Name</Label>
                    <Input  type="text"
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
                    <Input  type="text"
                            required
                            onChange={handleFieldChange}
                            id="guitarSettings"
                            placeholder="Tone,Volume,Pickups,etc."
                            />
                </FormGroup>
            </Form>


        </>
    );

}


export default ToneForm
