import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password) {
      success
      message
    }
  }
`;

const ResetPassword = () => {
  const { token } = useParams(); // Extract the token parameter from the URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const { data } = await resetPassword({ variables: { token, password } });
      if (data.resetPassword.success) {
        setMessage(data.resetPassword.message);
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds

        // Redirect the user to the main page (homepage)
        navigate("/"); // Navigate to the homepage
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setError("Error resetting password");
      setMessage("");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" , fontSize: "3em", marginTop: "5px"}}>Reset Password</h2>
      {message && (
        <Alert variant="success" style={{ textAlign: "center" }}>
          {message}
        </Alert>
      )}
      {error && (
        <Alert variant="danger" style={{ textAlign: "center" }}>
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}
       style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        maxWidth: "400px", 
      }}
    >
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ textAlign: "center", marginTop: "15px", fontStyle: "italic", fontWeight: "bold"}}>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", borderRadius: "5px", border: "1px solid black" }}
            />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label style={{ textAlign: "center", marginTop: "15px",fontStyle:"italic", fontWeight: "bold" }}>
            Confirm New Password
          </Form.Label>

          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%", borderRadius: "5px", border: "1px solid black" }}
            />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "15px" }}>
        Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
