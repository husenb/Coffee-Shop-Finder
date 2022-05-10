import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document{
    render()
    {
            return (
                <Html>
                    <Head>
                        <link rel="preload" href="/fonts/IBMPlexSerif-Bold.ttf" crossOrigin="anonymous"></link>
                        <link rel="preload" href="/fonts/IBMPlexSerif-Medium.ttf" crossOrigin="anonymous"></link>
                        <link rel="preload" href="/fonts/IBMPlexSerif-Light.ttf" crossOrigin="anonymous"></link>
                        <link rel="preload" href="/fonts/IBMPlexSerif-Regular.ttf" crossOrigin="anonymous"></link>
                    </Head>
                    <body>
                        <Main></Main>
                        <NextScript></NextScript>
                    </body>

                </Html>
            );
    }
}
export default MyDocument;