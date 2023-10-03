import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
    title: "konnect",
    description: "konnect",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}