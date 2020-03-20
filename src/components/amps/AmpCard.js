import React from "react"; 
// import { Link } from "react-router-dom"
import { Card, Button } from "reactstrap"

const AmpCard = props => {

    return (
        <Card className="card">
      <div className="card-content">
        <h3 className="card-title">
          {props.amp.name}
        </h3>
        <Button className="btn" bg="dark" variant="dark" type="button"
          onClick={() => props.history.push(`/amps/${props.amp.id}/edit`)}>
          Rename
        </Button>
        <Button className="btn" bg="dark" variant="dark" type="button" onClick={() => props.deleteAmp(props.amp.id)}>Delete</Button>
      </div>
    </Card>
    )
}

export default AmpCard