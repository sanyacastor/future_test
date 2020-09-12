import { Row } from 'antd';
import React from 'react';
import SearchBar from '../SearchBar';
import { Layout, Menu, Col } from 'antd';

const { Header } = Layout;

const CustomHeader = ({ searchHandler }) => {
  return (
    <Header>
      <Row>
        <Col span={14} offset={5}>
          <Menu theme="dark" mode="horizontal">
            <SearchBar onSearch={searchHandler} />
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
