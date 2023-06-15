import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "../../styles/blog.css"
import image from "../../assets/embed.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Blog = () => {

  return (
    <>
      <div className="background-one">
        <NavBar />
        <div className="main-div">
          <div className="child-div">
            <h4 className="p-one">Coming soon</h4>
            <h1 className="h-one">
              Get Notified When
              <br />
              Our Blog Launches
            </h1>
            <div className="form-wrapper">
                <form>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="my-email"
                  />
                </form>
                <button className="notify-btn">Notify me</button>
            </div>
            <p className="not-spam">We would not spam you, don't worry.</p>
          </div>
            <LazyLoadImage src={image} alt="smiling woman" className="my-image"/>
        </div>
      </div>
      <Footer />

    </>

  );
};

export default Blog;
