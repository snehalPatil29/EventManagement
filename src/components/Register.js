import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, 
  CardFooter, Button, Input, InputGroup, InputGroupAddon,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Form,
  FormGroup,
  FormText,Label,
   InputGroupText} from 'reactstrap';
   //import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {createBrowserHistory } from 'history';  
var history = createBrowserHistory();

class Register extends Component {

  constructor(props) {
    super(props);
    var history= {history}
    this.state = {
        user: {
            firstName: '',
            lastName: '',
            Email: '',
            City: '',
            //password: ''
        },
        submitted: false
    };
   // this.toggle = this.toggle.bind(this);
    this.changeFunction = this.changeFunction.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
}

changeFunction(event) {
  
   const { name, value } = event.target;
 
   const { user } = this.state;
  // console.log("user", user)
   this.setState({
       user: {
           ...user,
           [name]: value
       }
   });
}

submitFunction(event) {
   event.preventDefault();
   this.setState({ submitted: true });
   const { user } = this.state;
   alert('Success');
   console.log(this.state.user);
   this.props.history.push('/login');
}


  render() {

    const { user, submitted } = this.state;
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={this.changeFunction}/>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={this.changeFunction}/>
                  </InputGroup>

                
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email"  name="Email" value={user.Email} onChange={this.changeFunction}/>
                  </InputGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label >City </Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input type="select" name="select" id="City" placeholder="City"  onChange={this.changeFunction}>
                        <option value="">Select City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nashik">Nashik</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  {/* <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Password" value={user.password} onChange={this.changeFunction} />
                  </InputGroup> */}

                  <Button color="success"  onClick={this.submitFunction} block>Create Account</Button>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Col md="6">
          <Card className="mx-4">
                <CardBody className="p-4">
            <Label>First Name :</Label> {this.state.user.firstName}
            <br />
            <Label>Last Name :</Label> {this.state.user.lastName}
            <br />

            <Label>Email :</Label> {this.state.user.Email}
            <br />
            <Label>City :</Label> {this.state.user.select}
            </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
 export default Register;
