import React from "react"; 
// import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

const PedalCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./pedal_01.svg')} />
        <Card.Title>
          {props.pedal.name}
        </Card.Title>
        <Button className="btn" bg="dark" variant="dark" type="button"
          onClick={() => props.history.push(`/pedals/${props.pedal.id}/edit`)}>
          Rename
        </Button>
        <Button className="btn" bg="dark" variant="dark" type="button" onClick={() => props.deletePedal(props.pedal.id)}>Delete</Button>
      </div>
    </Card>
    )
}

export default PedalCard