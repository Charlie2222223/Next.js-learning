import Image from "next/image";
import React from "react";

/**
 * Fiverrの会員登録を促すセクションを作成
 */
function JoinFiverr(){
    return(
        <div className="mx-32 my-16 relative">
            <div className="absolute z-10 top-1/3 left-10">
                {/* 
                    absolute：絶対位置を設定し、親要素に対して位置を決めます。
                    z-10：スタッキングコンテキスト内で前面に配置します。
                    top-1/3：親要素の上から3分の1の位置に配置します。
                    left-10：親要素の左から10単位の位置に配置します。
                */}
                <h4 className="text-white text-5xl mb-10">
                    Suddenly it&apos;s all so <i>doable.</i>
                </h4>
                <button
                    className="border text-base font-medium px-5 py-2 border-[#1D8F73] bg-[#1D8F73] text-white"
                    type="button"
                >
                    Join Fiverr
                </button> 
            </div>
            <div className="w-full h-96">
                <Image src="/bg-signup.webp" fill alt="signup" className="rounded-sm"/>
                {/*
                    src="/bg-signup.webp"：画像のソースを指定。
                    fill：画像が親要素のサイズに合わせて完全に埋めるように設定。
                    alt="signup"：画像が表示されない場合の代替テキストを指定。
                    className="rounded-sm"：画像の角を小さく丸める。
                */}
            </div>
        </div>
    );
}

export default JoinFiverr;