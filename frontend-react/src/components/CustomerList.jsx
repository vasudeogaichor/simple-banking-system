import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { listUsers } from "../apis/users";
import { setAllUserData } from '../redux/actions';

export default function CustomerList() {
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
	}, [accessToken, dispatch]);

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
		<div className="slideup-opacity-animation row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
			<div className="col p-4 d-flex flex-column position-static">
				<h2 className="mb-0">{firstname} {lastname}</h2>
				<h6 className="fw-light">{username} ({email})</h6>
				<div className="mb-1 text-muted">Account opened on: {formatDateTime(account_opened_date)}</div>
				<p className="card-text mb-auto">Current balance: INR {current_balance/100}</p>
				<a href={`/users/${id}/accounts`}>View all transactions</a>
			</div>
		</div>
	)
}



function formatDateTime(dateString) {
    const date = moment(dateString);
    const formattedDate = date.format('MMMM DD, YYYY');
    return formattedDate
}