import React from 'react';
import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const navigate = useNavigate();
const search = params.search;
const goHome = () => {
		navigate('/')
	}

return (
	<div className="Home">
		<div className= 'return' onClick={goHome} >
			<Icon icon="icon-park-outline:return" height="60" color="white"/>
			</div>
		<div className="Dashboard">
		 <div>
 <Row justify="center">
          <Col span={20}>
            <h1>{search}</h1>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={10}>
            Temperature:
          </Col>
          <Col span={10}>
          30
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
         
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
        
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
      
          </Col>
        </Row>
      </div>
		</div>
	</div>
)



}