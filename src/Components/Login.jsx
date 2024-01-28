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


function Login() {
  const navigate = useNavigate();
  const [user, setUsers] = useState({
    matricNumber: "",
    password: "",
  })
  const handleChange = (e) => {
    setUsers({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("matricNumber", user.matricNumber);
    dataForm.append("password", user.password);

    try {
      const res = await axios.post(`${apiUrl}/app/login`, dataForm, { headers: { "Content-Type": "application/json" } });
      window.localStorage.setItem("users", JSON.stringify(res.data.data))
      window.localStorage.setItem("token", JSON.stringify(res.data.token))
      navigate('/')
    console.log(res);

    } catch (error) {
      console.log(error)
    }
  }
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

      {/* ================== Login Section ================ */}
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
                // <span className="regs">Login</span>
                <h3>
                  Login <span>Form</span>
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

      {/*================= Login Section ================= */}

      <section className="">
        <div className="container padd">
          <div className="reg-form">
            <div className="form-login">
              <div>
                <img src="register.webp" alt="" />
              </div>
            </div>
            <div className="form-con1">
              <h4>
                Login <span>Now</span>
              </h4>
              <form action="" onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="matricNumber"
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Matriculation Number</label>
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
                </div>

                <div className="form-btn">
                  <button>Login</button>
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

export default Login;
