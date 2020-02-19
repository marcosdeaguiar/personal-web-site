import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BugTrackerPreview from "../images/bugtrackerpreview.png";

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Demo Projects</h2>
        </Col>
    </Row>
    <Row style={{"margin-top": 20}} >
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img height="200px" variant="top" src={BugTrackerPreview} />
                <Card.Body>
                    <Card.Title>BugTracker</Card.Title>
                    <Card.Text>
                    Simple bugtracker demo application developed with typescript, react, react-router, redux,
                    react-bootstrap and node.js as backend server.
                    </Card.Text>
                    <a href="https://bugtracker.marcosdeaguiar.com" target="_blank">
                        <Button variant="primary">View App</Button>
                    </a>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  </Layout>
)

export default PortfolioPage