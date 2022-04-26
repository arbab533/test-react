import React from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Tabs = () => {
  return (
    <>
        <div className="container tabs_container">
            <div className="tabs_top_row">
                <h2>Benefits Of <span style={{color: '#4DC1BA'}}><b>E-REC</b></span></h2>
                <p>Benefits of using E-REC Platform to find your next recruit include using cutting edge technologies to bring you the best of breed talent to your desk in a fraction of the time compared to traditional methods and enabling those decisions to shortlist validated top tier talent with progress to interview to be made in minutes, not hours, days or weeks.</p>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row>
                <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first" className="tabs_left"><span className="number">01</span> Cypher Testing & Assessment Technology (CTAT)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second" className="tabs_left"><span className="number">02</span> Rapid Applicant Screening and Validation (RASV)</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="three" className="tabs_left"><span className="number">03</span> Talent Acquisition Team Integration (TATI)</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="four" className="tabs_left"><span className="number">04</span> Integrated Applicant Geolocation Mapping during CTAT (IAGM)</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="five" className="tabs_left"><span className="number">05</span> Applicant Right to Work - KYC Verification and Validation (RTW-KYC) </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row className="tab_inner_row">
                            <Col sm={12} className="tab_inner_col">
                                <p>EREC’s Employment Realtime Engagement Centre™ unique feature that shows the applicants in being examined as they are being tested for being shortlisted for interview.  This exciting new feature in recruitment is bringing digital data analytics to the forefront and giving the recruiter and employer a true competitive advantage.  EREC’s platform does not replace your (ATS) Applicant Tracking System, but rather compliment it, giving you lightning fast access to the top talent within the testing pool.</p>
                                <p>Employers will be able to reach potentially the top 1% of the applicant pool within seconds after the testing concludes.  You can automate EREC’s platform to automatically contact the applicants that scored 95% - 100% and schedule in for interview based on available slots. </p>
                                <p>EREC’s onboard interview calendaring system that can integrate with Chrome, Internet Explorer and Firefox to upload the calendar .ics file to your preferred calendar such as Microsoft Outlook™ or Gmail™.</p>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row className="tab_inner_row">
                            <Col sm={12} className="tab_inner_col">
                                <p>EREC’s Employment Realtime Engagement Centre™ unique feature that shows the applicants in being examined as they are being tested for being shortlisted for interview.  This exciting new feature in recruitment is bringing digital data analytics to the forefront and giving the recruiter and employer a true competitive advantage.  EREC’s platform does not replace your (ATS) Applicant Tracking System, but rather compliment it, giving you lightning fast access to the top talent within the testing pool.</p>
                                <p>Employers will be able to reach potentially the top 1% of the applicant pool within seconds after the testing concludes.  You can automate EREC’s platform to automatically contact the applicants that scored 95% - 100% and schedule in for interview based on available slots. </p>
                                <p>EREC’s onboard interview calendaring system that can integrate with Chrome, Internet Explorer and Firefox to upload the calendar .ics file to your preferred calendar such as Microsoft Outlook™ or Gmail™.</p>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                        <Row className="tab_inner_row">
                            <Col sm={12} className="tab_inner_col">
                                <p>EREC’s Employment Realtime Engagement Centre™ unique feature that shows the applicants in being examined as they are being tested for being shortlisted for interview.  This exciting new feature in recruitment is bringing digital data analytics to the forefront and giving the recruiter and employer a true competitive advantage.  EREC’s platform does not replace your (ATS) Applicant Tracking System, but rather compliment it, giving you lightning fast access to the top talent within the testing pool.</p>
                                <p>Employers will be able to reach potentially the top 1% of the applicant pool within seconds after the testing concludes.  You can automate EREC’s platform to automatically contact the applicants that scored 95% - 100% and schedule in for interview based on available slots. </p>
                                <p>EREC’s onboard interview calendaring system that can integrate with Chrome, Internet Explorer and Firefox to upload the calendar .ics file to your preferred calendar such as Microsoft Outlook™ or Gmail™.</p>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                        <Row className="tab_inner_row">
                            <Col sm={12} className="tab_inner_col">
                                <p>EREC’s Employment Realtime Engagement Centre™ unique feature that shows the applicants in being examined as they are being tested for being shortlisted for interview.  This exciting new feature in recruitment is bringing digital data analytics to the forefront and giving the recruiter and employer a true competitive advantage.  EREC’s platform does not replace your (ATS) Applicant Tracking System, but rather compliment it, giving you lightning fast access to the top talent within the testing pool.</p>
                                <p>Employers will be able to reach potentially the top 1% of the applicant pool within seconds after the testing concludes.  You can automate EREC’s platform to automatically contact the applicants that scored 95% - 100% and schedule in for interview based on available slots. </p>
                                <p>EREC’s onboard interview calendaring system that can integrate with Chrome, Internet Explorer and Firefox to upload the calendar .ics file to your preferred calendar such as Microsoft Outlook™ or Gmail™.</p>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                        <Row className="tab_inner_row">
                            <Col sm={12} className="tab_inner_col">
                                <p>EREC’s Employment Realtime Engagement Centre™ unique feature that shows the applicants in being examined as they are being tested for being shortlisted for interview.  This exciting new feature in recruitment is bringing digital data analytics to the forefront and giving the recruiter and employer a true competitive advantage.  EREC’s platform does not replace your (ATS) Applicant Tracking System, but rather compliment it, giving you lightning fast access to the top talent within the testing pool.</p>
                                <p>Employers will be able to reach potentially the top 1% of the applicant pool within seconds after the testing concludes.  You can automate EREC’s platform to automatically contact the applicants that scored 95% - 100% and schedule in for interview based on available slots. </p>
                                <p>EREC’s onboard interview calendaring system that can integrate with Chrome, Internet Explorer and Firefox to upload the calendar .ics file to your preferred calendar such as Microsoft Outlook™ or Gmail™.</p>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
                </Row>
            </Tab.Container>
        </div>
    </>
  );
};

export default Tabs;
