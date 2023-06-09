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
      <HomeSections/>
       <UseLoanwise/>
      <Newsletter/>
      <Footer />
    </>
  );
};

export default Home;
