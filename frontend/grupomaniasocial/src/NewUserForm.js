
import { Form, Button } from 'react-bootstrap';
import React, { useState }  from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


const NewUserForm = ({url, isSingup}) => {
console.log('From new user form: '+ isSingup)
const loginUrl = 'http://localhost:3001/api/auth/login'
const singupUrl = 'http://localhost:3001/api/auth/signup'

  const [body, setBody] = useState([
    {
      email: '',
      password: ''
    }
  ]);
  function handleEmailChange(event) {
    setBody(
      { email: event.target.value ,
        password: body.password});
    /*console.log(body.email);
    console.log(JSON.stringify(body));
    console.log(JSON.stringify(body.email));*/
    
    console.log(JSON.stringify(body.email));
  }
  function handlePasswordChange(event) {
    setBody(
      { email: body.email ,
        password: event.target.value});
    /*console.log(body.email);
    console.log(JSON.stringify(body));
    console.log(JSON.stringify(body.email));*/
    
    console.log(JSON.stringify(body.password));
  }
  

  function handleSubmit(){
    fetch(isSingup ? singupUrl: loginUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email: body.email,
        password : body.password
      })
    })
    .then((res, req) => {
      console.log(res);
    })
    .catch((error, res) => {
      console.log('Error: Fetch not sended')
      
    })

  };

 /* useEffect(() => {
    console.log('UseEffect working ')
  }, [body]);*/

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
      </Form.Group>

      <Button variant="primary"  onClick={handleSubmit}>
        {isSingup? 'SINGUP':'LOGIN'}
      </Button>
    </Form>);
}

export default NewUserForm;