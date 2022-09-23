import { React, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./signUp.module.css";

const Signup = () => {
  const initialValues = { email: "", password: "", uname: "", city: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.uname) {
      errors.uname = ` Username is required!`;
    }
    if (!values.email) {
      errors.email = `Email is required!`;
    } else if (!regex.test(values.email)) {
      errors.email = `This is not a valid email format!`;
    }
    if (!values.password) {
      errors.password = `Password is required`;
    } else if (values.password.length < 4) {
      errors.password = `Password must be more than 4 characters`;
    } else if (values.password.length > 10) {
      errors.password = `Password cannot exceed more than 10 characters`;
    }
    if (!values.city) {
      errors.city = `City is required!`;
    } else {
      alert(`User Created successfully`);
      localStorage.setItem("user", JSON.stringify([formValues]));
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.innerBox}>
            <h1 className={styles.heading}>Signup</h1>

            <input
              type="text"
              name="uname"
              placeholder="Name"
              value={formValues.uname}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.uname}</p>

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.email}</p>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.password}</p>

            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formValues.city}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.city}</p>

            <div className={styles.footer}>
              <button>Signup</button>
              <p>
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link to="/">Login</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
