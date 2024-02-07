import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/actions'; // Import logoutSuccess action

const Header = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const loggedInUser = useSelector(state => state.auth.user); // Get logged-in user from Redux store
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

	const handleDeposit = () => {

	}

	const handleWithdrawal = () => {

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
                  Welcome, {loggedInUser && (loggedInUser.firstname +' '+ loggedInUser.lastname)}
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
    </header>
  );
};

export default Header;
