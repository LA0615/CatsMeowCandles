import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import gql from 'graphql-tag';

const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotPassword] = useMutation(FORGOT_PASSWORD_MUTATION);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const { data } = await forgotPassword({ variables: { email } });
      setMessage(data.forgotPassword);
      setError('');
      setEmail(''); // Clear the email input field
    } catch (err) {
      console.error('Forgot password error:', err);
      setError('Error sending password reset email');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Please Enter Your Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
      </Button>
    </Form>
  );
};

export default ForgotPassword;