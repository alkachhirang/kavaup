import Link from "next/link";

export default function Dropdown() {
    const list = [
        {
            text: "Type here",
            path: "#typehere",
        },
        {
            text: "Android Apps",
            path: "#androidapps",
        },
        {
            text: "Our process",
            path: "#ourprocess",
        },
        {
            text: "How we can help",
            path: "#howwehelp",
        },
    ];
    return (
        <>
            <ul className="dropdown">
                {list.map((a, index) => (
                    <li key={index} className="px-5 text-transparent fs_4xl fw-normal drop_box text-center bg-transparent"><Link href={a.path} className="text-black">
                        {a.text}
                    </Link></li>
                ))}
            </ul >
        </>
    );
}