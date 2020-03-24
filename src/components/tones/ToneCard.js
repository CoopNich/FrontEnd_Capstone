import React from "react"; 
import { Card, Button } from "react-bootstrap"

const ToneCard = props => {

    return (
        <Card style={{ width: '20rem' }} onClick={() => props.history.push(`/tones/${props.tone.id}/details`)}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./tone_01.svg')} />
        <Card.Title>
          {props.tone.name}
        </Card.Title>
      </div>
    </Card>
    )
}

export default ToneCard