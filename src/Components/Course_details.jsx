import React, { useState } from "react";
import "../Components/style.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiSchoolLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Description from "./Description";
import Instructors from "./Instructors";
import Reviews from "./Reviews";
import Footer from '../Includes/Footer.jsx'


const Outlet = ({ componentToShow }) => {
    switch (componentToShow) {
        case 'A':
            return <Description />;
        case 'B':
            return <Instructors />;
        case 'C':
            return<Reviews/>
    }
}

const Describe = () => <div><Description/></div> 
const Instruct = () => <div><Instructors /></div>
  
  
function Course_details() {
  const [isActive, setIsActive]=useState('A')
    const [currentComponent, setCurrentComponent] = useState('A');
    const changeComponent = (newComponent) => {
      setCurrentComponent(newComponent);
      setIsActive(newComponent);
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
                  <Link to={"register"}>Register</Link>
                  <Link to={"login"}>Login</Link>
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

      {/* ============= Course-Details section=========== */}
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
                // <span className="regs">Courses Details</span>
                <h3>
                  Courses <span>Details</span>
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

      {/* ============ Image Section ============ */}

      <section>
        <div className="container mt-5 mb-5">
          <div className="course-details">
            <div className="img-course-details">
              <div className="pls-work">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-details.jpg"
                  alt=""
                />
                <div className="img2-course-details">
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/circle-shape.png"
                    alt=""
                  />
                </div>
                <div className="img3-course-details">
                  <a
                    href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                    target="_blank"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
              <div>
                {" "}
                <h4>
                  Finance & Investment Series: Learn to Budget and Calculate
                  Your Net Worth.
                </h4>
              </div>
              <div className="course-details-about">
                <div>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/author/author-05.jpg"
                    alt=""
                  />{" "}
                  <Link style={{ textDecoration: "none", color: "black" }}>
                    {" "}
                    <span className="about-will">Jason Willams</span>
                  </Link>
                  <span>||</span>{" "}
                  <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                </div>
                <div>
                  <div>
                    {" "}
                    <span
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "550",
                      }}
                    >
                      4.9
                    </span>
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i
                      className="fa fa-star"
                      style={{ color: "gainsboro" }}
                    ></i>{" "}
                    <span
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      (5,764 Rating)
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-btn-course-details">
                <div className="course-details-btns">
                  <div className="course-details-btns1">
                    <button
                      onClick={() => changeComponent("A")}
                      style={{
                        background: isActive === "A" ? "green" : "",
                        color: isActive === "A" ? "white" : "",
                      }}
                    >
                      Description
                    </button>
                  </div>
                  <div className="course-details-btns2">
                    <button
                      onClick={() => changeComponent("B")}
                      style={{
                        background: isActive === "B" ? "green" : "",
                        color: isActive === "B" ? "white" : "",
                      }}
                    >
                      Instructors
                    </button>
                  </div>
                  <div className="course-details-btns3">
                    <button
                      onClick={() => changeComponent("C")}
                      style={{
                        background: isActive === "C" ? "green" : "",
                        color: isActive === "C" ? "white" : "",
                      }}
                    >
                      Reviews
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Outlet componentToShow={currentComponent} />
              </div>
            </div>

            <div className="con-course-details">
              <div className="con-course-details2">
                <div>
                  <h3>$420.38</h3>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <FaUserTie className="details-user" />
                      <span>Instructor</span>
                    </div>
                    <div>
                      <p>Pamela Foster</p>
                    </div>
                  </div>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <IoIosTime className="details-user" />
                      <span>Duration</span>
                    </div>
                    <div>
                      <p>08 hr 15 mins</p>
                    </div>
                  </div>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <FaYoutubeSquare className="details-user" />
                      <span>Lectures</span>
                    </div>
                    <div>
                      <p>29</p>
                    </div>
                  </div>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <RiSchoolLine className="details-user" />
                      <span>Level</span>
                    </div>
                    <div>
                      <p>Secondary</p>
                    </div>
                  </div>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <FaBook className="details-user" />
                      <span> Language</span>
                    </div>
                    <div>
                      <p>English</p>
                    </div>
                  </div>
                  <div className="container course-details-flex">
                    <div className="d-flex">
                      <PiCertificateLight className="details-user" />
                      <span>Certificate</span>
                    </div>
                    <div>
                      <p>Yes</p>
                    </div>
                  </div>
                </div>
                <div className="course-details-btn">
                  <a href="#">
                    <button type="submit">Enroll Now</button>
                  </a>{" "}
                </div>
              </div>
              <h4>Share Course:</h4>
              <div className="just">
                <div>
                  <FiFacebook className="details-course-muti-icons" />
                </div>
                <div>
                  <CiLinkedin className="details-course-muti-icons" />
                </div>{" "}
                <div>
                  <CiTwitter className="details-course-muti-icons" />
                </div>{" "}
                <div>
                  <FaWhatsapp className="details-course-muti-icons" />
                </div>{" "}
                <div>
                  <FaInstagram className="details-course-muti-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Course_details;
