import React from 'react'

function TutorialOverview() {
  return (
    <div>
      <div className="over-sect">
        <div className="over-section">
          <div className="over-head">
            <h4>Course Details</h4>
          </div>
          <div className="over-para">
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been industry's standard dummy text ever
              since the 1500s when andom unknown printer took a galley of type
              scrambled it to make a type specimen book. It has survived not’s
              only and five centuries, but also the lea into electronic
              typesetting, remaining priting essentially unchanged. It was
              popularsed in the 1960 with containing Lorem Ipsum passages
              desktop publishing software.
            </p>

            <div className="over-details">
              <div>
                <h4>Instructor</h4>
              </div>

              <div>
                <p>
                  {" "}
                  <span className="mx-3" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  Pamela Foster{" "}
                </p>
              </div>
            </div>
            <div className="over-details">
              <div>
                <h4>Duration</h4>
              </div>

              <div>
                <p>
                  {" "}
                  <span className="mx-4" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  8hrs 15mins
                </p>
              </div>
            </div>
            <div className="over-details">
              <div>
                <h4>Lectures</h4>
              </div>
              <div>
                <p>
                  {" "}
                  <span className="mx-4" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  216
                </p>
              </div>
            </div>
            <div className="over-details">
              <div>
                <h4>Levelsss</h4>
              </div>
              <div>
                <p>
                  {" "}
                  <span className="mx-4" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  Secondary
                </p>
              </div>
            </div>
            <div className="over-details">
              <div>
                <h4>Language</h4>
              </div>
              <div>
                <p>
                  {" "}
                  <span className="mx-3" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  English
                </p>
              </div>
            </div>
            <div
              className="over-details"
              style={{ borderBottom: "1px solid rgb(202, 252, 202)" }}
            >
              <div>
                <h4>Caption's</h4>
              </div>
              <div>
                <p>
                  {" "}
                  <span className="mx-3" style={{ fontWeight: "600" }}>
                    :
                  </span>{" "}
                  Yes
                </p>
              </div>
            </div>
            <div className='over-para2'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text
                ever since the 1500s when andom unknown printer took a galley of
                type scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been industry's standard dummy text
                ever since the 1500s when andom unknown printer took a galley of
                type scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialOverview
