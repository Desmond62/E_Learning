import React from "react";
import "../Components/style.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaShareSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import Footer from "../Includes/Footer.jsx";


function Course() {
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

      {/* ================== Course Section ================ */}
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
                // <span className="regs">Courses</span>
                <h3>
                  My <span>Courses</span>
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

      {/*================= Course Section ================= */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="flex4-sect">
            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img src="author-03.webp" alt="" />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Data Science and Machine Learning with python - Hands On!
                </p>
              </a>
              <div className="about-skills">
                <p>38% Complete</p>
                <div className="about-div"></div>
                <div className="about-div2"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
                </div>
              </div>
            </div>

            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-02.jpg"
                      alt=""
                    />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Create Amazing Color Schemes for Your UX Design Projects{" "}
                </p>
              </a>
              <div className="about-skills">
                <p>80% Complete</p>
                <div className="about-div"></div>
                <div className="about-div4"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
                </div>
              </div>
            </div>

            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-03.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg"
                      alt=""
                    />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Culture & Leadership: Strategies for a Successful Business
                </p>
              </a>
              <div className="about-skills">
                <p>15% Complete</p>
                <div className="about-div"></div>
                <div className="about-div5"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="flex4-sect">
            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-04.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-04.jpg"
                      alt=""
                    />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Finance Series: Learn to Budget and Calculate your Net Worth.{" "}
                </p>
              </a>
              <div className="about-skills">
                <p>65% Complete</p>
                <div className="about-div"></div>
                <div className="about-div6"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
                </div>
              </div>
            </div>

            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-05.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-05.jpg"
                      alt=""
                    />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Build Brand Into Marketing: Tackling the New Marketing
                  Landscape{" "}
                </p>
              </a>
              <div className="about-skills">
                <p>45% Complete</p>
                <div className="about-div"></div>
                <div className="about-div7"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
                </div>
              </div>
            </div>

            <div className="col-sec dot">
              <div>
                <Link to={"/course-details"}>
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-03.jpg"
                    alt=""
                    className="img-item"
                  />
                </Link>
                <span className="dots">
                  <HiOutlineDotsHorizontal className="about-dot" />
                  <div className="dropdown-content2">
                    <div className="share-course">
                      <Link>
                        <FaShareSquare className="share-icon" />
                        <span>Share</span>
                      </Link>
                    </div>
                    <div className="share-course">
                      <Link>
                        <FaPlus className="share-icon" />
                        <span>Create Collection</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <BsStarFill className="share-icon" />
                        <span>Favoriite</span>
                      </Link>
                    </div>{" "}
                    <div className="share-course">
                      <Link>
                        <FaBoxArchive className="share-icon" />
                        <span>Archive</span>
                      </Link>
                    </div>{" "}
                  </div>
                </span>

                <div className="flex-sci">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg"
                      alt=""
                    />{" "}
                    <Link>
                      {" "}
                      <span className="about-will">Jason Willams</span>
                    </Link>
                    <span>||</span>
                    <Link>
                      {" "}
                      <span style={{ color: "green" }}>Ohula Malsh</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#">
                <p>
                  {" "}
                  Culture & Leadership: Strategies for a Successful Business{" "}
                </p>
              </a>
              <div className="about-skills">
                <p>15% Complete</p>
                <div className="about-div"></div>
                <div className="about-div5"></div>
              </div>

              <div className="about-div3">
                <div>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star" style={{ color: "gainsboro" }}></i>
                </div>
                <div>
                  <span>Your rating</span>
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

export default Course;
