import React, { useState, useRef } from "react";
import "./MyForm.css";

const MyForm = () => {
  const emptyData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    educationBg: "IT",
    classCoding: "backend",
    expectation: "",
  };

  const initialErrorMsg = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const [data, setData] = useState(emptyData);
  const [errorMsg, setErrorMsg] = useState(initialErrorMsg);
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const letter = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "fullName") {
      if (nameRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          fullName: "",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          fullName: "Full name must be character",
        });
      }
    }

    if (name === "email") {
      if (emailRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          email: "",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          email: "Email is not valid",
        });
      }
    }

    if (name === "phoneNumber") {
      // Because index start from 0, so range {9-14} becomes {8-13}
      if (data.phoneNumber.length <= 13 && data.phoneNumber.length >= 8) {
        setErrorMsg({
          ...errorMsg,
          phoneNumber: "",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          phoneNumber: "Phone Number is not valid",
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMsg.fullName && !errorMsg.email && !errorMsg.phoneNumber) {
      alert(`Participant data ${data.fullName} successfully received`);
      handleReset();
    } else {
      alert(`Participant data does not match`);
    }
  };

  const handleReset = () => {
    setData(emptyData);
    setErrorMsg(initialErrorMsg);
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <h1>Registration Bootcamp Coding Participant</h1>

        <label htmlFor="fullName">
          Full Name:
          <input required type="text" name="fullName" value={data.fullName} className="textInput" onChange={handleInput} />
        </label>

        <label htmlFor="email">
          Email:
          <input required type="email" name="email" value={data.email} className="textInput" onChange={handleInput} />
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input required type="text" name="phoneNumber" value={data.phoneNumber} className="textInput" onChange={handleInput} />
        </label>

        <label htmlFor="educationBg">
          Education Background:
          <label>
            <input required type="radio" name="educationBg" value="IT" className="radioInput" onChange={handleInput} />
            IT
          </label>
          <label>
            <input required type="radio" name="educationBg" value="NonIT" className="radioInput" onChange={handleInput} />
            Non IT
          </label>
        </label>

        <label htmlFor="classCoding">
          Preferred Coding Class:
          <select required name="classCoding" id="classCoding" className="selectorInput" value={data.classCoding} onChange={handleInput}>
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </label>

        <label htmlFor="letter">
          Letter of Commitment:
          <input required type="file" name="letter" className="letterInput" ref={letter} />
        </label>

        <label htmlFor="expectation">
          Expectation for this Bootcamp Coding:
          <textarea name="expectation" className="textArea" value={data.expectation} onChange={handleInput} />
        </label>

        <div className="errorMsg">{errorMsg.fullName}</div>
        <div className="errorMsg">{errorMsg.email}</div>
        <div className="errorMsg">{errorMsg.phoneNumber}</div>

        <div className="activeButton">
          <input type="submit" />
          <button className="resetButton" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
