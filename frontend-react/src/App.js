import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'
import CustomerLoginPage from './components/CustomerLoginPage';
import EmployeeLoginPage from './components/EmployeeLoginPage';
import CustomerHomePage from './components/CustomerHomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<CustomerLoginPage />} />
            <Route path="/employee-login" element={<EmployeeLoginPage />} />
            <Route path="/customer-home" element={<CustomerHomePage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
