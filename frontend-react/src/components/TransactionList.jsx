import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { listTxns } from "../apis/accounts";

export default function TransactionList({ id, setShowTransactionModal }) {
	const accessToken = useSelector(state => state.auth.token);
	const storedId = useSelector(state => state.auth.user?.id);
	const userId = id || storedId
	const [allTxns, setAllTxns] = useState([]);

	useEffect(() => {
		const fetchTxns = async () => {
			try {
				const txns = await listTxns(accessToken, { user_id: userId });
				setAllTxns(txns);
			} catch (error) {
				console.error("Error fetching txns:", error);
			}
		};

		if (accessToken) {
			fetchTxns();
		}
	}, [accessToken, userId, setShowTransactionModal]);

	return (
		<div className="opacity-animation" style={{ marginTop: '60px' }}>
			{allTxns?.map((txn) => (
				<TransactionListItem
					key={txn.id}
					transaction={txn}
				/>
			))}
		</div>
	)
}

function TransactionListItem({ transaction }) {
	const { id, type, amount, date } = transaction;

	return (
		<div className="slideup-opacity-animation row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
			<div className="col p-4 d-flex flex-column position-static">
				<h4 className="mb-0">Transaction ID: {id}</h4>
				<h6 className="fw-light">Type: {type}</h6>
				<div className="mb-1 text-muted">Date: {formatDateTime(date)}</div>
				<p className="card-text mb-auto">Amount: INR {amount/100}</p>
			</div>
		</div>
	)
}

function formatDateTime(dateString) {
	const date = moment(dateString);
	const formattedDate = date.format('MMMM DD, YYYY, h:mm:ss A');
	return formattedDate
}