import React, { useState } from "react";
import "../Components/style.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Constant";
import Footer from "../Includes/Footer.jsx";


function Register() {
  const navigate = useNavigate();
  const [file, setFiles] = useState("");
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    conPass: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const [error, setError] = useState({});
  const submitData = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (user.fName.trim() === "") {
      newErrors.fNameErr = "Your FirstName is required";
    }
    if (user.lName.trim() === "") {
      newErrors.lNameErr = "Your LastName is required";
    }
    if (user.email.trim() === "") {
      newErrors.emailErr = "Your Email is required";
    }
    if (user.phone.trim() === "") {
      newErrors.phoneErr = "Your Phone Number Is Required";
    } else if (user.phone.trim().length !== 11) {
      newErrors.phoneErr = "Please your number Must Be 11 Characters";
    }
    if (user.password.trim() === "") {
      newErrors.passwordErr = "Your Password is required";
    }
    if (user.password.trim().length < 8) {
      newErrors.passwordErr = "Your Password must not be less 8 characters";
    }
    if (user.conPass.trim() === "") {
      newErrors.conPassErr = "Your Password is required";
    } else if (user.conPass.trim() !== user.password.trim()) {
      newErrors.conPassErr = "Your Password DO Not Match";
    }
    setError(newErrors);

    const userData = new FormData();
    userData.append("fName", user.fName);
    userData.append("lName", user.lName);
    userData.append("email", user.email);
    userData.append("phone", user.phone);
    userData.append("password", user.password);
    userData.append("conPass", user.conPass);
    userData.append("file", file)

    try {
      const res = await axios.post(
        `${apiUrl}/app/register`,
        userData,{ file },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
       navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <div className="niger">
            <span>
              All course 28% off for{" "}
              <a class="" href="#">
                Nigerian people’s
              </a>
            </span>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTexts"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTexts">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-icon">
              <li class="nav-item mx-4">
                <i className="">
                  <FiPhoneCall className="icons" />
                </i>
                <a class="" aria-current="page" href="#">
                  +234 8108867497
                </a>
              </li>

              <li class="nav-item">
                <i className="">
                  <HiOutlineMail className="icons" />
                </i>
                <a class="" aria-current="page" href="#">
                  address@gmail.com
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              <div className="social-icon">
                <i>
                  <FiFacebook className="social-i" />
                </i>
                <i>
                  <SlSocialTwitter className="social-i" />{" "}
                  <i>
                    <FiInstagram className="social-i" />
                  </i>
                  <i>
                    <FaWhatsapp className="social-i" />
                  </i>
                </i>
              </div>
            </span>
          </div>
        </div>
      </nav>

      {/* ================ Second Navbar ================= */}

      <nav class="navbar navbar-expand-lg navbar-light nav-bar p-3 sticky-top">
        <div class="container">
          <span className="nav-bar1">
            <a class="navbar-brand" href="#">
              <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                <i>
                  <IoBookOutline className="mx-3 e-book" />
                </i>
                <span> Des-</span>Learning
              </Link>
            </a>
          </span>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-ul">
              <li class="nav-item  active mx-3">
                <a
                  class="nav-link active"
                  style={{ color: "green" }}
                  aria-current="page"
                  href="/"
                >
                  <Link style={{ textDecoration: "none" }} to={"/"}>
                    Home
                    <div className="bord"></div>
                  </Link>
                </a>
              </li>
              <li class="nav-item dropdown1 mx-3">
                <a class="nav-link dropbtn1" href="#">
                  All Course
                </a>
                <div class="dropdown-content1">
                  <Link to={"/course"}>Courses</Link>
                  <Link to={"/course-details"}>Courses Details</Link>
                </div>
              </li>

              <li class="nav-item dropdown mx-3">
                <a class="nav-link dropbtn" href="#">
                  Pages
                </a>
                <div class="dropdown-content">
                  <Link to={"/about"}>About</Link>
                  <Link to={"/register"}>Register</Link>
                  <Link to={"/login"}>Login</Link>
                  <Link to={"/page-error"}>Page Error</Link>
                </div>
              </li>

              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  <Link style={{ textDecoration: "none" }} to={"/contact"}>
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
            <span className="navbar-text signs">
              {/* <a className="color" href="#"> */}
              <Link to={"/login"}>
                <span> Sign In</span>
              </Link>
              {/* </a> */}
              <Link to={"/register"}>
                {" "}
                <button>Sign Up</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>

      {/* ================== Register Section ================ */}
      <section className="register-container ">
        <div className="container">
          <div className="register-flex">
            <div>
              <div className="rotate">
                <img src="shape-8.webp" alt="" />
              </div>

              <div className="reg-links">
                <Link to={"/"} className="reg-link">
                  Home
                </Link>{" "}
                // <span className="regs">Register</span>
                <h3>
                  Registration <span>Form</span>
                </h3>
              </div>
              <div>
                <img src="lines-6.png" width={"60%"} alt="" />
              </div>
            </div>

            <div className="reg-img">
              <img src="batch.png" alt="" className="imgs" />
              <img src="author-03.webp" alt="" className="imgss" />
            </div>
            <div className="webp">
              <img src="bk.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/*================= Form Register Section ================= */}

      <section className="">
        <div className="container padd">
          <div className="reg-form">
            <div className="form-con">
              <div>
                <img src="register.webp" alt="" />
              </div>
            </div>
            <div className="form-con1">
              <h4>
                Registration <span>Now</span>
              </h4>
              <form action="" onSubmit={submitData}>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="fName"
                    onChange={handleChange}
                  />
                  <label for="floatingInput">First Name</label>
                  {error.fNameErr && (
                    <span style={{ color: "red" }}>{error.fNameErr}</span>
                  )}
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="lName"
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Last Name</label>
                  {error.lNameErr && (
                    <span style={{ color: "red" }}>{error.lNameErr}</span>
                  )}
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Email address</label>
                  {error.emailErr && (
                    <span style={{ color: "red" }}>{error.emailErr}</span>
                  )}
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="avatar"
                    onChange={handleFileChange}
                  />
                  <label for="floatingInput">Photo</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="phone"
                    onChange={handleChange}
                  />
                  <label for="floatingPassword">Phone Number</label>
                  {error.phoneErr && (
                    <span style={{ color: "red" }}>{error.phoneErr}</span>
                  )}
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                  <label for="floatingPassword">Password</label>
                  {error.passwordErr && (
                    <span style={{ color: "red" }}>{error.passwordErr}</span>
                  )}
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="conPass"
                    onChange={handleChange}
                  />
                  <label for="floatingPassword">ConfirmPassword</label>
                  {error.conPassErr && (
                    <span style={{ color: "red" }}>{error.conPassErr}</span>
                  )}
                </div>
                <div className="form-btn">
                  <button type="submit">Create an account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Register;
