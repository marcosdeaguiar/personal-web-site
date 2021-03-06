import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PublicationsPage = () => (
  <Layout>
    <SEO title="Publications" />
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Academic Publications</h2>
            <ul>
                <li>
                    <b>Marcos de Aguiar</b>, Fabíola Greve, Genaro Costa: <i>"PrescStream: A Framework for Streaming Soft Real-Time Predictive and Prescriptive Analytics"</i>
                    <br />International Conference on Computational Science and Its Applications, 2017
                </li>
                <li>
                    <b>Marcos de Aguiar</b>, Fabíola Greve, Genaro Costa: <i>"Um Arcabouço Flexível para Integração de Análise Preditiva e Prescritiva, com Atuação"</i>
                    <br />XIII Brazilian Symposium on Information Systems, 2017
                </li>
            </ul>
        </Col>
    </Row>
    <Row style={{"margin-top": 10}}>
        <Col>
            <h2>Technical Publications</h2>
            <ul style={{"margin-top": 10}}>
                <li>
                    <a target="_blank" href="https://medium.com/@marcos.deaguiar/custom-react-hook-for-pagination-81d55d5b1e75" >
                        Custom React hook for pagination
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://medium.com/@marcos.deaguiar/spa-with-cookie-authentication-in-asp-net-core-c7ba6d9f8ebe" >
                        SPA with cookie authentication in Asp.net Core
                    </a>
                </li>
            </ul>
        </Col>
    </Row>
  </Layout>
)

export default PublicationsPage