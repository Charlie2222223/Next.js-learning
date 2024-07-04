import Footer from "@/components/Footer";
import "@/styles/globals.css";

/**
 * アプリケーション全体のレイアウトや共通の機能を設定するために使用
 * @Component Component は現在表示されているページのコンポーネント
 * @param pageProps はそのページに渡されるプロパティ
 */
export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="mb-auto w-full mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}