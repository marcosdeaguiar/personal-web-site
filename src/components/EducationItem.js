import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EducationItem = ({props}) =>
    <Row style={{"margin-top": 20}}>
        <Col>
            <h4>{props.courseName + " - " + props.universityName}</h4>
            {props.city}<br />
            {props.startYear + " - " + props.endYear}
        </Col>
    </Row>

export default EducationItem;