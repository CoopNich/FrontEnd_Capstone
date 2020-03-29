import React from "react"; 
import { Card, Button } from "react-bootstrap"

const GuitarCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./guitar_01.svg')} />
        <Card.Title>
          {props.guitar.name}
        </Card.Title>
        <Button className="btn" bg="dark" variant="dark" type="button"
          onClick={() => props.history.push(`/guitars/${props.guitar.id}/edit`)}>
          Rename
        </Button>
        <Button className="btn" bg="dark" variant="dark" type="button" onClick={() => props.deleteGuitar(props.guitar.id)}>Delete</Button>
      </div>
    </Card>
    )
}

export default GuitarCard