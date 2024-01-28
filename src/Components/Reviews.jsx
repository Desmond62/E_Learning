import React from 'react'

function Reviews() {
  return (
    <>
      <div 
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ borderRadius: "10px", width:"100%"}}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              width: "15px",
              height: "0px",
              borderRadius: "50%",
              background: "green",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              width: "15px",
              height: "0px",
              borderRadius: "50%",
              background: "green",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              width: "15px",
              height: "0px",
              borderRadius: "50%",
              background: "green",
            }}
          ></button>
        </div>
        <div class="carousel-inner pb-5">
          <div class="carousel-item active">
            <div className="review-whole">
              <div className="review-flex">
                <div className="review-img">
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg"
                    alt=""
                  />
                </div>

                <div className="review-para">
                  <h5>Karol Bachman</h5>
                  <p>Product Designer,USA</p>
                  <div>
                    <div className="review-stars">
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Sure, implementing a rating system for projects typically
                involves creating a component that displays a set of stars or
                another graphical representation of a rating. Users can interact
                with these elements to provide their rating. Here's a simple
                example using React.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            {" "}
            <div className="review-whole">
              <div className="review-flex">
                <div className="review-img">
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg"
                    alt=""
                  />
                </div>

                <div className="review-para">
                  <h5>Karol Bachman</h5>
                  <p>Product Designer,USA</p>
                  <div>
                    <div className="review-stars">
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Sure, implementing a rating system for projects typically
                involves creating a component that displays a set of stars or
                another graphical representation of a rating. Users can interact
                with these elements to provide their rating. Here's a simple
                example using React.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            {" "}
            <div className="review-whole">
              <div className="review-flex">
                <div className="review-img">
                  <img
                    src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg"
                    alt=""
                  />
                </div>

                <div className="review-para">
                  <h5>Karol Bachman</h5>
                  <p>Product Designer,USA</p>
                  <div>
                    <div className="review-stars">
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>{" "}
                      <div>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Sure, implementing a rating system for projects typically
                involves creating a component that displays a set of stars or
                another graphical representation of a rating. Users can interact
                with these elements to provide their rating. Here's a simple
                example using React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews
