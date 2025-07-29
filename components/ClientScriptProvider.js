'use client';

import Script from "next/script";
import Head from "next/head";

export default function ClientScriptProvider() {
  return (
    <>
      

      {/* ✅ Propeller Ads Script */}
      <Script
        src="//aiharsoreersu.net/ntfc.php?p=9624191"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />

      {/* ✅ Profitableratecpm Script */}
      <Script
        src="//pl27278547.profitableratecpm.com/1f59e71fa26029af801c4ec9fe5a0581/invoke.js"
        strategy="afterInteractive"
        async
        data-cfasync="false"
      />

      {/* ✅ Google AdSense Script */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7031040419946505"
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
      />
    </>
  );
}
