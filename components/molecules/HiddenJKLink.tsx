import Link from "next/link";
import { useState } from "react";

type Props = {
    href: string;
};

const HiddenJKLink = ({ href }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <span className="font-sans text-lg text-gray-100">
            {show ? (
                <Link href={href}>
                    <a className="border-b border-gray-100">JKスタンプ→</a>
                </Link>
            ) : (
                <>
                    <span className="cursor-pointer" onClick={() => setShow(true)}>
                        by
                    </span>
                    <a
                        className="border-b border-opacity-0 border-gray-100 hover:border-opacity-100"
                        href="https://github.com/m19e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        m19e
                    </a>
                </>
            )}
        </span>
    );
};

export default HiddenJKLink;
