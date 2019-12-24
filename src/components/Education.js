import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationItem from "./EducationItem";

const educationData = [

    {
        courseName: "M. Sc., Computer Science",
        universityName: "Universidade Federal da Bahia",
        city: "Salvador - Bahia - Brazil",
        startYear: "2015",
        endYear: "2017"
    },
    {
        courseName: "Bachelor, Computer Science",
        universityName: "Faculdade Ruy Barbosa",
        city: "Salvador - Bahia - Brazil",
        startYear: "2001",
        endYear: "2005"
    }

];

const Education = () =>
    <>
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Education</h2>
        </Col>
    </Row>
    <EducationItem props={educationData[0]} />
    <EducationItem props={educationData[1]} />
    </>

export default Education;