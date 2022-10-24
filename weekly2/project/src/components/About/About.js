import { CContainer, CImage, CRow } from "@coreui/react";
import Img from "../../assets/teams.png";
import Background from "../../assets/secondary_bg.jpg";

const About = () => {
  return (
    <>
      <div className="form" style={{ backgroundImage: `url(${Background})` }}>
        <CContainer>
          <CRow className="pt-5 justify-content-center">
            <h3>About Us</h3>
          </CRow>
          <CImage fluid src={Img} width={500} height={500} />
          <CRow className="pb-5">
            <p style={{ textAlign: "justify" }}>
              We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the UK and around the world. We're fully distributed teams of
              85 people living in and working in 15 countries around the world. And we're working to share the news that are fresh and very updated in every country through this website.
            </p>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default About;
