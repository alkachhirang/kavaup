import { Container, Row, Col } from "react-bootstrap";
import { Servicesvg, Remotesvg } from './Iconimg';
import Commonbtn from './CommonBtn';
import Image from "next/image";

export default function Help() {
    return (
        <>
            <div id="Solutions" className="common_pt">
                <Container className='custom_container4 mx_auto'>
                    <Row className='flex-lg-row flex-column-reverse justify-content-lg-between'>
                        <Col lg={5} className='mt-5 mt-lg-0'>
                            <h4 className="fw-semibold text_black mb-2 mb-sm-3 mb-xl-4 lh_121 fs_2xl text-lg-start text-center">What we do</h4>
                            <p className="d-flex align-items-center fw-medium text_blue gap-3 fs_md mb-2 mb-xl-3"><Servicesvg /> We're a Full-Service Agency </p>
                            <p className="fw-normal fs_sm mt-xl-1 text_darkgrey lh_178 mb-3 mb-xl-4 pe-xl-5 opacity_70">We craft digital experiences that bring strategic value. From simple apps to out-of-the-box, custom software, our team can help. Our solutions have an intelligent client interface that provides insight and allows for content manipulation.</p>
                            <p className="d-flex align-items-center fw-medium text_blue gap-3 fs_md mb-2 mb-xl-3"><Remotesvg /> We're a 100% Remote Company </p>
                            <p className="fw-normal fs_sm mt-xl-1 text_darkgrey lh_178 mb-3 mb-xl-5 pe-xl-5 opacity_70">Talent isn't restricted to borders. Our team is dispersed throughout the US. </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Commonbtn name='Contact Us' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image src="/assets/images/png/whatwedo.png" alt="whatwedo" width={903} height={674} className='w-100 h-100 object-fit-contain' />
                        </Col>
                    </Row>
                </Container>

            </div>
        </>

    );
}