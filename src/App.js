import React, { useState } from 'react';
import './App.css';

// react-bootstrap components
import { Container, Navbar, Nav, Row, Col, Card, Form, Button, FloatingLabel, Alert } from 'react-bootstrap';

/*
  App.js
  - Main application component.
  - Uses a React fragment to group the top-level elements without adding
    an extra DOM node.
  - Renders a react-bootstrap Navbar and a responsive set of Cards.
*/
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      setShowConfirmation(false);
      setValidated(true);
      return;
    }

    setFormData({ name: '', email: '', projectType: '', message: '' });
    setShowConfirmation(true);
    setValidated(false);
  };

  return (
    <>
      {/* React fragment wrapper - groups top-level elements without extra DOM node */}
      <div className="App">
        {/* Primary navigation (react-bootstrap Navbar) */}
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="#home">PrimeStudio</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="#home" className="btn btn-outline-light btn-sm me-2">Accueil</Nav.Link>
                <Nav.Link href="#projects" className="btn btn-outline-light btn-sm me-2">Projets</Nav.Link>
                <Nav.Link href="#about" className="btn btn-outline-light btn-sm me-2">À propos</Nav.Link>
                {/* Primary CTA */}
                <Nav.Link href="#contact" className="btn btn-primary btn-sm ms-2">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Intro section and card grid */}
        <Container className="py-5 text-center">
          <h1 className="mb-3">Interface moderne — React & Bootstrap</h1>
          <p className="text-muted mb-4">
            Une barre de navigation réactive et trois cartes construites avec react-bootstrap.
          </p>

          <Row className="g-4">
            {/* Three responsive cards (stack on small screens, three across on md+) */}
            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" style={{objectFit: 'contain', height: 180, padding: 24, background: '#fff'}} />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>Bibliothèque UI déclarative basée sur des composants.</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">En savoir plus →</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" style={{objectFit: 'contain', height: 180, padding: 24, background: '#fff'}} />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>Le langage qui fait fonctionner le web.</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">En savoir plus →</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" style={{objectFit: 'cover', height: 180}} />
                <Card.Body>
                  <Card.Title>Projet</Card.Title>
                  <Card.Text>Mettez en valeur votre travail avec de belles cartes.</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">En savoir plus →</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container id="contact" className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <h2 className="mb-3 text-center">Démarrer un projet</h2>
              <p className="text-muted text-center mb-4">
                Donnez quelques détails et nous vous contacterons avec des idées adaptées à vos objectifs.
              </p>
              {showConfirmation && (
                <Alert variant="success" onClose={() => setShowConfirmation(false)} dismissible>
                  Merci pour votre message ! Nous vous répondrons bientôt.
                </Alert>
              )}
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white">
                <Row className="g-3">
                  <Col xs={12} md={6}>
                    <FloatingLabel controlId="contactName" label="Nom complet">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nom complet"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">Veuillez indiquer votre nom.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={6}>
                    <FloatingLabel controlId="contactEmail" label="Adresse e-mail">
                      <Form.Control
                        required
                        type="email"
                        placeholder="nom@exemple.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">Une adresse e-mail valide nous aide à vous recontacter.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel controlId="contactProject" label="Type de projet">
                      <Form.Select
                        required
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="">Choisissez...</option>
                        <option value="app">Application mobile</option>
                        <option value="website">Site vitrine</option>
                        <option value="dashboard">Tableau de bord analytique</option>
                        <option value="other">Autre</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">Dites-nous quel type de projet vous souhaitez.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel controlId="contactMessage" label="Détails du projet">
                      <Form.Control
                        required
                        as="textarea"
                        placeholder="Parlez-nous brièvement de votre calendrier et de vos objectifs"
                        style={{ height: '150px' }}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">Veuillez ajouter un bref résumé du projet.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Button type="submit" className="mt-4 w-100" variant="primary">
                  Envoyer la demande
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;