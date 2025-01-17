import Image from "next/image"; // Next.jsアプリケーションでの画像処理を最適化する
import React from "react";

/**
 * 複数のブランドロゴを表示するためのHTML構造を返す
 */
function Companies() {
    return (
        <div className="flex items-center justify-center text-gray-400 text-2xl font-bold min-h-[11vh]">
            {/*
                flex：Flexboxレイアウトを使用して、内部の子要素を横に並べる。
                items-center：Flexboxの子要素を垂直方向に中央揃えにする。
                justify-center : フッター内のコンテンツを中央揃えにする。
                text-2xl：テキストのサイズを2倍の大きさ（通常の2倍）に設定します。
                min-h-[11vh]：このクラスは、div要素の最小高さをビューポートの高さの11%に設定します。
            */}
            Trusted by &nbsp;
            <ul className="flex justify-center gap-10 ml-10">
                {/*
                    flex：リストアイテムをフレックスボックスで表示。
                    justify-center：リストアイテムを中央揃え。
                    gap-10：リストアイテム間に一定の間隔を作る。
                    ml-10：左側にマージンを追加
                */}
                {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="relative h-[4.5rem] w-[4.5rem]">
                        {/*
                            relative：相対位置を設定します。
                            h-[4.5rem]：高さを4.5レム（約72ピクセル）に設定する。
                            w-[4.5rem]：幅を4.5レム（約72ピクセル）に設定する。
                        */}
                        <Image
                            alt="trusted brands"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            src={`/trusted${num}.png`}
                            priority={num === 1} // 1つ目の画像に優先度を設定
                        />
                        {/*
                            Imageコンポーネントは、Next.jsの画像最適化機能を使用して、指定された画像を表示。
                            alt="trusted brands"：画像が表示されない場合に表示される代替テキストを指定。
                            fill：画像が親要素のサイズに合わせて完全に埋めるように調整。
                            sizes：画像の表示サイズをスクリーンサイズに応じて指定。
                            priority：画像の読み込みを優先する。
                         */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Companies;
