import { Link } from "react-router-dom";

const Reset = () => (
  <div>
    <h1 className="mb-5">Reset Password</h1>
    <form action="">
      <div className="form-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Registered Email"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter New Password"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm New Password"
        />
      </div>

      <div className="form-group my-4">
        <button className="btn btn-secondary form-control" type="submit">
          Submit
        </button>
      </div>
    </form>

    <div className="d-flex justify-content-between">
      <p>
        Don't have an account ? <Link to="/get-started/sign-up">Sign Up</Link>
      </p>

      <p>
        Already have an account <Link to="/get-started/login">Login</Link>
      </p>
    </div>
  </div>
);

export default Reset;
