import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PositionItem = ({props}) =>
    <Row style={{"margin-top": 20}}>
        <Col>
            <h4>{props.title}</h4>
            {props.city}<br />
            {props.duration}
            <br /><br />
            <ul>
                {
                    props.tasks.map(task => <li>{task}</li>)
                }
            </ul>
        </Col>
    </Row>

export default PositionItem;