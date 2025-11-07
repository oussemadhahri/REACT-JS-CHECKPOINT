import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Description from './components/Description';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';

const firstName = 'Oussema'; // Mets ton prénom ici (ou laisse vide)

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm border-0 overflow-hidden">
        
            <img
              src="https://images.unsplash.com/photo-1631281637573-14de1a1968fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzcXVlJTIwYmx1ZXRvb3RofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            
              className="img-fluid"
            />

            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <Name />
                  <Price />
                </div>
                <Button variant="primary" size="sm">
                  Acheter
                </Button>
              </div>
              <Description />
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            {firstName ? (
              <>
                <h4 className="fw-semibold">Hello, {firstName} 👋</h4>
                <img
                  src="https://media.istockphoto.com/id/1346015046/fr/photo/homme-noir-heureux-%C3%A9coutant-laudioguide-et-respirant.webp?a=1&b=1&s=612x612&w=0&k=20&c=WdhMrNoUHnoXYUWc2s93qmX5sOVvvHNZyOjXjgBSEkU="
                  alt="wave"
                  className="rounded-circle mt-2"
                  width="100"
                  height="100"
                  style={{ objectFit: 'cover' }}
                />
              </>
            ) : (
              <h4 className="fw-semibold text-secondary">Hello, there!</h4>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
