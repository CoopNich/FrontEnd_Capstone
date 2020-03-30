import React from "react"; 
import { Card, Button } from "react-bootstrap"

const ToneGuitarCard = props => {

    return (
        <Card style={{ width: '20rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./guitar_01.svg')} />
        <Card.Title>
          {props.guitar ? props.guitar.name : ""}
        </Card.Title>
        <p>
        {props.settings}
        </p>
      </div>
    </Card>
    )
}

export default ToneGuitarCard