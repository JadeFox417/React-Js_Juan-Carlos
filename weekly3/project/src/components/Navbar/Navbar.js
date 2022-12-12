import {
  CCollapse,
  CContainer,
  CImage,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavLink,
} from "@coreui/react";
import { useState } from "react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light" placement="sticky-top">
        <CContainer fluid>
          <CNavbarBrand href="#home">
            <CImage rounded src={Logo} width={50} height={50} />
            <span style={{ marginLeft: "14px" }}>eNews</span>
          </CNavbarBrand>
          <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="/" active>
                Home
              </CNavLink>
              <CNavLink href="#business" disabled>
                Business
              </CNavLink>
              <CNavLink href="#entertainment" disabled>
                Entertainment
              </CNavLink>
              <CNavLink href="#technology" disabled>
                Technology
              </CNavLink>
              <CNavLink href="/about" active>
                About Us
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
