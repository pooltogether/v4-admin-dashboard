import AppConfig from '@src/config/app';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class AppDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
