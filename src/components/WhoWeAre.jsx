import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import Commonbtn from './CommonBtn';

export default function WhoWeAre() {
    return (
        <>
            <div className="common_pt">
                <Container className="custom_container3 mx_auto pb-xl-5 mb-xl-4">
                    <Row className="align-items-center justify-content-between">
                        <Col lg={6} className="" data-aos="fade-right">
                            <Image src="/assets/images/png/whoweare.webp" alt="whoweare" width={653} height={490} className='w-100 h-100' />
                        </Col>
                        <Col lg={5} className="mt-md-5 mt-4 mt-lg-0" data-aos="fade-left">
                            <h4 className="fw-semibold text_black mb-2 mb-sm-3 mb-xl-4 lh_121 fs_2xl text-lg-start text-center">Who we are  </h4>
                            <p className="fw-normal text_darkgrey fs_sm lh_178 lh_160 mb-3 mb-xl-5 text-lg-start text-center opacity_70">Kava Up, LLC is a US-based digital creative studio delivering ROI-focused web and mobile app development. We've helped startups, small businesses, enterprises, and everyone in between build and scale with our client-focused development approach. </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Commonbtn name='Contact Us' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    );
}