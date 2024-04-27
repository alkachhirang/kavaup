import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { helpdata } from "./Mapdata";
import { Web, Prototype, UiUx, Android, Complex } from './Iconimg'
import Commonbtn from "./CommonBtn";

export default function HowWeHelp() {
    return (
        <>
            <div className="common_pt">
                <Container id="howwehelp" className="custom_container5 mx_auto">
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={6} className='w-full'>
                            <Image src="/assets/images/png/help.png" alt="help-img" width={577} height={578} className='w-100 h-100' />
                        </Col>
                        <Col lg={5} className='w-full'>
                            <h4 className="fw-semibold text_black mb-2 mb-sm-3 mb-xl-4 lh_121 fs_2xl ">How we can help</h4>
                            {helpdata.map((help, index) => {
                                return (
                                    <div key={index} className="">
                                        <div>
                                            <p className='fw-normal text_darkgrey mt-xl-1 opacity_70 fs_sm lh_134 d-flex align-items-center gap-3'>{help.svg}{help.Content}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            <p className="fw-medium  text_pink fs_md lh_162 mb-3 ">Need more help? We also provide database <span className="d-xl-block"> management, cloud services, and CI/CD</span></p>
                            <div className="mt-1">
                                <Commonbtn name='Contact Now' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}