import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import UseLoanwise from "../../components/UseLoanwise";
import HomeSections from "../../components/HomeSections";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeSections/>
       <UseLoanwise/>
      <Footer />
    </>
  );
};

export default Home;
