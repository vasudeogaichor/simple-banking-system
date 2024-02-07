import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import { loginUser } from "../apis/auth";

export default function EmployeeLoginPage() {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async () => {
        const userDetails = { username, password };
        const loginResult = await loginUser(userDetails);
        if (loginResult?.Error) {
            setLoginError(loginResult.Error);
            setTimeout(() => {
                setLoginError(null);
            }, 3000);
        } else {
            dispatch(loginSuccess(loginResult.token, loginResult.user))
            navigate("/employee-home");
        }
    };

    return (
        <div className="d-flex align-items-top justify-content-center vh-100 opacity-animation" style={{ marginTop: '200px' }}>
            <Form className="w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleLogin}>
                    Submit
                </Button>
                <p className="mt-2">
                    <span
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer", color: "blue" }}
                    >
                        Customer login
                    </span>
                </p>
                {loginError?.length && (
                    <div className="alert alert-danger">{loginError}</div>
                )}
            </Form>
        </div>
    )
}