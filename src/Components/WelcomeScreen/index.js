import React from 'react';
import Loader from '../Loader';
import { Row, Col, Button, Card } from 'antd';

const API_URL_FOR_32USERS =
  'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const API_URL_FOR_1000USERS =
  'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

function welcomeScreen({ onLoading, apiUrl }) {
  return (
    <Row type="flex" style={{ marginTop: '10vmin' }}>
      <Col span={8} offset={8}>
        <Card title="Сколько пользователй загрузить?">
          {onLoading && <Loader />}
          <Button
            style={{ marginRight: '1em' }}
            onClick={() => apiUrl(API_URL_FOR_32USERS)}
          >
            50
          </Button>
          <Button onClick={() => apiUrl(API_URL_FOR_1000USERS)}>1000</Button>
        </Card>
      </Col>
    </Row>
  );
}

export default welcomeScreen;
