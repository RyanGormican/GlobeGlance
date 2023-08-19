import React from 'react';
import { Icon } from '@iconify/react';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const search = params.search;
return (
	<div className="Home">
		<div className="Dashboard">
		{search}
		</div>
	</div>
)



}