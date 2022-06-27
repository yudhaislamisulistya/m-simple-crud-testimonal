import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" data-theme="light">
            <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            </Head>
            <body className="col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-12">
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}