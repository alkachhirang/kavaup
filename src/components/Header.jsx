'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import Hamburger from 'hamburger-react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { Arrowsvg, Navlogo, Rightarrow } from './Iconimg';
import Dropdown from './Dropdown';
import Commonbtn from './CommonBtn';

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const [show, setshow] = useState(true);
    const [_document, _setdocument] = useState(null);
    useEffect(() => {
        _setdocument(document);
        if (show === false) {
            document.body.classList.add("overflow_hidden");
        } else {
            document.body.classList.remove("overflow_hidden");
        }
    });
    return (
        <>
            <div>
                <Container className='custom_container'>
                    <div className='d-flex align-items-center justify-content-between py_nav start-0 end-0 z-3 '>
                        <Link href={'/'}>
                            <Navlogo />
                        </Link>
                        <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                            <li><Link href='#Home' onClick={() => setshow(!show)} className='fw-medium fs_sm  navlink text_black '>Home</Link></li>
                            <li className='position-relative navdrop'><Link href='#Apps' onClick={() => setshow(!show)} className='fw-medium fs_sm navlink '>Apps <Arrowsvg />
                            </Link><Dropdown /></li>
                            <li className='position-relative navdrop'><Link href='#Solutions' onClick={() => setshow(!show)} className='fw-medium fs_sm navlink text_black '>Solutions <Arrowsvg />
                            </Link> <Dropdown /></li>
                            <li className='position-relative navdrop'><Link href='#Services' onClick={() => setshow(!show)} className='fw-medium fs_sm navlink text_black '>Services <Arrowsvg />
                            </Link><Dropdown /></li>
                            <li><Link href='#contactus' onClick={() => setshow(!show)} className='fw-medium fs_sm  navlink text_black '>Contact Us</Link></li>
                        </ul>
                        <div onClick={() => setshow(!show)} className='z_5 d-block d-lg-none' >
                            <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color='#000000' />
                        </div>
                    </div>
                </Container>
                <div id='Home' className='header_sec mx-auto mt-lg-4'>
                    <Container className='custom_container1 ms-auto pb-3'>
                        <Row className='align-items-center pb-4 flex-lg-row flex-column-reverse'>
                            <Col lg={6} className='pt-xl-5 mt-xl-5 pt-4'>
                                <h2 className='fw-semibold fs_3xl text_black mb-4 mb-xxl-5 lh_125 text-lg-start text-center'>Custom <span className='text_pink'>software development</span> from concept to completion
                                    accelerate growth through interactive app development</h2>
                                <div className='d-flex gap_30 flex-md-row flex-column align-items-center justify-content-lg-start justify-content-center'>
                                    <Commonbtn name='Start Now' />
                                    <Link href={'/'} className='fw-medium fs_4xl sm:fs_sm text_black lh_125 gap-3 d-flex'>Try it for free <Rightarrow /> </Link>
                                </div>
                            </Col>
                            <Col lg={6} className='col-10 mt-4 mt-lg-0'>
                                <Image src="/assets/images/png/hero-img.webp" alt="hero-img" width={734} height={758} className='w-100 h-100' />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>


    );
}
