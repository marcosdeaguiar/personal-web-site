import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TechSkillsPage = () => (
  <Layout>
    <SEO title="Marcos de Aguiar bio" />
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Certifications</h2>
        </Col>
    </Row>
    <Row style={{"margin-top": 10}}>
        <Col>
            <ul>
                <li>Exam 483: Programming in C#</li>
            </ul>
        </Col>
    </Row>
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Technical Skills</h2>
            <ul>
            <li>Programming Languages: C/C++, C#, Java, JavaScript, Typescript, Python.</li>
            <li>Desktop Development: Windows Presentation Foundation(WPF), Prism(WPF composition framework), Model View View Model Pattern(MVVM).</li>
            <li>Web Development: Spring Framework, Spring MVC, Spring Security, Spring Boot, ASP.net MVC, Node.js with Express, Websockets with Node.js and Socket.IO.</li>
            <li>Dependency Injection: Unity, Autofac, Spring.</li>
            <li>Web Front-end: HTML, CSS, Bootstrap, JQuery, AngularJS, React.js.</li>
            <li>Object Relational Mapping: Hibernate, nHibernate(Hibernate for .net).</li>
            <li>Relational Databases: PostgresSQL, SQL Server.</li>
            <li>NoSQL: Redis, Cassandra.</li>
            <li>High Performance Computing: OpenMP and MPI Parallelization, Slurm Configuration, OpenHPC.</li>
            <li>Machine Learning: Scikit-learn, Keras(Deep Learning).</li>
            </ul>
        </Col>
    </Row>
  </Layout>
)

export default TechSkillsPage