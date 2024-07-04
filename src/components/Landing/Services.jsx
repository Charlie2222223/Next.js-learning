import { categories } from "../../utils/categories";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

/**
 * サービスカテゴリを一覧表示。
 * 各カテゴリはクリック可能で、対応する検索ページにリダイレクトされる
 */
function Services() {
    const router = useRouter();
    return (
        <div className="mx-20 my-16">
            <h2 className="text-4xl mb-10 text-[#404145] font-bold">You need it, we've got it</h2>
            <ul className="grid grid-cols-5 gap-10">
                {categories.map(({ name, logo }) => (
                    <li
                        key={name}
                        /*
                            flex：Flexboxレイアウトを使用して内部の子要素を横に並べます。
                            flex-col：Flexboxレイアウトを使用して子要素を縦に並べます。
                            justify-center：Flexboxレイアウトを使用して子要素を中央揃えにします。
                            items-center：Flexboxレイアウトを使用して子要素を中央揃えにします。
                            cursor-pointer：カーソルをポインターに変更し、クリック可能であることを示します。
                            hover:shadow-2xl：ホバー時に影を大きく表示します。
                            hover:border-[#1D8F73]：ホバー時にボーダーの色をカスタムの緑色に設定します。
                            border-2：2ピクセルのボーダーを設定します。
                            border-transparent：デフォルトで透明なボーダーを設定します。
                            p-5：パディングを5単位設定します。
                            transition-all：すべてのプロパティのトランジションを設定します。
                            duration-5：トランジションの期間を設定します。
                        */
                        className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:border-[#1D8F73] border-2 border-transparent p-5 transition-all duration-5"
                        onClick={() => router.push(`/search?category=${name}`)}
                    >
                        <Image src={logo} alt="category" height={50} width={50} />
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;
