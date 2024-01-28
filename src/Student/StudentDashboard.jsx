import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import Dashboard from "../Student/Dashboard";
import Courses from "../Student/Courses";
import Registeration from "../Student/Registeration";
import Profile from "../Student/Profile";
import PaymentInfo from "../Student/PaymentInfo";
import Logout from "../Student/Logout";
import Payment from "../Student/Payment";

const Outlet = ({componentShow}) => {
  switch (componentShow) {
    case 'A':
      return <Dashboard />
    case 'B':
      return <Courses />
    case 'C': 
      return <Registeration />
    case 'D':
      return <Profile />
    case 'E':
      return <Payment />
    case 'F':
      return <PaymentInfo />
    case 'G':
      return <Logout/>
  }
};

function StudentDashboard() {
  const [result, setResult] = useState();
  const [isActive, setIsActive] = useState();

  const changeComponent = (newComponent) => {
    setResult(newComponent)
    setIsActive(newComponent);
  }
  return (
    <div>
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-md-2 wel">
            <div className="student-three">
              <div className="pt-5 pb-4">
                <span className="student-cap">
                  <FaGraduationCap className="student-cap1" />
                </span>
              </div>
              <div className="student-flex">
                <div>
                  <MdSpaceDashboard />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("A")}
                  style={{ color: isActive === "A" ? "green" : "" }}
                >
                  <div>
                    <p>Dashboard</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex">
                <div>
                  <FaRegFileAlt />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("B")}
                  style={{ color: isActive === "B" ? "green" : "" }}
                >
                  <div>
                    <p>Courses</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex">
                <div>
                  <GoPencil />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("C")}
                  style={{ color: isActive === "C" ? "green" : "" }}
                >
                  <div>
                    <p>Registeration</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex">
                <div>
                  <FaRegCircleUser />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("D")}
                  style={{ color: isActive === "D" ? "green" : "" }}
                >
                  <div>
                    <p>Profile</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex">
                <div>
                  <MdOutlinePayments />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("E")}
                  style={{ color: isActive === "E" ? "green" : "" }}
                >
                  <div>
                    <p>Payment</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex">
                <div>
                  <MdOutlinePayments />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("F")}
                  style={{ color: isActive === "F" ? "green" : "" }}
                >
                  <div>
                    <p>Payment Info</p>
                  </div>
                </Link>
              </div>

              <div className="student-flex1">
                <div>
                  <GrLogout />
                </div>
                <Link
                  className="spec"
                  onClick={() => changeComponent("G")}
                  style={{ color: isActive === "G" ? "green" : "" }}
                >
                  <div>
                    <p>Logout</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="try-css">
              <div>
                <input type="text" />
                <button>Search</button>
              </div>
              <div>
                <div className="student-yrs">
                  <div>
                    <img
                      src="https://htmldemo.net/edule/eduLe/assets/images/author/author-05.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <p>3rd year</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Outlet componentShow={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
