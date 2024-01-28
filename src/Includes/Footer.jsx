import React from 'react'
import "../Components/style.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

function Footer() {
  return (
    <div>
      {/* =================== Footet1 Section =================== */}
      <section className="footer-col pt-5 pb-5">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-con">
              <div className="footer-nice">
                <span className="nav-bar2">
                  <a class="navbar-brand" href="#">
                    <i>
                      <IoBookOutline className="e-books" />
                    </i>
                    <span> Des-</span>Learning
                  </a>
                </span>
              </div>

              <h5>Caribbean Ct</h5>
              <p>Haymarket, Virginia (VA).</p>

              <div className="icons-soc">
                <i className="">
                  <HiOutlineMail className="icons" />
                </i>
                <a class="" aria-current="page" href="#">
                  address@gmail.com
                </a>
              </div>

              <div className="icons-soc">
                <i className="">
                  <FiPhoneCall className="icons" />
                </i>
                <a class="" aria-current="page" href="#">
                  +234 8108867497
                </a>
              </div>
              <div className="social-icons ">
                <i>
                  <FiFacebook className="social-is" />
                </i>
                <i>
                  <SlSocialTwitter className="social-is" />{" "}
                </i>

                <i>
                  <FiInstagram className="social-is" />
                </i>
                <i>
                  <FaWhatsapp className="social-is" />
                </i>
              </div>
            </div>

            <div className="footer-con">
              <h4>Category</h4>
              <div className="footer-icons">
                <a href="#">Data Science</a>
                <a href="#">Creative Writing</a>
                <a href="#">Hacking</a>
                <a href="#">Graphic Design</a>
                <a href="#">Business Analytics</a>
                <a href="#">Financial</a>
              </div>
            </div>

            <div className="footer-con">
              <h4>Quick Links</h4>
              <div className="footer-icons">
                <a href="#">Data Science</a>
                <a href="#">Creative Writing</a>
                <a href="#">Hacking</a>
                <a href="#">Graphic Design</a>
                <a href="#">Business Analytics</a>
                <a href="#">Financial</a>
              </div>
            </div>

            <div className="footer-con">
              <h4>Subscribe</h4>
              <div className="footer-para">
                <p>
                  E-Learning has been them an industry printer took a galley
                  make book.
                </p>
                <form action="">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="first-btnss">
                    <button>Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
