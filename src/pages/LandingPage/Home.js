import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import UseLoanwise from "../../components/UseLoanwise";
import HomeSections from "../../components/HomeSections";
import Newsletter from "../../components/Newsletter";


const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home_container">
        <HomeSections />
        <UseLoanwise />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
