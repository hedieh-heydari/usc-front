import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/handle";

//define a box to get all data
const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const { name, email, password, error, success } = values;

    const handleChange = (name) =>
        (event) => {
            setValues({ ...values, error: false, [name]: event.target.value });
        };

    const onSubmit = (event) => {
            event.preventDefault();
            setValues({ ...values, error: false });
            signup({ name, email, password })
              .then((data) => {
                console.log("DATA", data);
                // here you can manage all errors base on error message 
                // we just do one way
                if (data.email === email) {
                    setValues({
                      ...values,
                      name: "",
                      email: "",
                      password: "",
                      error: "",
                      success: true,
                    });
                  } else {
                    setValues({
                      ...values,
                      error: true,
                      success: false,
                    });
                  }
              })
              .catch((e) => console.log(e));
          };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        حساب کاربری جدید با موفقیت ایجاد شد <Link
                            to="/signin"
                        >
                            login now.
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        لطقا همه اطلاعات ضروری را وارد نمایید
                    </div>
                </div>
            </div>
        );
    };        

        const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                                className="form-control"
                                value={name}
                                onChange={handleChange("name")}
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input
                                className="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                type="password"
                            />
                        </div>
                        <button
                            onClick={onSubmit}
                            className="btn btn-success btn-block"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <Base title="صفحه ورود کاربران" description="ورود به صفحه فروشگاه قهوه">
            {successMessage()}
            {errorMessage()}      
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    );
};

export default Signup;