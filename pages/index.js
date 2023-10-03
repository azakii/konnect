// export {default as ExploreMe} from './explore/page';
import React, { useEffect } from "react";

import Homepage from './homepage/page'
import AOS from "aos";
import "aos/dist/aos.css";
// import './i18n'


const parseJSON = (resp) => (resp.json ? resp.json() : resp);
const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then((respJSON) => {
        throw respJSON;
    });
};
export const getServerSideProps = async (context) => {
    
    const serviceId = context.query.serviceid;
    try {
        const locale = context.locale
        const messages = (await import(`../locales/${locale}.json`)).default;
        return { props: { messages } };
    } catch (error) {
        console.log(error);
        return { props: {} };
    }
};
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
  }, []);
  return (
    <main>    
        <Homepage />
    </main>
  )
}