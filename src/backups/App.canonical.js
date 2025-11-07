import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Form,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import slide1 from '../assets/slide1.svg';
import slide2 from '../assets/slide2.svg';
import slide3 from '../assets/slide3.svg';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validations = {
    name: formData.name.trim().length > 0,
    email: isValidEmail(formData.email),
    message: formData.message.trim().length >= 10,
  };

  const formIsValid = validations.name && validations.email && validations.message;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!formIsValid) return;
    console.log('Form submitted:', formData);
    alert('Merci — formulaire envoyé (voir console)');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  }

  function handleSelect(index, e) {
    setActiveIndex(index);
  }

  const cardsBySlide = [
    [
      { img: slide1, title: 'Océan', text: "Excursion au bord de l'océan.", btn: 'En savoir plus' },
      { img: slide2, title: 'Aventure', text: "Activités et randonnées.", btn: 'Réserver' },
      { img: slide3, title: 'Détente', text: "Séjours détente et spa.", btn: 'Découvrir' },
    ],
    [
      { img: slide2, title: 'Montagne', text: "Randonnées en altitude.", btn: 'Voir' },
      { img: slide3, title: 'Nature', text: "Séjour en pleine nature.", btn: 'Voir' },
      { img: slide1, title: 'Plage', text: "Journées à la plage.", btn: 'Voir' },
    ],
    [
      { img: slide3, title: 'Ville', text: "Découvrir la vie urbaine.", btn: 'Explorer' },
      { img: slide1, title: 'Coucher de soleil', text: "Moments magiques.", btn: 'Voir' },
      { img: slide2, title: 'Activités', text: "Événements et sorties.", btn: 'Voir' },
    ],
  ];

  return (
    <div className="App">
      <div className="carousel-wrapper">
        {/* Navbar (overlay on top of carousel) */}
        <Navbar expand="lg" className="carousel-navbar">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Carousel */}
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="Océan" />
            <Carousel.Caption>
              <h3>Océan</h3>
              <p>Excursions et plages — moments de détente au bord de l'eau.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Montagne" />
            <Carousel.Caption>
              <h3>Montagne</h3>
              <p>Randonnées, panoramas et aventures en altitude.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Ville" />
            <Carousel.Caption>
              <h3>Ville</h3>
              <p>Explorer la vie urbaine et ses découvertes culturelles.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Form */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2>Contactez-nous</h2>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Votre nom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.name && !validations.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Merci d'indiquer votre nom.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nom@exemple.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.email && !validations.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Veuillez fournir une adresse e-mail valide.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.message && !validations.message}
                />
                <Form.Control.Feedback type="invalid">
                  Le message doit contenir au moins 10 caractères.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" disabled={!formIsValid}>
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Three cards that change with the current carousel slide */}
      <Container className="my-5">
        <Row>
          {cardsBySlide[activeIndex].map((c, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card>
                <Card.Img variant="top" src={c.img} />
                <Card.Body>
                  <Card.Title>{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                  <Button variant="primary">{c.btn}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
