import React from "react"; 
import { Card, Button } from "react-bootstrap"

const TonePedalCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./pedal_01.svg')} />
        <Card.Title>
          {props.pedal.pedal.name}
        </Card.Title>
        <p>
        {props.pedal.settings && props.pedal.settings}
        </p>
      </div>
    </Card>
    )
}

export default TonePedalCard