import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from '../redux/actions';
import TransactionModal from './modals/TransactionModal';
import { createTxn } from '../apis/accounts';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const [transactionType, setTransactionType] = useState('deposit')
  const [showTransactionModal, setShowTransactionModal] = useState(false)

  const handleTransaction = async (type, amount) => {
    const user_id = loggedInUser.id

    try {
      const res = await createTxn(token, { type, amount, user_id });
      return res;
    } catch (error) {
      throw error;
    }
  }

  const closeTransactionModal = () => {
    setShowTransactionModal(false)
  }

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate('/')
  };

  const handleDeposit = () => {
    setTransactionType('deposit')
    setShowTransactionModal(true)
  }

  const handleWithdrawal = () => {
    setTransactionType('withdrawal')
    setShowTransactionModal(true)
  }

  return (
    <header className="d-flex flex-wrap mb-4 fixed-top opacity-animation">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  Welcome, {loggedInUser && (loggedInUser.firstname + ' ' + loggedInUser.lastname)}
                </span>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button onClick={handleDeposit} className="nav-link active" aria-current="page">
                  Deposit
                </button>
              </li>
              <li className="nav-item">
                <button onClick={handleWithdrawal} className="nav-link active" aria-current="page">
                  Withdrawal
                </button>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link active" aria-current="page">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <TransactionModal showModal={showTransactionModal}
        handleTransaction={handleTransaction}
        closeModal={closeTransactionModal}
        type={transactionType}
         />
    </header>
  );
};

export default Header;
