import React from "react"; 
// import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

const AmpCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./amp_01.svg')} />
        <Card.Title>
          {props.amp.name}
        </Card.Title>
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