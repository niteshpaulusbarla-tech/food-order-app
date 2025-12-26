import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/PromoSection.css';

const PromoSection = () => {
  const promos = [
    { id: 1, title: "Flat ₹200 OFF & More", sub: "%", color: "#fef9e7" },
    { id: 2, title: "New Deals Every Hour", sub: "DEAL RUSH", color: "#fdf2f2" },
    { id: 3, title: "Decorate Tree + Win ₹700", sub: "🎄", color: "#f0fdf4" },
    { id: 4, title: "Food in 10 Mins", sub: "Bolt ⚡", color: "#fff7ed" }
  ];

  return (
    <Container className="my-4">
      <Row className="g-3">
        {promos.map((promo) => (
          <Col xs={6} md={3} key={promo.id}>
            <Card className="promo-card h-100 border-0 shadow-sm text-center p-2" style={{ backgroundColor: promo.color }}>
              <Card.Body className="d-flex flex-column justify-content-between p-2">
                <div className="promo-title fw-bold small text-dark">{promo.title}</div>
                <div className="promo-sub fw-black mt-2 text-uppercase">{promo.sub}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PromoSection;