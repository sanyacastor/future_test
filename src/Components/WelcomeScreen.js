import React from 'react';
import { Row, Col, Button, Card } from 'antd';

function  welcomeScreen({onClick}) {

    const API_small = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    const API_big = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
            <Card title="Сколько пользователй загрузить?">
              <Row type="flex" justify="center">
                <Col span={6}>
                      <Button onClick={()=> onClick(API_small)}>50</Button>
                      <Button onClick={()=> onClick(API_big)}>1000</Button>
                </Col>
              </Row>
            </Card>
    )  
}

export default welcomeScreen 