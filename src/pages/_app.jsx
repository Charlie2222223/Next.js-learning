import Footer from "@/components/Footer";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";

/**
 * アプリケーション全体のレイアウトや共通の機能を設定するために使用
 * @Component Component は現在表示されているページのコンポーネント
 * @param pageProps はそのページに渡されるプロパティ
 */
export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="w-full mx-auto mb-auto">
        <Component {...pageProps} />
      </div>
      
      <Footer />
    </StateProvider>
  );
}