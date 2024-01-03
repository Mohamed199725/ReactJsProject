import React from 'react';
import { Navbar, Container, Nav, Card, Button, Form } from 'react-bootstrap';

const App = () => {
    return (
        //this is the react fragment as demanded
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                {/* the navbar parts are here */}
                <Container>
                    <Navbar.Brand href="#" style={{fontSize:'26px'}}>Gaming Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {/* this is the heading */}
            <Container className="mt-4">
                <h1 className="text-center text-danger">Welcome to Gaming Hub</h1>
                
                  {/* This contains my first card */}
                <Card className="my-4" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="images/metaverse.png" />
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                        Explore the latest gaming technologies and trends.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
                
                 {/* This contains my second card */}
                <Card className="my-4" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="images/bestgamingpc.png" />
                    <Card.Body>
                        <Card.Title>Card 2</Card.Title>
                        <Card.Text>
                        Discover high-performance gaming PCs for an immersive experience.
                        </Card.Text>
                        <Button variant="primary">Explore</Button>
                    </Card.Body>
                </Card>

                {/* This contains my third card */}
                <Card className="my-4" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="images/latestaccess.jpg" />
                    <Card.Body>
                        <Card.Title>Card 3</Card.Title>
                        <Card.Text>
                        Get the latest updates on gaming peripherals and accessories.
                        </Card.Text>
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </Container>
                
            <Container className="my-4">
                <h2 className="text-center">Contact Us</h2>
                <Form>
                    {/* Your contact form fields go here */}
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message here" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </React.Fragment>
    );
}

export default App;