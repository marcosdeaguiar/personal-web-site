import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PublicationsPage = () => (
  <Layout>
    <SEO title="Marcos de Aguiar bio" />
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Publications</h2>
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
  </Layout>
)

export default PublicationsPage