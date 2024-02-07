import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'
import CustomerLoginPage from './components/loginpages/CustomerLoginPage';
import EmployeeLoginPage from './components/loginpages/EmployeeLoginPage';
import CustomerHomePage from './components/homepages/CustomerHomePage';
import EmployeeHomePage from './components/homepages/EmployeeHomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<CustomerLoginPage />} />
            <Route path="/employee-login" element={<EmployeeLoginPage />} />
            <Route path="/customer-home" element={<CustomerHomePage />} />
            <Route path="/employee-home" element={<EmployeeHomePage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
