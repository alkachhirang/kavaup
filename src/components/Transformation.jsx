import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Commonbtn from "./CommonBtn";

export default function Transformation() {
    return (
        <>
            <div id='Mobile'>
                <Container className="custom_container6 mx_auto bg_lightpink px-4 px-sm-5 pt-5">
                    <Row className="align-items-center justify-content-between px-xl-5 mt-xl-2 pb-5 pb-lg-0">
                        <Col lg={5} className=" d-flex justify-content-center align-items-center" data-aos="fade-up">
                            <Image src='/assets/images/png/transformation-img.png' alt='transformation' width={300} height={400} className='w- 100 h- 100' />
                        </Col>
                        <Col lg={7} className='mt-4 mt-lg-0 ' data-aos="fade-left">
                            <h4 className="fw-semibold text_black fs_xl lh_125 mb-lg-4 mb-2 mt-xl-1 text-lg-start text-center ">Take the Next Step in Your Digital Transformation</h4>
                            <p className="text_black fw-normal fs_sm opacity_70 mb-lg-3 mb-1 lh_200 lh_150  text-lg-start text-center">Concentrate on your brand, business, or project while we handle the software development.</p>
                            <p className="fw-medium fs_sm text_pink lh_200 lh_150 mb-lg-4 mb-3 text-lg-start text-center">Get in touch with Kava Up to learn more!</p>
                            <div className="d-flex justify-content-lg-start justify-content-center mt-xl-1">
                                <Commonbtn name='Contact Us' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}