import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h1 className="mb-5">Sign In Here</h1>
      <form action="">
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="form-group my-4">
          <button className="btn btn-secondary form-control" type="submit">
            Login
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-between">
        <p>
          Don't have an account ? <Link to="/get-started/sign-up">Sign Up</Link>
        </p>

        <p>
          forgot password ?{" "}
          <Link to="/get-started/reset-password">Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
