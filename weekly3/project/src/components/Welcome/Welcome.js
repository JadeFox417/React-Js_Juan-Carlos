import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CContainer, CRow } from "@coreui/react";
import MainBg from "../../assets/main_bg.jpg";

const Welcome = () => {
  return (
    <>
      <div className="main" style={{ backgroundImage: `url(${MainBg})` }}>
        <div className="p-5 mb-5">
          <h1 className="pt-5">WELCOME TO E-NEWS</h1>
          <h3 className="mt-4">List of trending topic on this week</h3>
          <CButton className="mt-5 mb-5" color="light">
            Read now...
          </CButton>
        </div>
        <CContainer style={{ textAlign: "center" }}>
          <CRow className="mt-5 py-5">
            <CCol md="auto">
              <CCard style={{ width: "18rem", height: "32rem", margin: "5px" }}>
                <CCardImage orientation="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C519/production/_126975405_e64614e3-20f3-439e-817e-a921c17b116e.jpg.webp" />
                <CCardBody>
                  <CCardTitle style={{ textAlign: "center" }}>Korea military apologises after failed missile launch sparks alarm</CCardTitle>
                  <CCardText style={{ textAlign: "justify", paddingTop: "10px" }}>
                    South Korea's military has apologised after a failed missile launch during a joint drill with the United States sparked alarm among residents in the coastal city of Gangneung. They reported...
                  </CCardText>
                  <CButton className="btn btn-dark mt-2" href="https://www.bbc.com/news/world-asia-63140095">
                    Read more
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="auto">
              <CCard style={{ width: "18rem", height: "32rem", margin: "5px" }}>
                <CCardImage orientation="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F664/production/_126967036_wide-shot.jpg.webp" />
                <CCardBody>
                  <CCardTitle style={{ textAlign: "center" }}>Ukraine war: Liberated town shows human cost of Russia's defeat</CCardTitle>
                  <CCardText style={{ textAlign: "justify", paddingTop: "10px" }}>
                    It does inside the eastern Ukrainian town of Lyman, retaken from the Russians at the weekend. The deserted debris-strewn streets are lined by boarded up or burnt-out buildings. Metal sheeting...
                  </CCardText>
                  <CButton className="btn btn-dark mt-2" href="https://www.bbc.com/news/world-europe-63130571">
                    Read more
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="auto">
              <CCard style={{ width: "18rem", height: "32rem", margin: "5px" }}>
                <CCardImage orientation="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16D11/production/_126975439_gettyimages-1298951808-1.jpg.webp" />
                <CCardBody>
                  <CCardTitle style={{ textAlign: "center" }}>Hans Niemann 'likely cheated' in more than 100 games, investigation finds</CCardTitle>
                  <CCardText style={{ textAlign: "justify", paddingTop: "10px" }}>
                    A chess player at the centre of a cheating row gripping the game "likely" cheated in more than 100 games online, according to an investigation. Hans Niemann has been...
                  </CCardText>
                  <CButton className="btn btn-dark mt-2" href="https://www.bbc.com/news/uk-63140246">
                    Read more
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="auto">
              <CCard style={{ width: "18rem", height: "32rem", margin: "5px" }}>
                <CCardImage orientation="top" src="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/D8C4/production/_126929455_gettyimages-1429645397.jpg" />
                <CCardBody>
                  <CCardTitle style={{ textAlign: "center" }}>Man City 6-3 Man Utd:Erling Haaland and Phill Foden score hat-tricks</CCardTitle>
                  <CCardText style={{ textAlign: "justify", paddingTop: "10px" }}>
                    Manchester City's Erling Haaland became the first player to score three successive Premier League home hat-tricks as Manchester United were humiliated in the derby...
                  </CCardText>
                  <CButton className="btn btn-dark mt-2" href="https://www.bbc.com/sport/football/63024245">
                    Read more
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Welcome;
