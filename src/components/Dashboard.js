import React from 'react';
import { Icon } from '@iconify/react';
import { Table } from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const navigate = useNavigate();
const search = params.search;
const goHome = () => {
		navigate('/')
	}
const dataSource = [
  {
    key: '1',
    name: 'Mike',
	address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
return (
	<div className="Home">
		<div className= 'return' onClick={goHome} >
			<Icon icon="icon-park-outline:return" height="60" color="white"/>
			</div>
		<div className="Dashboard">
		<h1> {search} </h1>
		<Table dataSource={dataSource} columns={columns}/>
		</div>
	</div>
)



}