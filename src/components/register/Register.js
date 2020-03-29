import React, { useState } from "react"
import UserManager from "../../modules/UserManager"
import { Form, Button} from "react-bootstrap"
import "./Register.css"

const Register = props => {
  const [user, setUser] = useState({ email: "", username: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const constructNewUser = evt => {
    evt.preventDefault();
        setIsLoading(true);
        const newUser = {
            ...user, 
        }
        UserManager.postUser(newUser)
            .then(() => props.history.push("/login"));
    
};


  return (
    <Form onSubmit={constructNewUser} className="register_form">
        <Form.Label>Register an Account</Form.Label>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
        </div>
        <div>
        <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username"
            required="" autoFocus="" />
        </div>
        <Button type="submit" bg="dark" variant="dark" disabled={isLoading} >Submit</Button>
    </Form>
  );
};


export default Register;