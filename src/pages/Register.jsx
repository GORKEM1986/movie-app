import React from "react";


const Register = () => {
   
    return (
      <div className="d-flex justify-content-center">
          <div className="form-image">
            <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
          </div>
        <div className="register-form">
          <h1 className="form-title display-3">Register</h1>
          <form id="register" >
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Enter your first name.."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter your last name.."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email adress.."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password.."
                required
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Register"
            />
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  