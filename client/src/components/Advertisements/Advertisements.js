import React, { Component, Fragment } from "react";
import classes from './Advertisements.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class Advertisements extends Component {
    state = {

    }

    render() {
        return (
            <div style={{ margin: "3rem 10rem" }}>
                <h2 className={classes.Heading}>Advertisement for admission to Ph.D. Program</h2>
                <h3 className={classes.SubHeading}> IITI/Acad/PhD Admissions/2022-23 </h3>
                <p className={classes.Paragraph}>
                    Applications are invited from highly motivated and research-oriented applicants for admission to PhD Program in the following specializations of different Departments as per the below mentioned categories of admission and time schedule. Applicants are advised to visit the profiles of the faculty members at the respective Department web page, and the advertisement uploaded by each Department, before applying for PhD Program.
                </p>
                <p className={classes.Paragraph}>
                    Applicants are selected for admission to PhD programs through a rigorous evaluation process which includes an interview by a selection committee and mere application does not imply admission into the PhD program.
                </p>
                <p className={classes.Paragraph}>
                    Before making arrangements for paying non-refundable application fee, please verify your eligibility by checking the MEQ and QE requirements of the Department to which you intend to apply.

                </p>
                <h3 className={classes.SubHeading}> Admission Categories:-</h3>
                <table>
                    <th className={classes.TableHeading}>
                        For Indian Students
                    </th>
                    <th className={classes.TableHeading}>For Foreign Students</th>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>FA (Fellowship Awardee): </span>
                                        Fellowship Awardees from the funding agencies such as CSIR, UGC, NBHM, DST etc., OR JRF/ SRF project staff working in a sponsored research project under a faculty member, PI of the project, of IIT Indore. The scholarship will be as per the rules of the concerned funding agency.
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>TA (Teaching Assistantship): </span>
                                        Institute Teaching Assistantship with scholarship as per MHRD guidelines.
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>SW (Sponsored WITHOUT Institute scholarship): </span>
                                        For applicants sponsored from a highly reputed R & D organization or Industry. [After completion of required course work, either on Full Time (SWF) or Part Time (SWP) basis, with approval of the competent authority] <a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/5022015Additional-Rules-for-IS+SW-Part-Time-PG+PhD-Programs.pdf" target="_blank">(Additional Rules)</a>
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>IS (Institute Staff): </span>
                                        Only for regular staff members of IIT Indore (on Part Time basis).<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/5022015Additional-Rules-for-IS+SW-Part-Time-PG+PhD-Programs.pdf" target="_blank">(Additional Rules)</a>
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>DF (Defense Forces): </span>
                                        Serving personnel of defense forces WITHOUT any scholarship from the Institute.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/5022015Additional-Rules-for-IS+SW-Part-Time-PG+PhD-Programs.pdf" target="_blank">(Additional Rules)</a>
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>CT (College Teacher): </span>
                                        Permanent Employee of the sponsoring College/Institute/University WITHOUT any scholarship from the Institute.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Rules%20and%20Form%20for%20CT%20category.pdf" target="_blank">(Additional Rules)</a>
                                    </li>
                                </ul>
                                <p className={classes.TableParagraph} >Applicants under IS, DF, SW and CT categories are required to send following documents in original, along with a copy of application form to the Office of Dean, Academic Affairs. However, copies of these documents should also be sent or to be produced along with original application form as required by the respective Department.</p>
                                <p className={classes.TableParagraph}>
                                    1.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Form%20for%20Sponsorship%20letter%20for%20applicants%20under%20IS,%20SW%20and%20%20DF%20category.pdf" target="_blank"> Form for Sponsorship letter for applicants under IS, SW and DF category</a>
                                    <br />
                                    2.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Form%20for%20NOC%20for%20applicants%20under%20IS,%20SW%20and%20DF%20category.pdf" target="_blank"> Form for NOC for applicants under IS, SW and DF category</a>
                                    <br />
                                    3.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Form%20for%20selecting%20a%20Co-Supervisor%20from%20an%20External%20or%20Sponsoring%20Organization.pdf" target="_blank"> Form for selecting a Co-Supervisor from an External or Sponsoring Organization (if required)</a>
                                    <br />
                                    4.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Form%20for%20the%20employer%20for%20the%20candidates%20joining%20PG%20or%20PhD%20program%20on%20study%20leave%20under%20%20SW%20and%20DF%20category.pdf" target="_blank"> Form for the employer for the candidates joining PG or PhD program on study leave under SW and DF category</a>
                                    <br />
                                    5.<a className={classes.Link} href="https://academic.iiti.ac.in/phdforms/Form%20for%20No%20Objection-cum-Sponsoring-Experience%20Certificate%20from%20the%20Sponsoring%20University%20College%20Institution%20for%20PhD%20Applicant%20under%20CT%20category.pdf" target="_blank">  Form for No Objection-cum-Sponsoring-Experience Certificate from the Sponsoring University College Institution for PhD Applicant under CT category</a>
                                </p>
                            </td>
                            <td>
                                <ul>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>ISF (International Self Finance): </span>
                                        Self-Financing Students.
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>ISW (International Sponsored by Industry or NGO):</span>
                                        <br />
                                        (i) Industry Sponsorship
                                        (ii) NGO ( Non-Government Organization) Sponsorship.
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>GSW (International Sponsored by Government organisation):</span>
                                        <br />
                                        (i) ICCR Scholarship of Government of India
                                        (ii) Foreign Government Sponsorship
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}> For more information, please refer to Department specific advertisement and deadlines (for online submission) mentioned below.</p>
                <h3 className={classes.SubHeading}> (A) Departments of Engineering</h3>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name</th>
                    <th className={classes.TableHeading} style={{ width: "50%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for Indian applicants</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for International applicants</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Computer Science and Engineering (CSE)</li>
                                    <li className={classes.Paragraph}>Electrical Engineering (EE)</li>
                                    <li className={classes.Paragraph}>Mechanical Engineering (ME)</li>
                                    <li className={classes.Paragraph}>Civil Engineering (CE)</li>
                                    <li className={classes.Paragraph}>Metallurgy Engineering and Materials Science (MEMS)</li>
                                    <li className={classes.Paragraph}>Biosciences and Biomedical Engineering (BSBE)</li>
                                    <li className={classes.Paragraph}>Astronomy, Astrophysics and Space Engineering (AASE)</li>
                                </ul>
                            </td>
                            <td style={{ width: "50%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Engineering/ Technology (with first division as defined by the awarding Institute/ University) AND GATE qualification,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Four-year Bachelors’ degree OR five-year integrated degree in the relevant Department of engineering (with first division as defined by the awarding Institute/ University) AND valid GATE qualification,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) AND valid GATE qualification OR UGC/CSIR-JRF qualification OR Equivalent Fellowship.</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) with UGC-NET (Lecturership) AND valid GATE qualification</li>
                                </ul>
                                <p className={classes.Highlight}>GATE is not compulsory for DF / IS / CT / SW category.</p>
                            </td>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>MEQ</span>
                                        Masters’ degree in the relevant Department(with first division as defined by the awarding Institute/ University)
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>QE</span>
                                        Valid TOEFL/IELTS OR equivalent qualification
                                        <br />
                                        <p className={classes.Or}>OR</p>
                                        <br />
                                        Valid GATE qualification
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}>Applicants are strongly encouraged to visit the Department web pages and the advertisement provided below by each Department.</p>
                <h3 className={classes.SubHeading}>Schedule for Last date of online applications</h3>
                <p>Table of advertisement</p>
                <h3 className={classes.SubHeading}>(B) Department of Sciences</h3>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name</th>
                    <th className={classes.TableHeading} style={{ width: "50%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for Indian applicants</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for International applicants</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Chemistry</li>
                                    <li className={classes.Paragraph}>Physics</li>
                                    <li className={classes.Paragraph}>Mathematics</li>
                                </ul>
                            </td>
                            <td style={{ width: "50%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) AND valid GATE qualification <span className={classes.Or}>OR</span> valid UGC-JRF/ CSIR-JRF <span className={classes.Or}>OR</span> Equivalent Fellowship</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) with UGC-NET (Lecturership) AND valid GATE qualification</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in relevant Department of Engineering/ Technology (with first division as defined by the awarding Institute/ University) AND GATE qualification</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Bachelors’ degree in the relevant Department of Engineering/ Technology Department (with first division as defined by the awarding Institute/ University) AND valid GATE qualification</li>
                                </ul>
                                <p className={classes.Highlight}>GATE is not compulsory for DF / IS / CT / SW category.</p>
                            </td>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>MEQ: </span>
                                        Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University)
                                        <br />
                                        <span className={classes.SubHeading}>QE: </span>
                                        Valid TOEFL/IELTS OR equivalent qualification OR Valid GATE qualification
                                    </li>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>QE</span>
                                        Valid TOEFL/IELTS OR equivalent qualification
                                        <br />
                                        <p className={classes.Or}>OR</p>
                                        <br />
                                        Valid GATE qualification
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default (withRouter(Advertisements))

