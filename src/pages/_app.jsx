import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

/**
 * アプリケーション全体のレイアウトや共通の機能を設定するために使用
 * @Component Component は現在表示されているページのコンポーネント
 * @param pageProps はそのページに渡されるプロパティ
 */
export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link ref="shortcut icon" href="/favicon.ico"/>
        <title>Fiverr Clone</title>
      </Head>
      <div className="relative flex flex-col justify-between h-screen">  
        <Navber />
        <div className="w-full mx-auto mb-auto">
          <Component {...pageProps} />
        </div>
        
        <Footer />
      </div>
    </StateProvider>
  );
}