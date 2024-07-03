import React from "react";
import FiverrLogo from "../FivierrLogo";  //ローカルファイルからインポートされ、このコンポーネントでFiverrのロゴを表示するために使用
import { BsCheckCircle } from "react-icons/bs";
import Image from "next/image";

function FiverrBusiness() {
    return (
        <div className="bg-[#004aad] px-20 py-16 flex gap-10">
            <div className="text-white flex flex-col gap-6 justify-center items-start">
                <div className="flex gap-2">
                    <FiverrLogo fillColor="#ffffff" />
                    <span className="text-white text-3xl font-bold">Business</span>
                </div>
                <h2 className="text-3xl font-bold">A solution built for business</h2>
                <h4 className="text-xl">Upgrade to a curated experience to access vetted talent and exclusive tools</h4>
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-2 items-center">
                        <BsCheckCircle className="text-[#62646a] text-2xl" />
                        <span>Talent matching</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <BsCheckCircle className="text-[#62646a] text-2xl" />
                        <span>Dedicated account management</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <BsCheckCircle className="text-[#62646a] text-2xl" />
                        <span>Team collaboration tools</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <BsCheckCircle className="text-[#62646a] text-2xl" />
                        <span>Business payment solutions</span>
                    </li>
                </ul>
                <button className="border text-base font-medium px-5 py-2 border-[#1DBF73] bg-[#1DBF73] text-white" type="button">
                    Explore Fiverr Business
                </button>
            </div>
            <div className="relative h-[512px] w-2/3">
            {/*
                relative：相対位置を設定し、内部の絶対位置の要素がこのdivを基準に配置される。
                h-[512px]：高さを512ピクセルに設定。
                w-2/3：幅を親要素の3分の2に設定。
            */}
                <Image src="/business.webp" alt="business" fill />
            </div>
        </div>
    );
}

export default FiverrBusiness;