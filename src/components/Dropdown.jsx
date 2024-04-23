export default function Dropdown() {
    const list = [
        { text: "Type here" },
        { text: "Android Apps" },
        { text: "Our process" },
        { text: "How we can help" },
    ];
    return (
        <>
            <ul className="dropdown">
                {list.map((a, index) => (
                    <li className="text-black text-transparent fs_4xl fw-normal drop_box text-center bg-transparent px-5" key={index}>
                        {a.text}
                    </li>
                ))}
            </ul>
        </>
    );
}