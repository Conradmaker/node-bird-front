import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

function _app({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Wongeun</title>
      </Head>
      <Component />
    </>
  );
}
//감싸준다.
export default wrapper.withRedux(_app);
