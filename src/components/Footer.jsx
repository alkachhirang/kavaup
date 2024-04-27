import { Container, Row, Col } from "react-bootstrap";
import { companydata, contactdata, productdata, footerlink } from "./Mapdata";
import Link from "next/link";
import { Inputsvg, Footerlogo } from "./Iconimg";

export default function Footer() {
    return (
        <>
            <div id='contactus' className='common_pt'>
                <Container className="custom_container6 mx_auto">
                    <Row>
                        <Col lg={8} className='col-12'>
                            <Row className='d-flex justify-content-between'>
                                <Col md={3}  className="col-6">
                                    <h3 className="fw-semibold fs_lg text_black mb-md-3 mb-2 ">Company</h3>
                                    {companydata.map((company, index) => {
                                        return (
                                            <div key={index}>
                                                <ul className="p-0 mb-0 list-unstyled">
                                                    <li className='lh_250 lh_199'><Link href={company.Path} className='text_lightgrey fw-normal fs_sm footerlink position-relative'>{company.Link}</Link></li>
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </Col>
                                <Col md={3} className="col-6">
                                    <h3 className="fw-semibold fs_lg text_black mb-md-3 mb-2 ">Product</h3>
                                    {productdata.map((product, index) => {
                                        return (
                                            <div key={index}>
                                                <ul className="p-0 mb-0 list-unstyled">
                                                    <li className='lh_250 lh_199'><Link href={product.Path} className='text_lightgrey text-nowrap fw-normal fs_sm footerlink position-relative'>{product.Link}</Link></li>
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </Col>
                                <Col md={4} className="col-12 mt-4 mt-md-0">
                                    <h3 className="fw-semibold fs_lg text_black mb-md-3 mb-2 ">contact</h3>
                                    {contactdata.map((contact, index) => {
                                        return (
                                            <div key={index}>
                                                <ul className="p-0 mb-0 list-unstyled">
                                                    <li className={`${contact.line} lh_250 lh_199`}><Link href={'/'} className='text_lightgrey fw-normal fs_sm'>{contact.Link}</Link></li>
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} className="d-flex col-11 align-items-lg-end flex-column mt-4 mt-lg-0">
                            <div className="mb-xl-5 mb-3 pb-3">
                                <h3 className="fw-semibold fs_lg text_black mb-md-3 mb-2 ">Get in touch</h3>
                                <div className="input_box d-flex align-items-center justify-content-between">
                                    <input type='text' placeholder="Your email address" className='fs_xs fw-normal w-100 ' />
                                    <div>
                                        <Inputsvg />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                {footerlink.map((icon, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={icon.link} aria-label={icon.label} target='blank'>
                                                {icon.footersvg}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                    <div className="bottom_line position-relative mt-5"></div>
                    <div className='py-3 mb-lg-2 d-flex justify-content-between align-items-center'>
                        <Link href={'/'} className=''>
                            <Footerlogo />
                        </Link>
                        <p className="fs_sm fw-normal text_lightgrey lh_125">
                            Copyright ©  {new Date().getFullYear()} kava up,llc
                        </p>
                    </div>
                </Container>

            </div>

        </>
    );
}