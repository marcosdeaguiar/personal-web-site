import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../images/profilepic.jpg";


const ProfileRow = () => 
    <Row  style={{margin: 20}} >
        <Col sm={3}>
            <img src={ProfilePic} alt="Profile Picture" />
        </Col>

        <Col sm={4} sm-offset={1} >
            <h3>Personal Information</h3>
            Marcos de Aguiar, MSc Computer Science <br />
            Location: Salvador - Bahia - Brazil <br />
            Email: contact@marcosdeaguiar.com <br />
            Github: <a target="_blank" href="https://github.com/marcosdeaguiar">https://github.com/marcosdeaguiar</a>
            <h3>Languages</h3>
            <ul>
              <li><b>Portuguese:</b> native</li>
              <li><b>English:</b> fluent</li>
              <li><b>German:</b> intermediate</li>
            </ul>
        </Col>

        <Col sm={4}>
            <h3>About</h3>
            Software development professional with more than 10 years of experience ranging from web systems to real time SCADA products.<br />
            Specialties:<br />
            C/C++,C#,Java,Javascript,Typescript programming.<br />
            Web systems, desktop systems.<br />
            ORM(Hibernate), Dependency Injection(Spring, Unity), Relational Databases.<br />
            High Performance Computing (HPC) Software Stack.
        </Col>
    </Row>

export default ProfileRow;