import React, { Component, Fragment } from "react";
import classes from './Advertisements.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import AdvertisementTable from "./AdvertisementTable";

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
                <AdvertisementTable />
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
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>MEQ: </span>
                                        Masters’ degree in relevant Department of Engineering/ Technology (with first division as defined by the awarding Institute/ University).
                                        <br />
                                        <span className={classes.SubHeading}>QE: </span>
                                        Valid TOEFL/IELTS OR equivalent qualification OR Valid GATE qualification
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}>Applicants are strongly encouraged to visit the Department web pages and the advertisement provided below by each Department.</p>
                <h3 className={classes.SubHeading}>Schedule for Last date of online applications</h3>
                <AdvertisementTable />
                <h3 className={classes.SubHeading}>(C) Humanities and Social Sciences</h3>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name</th>
                    <th className={classes.TableHeading} style={{ width: "50%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for Indian applicants</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Minimum Educational Qualifications (MEQs) and Qualifying Examination (QE) for International applicants</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Economics</li>
                                    <li className={classes.Paragraph}>Psychology</li>
                                    <li className={classes.Paragraph}>Philosophy</li>
                                    <li className={classes.Paragraph}>English</li>
                                    <li className={classes.Paragraph}>Sociology</li>
                                    <li className={classes.Paragraph}>History</li>
                                </ul>
                            </td>
                            <td style={{ width: "50%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Engineering/ Technology (with first division as defined by the awarding Institute/ University) AND GATE qualification,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) AND valid GATE qualification OR valid UGC-JRF/ CSIR-JRF OR Equivalent Fellowship</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in relevant specialization of (with first division as defined by the awarding Institute/ University) AND UGC-JRF qualification or Equivalent Fellowship,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>M.Phil. degree in relevant specialization (with first division as defined by the awarding Institute/ University) AND GATE qualification,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in Business Administration (with first division as defined by the awarding Institute/ University) AND UGC/ CSIR-JRF qualification OR Equivalent Fellowship.</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>MPhil degree in a relevant specialization of HSS OR Master's degree in a relevant specialization of HSS with UGC-JRF OR UGC-NET.</li>
                                </ul>
                                <p className={classes.Highlight}>GATE is not compulsory for DF / IS / CT / SW category.</p>
                            </td>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>MEQ: </span>
                                        Masters’ degree in relevant specialization of HSS (with first division as defined by the awarding Institute/ University)
                                        <br />
                                        <span className={classes.SubHeading}>QE: </span>
                                        Valid TOEFL/IELTS OR equivalent qualification OR Valid GATE qualification
                                    </li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>
                                        <span className={classes.SubHeading}>MEQ: </span>
                                        Masters’ degree in Science/ Engineering/ Social Sciences/ International Business (with first division as defined by the awarding Institute/ University)
                                        <br />
                                        <span className={classes.SubHeading}>QE: </span>
                                        Valid TOEFL/IELTS OR equivalent qualification OR Valid GATE qualification
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}>Applicants are strongly encouraged to visit web page of HSS and the advertisement provided below.</p>
                <h3 className={classes.SubHeading}>Schedule for Last date of online applications</h3>
                <AdvertisementTable />
                <h3 className={classes.SubHeading}>(D) Centre for Advanced Electronics (CAE)</h3>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name</th>
                    <th className={classes.TableHeading} style={{ width: "50%" }}>For Indian Applicants</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>For International Applicants</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Centre for Advanced Electronics (CAE)</li>
                                </ul>
                            </td>
                            <td style={{ width: "50%" }}>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>FA (Fellowship Awardee): </span>
                                    Fellowship Awardees from the funding agencies such as CSIR/ UGC/ DBT/ NBHM/DST/ equivalentOR Fellowship position in an externally funded project under a faculty member of CAE. The scholarship will be as per the rules of the concerned funding agency.
                                </p>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>*SW (Sponsored WITHOUT Institute scholarship): </span>
                                    For applicants sponsored from a highly reputed R&D organization or Industry. [After completion of required coursework, either on Full Time (SWF) or Part Time (SWP) basis, with approval of the competent authority]
                                </p>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>*DF (Defense Forces): </span>
                                    Serving personnel of defense forces WITHOUT any scholarship from the Institute.
                                </p>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>*CT (College Teacher): </span>
                                    Permanent Employee of the sponsoring College/Institute/University WITHOUT any scholarship from the Institute.
                                </p>
                                <p className={classes.SubHeading}>*These categories are exempted from valid UGC/CSIR/DBTJRF qualification OR DST INSPIRE Fellowship OR Equivalent Fellowship</p>
                                <p className={classes.Highlight}>GATE is not compulsory for DF / IS / CT / SW category.</p>
                            </td>
                            <td style={{ width: "25%" }}>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>**ISF(International Self Finance): </span>
                                    Self-Financing Students.
                                </p>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>**ISW (International Sponsored by Industry or NGO) </span>
                                    (i) Industry Sponsorship
                                    (ii) NGO (Non-Government Organization) Sponsorship
                                </p>
                                <p className={classes.Paragraph}>
                                    <span className={classes.SubHeading}>**GSW (International Sponsored by Government organisation): </span>
                                    (i) ICCR Scholarship of Government of India
                                    (ii) Foreign Government Sponsorship
                                </p>
                                <p className={classes.SubHeading}>**These categories are exempted from valid UGC/CSIR/DBTJRF qualification OR DST INSPIRE Fellowship</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}>Applicants are strongly encouraged to visit web page of HSS and the advertisement provided below.</p>
                <h3 className={classes.SubHeading}>Schedule for Last date of online applications</h3>
                <AdvertisementTable />
                <h3 className={classes.SubHeading}>(E) Visvesvaraya PhD Scheme for Electronics and IT (applicable to Departments of Electrical Engineering and Computer Science and Engineering)</h3>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name</th>
                    <th className={classes.TableHeading} style={{ width: "75%" }}>Minimum Educational Qualifications (MEQs)</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Electrical Engineering / Computer Science and Engineering</li>
                                </ul>
                            </td>
                            <td style={{ width: "75%" }}>
                                <ul>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of the Engineering/Technology (with first division as defined by the awarding Institute/ University),</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Bachelor degree in the relevant Engineering/ Technology Department (with first division as defined by the awarding Institute/ University) AND valid GATE qualification,</li>
                                    <p className={classes.Or}>OR</p>
                                    <li className={classes.Paragraph}>Masters’ degree in the relevant Department of Science (with first division as defined by the awarding Institute/ University) AND valid GATE qualification OR UGC/CSIR-JRF qualification OR equivalent fellowship.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className={classes.Paragraph}>Applicants are strongly encouraged to visit the Department web pages and the advertisement provided below by each Department.</p>
                <h3 className={classes.SubHeading}>Schedule for Last date of online applications</h3>
                <AdvertisementTable />

                <h3 className={classes.SubHeading}>Application Fee: </h3>
                <p className={classes.Paragraph}>For Indian applicants: 100/- Indian Rupees (non-refundable) to be paid through Online.
                    <br />
                    For International application: Payment of application fee of US $ 30 (non-refundable) through Online</p>
                <h3 className={classes.SubHeading}>Application Procedure [for Indian Applicants]: </h3>
                <ul>
                    <li className={classes.Paragraph}>Applicants must apply ONLINE through our website <a href="http://academic.iiti.ac.in/" target="_blank">(http://academic.iiti.ac.in/)</a>. A unique application number will be assigned for each applicant.</li>
                    <li className={classes.Paragraph}>After submitting the application online, the eligible applicant has to bring the signed hard-copy of the application along with State Bank Collect receipt, recent photograph, self- attested copy of the relevant certificates, additional forms Appendix-I to IV (for SW/ IS/ DF applicants along with last 3 months salary slip and Employer's PAN card) at the time of Written Test / Interview.</li>
                    <li className={classes.Paragraph}>In case a applicant wishes to apply in more than one Department then separate application must be filled for each Department.</li>
                </ul>
                <table>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Name of the Department/Center/School</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Details of Correspondence</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Email id</th>
                    <th className={classes.TableHeading} style={{ width: "25%" }}>Address</th>
                    <tbody>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Computer Sciences and Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC CSE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-cse@iiti.ac.in</td>
                            <td style={{ width: "25%" }} className={classes.SubHeading} rowspan="12">Indian Institute of Technology Indore Khandwa Road, Simrol, Indore, Pin Code 453552 Madhya Pradesh, India</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Electrical Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC EE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-eee@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Mechanical Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC ME</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-me@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Metallurgy Engineering and Materials Science</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC MEMS</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-mems@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Civil Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC CE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-ce@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Biosciences and Biomedical Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC BSBE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-bsbe@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Astronomy, Astrophysics and Space Engineering</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC AASE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>pc-phd-aase@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Chemistry</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC CH</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-chem@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Physics</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC PHY</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-phy@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Mathematics</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC MA</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-maths@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Humanities and Social Sciences</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC HSS</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>admission-hss@iiti.ac.in</td>
                        </tr>
                        <tr>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>Centre for Advanced Electronics (CAE)</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>DPGC CAE</td>
                            <td style={{ width: "25%" }} className={classes.Paragraph}>capc-cae@iiti.ac.in</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className={classes.SubHeading}>Common Application Portal[for International Applicants]: </h3>
                <p className={classes.Paragraph}>International applicants may refer to the web link of Study in India https://www.studyinindia.gov.in and Academic web page of IIT Indore https://academic.iiti.ac.in/ for admission in PG/ PhD Programs.</p>
                <ul>
                    <li className={classes.Paragraph}>
                        <span className={classes.SubHeading}>Definition of International Applicant: </span>
                        Anyone who is not a citizen of India will be considered as an international applicant for the purpose of admission.
                    </li>
                    <li className={classes.Paragraph}>Applicants must apply ONLINE through our website <a href="http://academic.iiti.ac.in/" target="_blank">(http://academic.iiti.ac.in/)</a>. A unique application number will be assigned for each applicant.</li>
                    <li className={classes.Paragraph}>After Submitting the application online, the eligible applicant must send the signed hard-copy of the application along with application fee receipt, recent photograph, self-attested copy of relevant certificates, valid GATE/ GRE and TOEFL score card (as applicable) and Statement of Purpose (SOP) to the concerned Department.</li>
                    <li className={classes.Paragraph}>In case applicant wishes to apply in more than one Department then separate application must be filled for each Department.</li>
                    <li className={classes.Paragraph}>
                        <span className={classes.SubHeading}>Selection procedure: </span>
                        The selection procedure would be an interview (in-person or over video conference) for the shortlisted applicants. Statement of Purpose (SOP) and Letter of Recommendation (LOR) must be submitted by the applicant before the interview.</li>
                    <li className={classes.Paragraph}>There would be no specific scholarship offered as part of the program.</li>
                    <li className={classes.Paragraph}>
                        <span className={classes.SubHeading}>Fee Structure (for AY 2021-22): </span>
                        Fee payable by the International applicants shall be as under:
                        <table>
                            <th className={classes.SubHeading}>Tuition fee per Semester (in US $)</th>
                            <th className={classes.SubHeading}>Living Expenses charges (excluding dining charges) (in US $)</th>
                            <tbody>
                                <tr>
                                    <td className={classes.Paragraph}>1000</td>
                                    <td className={classes.Paragraph}>600</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={classes.Paragraph}>
                        <span className={classes.SubHeading}>Fee Waiver: </span>
                        Fee waiver may be offered to the applicants admitted through Study in India Cell on the basis of their merit.
                    </li>
                </ul>
                <p className={classes.Paragraph}>Address of Office of Dean, Academic Affairs for sending requisite documents in original by the applicants under IS, DF, SW and CT categories:</p>
                <p className={classes.SubHeading} style={{ margin: "0px" }}>Abhinandan Bhavan, First Floor</p>
                <p className={classes.SubHeading} style={{ margin: "0px" }}>Indian Institute of Technology Indore</p>
                <p className={classes.SubHeading} style={{ margin: "0px" }}>Simrol Campus, Khandwa Road , P.O. Simrol,</p>
                <p className={classes.SubHeading} style={{ margin: "0px" }}>Indore-453552, Madhya Pradesh, India</p>
                <p className={classes.SubHeading} style={{ margin: "0px" }}>Email: <span style={{ color: "blue" }}>phdadmission@iiti.ac.in</span></p>
            </div>
        )
    }
}

export default (withRouter(Advertisements))

