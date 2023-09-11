import 'bootstrap/dist/css/bootstrap.css'
import styles from "./global.scss";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: 'Konnect',
  description: 'Konnect Konnect',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="body" suppressHydrationWarning={false}>{children}</body>

      {/* <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script> */}
      {/* <Script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></Script> */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js" integrity="sha512-fHY2UiQlipUq0dEabSM4s+phmn+bcxSYzXP4vAXItBvBHU7zAM/mkhCZjtBEIJexhOMzZbgFlPLuErlJF2b+0g==" crossOrigin="anonymous" />
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.1/owl.carousel.min.js"></Script> */}
      
    </html>
  )
}