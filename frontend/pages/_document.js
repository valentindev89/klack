import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
  }

  render() {
    return (
      <Html>
        <Head>
          <title>klack</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon.svg" />

          <audio src="/sounds/click_snap_lo.mp3" id="sound-message" />
          <audio src="/sounds/notification.wav" id="sound-notification" />
          <audio src="/sounds/click_muted_lo.mp3" id="sound-muted_low" />
          <audio src="/sounds/card_drop.mp3" id="widget-open" />
          <audio src="/sounds/card_deal.mp3" id="widget-close" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/Ladda/1.0.0/ladda.min.css"
          />
          <script src="https://luciorubeens.github.io/pictogrify/dist/pictogrify.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
