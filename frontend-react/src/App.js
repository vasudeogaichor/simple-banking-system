import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerLoginPage from './components/CustomerLoginPage';
import EmployeeLoginPage from './components/EmployeeLoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CustomerLoginPage />} />
          <Route path="/employee-login" element={<EmployeeLoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
