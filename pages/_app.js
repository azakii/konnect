import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
// import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { NextIntlClientProvider } from 'next-intl';

const options = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: "30px",
    transition: transitions.FADE,
};

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
    useEffect(() => {
        document.body.classList.add("body");
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    let messages;
        try {
            messages = (import(`../locales/${locale}.json`)).default;
        } catch (error) {
            return <>404</>;
        }
        

    return (
        <NextIntlClientProvider locale={locale} messages={pageProps.messages}>
            <SessionProvider session={session}>
                <AlertProvider template={AlertTemplate} {...options}>
                        <Component {...pageProps} />
                </AlertProvider>
            </SessionProvider>
        </NextIntlClientProvider>
    );
}