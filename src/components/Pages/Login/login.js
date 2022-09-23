import { React, useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
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
    const getuserArr = localStorage.getItem("user");
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = `Email is required!`;
    } else if (!regex.test(values.email)) {
      errors.email = `This is not a valid email format!`;
    }
    if (!values.password) {
      errors.password = `Password is required`;
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el) => {
          return el.email === values.email && el.password === values.password;
        });
        console.log(userlogin[0]);
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log(`user login successfully`);

          localStorage.setItem("Login", JSON.stringify(userlogin));

          navigate("/home");
        }
      }
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>

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

            <div className={styles.footer}>
              <button>Login</button>
              <p>
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link to="/signup">Sign up</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
