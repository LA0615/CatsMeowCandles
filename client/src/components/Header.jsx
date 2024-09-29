import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER, LOGIN_USER } from "../utils/mutations";
import { AuthContext } from "../utils/AuthContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, logout, user } = useContext(AuthContext); 

  const [signup] = useMutation(SIGNUP_USER);
  const [loginMutation] = useMutation(LOGIN_USER);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    const contactLink = document.getElementById("header-contact-link");
    const email = atob("Y2F0c21lb3djYW5kbGVzQGdtYWlsLmNvbQ=="); // Base64 encoded email to prevent spam bots
    contactLink.href = `mailto:${email}?Subject=Contact%20from%20Website`;
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data } = await loginMutation({ variables: { email, password } });
      if (data && data.login && data.login.token) {
        login(data.login.token);
        navigate("/user");
        handleClose();
      } else {
        setPasswordError("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setPasswordError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const { data } = await signup({
        variables: {
          email,
          firstName,
          lastName,
          password,
        },
      });

      if (data.signup.token) {
        login(data.signup.token);
        navigate("/user");
        handleClose();
      } else {
        setPasswordError("Signup failed");
      }
    } catch (error) {
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        setPasswordError(error.graphQLErrors[0].message);
      } else {
        setPasswordError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      if (isSignup) {
        handleSignup();
      } else {
        handleLogin();
      }
    }
  };

  return (
    <header className="header-container">
      <div className="container-fluid d-flex flex-column justify-content-between align-items-center h-100">
        <div className="text-center mb-3">
          <h1 className="text-center">Cat&apos;s Meow Candles</h1>
          <img
            src="/logo.gif"
            className="img-fluid logo"
            alt="Cat's Meow Candles Logo"
          />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-auto">
          <div className="container-fluid justify-content-center">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
              <a
                id="header-contact-link"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact"
              >
                Contact
              </a>
              {user ? (
                <>
                  <span className="nav-link">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="fa-icon icon-with-margin"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "1.2em",
                      }}
                      onClick={() => navigate("/user")}
                    />
                  </span>
                  <span
                    className="nav-link"
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </span>
                </>
              ) : (
                <span className="nav-link">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="fa-icon icon-with-margin"
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "1.2em",
                    }}
                    onClick={handleShow}
                  />
                </span>
              )}
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="fa-icon icon-with-margin"
                  style={{
                    color: "black",
                    fontSize: "1.1em",
                  }}
                />
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isSignup ? "Sign Up" : "Log In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
              </>
            )}

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
                required
                disabled={loading}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!passwordError}
                required
                disabled={loading}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
              {isSignup && (
                <Form.Text className="text-muted">
                  Your password must be at least 8 characters long, contain at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </Form.Text>
              )}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : isSignup ? (
                "Sign Up"
              ) : (
                "Log In"
              )}
            </Button>
          </Form>
          {passwordError && (
            <div className="mt-3 text-danger">{passwordError}</div>
          )}
          <div className="mt-3">
            {isSignup ? (
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => setIsSignup(false)}
                  disabled={loading}
                >
                  Log In
                </Button>
              </p>
            ) : (
              <p>
                Don&apos;t have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => setIsSignup(true)}
                  disabled={loading}
                >
                  Sign Up
                </Button>
              </p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;