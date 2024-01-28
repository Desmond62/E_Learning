// import React from "react";
// import "../Components/style.css";
// import { FiPhoneCall } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiFacebook } from "react-icons/fi";
// import { SlSocialTwitter } from "react-icons/sl";
// import { FiInstagram } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa6";
// import { IoBookOutline } from "react-icons/io5";

// function Navbar() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
//         <div class="container">
//           <div className="niger">
//             <span>
//               All course 28% off for{" "}
//               <a class="" href="#">
//                 Nigerian people’s
//               </a>
//             </span>
//           </div>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTexts"
//             aria-controls="navbarText"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarTexts">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-icon">
//               <li class="nav-item mx-4">
//                 <i className="">
//                   <FiPhoneCall className="icons" />
//                 </i>
//                 <a class="" aria-current="page" href="#">
//                   +234 8108867497
//                 </a>
//               </li>

//               <li class="nav-item">
//                 <i className="">
//                   <HiOutlineMail className="icons" />
//                 </i>
//                 <a class="" aria-current="page" href="#">
//                   address@gmail.com
//                 </a>
//               </li>
//             </ul>
//             <span class="navbar-text">
//               <div className="social-icon">
//                 <i>
//                   <FiFacebook className="social-i" />
//                 </i>
//                 <i>
//                   <SlSocialTwitter className="social-i" />{" "}
//                   <i>
//                     <FiInstagram className="social-i" />
//                   </i>
//                   <i>
//                     <FaWhatsapp className="social-i" />
//                   </i>
//                 </i>
//               </div>
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* ================ Second Navbar ================= */}

//       <nav class="navbar navbar-expand-lg navbar-light nav-bar p-3 sticky-top">
//         <div class="container">
//           <span className="nav-bar1">
//             <a class="navbar-brand" href="#">
//               <i>
//                 <IoBookOutline className="mx-3 e-book" />
//               </i>
//               <span> E-</span>Learning
//             </a>
//           </span>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarText"
//             aria-controls="navbarText"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarText">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-ul">
//               <li class="nav-item  act-ive">
//                 <a
//                   class="nav-link active"
//                   style={{ color: "green" }}
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                   <div className="bord"></div>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   All Courses
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Pages
//                 </a>
//               </li>

//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Blog
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <span className="navbar-text signs">
//               <a className="color" href="#">
//                 <span> Sign In</span>
//               </a>
//               <a href="#">
//                 {" "}
//                 <button>Sign Up</button>
//               </a>
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* ================================== First Section ====================== */}
//       <section className="whole">
//         <div className="container">
//           <div className="row first-row">
//             <div className="col-md-5 first-section">
//               <div className="rotate">
//                 <img src="shape-8.webp" alt="" />
//               </div>
//               <p className="first-section-para">Start your favourite course</p>
//               <h1>
//                 Now learning from anywhere, and build your{" "}
//                 <span>bright career.</span>
//               </h1>
//               <div>
//                 <img src="lines-6.png" width={"100%"} alt="" />
//               </div>
//               <p className="first-section-p">
//                 It has survived not only five centuries but also the leap into
//                 electronic typesetting.
//               </p>
//               <div className="">
//                 <button>Start A Course</button>
//               </div>
//             </div>
//             <div className="col-md-5">
//               <div className="first-row1">
//                 <img src="slider.webp" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== Sec0nd Section =================== */}
//       <section className="pt-5 pb-5">
//         <div className="div-sect">
//           <h2>ALL POPULAR COURSES</h2>
//         </div>
//         <div className="flex">
//           <div className="div-section">
//             <div>
//               <p>Data Science</p>
//             </div>
//           </div>
//           <div className="div-section">
//             <div>
//               <p>Financial</p>
//             </div>
//           </div>
//           <div className="div-section">
//             <div>
//               <p>Business</p>
//             </div>
//           </div>
//           <div className="div-section">
//             <div>
//               <p>Designing</p>
//             </div>
//           </div>
//           <div className="div-section">
//             <div>
//               <p>IT & Software</p>
//             </div>
//           </div>
//           <div className="div-section">
//             <div>
//               <p>Hacking</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== Third Section ===================== */}
//       <section>
//         <div className="caro-sub">
//           <h4>Student Testimonial</h4>
//           <h3>
//             Feedback From <span>Student</span>
//           </h3>
//         </div>
//         <div
//           id="carouselExampleCaptions"
//           class="carousel slide pb-5"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-indicators ">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to="0"
//               class="active"
//               aria-current="true"
//               aria-label="Slide 1"
//               style={{
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 backgroundColor: "green",
//               }}
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptions"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//               style={{
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 backgroundColor: "green",
//               }}
//             ></button>
//           </div>
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <div className="flex2">
//                 <div className="ima">
//                   <div>
//                     <img src="author-06.webp" alt="" />
//                     <div className="star">
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i
//                         className="fa fa-star"
//                         style={{ color: "gainsboro" }}
//                       ></i>
//                     </div>
//                     <p className="caro-para">
//                       Our quality curriculum is designed with top-tier industry
//                       partners, not academics so you learn the skills.
//                       Self-paced learning - whenever and wherever you want.
//                       Graduate while learning part-time for 12 hrs/week.
//                     </p>
//                     <h3>Sara Alexander</h3>
//                     <p className="caro-par">Product Designer, Nigerian</p>
//                   </div>
//                 </div>
//                 <div className="ima">
//                   <div>
//                     <img src="author-07.webp" alt="" />
//                     <div className="star">
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i
//                         className="fa fa-star"
//                         style={{ color: "gainsboro" }}
//                       ></i>
//                     </div>
//                     <p className="caro-para">
//                       Learn by doing with real-world projects and other hands-on
//                       exercises that lead to real skills. Self-paced learning -
//                       whenever and wherever you want. Graduate while learning
//                       part-time for 12 hrs/week.
//                     </p>
//                     <h3>Melissa Roberts</h3>
//                     <p className="caro-par">Product Designer, Nigerian</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div className="flex2">
//                 <div className="ima">
//                   <div>
//                     <img src="author-03.webp" alt="" />{" "}
//                     <div className="star">
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i
//                         className="fa fa-star"
//                         style={{ color: "gainsboro" }}
//                       ></i>
//                     </div>
//                     <p className="caro-para">
//                       Our quality curriculum is designed with top-tier industry
//                       partners, not academics so you learn the skills.
//                       Self-paced learning - whenever and wherever you want.
//                       Graduate while learning part-time for 12 hrs/week.
//                     </p>
//                     <h3>Sara Alexander</h3>
//                     <p className="caro-par">Product Designer, Nigerian</p>
//                   </div>
//                 </div>
//                 <div className="ima">
//                   <div>
//                     <img src="author-07.webp" alt="" />
//                     <div className="star">
//                       <i className="fa fa-star"></i>
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i className="fa fa-star"></i>{" "}
//                       <i
//                         className="fa fa-star"
//                         style={{ color: "gainsboro" }}
//                       ></i>
//                     </div>
//                     <p className="caro-para">
//                       Learn by doing with real-world projects and other hands-on
//                       exercises that lead to real skills. Self-paced learning -
//                       whenever and wherever you want. Graduate while learning
//                       part-time for 12 hrs/week.
//                     </p>
//                     <h3>Melissa Roberts</h3>
//                     <p className="caro-par">Product Designer, Nigerian</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===================== Best Supporter Section ================ */}

//       <section className="mt-5 mb-5">
//         <div
//           id="carouselExampleCaptionss"
//           class="carousel slide pb-5"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-indicators ">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptionss"
//               data-bs-slide-to="0"
//               class="active"
//               aria-current="true"
//               aria-label="Slide 1"
//               style={{
//                 width: "15px",
//                 height: "15px",
//                 borderRadius: "50%",
//                 backgroundColor: "transparent",
//               }}
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleCaptionss"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//               style={{
//                 width: "15px",
//                 height: "15px",
//                 borderRadius: "50%",
//                 backgroundColor: "transparent",
//               }}
//             ></button>
//           </div>
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <div className="container best-sect">
//                 <div className="ima-flex">
//                   <div>
//                     <h3>
//                       Best Supporter Of <span> E-Learning</span>
//                     </h3>
//                   </div>
//                   <div className="ima2-flex">
//                     <div>
//                       <img
//                         src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-19.png"
//                         alt=""
//                       />
//                     </div>
//                     <div>
//                       {" "}
//                       <img
//                         src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-20.png"
//                         alt=""
//                         className="rotate2"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex3">
//                   <div>
//                     <div>
//                       <img src="brand.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-2.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-3.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-4.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-5.webp" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div className="container best-sect">
//                 <div className="ima-flex">
//                   <div>
//                     <h3>
//                       Best Supporter Of <span> E-Learning</span>
//                     </h3>
//                   </div>
//                   <div className="ima2-flex">
//                     <div>
//                       <img
//                         src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-19.png"
//                         alt=""
//                       />
//                     </div>
//                     <div>
//                       {" "}
//                       <img
//                         src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-20.png"
//                         alt=""
//                         className="rotate2"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex3">
//                   <div>
//                     <div>
//                       <img src="brand.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-2.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-3.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-4.webp" alt="" />
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                       <img src="brand-5.webp" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================== Tip Section ================= */}
//       <section className=" mb-5">
//         <div className="caro-sub">
//           <h4>Student Testimonial</h4>
//           <h3>
//             Feedback From <span>Student</span>
//           </h3>
//         </div>
//         <div className="container">
//           <div className="flex4-sect">
//             <div className="col-sec">
//               <div>
//                 <img src="blog-01.webp" alt="" className="img-item" />
//                 <div className="flex-sci">
//                   <div>
//                     <img src="author-03.webp" alt="" />{" "}
//                     <span>Jason Willams</span>
//                   </div>
//                   <div>
//                     <button>Science</button>
//                   </div>
//                 </div>
//               </div>
//               <a href="#">
//                 <p>
//                   {" "}
//                   Data Science and Machine Learning with python - Hands On!
//                 </p>
//               </a>

//               <div className="sec-info">
//                 <div>
//                   <i className="fa fa-calendar"></i> <span>March 21, 2023</span>
//                 </div>
//                 <div>
//                   <i className="fa fa-heart"></i> <span>3,568+</span>
//                 </div>
//               </div>
//               <div className="cal-btns">
//                 <a href="#">
//                   {" "}
//                   <button>Read More</button>
//                 </a>
//               </div>
//             </div>
//             <div className="col-sec">
//               <div>
//                 <img src="blog-02.webp" alt="" className="img-item" />
//                 <div className="flex-sci">
//                   <div>
//                     <img src="author-06.webp" alt="" /> <span>John Potter</span>
//                   </div>
//                   <div>
//                     <button>Financial</button>
//                   </div>
//                 </div>
//               </div>
//               <a href="#">
//                 <p>
//                   {" "}
//                   Data Science and Machine Learning with python - Hands On!
//                 </p>
//               </a>

//               <div className="sec-info">
//                 <div>
//                   <i className="fa fa-calendar"></i> <span>March 21, 2023</span>
//                 </div>
//                 <div>
//                   <i className="fa fa-heart"></i> <span>3,568+</span>
//                 </div>
//               </div>
//               <div className="cal-btns">
//                 <a href="#">
//                   {" "}
//                   <button>Read More</button>
//                 </a>
//               </div>
//             </div>

//             <div className="col-sec">
//               <div>
//                 <img src="blog-01.webp" alt="" className="img-item" />
//                 <div className="flex-sci">
//                   <div>
//                     <img src="author-07.webp" alt="" />{" "}
//                     <span>Sandara Peter</span>
//                   </div>
//                   <div>
//                     <button>Business</button>
//                   </div>
//                 </div>
//               </div>
//               <a href="#">
//                 <p>
//                   {" "}
//                   Culture & LeaderShip: Strategies For A Successful Business
//                 </p>
//               </a>

//               <div className="sec-info">
//                 <div>
//                   <i className="fa fa-calendar"></i> <span>March 21, 2023</span>
//                 </div>
//                 <div>
//                   <i className="fa fa-heart"></i> <span>3,568+</span>
//                 </div>
//               </div>
//               <div className="cal-btns">
//                 <a href="#">
//                   {" "}
//                   <button>Read More</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Navbar;
// // #e7f8ee
