import React from "react"; 
import { Card, Button } from "react-bootstrap"

const ToneAmpCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./amp_01.svg')} />
        <Card.Title>
          {props.amp.name}
        </Card.Title>
      </div>
    </Card>
    )
}

export default ToneAmpCard