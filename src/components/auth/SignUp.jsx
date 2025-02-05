import { useState } from "react";
import { Link } from "react-router-dom";
import errorOutput from "../common/errorOutput";
const SignUp = () => {
  const [FirstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!FirstName || !lastName) {
      return setErrorMessage("All inputs field are required");
    }
  };

  //
  return (
    <div>
      <h3 className="mb-5">Sign Up here</h3>

      {errorMessage && <errorOutput errorMessage={errorMessage} />}

      <form action="" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            onChange={(event) => SetFirstName(event.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={(event) => SetLastName(event.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) => SetPassword(event.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        <div className="form-group my-4 ">
          <button className="btn btn-secondary form-control" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="mb-5">
        <p>
          Already have an account <Link to="/get-started/login"> Log In </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
