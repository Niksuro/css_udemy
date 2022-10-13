/**
 * @license UdemyCSS v1.0.0
 *
 * Custom document for UdemyCSS
 * to inject custom styles or scripts
 */

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
const UdemyCSSDocument = () => {
  /**
   * Document custom markup
   *
   * @returns {Element.TSX}
   */
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

/**
 * Collect styles in SSR
 *
 * @public
 * @param {DocumentContext} ctx - context object from next.js with one addition:
 * renderPage: {Function} - a callback that executes the actual
 * React rendering logic (synchronously).
 * @returns {Promise<DocumentInitialProps>}
 */
UdemyCSSDocument.getInitialProps = async (ctx:any) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App:any) => (props:any) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default UdemyCSSDocument;
