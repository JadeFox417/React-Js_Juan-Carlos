import { CButton, CCol, CContainer, CForm, CFormInput, CFormTextarea, CRow } from "@coreui/react";
import { useState } from "react";
import Background from "../../assets/secondary_bg.jpg";

const Form = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [validated, setValidated] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      alert("Invalid input!");
    } else {
      alert(`
      Name: ${inputValue.firstName} ${inputValue.lastName}
      Email: ${inputValue.email}
      Message: ${inputValue.message}

      Successfully sent to our server.
      `);
    }
  };

  return (
    <>
      <div className="form" style={{ backgroundImage: `url(${Background})` }}>
        <CContainer>
          <CRow className="p-5 justify-content-between">
            <CCol md="auto" lg={5} className="align-self-center">
              <h3 className="pb-3">Contact Us</h3>
              <p className="pt-3" style={{ textAlign: "justify" }}>
                Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
              </p>
            </CCol>
            <CCol md="auto" lg={5} s>
              <CForm className="needs-validation" style={{ textAlign: "start" }} noValidate validated={validated} onSubmit={handleSubmit}>
                <CRow>
                  <CCol className="pb-3">
                    <CFormInput type="text" id="firstName" name="firstName" aria-describedby="formControlFirstName" label="First name" feedbackInvalid="Please entry your first name" required onChange={handleChange} />
                  </CCol>
                  <CCol className="pb-3">
                    <CFormInput type="text" id="lastName" name="lastName" aria-describedby="formControlLastName" label="Last name" feedbackInvalid="Please entry your last name" required onChange={handleChange} />
                  </CCol>
                </CRow>
                <CCol className="pb-3">
                  <CFormInput type="email" id="email" name="email" placeholder="name@example.com" aria-describedby="formControlEmail" label="Email" feedbackInvalid="Please entry your email" required onChange={handleChange} />
                </CCol>
                <CCol className="pb-3">
                  <CFormTextarea type="text" id="message" name="message" rows="3" aria-describedby="formControlMessage" label="What can we help you with?" feedbackInvalid="Messages are invalid" required onChange={handleChange} />
                </CCol>
                <CButton color="dark" className="mt-3" type="submit">
                  Submit
                </CButton>
              </CForm>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Form;
