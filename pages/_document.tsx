import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
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
              __html: `
            (function (p) {
              window.syftc = p || {};
              if (window.syft) return;
              window.syft = [];
              ['identify', 'track', 'page'].forEach(function (t) {
                window.syft[t] = function () {
                  const n = [].slice.call(arguments);
                  n.unshift(t);
                  window.syft.push(n);
                };
              });
              const n = document.createElement('script');
              n.async = true;
              n.setAttribute('src', 'http://localhost:4173/syft.es.js');
              (document.body || document.head).appendChild(n);
            })();            
            `,
            }}
          />
          <script
            async={true}
            charSet="utf-8"
            type="text/javascript"
            src="//js.hsforms.net/forms/embed/v2.js"
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
