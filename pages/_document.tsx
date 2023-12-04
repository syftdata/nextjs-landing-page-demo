import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(t){if(window.syftc=t,window.syft)return;window.syft=[],["identify","track","page"].forEach(function(t){window.syft[t]=function(){var s=[].slice.call(arguments);s.unshift(t),window.syft.push(s)}});var s=document.createElement("script");s.async=!0,s.setAttribute("src","http://localhost:4173/syft.umd.js"),(document.body||document.head).appendChild(s)}({sourceId:"test"});`,
            }}
          />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/43753372.js"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
