import { CCol, CContainer, CRow } from "@coreui/react";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <CContainer fluid className="text-md-start bg-dark text-white">
        <CRow className="mx-5 py-5 justify-content-between">
          <CCol md="auto" lg={4} className="align-self-center">
            <h6 className="text-lg-center mb-4" style={{ fontWeight: "bold" }}>
              eNews
            </h6>
            <p style={{ textAlign: "justify" }}>
              Electronic news or eNews is a website that provides the latest news around the world. eNews was developed and maintained by a student studying as a Frontend Developer at Alterra Acedemy, Juan Carlos, as the team leader of
              eNews.
            </p>
          </CCol>
          <CCol md="auto" lg={2}>
            <h6 className="mb-4" style={{ fontWeight: "bold" }}>
              Come Say Hello!
            </h6>
            <p>4043 N</p>
            <p>Ravenswood Ave, Suite 316</p>
            <p>Chicago, IL, 60613</p>
            <p>(773) 348-4581</p>
          </CCol>
          <CCol md="auto" lg={2}>
            <h6 className="mb-4" style={{ fontWeight: "bold" }}>
              Contact Us
            </h6>
            <p className="py-1">
              <FaGoogle />
              <a href="mailto: tepanuspardosi.jp@gmail.com" className="text-light m-3" style={{ textDecoration: "none" }}>
                Email
              </a>
            </p>
            <p className="py-1">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/juan-pardosi-257504238/" className="text-light m-3" style={{ textDecoration: "none" }}>
                Linked In
              </a>
            </p>
            <p className="py-1">
              <FaGithub />
              <a href="https://github.com/JadeFox417" className="text-light m-3" style={{ textDecoration: "none" }}>
                GitHub
              </a>
            </p>
            <p className="py-1">
              <FaInstagram />
              <a href="https://www.instagram.com/juanprdsi/" className="text-light m-3" style={{ textDecoration: "none" }}>
                Instagram
              </a>
            </p>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer className="text-center p-4">© 2022 Juan Carlos. All rights reserved.</CContainer>
    </>
  );
};

export default Footer;
