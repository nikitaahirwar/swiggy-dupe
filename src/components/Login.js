import { useEffect, useState } from "react";
import { validateInputs } from "../utils/validateInputs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
  });
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, telephone, password } = formData;

    const inputsToValidate = isSignedInForm
      ? { email, password }
      : { name, email, telephone, password };

    const validationError = validateInputs(inputsToValidate);

    setError(validationError);

    if (validationError) return;
    if (isSignedInForm) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setError(`${error.code} - ${error.message}`);
        });
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: formData.name,
          });
        })
        .catch((error) => {
          setError(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-300 w-[90%] md:w-1/2 m-auto p-4 my-20 md:my-40"
    >
      <h1 className="text-3xl text-amber-600 font-bold p-1 m-2">
        {isSignedInForm ? "Login" : "Signup"}
      </h1>
      {!isSignedInForm && (
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
        onClick={() => setIsSignedInForm(!isSignedInForm)}
      >
        {isSignedInForm
          ? "Not have account? Click to sign up!"
          : "Already have an account? Click to log in!"}
      </h2>
    </form>
  );
};

export default Login;
