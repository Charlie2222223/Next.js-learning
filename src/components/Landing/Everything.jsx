import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs"; //チェックマークのアイコンを使用する
/**
 * サービスの様々な特徴やメリットを説明するオブジェクトの配列です。
 * 各オブジェクトはtitle（タイトル）とsubtitle（サブタイトル）を持っています。
 */
function Everything() {
    const everythingData = [
        {
            title: "Stick to your budget",
            subtitle: "Find the right service for every price point. No hourly rates, just project-based pricing."
        },
        {
            title: "Get quality work done quickly",
            subtitle: "Hand your project over to a talented freelancer in minutes, get long-lasting results."
        },
        {
            title: "Pay when you're happy",
            subtitle: "Upfront quotes mean no surprises. Payments only get released when you approve."
        },
        {
            title: "Count on 24/7 support",
            subtitle: "Our round-the-clock support team is available to help anytime, anywhere."
        }
    ];

    return (
        <div className="bg-[#f1fdf7] flex py-20 justify-between px-24"> 
        {/*
            justify-between：子要素を左右に配置し、間に空間を空けます
        */}
            <div>
                <h2 className="text-4xl mb-5 text-[#404145] font-bold">
                    The best part? Everything.
                </h2>
                <ul className="flex flex-col gap-10">         {/*リストアイテムは垂直方向（列方向）に配置され、アイテム間にはgap-10による間隔が設定される*/}
                    {everythingData.map(({ title, subtitle }) => (
                        <li key={title}>
                            <div className="flex gap-2 items-center text-xl">   {/*内部の要素が水平方向に配置される*/}
                                <BsCheckCircle className="text-[#62646a]" />    {/*ここでチェックマークを適用*/}
                                <h4>{title}</h4>
                            </div>
                            <p className="text-[#62646a]">{subtitle}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative h-96 w-2/4">           {/*内部の絶対位置の要素がこのdivを基準に配置される*/}
                <Image src="/everything.webp" fill alt="everything" />  {/**fileは内部の絶対位置の要素がこのdivを基準に配置され画像がコンテナ全体をカバーされる*/}
            </div>
        </div>
    );
}

export default Everything;