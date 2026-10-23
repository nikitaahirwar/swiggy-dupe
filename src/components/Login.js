import { useState } from "react";
import { validateInputs } from "../utils/validateInputs";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateInputs(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-300 w-1/2 m-auto p-4 my-40"
    >
      <h1 className="text-3xl text-amber-600 font-bold p-1 m-2">
        {isSignedIn ? "Login" : "Signup"}
      </h1>
      {!isSignedIn && (
        <input
          className="border border-black p-2 m-2"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={(e) => handleFormChange(e)}
        />
      )}
      <input
        className="border border-black p-2 m-2"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={(e) => handleFormChange(e)}
      />
      <input
        className="border border-black p-2 m-2"
        type="tel"
        name="telephone"
        value={formData.telephone}
        placeholder="Enter your mobile number"
        onChange={(e) => handleFormChange(e)}
      />
      <input
        className="border border-black p-2 m-2"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter your password"
        onChange={(e) => handleFormChange(e)}
      />
      <p className="text-red-600 ml-2 mb-2">{error}</p>
      <button className="bg-amber-600 text-white font-bold text-lg p-2 m-2">
        Submit
      </button>
      <p className="p-2 text-sm">
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
      <h2
        className="font-bold text-2xl p-1 m-1 text-blue-400"
        onClick={() => setIsSignedIn(!isSignedIn)}
      >
        {isSignedIn
          ? "Not have account? Click to sign up!"
          : "Already have an account? Click to log in!"}
      </h2>
    </form>
  );
};

export default Login;
