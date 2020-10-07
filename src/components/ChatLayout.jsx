import React from 'react'
import { 
  Card,
  InputGroup,
  FormControl,
  Button,
  Form
} from 'react-bootstrap'

import ChatBody from './Body'

const style = {
  card: {
    width: '30rem'
  },
  cardBody: {
    maxHeight: '60vmin',
    height: '60vmin',
    textAlign: 'left',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  footer: {
    textAlign: 'left',
    padding: '0px 0px 10px 3px'
  }
}

const ChatLayout = (props) => {
  return (
    <div>
      <Card
        bg='light'
        border='light'
        style={style.card}
      >
      <Card.Header>Live Chat</Card.Header>
      <Card.Body style={style.cardBody}>
        <ChatBody messages={props.messages}/>
      </Card.Body>
    <Form onSubmit={(e) => {
      e.preventDefault()
      if (!props.message) {
        return
      } else {
        let chatsUsername = props.isAnonymous ? 'Anonymous' : props.username
        let messageData = {
          dateCreated: new Date(),
          username: chatsUsername,
          content: props.message
        }
        props.setMessages([...props.messages, messageData])
        props.setMessage('')
      }
    }}>
      <InputGroup size='sm'>
          <FormControl
            value={props.message}
            onChange={(event) => props.setMessage(event.target.value)}
            placeholder="Type your message here...."
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Append>
            <Button variant="outline-primary" type='submit'>Send</Button>
          </InputGroup.Append>
      </InputGroup>
  <footer className='blockquote-footer' style={style.footer}>
    Chat as <cite>Anonymous</cite>
    <input
      type='checkbox'
      value={props.isAnonymous} 
      onClick={() => {
        props.setIsAnonymous(!props.isAnonymous)
      }}></input>
    <a
      href='#'
      onClick={() => props.setIsLoggedIn(false)
    }>Logout</a>
    </footer>
    </Form>
      </Card>
    </div>
  )
}

export default ChatLayout
