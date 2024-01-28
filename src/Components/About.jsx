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
import Footer from '../Includes/Footer.jsx'


function About() {
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

      {/* ================== About Section ================ */}
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
                // <span className="regs">About</span>
                <h3>
                  About <span>Learning</span>
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

      {/*================= About Section stage1 ================= */}
      <section className="padd2">
        <div className="container">
          <div className="about-sect">
            <div className="about-stage">
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/about.jpg"
                alt=""
                className="about-img"
              />
              <div>
                <img src="batch_2.jpg" alt="" className="about-img2" />
              </div>
            </div>

            <div className="about-stage">
              <p className="about-par">Welcome to Des-Learning</p>
              <h3>
                You can join with Edule and upgrade your skill for your{" "}
                <span> bright future.</span>
              </h3>
              <p className="about-par2">
                Lorem Ipsum has been the industr’s standard dummy text ever
                since unknown printer took galley type and scmbled make type
                specimen book. It has survived not only five centuries.
              </p>
              <div className="first-section mt-4">
                <Link>
                  <button>Start A Course</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== About Test ================= */}
      <section>
        <div className="caro-sub">
          <h4>Team Member's</h4>
          <h3>
            Des-Learning Skilled <span>Instructor</span>
          </h3>
        </div>
        <div className="container">
          <div className="about-test">
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-02.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Mitchell Colon</h4>
                <h6>BBA, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-01.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Margarita James</h4>
                <h6>MSC, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Sonya Gordon</h4>
                <h6>MBA, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-04.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Archie Neal</h4>
                <h6>BBS, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-05.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Randal Ramsey</h4>
                <h6>MBBS, Instructor</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-5">
          <div className="about-test">
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Rochelle Thomas</h4>
                <h6>MSC, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Della Salazar</h4>
                <h6>BBA, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-08.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Ricardo Patrick </h4>
                <h6>MBA, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-09.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Kurt Stewart</h4>
                <h6>BBS, Instructor</h6>
              </div>
            </div>
            <div className="about-wid">
              <div className="flex-about">
                <img
                  src="https://htmldemo.net/edule/eduLe/assets/images/author/author-10.jpg"
                  alt=""
                />
                <p>
                  4.9 <i className="fa fa-star"></i> <span>(rating)</span>
                </p>
                <h4>Rodney Terry</h4>
                <h6>MBBS, Instructor</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Student Testimonail Section ===================== */}
      <section>
        <div className="caro-sub">
          <h4>Student Testimonial</h4>
          <h3>
            Feedback From <span>Student</span>
          </h3>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide pb-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="flex2">
                <div className="ima">
                  <div>
                    <img src="author-06.webp" alt="" />
                    <div className="star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i
                        className="fa fa-star"
                        style={{ color: "gainsboro" }}
                      ></i>
                    </div>
                    <p className="caro-para">
                      Our quality curriculum is designed with top-tier industry
                      partners, not academics so you learn the skills.
                      Self-paced learning - whenever and wherever you want.
                      Graduate while learning part-time for 12 hrs/week.
                    </p>
                    <h3>Sara Alexander</h3>
                    <p className="caro-par">Product Designer, Nigerian</p>
                  </div>
                </div>
                <div className="ima">
                  <div>
                    <img src="author-07.webp" alt="" />
                    <div className="star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i
                        className="fa fa-star"
                        style={{ color: "gainsboro" }}
                      ></i>
                    </div>
                    <p className="caro-para">
                      Learn by doing with real-world projects and other hands-on
                      exercises that lead to real skills. Self-paced learning -
                      whenever and wherever you want. Graduate while learning
                      part-time for 12 hrs/week.
                    </p>
                    <h3>Melissa Roberts</h3>
                    <p className="caro-par">Product Designer, Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="flex2">
                <div className="ima">
                  <div>
                    <img src="author-03.webp" alt="" />{" "}
                    <div className="star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i
                        className="fa fa-star"
                        style={{ color: "gainsboro" }}
                      ></i>
                    </div>
                    <p className="caro-para">
                      Our quality curriculum is designed with top-tier industry
                      partners, not academics so you learn the skills.
                      Self-paced learning - whenever and wherever you want.
                      Graduate while learning part-time for 12 hrs/week.
                    </p>
                    <h3>Sara Alexander</h3>
                    <p className="caro-par">Product Designer, Nigerian</p>
                  </div>
                </div>
                <div className="ima">
                  <div>
                    <img src="author-07.webp" alt="" />
                    <div className="star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i
                        className="fa fa-star"
                        style={{ color: "gainsboro" }}
                      ></i>
                    </div>
                    <p className="caro-para">
                      Learn by doing with real-world projects and other hands-on
                      exercises that lead to real skills. Self-paced learning -
                      whenever and wherever you want. Graduate while learning
                      part-time for 12 hrs/week.
                    </p>
                    <h3>Melissa Roberts</h3>
                    <p className="caro-par">Product Designer, Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Best Supporter Section ================ */}

      <section className="mt-5 mb-5">
        <div
          id="carouselExampleCaptionss"
          class="carousel slide pb-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionss"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "transparent",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionss"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "transparent",
              }}
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container best-sect">
                <div className="ima-flex">
                  <div>
                    <h3>
                      Best Supporter Of <span> Des-Learning</span>
                    </h3>
                  </div>
                  <div className="ima2-flex">
                    <div>
                      <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-19.png"
                        alt=""
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-20.png"
                        alt=""
                        className="rotate2"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex3">
                  <div>
                    <div>
                      <img src="brand.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-2.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-3.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-4.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-5.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="container best-sect">
                <div>
                  <h3>
                    Best Supporter Of <span> E-Learning</span>
                  </h3>
                </div>
                <div className="flex3">
                  <div>
                    <div>
                      <img src="brand.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-2.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-3.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-4.webp" alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src="brand-5.webp" alt="" />
                    </div>
                  </div>
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

export default About;
