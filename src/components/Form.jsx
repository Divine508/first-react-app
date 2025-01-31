import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessages, setErrorMessages] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      setSuccessMessage(""); //this function allows the success message to not be showing when there is an error instead it shows only error message

      return setErrorMessages("Please fill in all the fields"); // this function allows our code to check if the email and passwords are available if not available it returns an error message of please fill in al the fields
    }

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!regex.test(password)) {
      setSuccessMessage("");
      return setErrorMessages(
        "Password must contain at least one uppercase letter, one lowercase letter and one number"
      );
    }

    if (password.length < 10) {
      setSuccessMessage("");
      return setErrorMessages("password should be more than 10 words");
    }

    if (email && password) {
      setSuccessMessage("Form submitted successfully"); // this function is to send a message when the form has been submitted succesfully

      return setErrorMessages(""); // this function makes the error message to be cleared after on error is being corrected and the form has been submitted
    }
  };
  console.log(errorMessages);

  // where the code for the form started from
  return (
    <form className="max-w-sm mx-auto" onSubmit={formSubmitHandler}>
      {errorMessages ? (
        <div>
          <h1
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            {errorMessages}
          </h1>
        </div>
      ) : null}
      {successMessage && (
        <div>
          <h1
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            {successMessage}
          </h1>
        </div>
      )}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:focus:ring-opacity-50 dark:text-gray-100 mx-36 mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
