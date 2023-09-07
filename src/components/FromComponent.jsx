import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
//useForm custom hook
export const FromComponent = () => {
  const focusRef = useRef();

  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange } = useForm(initialForm);

  const { userName, email, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>useForm custom hook</h1>
      <div className="form-group">
        <label htmlFor="userName">UserName</label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
