import React, { Component, Fragment } from "react";
import classes from './PersonalDetails.module.css'
import { ReactDOM } from "react";
import { nationalitiesList } from './NationalitiesList'
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { ParseBackProfileList } from '../../WebServices/DataParser'

class PersonalDetails extends Component {
  state = {
    admissionYear: "",
    typeOfApplicant: "Foreign Applicant",
    fullName: "",
    fatherSpouseName: "",
    dob: "",
    gender: "Male",
    caste: "General",
    maritalStatus: "Married",
    contactNumber: "",
    parentContact: "",
    nationality: "",
    otherNationality: "",
    pwd: "No",
    typeOfDisability: "",
    correspondanceAddress: { address: "", state: "", city: "", pinCode: "" },
    permanentAddress: { address: "", state: "", city: "", pinCode: "" },
    addressSame: false,
    optionList: ["Indian Applicant", "Foreign Applicant"],
    casteList: ["General", "OBC-NC", "SC", "ST"],
    maritalList: ["Currently Married", "Never Married", "Divorced", "Separated", "Widow / Widower"],
    disabilityList: ["Yes", "No"],
    percentageDisabilityList: ["Greater than or equal to 40%", "Less than 40%"],
    genderList: ["Male", "Female", "Other"],
    admissionYrList: ["AY 2021-22"],
    phoneValidity: false,
    parentContactValidity: false,
    parentNameValidity: false,
    nameValidity: false,
    formValid: false,
    photograph: null,
    signature: null,
    photographSend: null,
    signatureSend: null,
    percentageDisability: false,
    disabilityCertificate: null,
    disabilityCertificateSend: null,
    exServiceman: "No",
    exServicemanCertificate: null,
    exServicemanCertificateSend: null,
    applicantId: "",
    id: null
  };

  phoneValidity = (val, label) => {
    let isValid = true;
    const validPhoneFormat = /^[\+][0]?[1-9]\d{10,14}$/;
    isValid = validPhoneFormat.test(val) && isValid;

    if (label === "contactNumber") {
      this.setState({
        phoneValidity: isValid,
        formValid: isValid
      })
    }
    else if (label === "parentContact") {
      this.setState({
        parentContactValidity: isValid,
        formValid: isValid
      })
    }
  }

  nameValidity = (val, label) => {
    let isValid = true;
    const validNameFormat = /^[a-z ,.'-]+$/i;
    isValid = validNameFormat.test(val) && isValid;
    if (label === "fullName") {
      this.setState({
        nameValidity: isValid,
        formValid: isValid
      })
    }
    else if (label === "fatherSpouseName") {
      this.setState({
        parentNameValidity: isValid,
        formValid: isValid
      })
    }
  }

  onChange = (val, label) => {

    if (label === "contactNumber" || label === "parentContact") {
      this.phoneValidity(val, label);
    }
    else if (label === "fullName" || label === "fatherSpouseName") {
      this.nameValidity(val, label)
    }
    this.setState((prevState) => {
      let stateVal = prevState;
      stateVal[label] = val;
      return {
        ...stateVal,
      };
    });
  }

  onAddressChange = (val, label, addressType) => {
    let tempAddress = this.state[addressType];
    tempAddress[label] = val;
    if (addressType === "correspondanceAddress") {
      this.setState({
        correspondanceAddress: tempAddress
      })
    }
    else {
      this.setState({
        permanentAddress: tempAddress
      })
    }
  }

  checkBoxClicked = () => {
    let temp = !this.state.addressSame;
    this.setState({
      addressSame: temp
    })
  }

  onSave = () => {
    let obj = {
      id: this.state.id,
      applicantId: this.state.applicantId,
      admissionYear: this.state.admissionYear,
      // typeOfApplicant: this.state.typeOfApplicant,
      fullName: this.state.fullName,
      fatherSpouseName: this.state.fatherSpouseName,
      dob: this.state.dob,
      gender: this.state.gender,
      caste: this.state.caste,
      maritalStatus: this.state.maritalStatus,
      contactNumber: this.state.contactNumber,
      parentContact: this.state.parentContact,
      nationality: this.state.nationality,
      otherNationality: this.state.otherNationality,
      pwd: this.state.pwd === "Yes" ? true : false,
      typeOfDisability: this.state.typeOfDisability,
      ...(typeof (this.state.signatureSend) !== "string" && { signature: this.state.signatureSend }),
      ...(typeof (this.state.photographSend) !== "string" && { photograph: this.state.photographSend }),
      percentageDisability: this.state.percentageDisability,
      ...(typeof (this.state.disabilityCertificateSend) !== "string" && { disabilityCertificate: this.state.disabilityCertificateSend }),
      exServiceman: this.state.exServiceman === "Yes" ? true : false,
      ...(typeof (this.state.exServicemanCertificateSend) !== "string" && { exServicemanCertificate: this.state.exServicemanCertificateSend }),
      cAddress: this.state.correspondanceAddress.address,
      cState: this.state.correspondanceAddress.state,
      cCity: this.state.correspondanceAddress.city,
      cPinCode: this.state.correspondanceAddress.pinCode,
      pAddress: this.state.permanentAddress.address,
      pState: this.state.permanentAddress.state,
      pCity: this.state.permanentAddress.city,
      pPinCode: this.state.permanentAddress.pinCode,
    }
    let data = ParseBackProfileList(obj);
    console.log(data)

    ResourceAPIController.PersonalDetailsSubmit(data, this.state.id).then(response => {
      console.log("EDUCATIONAL DETAILS SUBMIT=> ", response);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })

  }

  readURL = (e, label) => {
    let fileSend = e.target.files[0];
    let file = URL.createObjectURL(e.target.files[0]);
    if (label === "picture") {
      this.setState({
        photograph: file,
        photographSend: fileSend
      })
    }
    else if (label == "signature") {
      this.setState({
        signature: file,
        signatureSend: fileSend
      })
    }
    else if (label == "service") {
      this.setState({
        exServicemanCertificate: file,
        exServicemanCertificateSend: fileSend
      })
    }
    else if (label == "disability") {
      this.setState({
        disabilityCertificate: file,
        disabilityCertificateSend: fileSend
      })
    }

  }


  componentDidMount = () => {
    ResourceAPIController.GetPersonalDetails().then(response => {
      console.log(response);
      let contactNumber = response.result.results[0].contactNumber
      let parentContact = response.result.results[0].parentContact
      let fullName = response.result.results[0].fullName
      let fatherSpouseName = response.result.results[0].fatherSpouseName
      this.nameValidity(fullName, "fullName")
      this.nameValidity(fatherSpouseName, "fatherSpouseName")
      this.phoneValidity(contactNumber, "contactNumber")
      this.phoneValidity(parentContact, "parentContact")
      this.setState({
        admissionYear: response.result.results[0].admissionYear,
        typeOfApplicant: response.result.results[0].typeOfApplicant,
        fullName: fullName,
        fatherSpouseName: fatherSpouseName,
        dob: response.result.results[0].dob,
        gender: response.result.results[0].gender,
        caste: response.result.results[0].caste,
        maritalStatus: response.result.results[0].maritalStatus,
        contactNumber: contactNumber,
        parentContact: parentContact,
        nationality: response.result.results[0].nationality,
        otherNationality: response.result.results[0].otherNationality,
        pwd: response.result.results[0].pwd,
        typeOfDisability: response.result.results[0].typeOfDisability,
        correspondanceAddress: { address: response.result.results[0].cAddress, state: response.result.results[0].cState, city: response.result.results[0].cCity, pinCode: response.result.results[0].cPinCode },
        permanentAddress: { address: response.result.results[0].pAddress, state: response.result.results[0].pState, city: response.result.results[0].pCity, pinCode: response.result.results[0].pPinCode },
        addressSame: false,
        optionList: ["Indian Applicant", "Foreign Applicant"],
        casteList: ["General", "OBC-NC", "SC", "ST"],
        maritalList: ["Currently Married", "Never Married", "Divorced", "Separated", "Widow / Widower"],
        disabilityList: ["Yes", "No"],
        genderList: ["Male", "Female", "Other"],
        admissionYrList: ["AY 2021-22"],
        percentageDisabilityList: ["Greater than or equal to 40%", "Less than 40%"],
        // phoneValidity: false,
        // parentContactValidity: false,
        // parentNameValidity: false,
        // nameValidity: false,
        // formValid: false,
        photograph: response.result.results[0].photograph,
        photographSend: response.result.results[0].photograph,
        signature: response.result.results[0].signature,
        signatureSend: response.result.results[0].signature,
        percentageDisability: response.result.results[0].percentageDisability,
        disabilityCertificate: response.result.results[0].disabilityCertificate,
        disabilityCertificateSend: response.result.results[0].disabilityCertificate,
        exServiceman: response.result.results[0].exServiceman,
        exServicemanCertificate: response.result.results[0].exServicemanCertificate,
        exServicemanCertificateSend: response.result.results[0].exServicemanCertificate,
        applicantId: response.result.results[0].applicantId,
        id: response.result.results[0].id
      })
      // console.log(this.state);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };

  render() {
    return (
      <>
        <div className={classes.ContainerDiv}>
          {/* <div className={classes.FistHorizontalSection}> */}
          <h2 className={classes.MainHeading}>PERSONAL DETAILS</h2>
          {/* </div> */}
          <div className={classes.HorizontalSections}>
            <div className={classes.Sections}>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    Full Name
                  </Form.Label>
                  <span className={classes.ErrorMessage}>{!this.state.nameValidity ? "* Please enter a valid name." : null}</span>
                  <Form.Control
                    value={this.state.fullName}
                    onChange={(e) =>
                      this.onChange(e.target.value, "fullName")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Date Of Birth
                  </Form.Label>
                  <Form.Control
                    value={this.state.dob}
                    onChange={(e) =>
                      this.onChange(e.target.value, "dob")
                    }
                    type="date"
                    required
                  />
                </Form.Group>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Gender
                  </Form.Label>
                  <Form.Select value={this.state.gender} onChange={(e) => this.onChange(e.target.value, "gender")}>
                    {this.state.genderList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.AdmissionInput}>
                  <Form.Label className={classes.FormLabels}>
                    Admission For The Year
                  </Form.Label>
                  <Form.Select value={this.state.admissionYear} onChange={(e) => this.onChange(e.target.value, "admissionYear")}>
                    {this.state.admissionYrList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.TypeOfApplicantInput}>
                  <Form.Label className={classes.FormLabels}>
                    Type Of Applicant
                  </Form.Label>
                  <Form.Select value={this.state.typeOfApplicant} onChange={(e) => this.onChange(e.target.value, "typeOfApplicant")}>
                    {this.state.optionList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    Father's/Spouse Name
                  </Form.Label>
                  <span className={classes.ErrorMessage}>{!this.state.parentNameValidity ? "* Please enter a valid name." : null}</span>
                  <Form.Control
                    value={this.state.fatherSpouseName}
                    onChange={(e) =>
                      this.onChange(e.target.value, "fatherSpouseName")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Category
                  </Form.Label>
                  <Form.Select value={this.state.caste} onChange={(e) => this.onChange(e.target.value, "caste")}>
                    {this.state.casteList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Marital Status
                  </Form.Label>
                  <Form.Select value={this.state.maritalStatus} onChange={(e) => this.onChange(e.target.value, "maritalStatus")}>
                    {this.state.maritalList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Nationality
                  </Form.Label>
                  <Form.Select
                    value={this.state.typeOfApplicant === "Indian Applicant" ? "Indian" : this.state.nationality}
                    onChange={(e) => this.onChange(e.target.value, "nationality")}>
                    {nationalitiesList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.DisabilityTypeInput}>
                  <Form.Label className={classes.FormLabels}>
                    Nationality
                  </Form.Label>
                  <Form.Control
                    value={this.state.otherNationality}
                    onChange={(e) =>
                      this.onChange(e.target.value, "otherNationality")
                    }
                    type="text"
                    disabled={this.state.nationality === "Other" ? false : true}
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Ex-Serviceman
                  </Form.Label>
                  <Form.Select value={this.state.exServiceman} onChange={(e) => this.onChange(e.target.value, "exServiceman")}>
                    {this.state.disabilityList.map((item, index) => {
                      return (
                        <option
                          key={index} >
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.DisabilityTypeInput}>
                  <div className={classes.FileHeaderDiv}>
                    <Form.Label className={classes.FormLabels}>
                      Ex-Serviceman Certificate
                    </Form.Label>
                    {
                      this.state.exServicemanCertificate ?
                        <a href={this.state.exServicemanCertificate} target="_blank">View</a> : null
                    }
                  </div>
                  {this.state.exServiceman === "Yes" && this.state.exServicemanCertificate === "" ? <Form.Control
                    type="file"
                    accept=".pdf"
                    disabled={this.state.exServiceman === "Yes" ? false : true}
                    onChange={(e) => this.readURL(e, "service")}
                    required
                  /> :
                    <Form.Control
                      type="file"
                      accept=".pdf"
                      disabled={this.state.exServiceman === "Yes" ? false : true}
                      onChange={(e) => this.readURL(e, "service")}
                    />
                  }
                </Form.Group>
              </div>
            </div>
            <div className={classes.Sections}>
              <div className={classes.Row}>
                <Form.Group >
                  <Form.Label className={classes.FormLabels}>
                    Photograph
                  </Form.Label>
                  <div className={classes.InputImageDiv}>
                    {this.state.photograph ? <Form.Control className={classes.InputImage} type="file" onChange={(e) => this.readURL(e, "picture")} />
                      : <Form.Control className={classes.InputImage} type="file" onChange={(e) => this.readURL(e, "picture")} required />}
                    <img id="#targetImage" src={this.state.photograph} alt="Upload your picture" height="215"
                      width="200" />
                  </div>
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Contact Number
                  </Form.Label>
                  <span className={classes.ErrorMessage}>{!this.state.phoneValidity ? "* Please enter a valid number." : null}</span>
                  <Form.Control
                    value={this.state.contactNumber}
                    onChange={(e) =>
                      this.onChange(e.target.value, "contactNumber")
                    }
                    type="text"
                    placeholder="+91XXXXXXXXXX"
                    required
                  />
                </Form.Group>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Parent Contact
                  </Form.Label>
                  <span className={classes.ErrorMessage}>{!this.state.parentContactValidity ? "* Please enter a valid number." : null}</span>
                  <Form.Control
                    value={this.state.parentContact}
                    onChange={(e) =>
                      this.onChange(e.target.value, "parentContact")
                    }
                    placeholder="+91XXXXXXXXXX"
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Person With Disablity (PwD)
                  </Form.Label>
                  <Form.Select value={this.state.pwd} onChange={(e) => this.onChange(e.target.value, "pwd")}>
                    {this.state.disabilityList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.DisabilityTypeInput}>
                  <Form.Label className={classes.FormLabels}>
                    Type Of Disablity
                  </Form.Label>
                  <Form.Control
                    value={this.state.typeOfDisability}
                    onChange={(e) =>
                      this.onChange(e.target.value, "typeOfDisability")
                    }
                    type="text"
                    disabled={this.state.pwd === "Yes" ? false : true}
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Percentage Disability
                  </Form.Label>
                  <Form.Select value={this.state.percentageDisability} onChange={(e) => this.onChange(e.target.value, "percnetageDisability")}
                    disabled={this.state.pwd === "Yes" ? false : true}>
                    {this.state.percentageDisabilityList.map((item, index) => {
                      return (
                        <option
                          key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className={classes.DisabilityTypeInput}>
                  <div className={classes.FileHeaderDiv}>
                    <Form.Label className={classes.FormLabels}>
                      Disablity Certificate
                    </Form.Label>
                    {
                      this.state.disabilityCertificate ?
                        <a href={this.state.disabilityCertificate} target="_blank">View</a> : null
                    }
                  </div>
                  {this.state.pwd === "Yes" && !this.state.disabilityCertificate ?
                    <Form.Control
                      type="file"
                      accept=".pdf"
                      disabled={this.state.pwd === "Yes" ? false : true}
                      onChange={(e) => this.readURL(e, "disability")}
                      required
                    />
                    : <Form.Control
                      type="file"
                      accept=".pdf"
                      disabled={this.state.pwd === "Yes" ? false : true}
                      onChange={(e) => this.readURL(e, "disability")}
                    />}
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <div className={classes.FileHeaderDiv}>
                    <Form.Label className={classes.FormLabels}>
                      Signature
                    </Form.Label>
                    {
                      this.state.signature ?
                        <a href={this.state.signature} target="_blank">View</a> : null
                    }
                  </div>
                  {this.state.signature ?
                    <Form.Control
                      src={this.state.signature}
                      type="file"
                      onChange={(e) => this.readURL(e, "signature")}
                    />
                    : <Form.Control
                      src={this.state.signature}
                      type="file"
                      required
                      onChange={(e) => this.readURL(e, "signature")}
                    />
                  }
                </Form.Group>
              </div>
            </div>
          </div>
          <div className={classes.HorizontalSections}>
            <div className={classes.Sections}>
              <h4 className={classes.Heading1}>Address For Correspondence</h4>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    Address
                  </Form.Label>
                  <Form.Control
                    value={this.state.correspondanceAddress.address}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "address", "correspondanceAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    City
                  </Form.Label>
                  <Form.Control
                    value={this.state.correspondanceAddress.city}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "city", "correspondanceAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    State
                  </Form.Label>
                  <Form.Control
                    value={this.state.correspondanceAddress.state}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "state", "correspondanceAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Pin/Zip Code
                  </Form.Label>
                  <Form.Control
                    value={this.state.correspondanceAddress.pinCode}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "pinCode", "correspondanceAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className={classes.Sections}>
              <h4 className={classes.Heading}>Permanent Address</h4>
              <div className={`mb-3 ${classes.Checker}`}>
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Same as Correspondence Address"
                  onClick={this.checkBoxClicked}
                />
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    Address
                  </Form.Label>
                  <Form.Control
                    value={this.state.addressSame ? this.state.correspondanceAddress.address : this.state.permanentAddress.address}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "address", "permanentAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.NameInputWidth}>
                  <Form.Label className={classes.FormLabels}>
                    City
                  </Form.Label>
                  <Form.Control
                    value={this.state.addressSame ? this.state.correspondanceAddress.city : this.state.permanentAddress.city}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "city", "permanentAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
              <div className={classes.Row}>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    State
                  </Form.Label>
                  <Form.Control
                    value={this.state.addressSame ? this.state.correspondanceAddress.state : this.state.permanentAddress.state}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "state", "permanentAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
                <Form.Group className={classes.InputWidthSet}>
                  <Form.Label className={classes.FormLabels}>
                    Pin/Zip Code
                  </Form.Label>
                  <Form.Control
                    value={this.state.addressSame ? this.state.correspondanceAddress.pinCode : this.state.permanentAddress.pinCode}
                    onChange={(e) =>
                      this.onAddressChange(e.target.value, "pinCode", "permanentAddress")
                    }
                    type="text"
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <Button onClick={this.onSave} className={classes.SaveButton}>SAVE</Button>
        </div>
      </>
    );
  }
}

export default withRouter(PersonalDetails);