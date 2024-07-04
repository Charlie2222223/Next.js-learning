import Image from "next/image";
import { useRouter } from "next/router";    //ルーターはページ遷移を管理するために使用
import React, { useEffect, useState } from "react";

/**
 * ウェブページのヒーローバナーセクションとして、背景画像のスライドショーと検索バー、人気のサービスリンクを表示
 */
function HeroBanner() {
    const router = useRouter();
    const [image, setImage] = useState(3); //useStateでimageという状態を定義し、初期値を3に設定。

    useEffect(() => {
        const interval = setInterval(() => setImage(image > 6 ? 1 : image + 1), 10000);        //useEffectを使用して、10秒ごとにimage状態を更新するタイマーを設定します   
        return () => clearInterval(interval);
    }, [image]);

    return (
        <div className="h-[680px] relative bg-cover">   {/*バナーの高さを680ピクセルに設定し、背景画像をカバーするように配置*/}
            <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
                {/*
                    absoluteクラスを使用して、背景画像のスライドショーを実装。
                    それぞれのImageコンポーネントは、異なる背景画像を表示し、fill属性を使って親要素を完全にカバー。
                    classNameプロパティを使用して、現在表示されるべき画像にopacity-100を、その他の画像にopacity-0を適用し、スライドショーの切り替えを実現
                */}
                <Image
                    alt="hero"
                    src="/bg-hero1.webp"
                    fill
                    className={`${image === 1 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
                <Image
                    alt="hero"
                    src="/bg-hero2.webp"
                    fill
                    className={`${image === 2 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
                <Image
                    alt="hero"
                    src="/bg-hero3.webp"
                    fill
                    className={`${image === 3 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
                <Image
                    alt="hero"
                    src="/bg-hero4.webp"
                    fill
                    className={`${image === 4 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
                <Image
                    alt="hero"
                    src="/bg-hero5.webp"
                    fill
                    className={`${image === 5 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
                <Image
                    alt="hero"
                    src="/bg-hero6.webp"
                    fill
                    className={`${image === 6 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
                />
            </div>
            <div className="z-1 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
                <h1 className="text-white text-5xl leading-snug">
                    Find the perfect &nbsp;
                    <i>Freelance</i>
                    <br />
                    services for your business.
                </h1>
                    {/*
                        z-1 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20のクラスを持つdiv要素は、
                        テキストと検索バーを含むセクションのスタイルを設定。
                        h1タグでメインメッセージを表示し、text-white、text-5xl、leading-snugのクラスでスタイルを設定。
                    */}
                <div className="flex align-middle">
                    <div className="relative">
                        <input
                            type="text"
                            className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
                            placeholder='Try "building mobile app"'
                        />
                    </div>
                    <button className="bg-[#1DBF73] text-white px-12 text-lg fontsem rounded-r-md">Search</button>
                </div>
                <div className="text-white flex gap-4">
                    Popular:{" "}
                    <ul className="flex gap-5">
                        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition">
                            Website Design
                        </li>
                        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition">
                            Wordpress
                        </li>
                        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition">
                            Logo Design
                        </li>
                        <li className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition">
                            AI Services
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
