import React, { useState } from "react";
import Footer from "../Includes/Footer";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import FirstTutorial from "../Tutorial/FirstTutorial";
import SecondTutorial from "../Tutorial/SecondTutorial";
import ThirdTutorial from "../Tutorial/ThirdTutorial";
import Fourthtutorial from "../Tutorial/Fourthtutorial";
import FifthTutoral from "../Tutorial/FifthTutoral";
import TutorialCertificate from "../Tutorial/TutorialCertificate";
import TutorialDescription from "../Tutorial/TutorialDescription";
import TutorialInstructor from "../Tutorial/TutorailInstrutor";
import TutorialOverview from "../Tutorial/TutorialOverview";
import { FaEye } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

const Outlets = ({ displayTutorial }) => {
  switch (displayTutorial) {
    case "Cert":
      return <TutorialCertificate />;
    case "Inst":
      return <TutorialInstructor />;
    case "Descript":
      return <TutorialDescription />;
    case "Over":
      return <TutorialOverview />;
  }
};

const Outlet = ({ showTutorial }) => {
  switch (showTutorial) {
    case "A":
      return <FirstTutorial />;
    case "B":
      return <SecondTutorial />;
    case "C":
      return <ThirdTutorial />;
    case "D":
      return <Fourthtutorial />;
    case "E":
      return <FifthTutoral />;
  }
};

function AfterEnroll() {
  const [tutorial, setTutorial] = useState("A");
  const [tutActive, setTutActive] = useState("A");
  const [tutorialActive, setTutorialActive] = useState("AA");
  const [playTutorial, setPlayTutorial] = useState("Over");
  const [palyActive, setPlayActive] = useState("Over");
  const [isVisible, setIsVisible] = useState(false);
  const [dotActive, setDotActive] = useState(false);

  const changeTutorial = (newTutorial) => {
    setTutorial(newTutorial);
    setTutActive(newTutorial);
  };

  const changeTutorials = (newTutorials) => {
    setTutorialActive(newTutorials);
  };

  const switchTutorial = (exhibitTutorial) => {
    setPlayTutorial(exhibitTutorial);
    setPlayActive(exhibitTutorial);
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const dotChange = () => {
  setDotActive(!dotActive)
  };
  return (
    <div>
      {/* ===================== Navbar Section =============== */}
      <section>
        <nav className="nav-enroll">
          <div className="enroll">
            <a class="navbar-brand" href="#">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/"}
                className=" enroll-a"
              >
                <i className="">
                  <IoBookOutline
                    className="mx-3 abuchi"
                    style={{ color: "rgb(6, 131, 6)" }}
                  />
                </i>
                <i className="error-para">
                  {" "}
                  <span className="error-span"> Des-</span>Learning
                </i>
              </Link>
            </a>
          </div>

          <div className="error-input">
            <form action="">
              <input type="text" name="" id="" placeholder="Search here" />
              <button type="submit">
                {" "}
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="comp-roll display-all">
            <i
              class="fa fa-bell position-relative enroll-not display-icon"
              onClick={() => toggleVisibility()}
            >
              <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </i>

            {isVisible && (
              <div class="display-aft">
                <div className="after-visible">
                  <div className="after-visible-2">
                    <div>
                      <i className="fa fa-user"></i>
                    </div>
                    <div>
                      <Link
                        style={{ padding: 0, margin: 0 }}
                        className="after-hover"
                      >
                        <p className="work">
                          <span className="work">Martin</span> has been added a{" "}
                          <span className="work">Custo</span>
                          ....
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="after-user">
                    <p> 3:20 am</p>
                  </div>
                </div>
                <div className="after-visible">
                  <div className="after-visible-2">
                    <div>
                      <i className="fa fa-user"></i>
                    </div>
                    <div>
                      <Link
                        style={{ padding: 0, margin: 0 }}
                        className="after-hover"
                      >
                        <p className="work">
                          <span className="work">Martin</span> has been added a{" "}
                          <span className="work">Custo</span>
                          ....
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="after-user">
                    <p> 3:20 am</p>
                  </div>
                </div>
                <div className="after-visible">
                  <div className="after-visible-2">
                    <div>
                      <i
                        className="fa fa-user"
                        style={{ backgroundColor: "darkred" }}
                      ></i>
                    </div>
                    <div>
                      <Link
                        style={{ padding: 0, margin: 0 }}
                        className="after-hover"
                      >
                        <p className="work">
                          <span className="work">Martin</span> has been added a{" "}
                          <span className="work">Custo</span>
                          ....
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="after-user">
                    <p> 3:20 am</p>
                  </div>
                </div>
                <div className="after-visible">
                  <div className="after-visible-2">
                    <div>
                      <i className="fa fa-user"></i>
                    </div>
                    <div>
                      <Link
                        style={{ padding: 0, margin: 0 }}
                        className="after-hover"
                      >
                        <p className="work">
                          <span className="work">Martin</span> has been added a{" "}
                          <span className="work">Custo</span>
                          ....
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="after-user">
                    <p> 3:20 am</p>
                  </div>
                </div>
                <div className="after-visible">
                  <div className="after-visible-2">
                    <div>
                      <i className="fa fa-user"></i>
                    </div>
                    <div>
                      <Link
                        style={{ padding: 0, margin: 0 }}
                        className="after-hover"
                      >
                        <p className="work">
                          <span className="work">Martin</span> has been added a{" "}
                          <span className="work">Custo</span>
                          ....
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="after-user">
                    <p> 3:20 am</p>
                  </div>
                </div>
                <div>
                  <Link className="after-notification">
                    <p>See all notifications </p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
            alt=""
            className="enroll-img"
          />

          <div className="after-dot">
            <Link>
              {" "}
              <BsThreeDots
                className="dot-enroll after-dot1"
                onClick={() => dotChange()}
              />
            </Link>

            {dotActive && (
              <div className="after-dot2">
                <div>
                  <div className="after-signout">
                    <Link>
                      {" "}
                      <PiSignOutBold className="signbold" />{" "}
                      <span className="signbold">Sign Out</span>
                    </Link>
                  </div>

                  <div className="after-signout mx-3">
                    <Link>
                      {" "}
                      <PiSignOutBold className="signbold" />{" "}
                      <span className="signbold">Sign Out</span>
                    </Link>
                  </div>
                  <div className="after-signout">
                    <Link>
                      {" "}
                      <PiSignOutBold className="signbold" />{" "}
                      <span className="signbold">Sign Out</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </section>

      {/* ============= Video Section =============== */}
      <section>
        <div className="W-100">
          <div className="row g-0">
            <div className="col-md-9">
              <div>
                <Outlet showTutorial={tutorial} />
                <div className="after-eye">
                  <div>
                    <h4>
                      Finance & Investment Series: Learn to Budget and Calculate
                      Your Net Worth.
                    </h4>
                  </div>
                  <div>
                    {" "}
                    <p className="">
                      {" "}
                      <FaEye className=" after-eye-fa" />
                      <span className="mx-2">8,350</span>
                      Students are watching
                    </p>
                  </div>
                </div>

                <div className=" after-cert">
                  <div>
                    <button
                      onClick={() => switchTutorial("Over")}
                      style={{
                        background: palyActive === "Over" ? "green" : "",
                        color: palyActive === "Over" ? "white" : "",
                      }}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => switchTutorial("Descript")}
                      className="mx-3"
                      style={{
                        background: palyActive === "Descript" ? "green" : "",
                        color: palyActive === "Descript" ? "white" : "",
                      }}
                    >
                      Description
                    </button>
                    <button
                      onClick={() => switchTutorial("Cert")}
                      style={{
                        background: palyActive === "Cert" ? "green" : "",
                        color: palyActive === "Cert" ? "white" : "",
                      }}
                    >
                      Certificates
                    </button>
                    <button
                      onClick={() => switchTutorial("Inst")}
                      className="mx-3"
                      style={{
                        background: palyActive === "Inst" ? "green" : "",
                        color: palyActive === "Inst" ? "white" : "",
                      }}
                    >
                      Instructor
                    </button>
                  </div>
                  <div>
                    <Link style={{ textDecoration: "none" }}>
                      <button className="after-share">
                        <FaShareSquare className="sharess" /> <span>Share</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <Outlets displayTutorial={playTutorial} />
                </div>
              </div>
            </div>
            <div className="col-md-3 after-color">
              <div>
                <div className="after-padd">
                  <h4>Course Content</h4>
                  <p>80 Lesson (8h 15m)</p>
                </div>
                <div>
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          onClick={() => changeTutorials("AA")}
                          style={{
                            color: tutorialActive === "AA" ? "green" : "",
                          }}
                        >
                          {" "}
                          <span>
                            {" "}
                            Lesson -01: Mindful Growth & the Creative Journey,
                            Find Your Spark & Map Your Future
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                          onClick={() => changeTutorials("BB")}
                          style={{
                            color: tutorialActive === "BB" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -02: Science Fiction & Fantasy: Creating
                            Unique and Powerful Worlds
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                          onClick={() => changeTutorials("CC")}
                          style={{
                            color: tutorialActive === "CC" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -03: Autobiographical Fiction: Write a short
                            tory from Personal experience
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFour">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                          onClick={() => changeTutorials("DD")}
                          style={{
                            color: tutorialActive === "DD" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -04: Write for self-Discovery: 6 Journaling
                            Prompts for Gratitude and Growth
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFive">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                          onClick={() => changeTutorials("EE")}
                          style={{
                            color: tutorialActive === "EE" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -05: Copywriting for Beginners: How to Write
                            web Copy That sells Without Being Chessy
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingSix">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                          onClick={() => changeTutorials("FF")}
                          style={{
                            color: tutorialActive === "FF" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -06: How to Write a Personal Statement - The
                            Complete Medicine Masterclass
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSix"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingSeven">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSeven"
                          aria-expanded="false"
                          aria-controls="flush-collapseSeven"
                          onClick={() => changeTutorials("GG")}
                          style={{
                            color: tutorialActive === "GG" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -07: Autobiographical Fiction: Write a short
                            tory from Personal experience
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSeven"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingSeven"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingEight">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEight"
                          aria-expanded="false"
                          aria-controls="flush-collapseEight"
                          onClick={() => changeTutorials("HH")}
                          style={{
                            color: tutorialActive === "HH" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -08: Write for self-Discovery: 6 Journaling
                            Prompts for Gratitude and Growth
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseEight"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingEight"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingNine">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseNine"
                          aria-expanded="false"
                          aria-controls="flush-collapseNine"
                          onClick={() => changeTutorials("II")}
                          style={{
                            color: tutorialActive === "II" ? "green" : "",
                            border: "none",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -09: Copywriting for Beginners: How to Write
                            web Copy That sells Without Being Chessy
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseNine"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingNine"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTen">
                        <button
                          class="accordion-button collapsed after-collasp"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTen"
                          aria-expanded="false"
                          aria-controls="flush-collapseTen"
                          onClick={() => changeTutorials("JJ")}
                          style={{
                            color: tutorialActive === "JJ" ? "green" : "",
                          }}
                        >
                          <span>
                            {" "}
                            Lesson -10: How to Write a Personal Statement - The
                            Complete Medicine Masterclass
                            <p> 01 hour 48 Minutes</p>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTen"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTen"
                        data-bs-parent="#accordionFlushExample"
                        style={{ backgroundColor: "#e7f8ee" }}
                      >
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("A")}
                          style={{
                            color: tutActive === "A" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          01. The Complete Medicine Masterclass
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("B")}
                          style={{
                            color: tutActive === "B" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          02. Standard dummy text ever since the
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("C")}
                          style={{
                            color: tutActive === "C" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          03. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>
                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("D")}
                          style={{
                            color: tutActive === "D" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          04. Printer took a galley of a type and scrambled
                          <p>03 minutes</p>
                        </div>

                        <div
                          class="accordion-body"
                          onClick={() => changeTutorial("E")}
                          style={{
                            color: tutActive === "E" ? "green" : "",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          05. Survived not only Five centuries also the leap
                          <p>03 minutes</p>
                        </div>
                      </div>
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

export default AfterEnroll;
