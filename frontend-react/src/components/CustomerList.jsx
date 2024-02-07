import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { listUsers } from "../apis/users";
import { setAllUserData } from '../redux/actions';

export default function CustomerList({showTransactionModal}) {
	const accessToken = useSelector(state => state.auth.token);
	const dispatch = useDispatch();
	const [allUsers, setAllUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const users = await listUsers(accessToken);
				dispatch(setAllUserData(users));
				setAllUsers(users);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			}
		};

		if (accessToken) {
			fetchUsers();
		}
	}, [accessToken, dispatch, showTransactionModal]);

	return (
		<div className="opacity-animation" style={{marginTop: '60px'}}>
			{allUsers?.map((user) => (
				<CustomerListItem
					key={user.id}
					user={user}
				/>
			))}
		</div>
	)
}

function CustomerListItem({ user }) {
	const { id, username, email, firstname, lastname, account_opened_date, current_balance } = user;

	return (
		<Link to={`/users/${id}/transactions`} className="text-dark" style={{ textDecoration: 'none' }}>
			<div className="slideup-opacity-animation row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white">
				<div className="col p-4 d-flex flex-column position-static">
					<h5 className="mb-0">User Id: {id}</h5>
					<h3 className="mb-0">{firstname} {lastname}</h3>
					<h6 className="fw-light">{username} ({email})</h6>
					<div className="mb-1 text-muted">Account opened on: {formatDateTime(account_opened_date)}</div>
					<p className="card-text mb-auto">Current balance: INR {current_balance / 100}</p>
				</div>
			</div>
		</Link>
	)
}



function formatDateTime(dateString) {
    const date = moment(dateString);
    const formattedDate = date.format('MMMM DD, YYYY');
    return formattedDate
}