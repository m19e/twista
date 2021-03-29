import Link from "next/link";
import { useState, useEffect } from "react";
import { Stamp } from "types";

type StampData = {
    [key: string]: Stamp;
};

const Generator = () => {
    const [stampData, setStampData] = useState<StampData>({});
    const [author, setAuthor] = useState("");
    const [fullpath, setFullpath] = useState("emotwicon.png");

    useEffect(() => {
        const format = formatStampData(author, fullpath);
        setStampData(format);
    }, [author, fullpath]);

    const formatStampData = (aut: string, fp: string): StampData => {
        if (/^jk\//.test(fullpath)) {
            const [name, _] = fullpath.split("jk/").join("").split(".");
            const result: StampData = {};
            result[name] = { title: "", ext: "png", name, author: aut, fullpath: fp };
            return result;
        } else {
            const [name, _] = fullpath.split(".");
            const result: StampData = {};
            result[name] = { title: "", ext: "png", name, author: aut, fullpath: fp };
            return result;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="flex items-center justify-center w-full h-24 mb-2 bg-twitter border-b">
                <Link href="/">
                    <a>
                        <span className="font-sans font-black text-4xl text-gray-100">#emotwicon_gen</span>
                    </a>
                </Link>
            </header>

            <main className="flex flex-col items-center justify-center flex-1 text-center">
                <div className="grid gap-1 p-2 rounded-lg border-2 border-gray-200">
                    <div className="inline-flex">
                        <span className="w-16 mx-2 text-right font-bold text-gray-600">author:</span>
                        <input className="w-60" type="text" value={author} onChange={(e) => setAuthor(e.currentTarget.value)} />
                    </div>
                    <div className="inline-flex">
                        <span className="w-16 mx-2 text-right font-bold text-gray-600">fullpath:</span>
                        <input className="w-60" type="text" value={fullpath} onChange={(e) => setFullpath(e.currentTarget.value)} />
                    </div>
                    <textarea value={JSON.stringify(stampData, null, 4)} className="resize-none" cols={30} rows={10} readOnly></textarea>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 mt-2 bg-twitter border-t">
                <span className="font-sans text-lg text-gray-100">
                    <span className="mr-1.5">by</span>
                    <a
                        className="border-b border-opacity-0 border-gray-100 hover:border-opacity-100"
                        href="https://github.com/m19e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        m19e
                    </a>
                </span>
            </footer>
        </div>
    );
};

export default Generator;
