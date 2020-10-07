import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Body = (props) => {
  return (
    <div>
      <ListGroup variant="flush">
        {
          props.messages.map((message, index) =>
          <ListGroup.Item key={index} className='message' >
              <div>
                {message.dateCreated.toLocaleString()}
              </div>
            {message.username}: {message.content}
          </ListGroup.Item>
          )
        }
      </ListGroup>
    </div>
  )
}

export default Body
