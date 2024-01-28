import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className="student-stage1">
        <div className="student-stage">
          <div>
            <p className="student-para">December 6, 2023</p>
            <h3>
              Welcome back, <span>John!</span>
            </h3>
            <p>Always stay updated in your students portal!</p>
          </div>
          <div>
            <img src="hat.png" alt="" className="student-img" />
            <img src="avatar1.png" alt="" className="student-img1" />
            <img src="school.png" alt="" className="student-img2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
