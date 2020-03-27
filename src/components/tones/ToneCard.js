import React from "react"; 
import { Card, Button } from "react-bootstrap"

const ToneCard = props => {

    return (
        <Card style={{ width: '15rem' }}>
      <div className="card-content">
          <Card.Img variant="top" src={require('./tone_01.svg')} onClick={() => props.history.push(`/tones/${props.tone.id}`)}/>
        <Card.Title>
          {props.tone.name}
        </Card.Title>
      </div>
      <Button className="btn" bg="dark" variant="dark" type="button" onClick={() => props.deleteTone(props.tone.id)}>Delete</Button>
    </Card>
    )
}

export default ToneCard