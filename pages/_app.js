import Head from 'next/head';
import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TokyoState>
        <Head>
        {/* Add your favicon link tag here */}
        <link rel="icon" href="/assets/img/fav/picture.ico" />
        {/* Other meta tags or links can be added here as well */}
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </TokyoState>
  );
}
