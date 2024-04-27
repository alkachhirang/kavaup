import { Content } from "next/font/google";
import { Android, Complex, Prototype, UiUx, Web, Facebook, Twitter, Instagram, Youtube } from "./Iconimg";

export const slidedata = [
    {
        Image: "/assets/images/webp/slide1.webp",
    },
    {
        Image: "/assets/images/webp/slide2.webp",
    },
    {
        Image: "/assets/images/webp/slide3.webp",
    },
    {
        Image: "/assets/images/webp/slide4.webp",
    },
    {
        Image: "/assets/images/webp/slide5.webp",
    },
    {
        Image: "/assets/images/webp/slide6.webp",
    },
];
export const helpdata = [
    {
        svg: <Web />,
        Content: 'Web & mobile application services',
    },
    {
        svg: <Prototype />,
        Content: 'Prototyping',
    },
    {
        svg: <UiUx />,
        Content: 'UI/UX design',
    },
    {
        svg: <Android />,
        Content: 'Android / iOS mobile development',
    },
    {
        svg: <Complex />,
        Content: 'Complex web backend and frontend projects.',
    },
];
export const companydata = [
    {
        Link: 'Home',
        Path: '#Home',
    },
    {
        Link: 'Solutions',
        Path: '#Solutions',
    },
    {
        Link: 'Apps',
        Path: '#Apps',
    },
    {
        Link: 'Services',
        Path: '#Services',
    },
];
export const productdata = [
    {
        Link: 'Web apps',
        Path: '#Web ',
    },
    {
        Link: 'Mobile apps',
        Path: '#Mobile',
    },
    {
        Link: 'Mac & desktop apps',
        Path: '#desktop',
    },
];
export const contactdata = [
    {
        Link: 'info@kava.com',
    },
    {
        Link: '1234, Lorem ipsum dolor, consectetuer.',
        line: 'lh_200',
    },
];
export const footerlink = [
    {
        link: "https://www.facebook.com/",
        footersvg: <Facebook />,
        label: "facebook",
    },
    {
        link: "https://www.youtube.com/account",
        footersvg: <Youtube />,
        label: "youtube",
    },
    {
        link: "https://twitter.com/",
        footersvg: <Twitter />,
        label: "twitter",
    },
    {
        link: "https://www.instagram.com/",
        footersvg: <Instagram />,
        label: "instagram",
    },
];