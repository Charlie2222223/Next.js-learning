import React from "react";

/**
 * ロゴの色をプロパティとして受け取り、それを適用
 */
function FiverrLogo({ fillColor }) {
    return (
        <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/*
                g要素はグループ化要素であり、fill属性にfillColorプロパティの値を適用。これにより、グループ内のすべてのパスが指定された色で塗りつぶされます。
                path要素は、具体的なSVGパスデータを含み、d属性にパスの描画指示を指定します。
            */}
            <g fill={fillColor}>
                <path d="M81.6 13.1h-13.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1.5-2 4-3.1 6.8-3.1 6 0 8.2 4 8.2 8.2v10.6h-2.8v-2.8h2.8z"></path>
            </g>
            {/*このg要素は、固定色の#1DBF73（緑色）を適用して別のパスをグループ化しています。*/}
            <g fill="#1DBF73">
                <path d="M85.3 27c0 3.7-1.7 3.7-3.7 3.7-1.7 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7z"></path>
            </g>
        </svg>
    );
}

export default FiverrLogo;
