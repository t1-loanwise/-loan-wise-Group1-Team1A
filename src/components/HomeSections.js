import React from 'react'
import Imagehero from "../assets/Imagehero.svg";
import AboutImage from "../assets/AboutImage.svg";
import Feature from "../assets/FeatureImage.svg";
import SpecialFeaturesOne from "../assets/SpecialFeature.svg";
import SpecialFeature2 from "../assets/SpecialFeature2.svg"
import Checklist from './Checklist';
import Arrow from "../assets/Arrow.svg"
import Button1 from './Button1';
import Button2 from './Button2';
import HomeHeader from './HomeHeader';
import "../styles/Home.css";



const HomeSections= ({link, text})=> {
  const buttonStyle = {
    backgroundColor: '#007E99',
    border: '2px solid #007E99',
    color:'white',
    display: 'flex',
    padding: '15px 30px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
  };
  return (
    <div>
   <div className="homepage_container">
      <div className="hero-section">
      <div className="hero-text">
        <div className='history'>
          <p>Watch Our History</p>
        </div>
        <HomeHeader header={"transform lending with accurate risk prediction"} text={"Our app accurately predicts default risk for borrowers, helping financial institutions make informed lending decisions and minimize the impact of defaults"}/>
        <div className='buttons'>
        <Button1 text={"Get Started"} style={buttonStyle}/>
        <Button2 text={"Learn More"}/>
        </div>
      </div>

      <div className="home-image">
      <img src={Imagehero} alt='hero section image'/>
      </div>
      </div>
      <div className="about-us">
        <div className="hero-text">
        <HomeHeader header={" Revolutionising lending with predictive analytics."} text={"At Loan Default Prediction, we're passionate about revolutionising the lending industry by providing innovative technology that helps financial institutions make more informed lending decisions and minimise the risk of loan defaults."}/>  
        <Button1 className="button_start" text={"Get Started"} />      
        </div>
        <div className="home-image">
        <img src={AboutImage} alt='about us section image'/>
        </div>
      </div>
      <div className="feature-section">
       <div className="feature-text">
        <HomeHeader header={"Discover how our innovative loan risk assessment tool can benefit your institution."} 
        text={"Our goal is to help financial institutions make more informed lending decisions and reduce the risk of loan default. We developed the Loan Default Prediction App to provide an innovative solution that simplifies the loan application process, reduces the time it takes to process loan applications, and improves the accuracy of loan decisions."}/>
        <div id='arrow'>
           <img src={Arrow}/>
        </div>
       
       </div>
       <div className="feature-image">
       <img src={Feature} alt='features section'/>
       </div>
      </div>
      <div className="special-one">
        <div className="home-image">
       <img src={SpecialFeaturesOne} alt='special features one image'/>
       </div>
       <div className="home-right">
        <HomeHeader header={"Improve teamwork with our in-app messaging feature."} text={"Our messaging feature allows teammates to communicate seamlessly and efficiently within the Loan Default Prediction App. With the ability to discuss loan applications, share information, and ask questions in real-time, our messaging feature helps teams collaborate more effectively and make better lending decisions"}/>
        <Checklist text={"Better team collaboration"}/>
        <Checklist text={"Streamlined communication"}/>
        <Checklist text={"Faster loan application processing"}/>
       </div>
       
      </div>
      <div className="special-two">
       <div className="home-left">
        <HomeHeader header={"Identify loan defaulters with precision."} text={"Our innovative financial behavioral analysis feature goes beyond traditional credit checks to help financial institutions more accurately predict loan defaults. By analyzing a borrower's financial habits and behavior, our app provides a more comprehensive view of their creditworthiness, allowing lenders to make better-informed lending decisions."}/>
       </div>
       <Checklist text={"Enhance loan approval accuracy."}/>
       <Checklist text={"Reduce the risk of defaults."}/>
       <Checklist text={"Streamline lending decisions."}/>
       <div className="home-image">
       <img src={SpecialFeature2} alt='special features two image'/>
       </div>
      </div>
   </div>
    </div>
  )
}

export default HomeSections