import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

function Test() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Ngày sinh: ${day}/${month}/${year}`);
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Ngày sinh:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control as="select" value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="">Ngày</option>
                                {days.map((d) => (
                                    <option key={d} value={d}>
                                        {d}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option value="">Tháng</option>
                                {months.map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value="">Năm</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
}

export default Test;
