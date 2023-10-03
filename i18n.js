import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const path = require('path');
const fs = require('fs');
// import Backend from 'i18next-chained-backend';
// import HttpApi from 'i18next-http-backend';
// import FsBackend from 'i18next-fs-backend';
// import resourcesToBackend from 'i18next-resources-to-backend'


import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const resources = {
  en: {
    translation: TranslationEn
  },
  ar: {
    translation: TranslationAR
  }
};


i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(LanguageDetector) //added
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'website',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   backends: [resourcesToBackend((language, namespace) => import(`./public/locales/${language}/${namespace}.json`))],
    //   // loadPath: typeof window !== 'undefined' ? '/locales/{{lng}}/{{ns}}.json' : path.resolve('./public/locales/{{lng}}/{{ns}}.json')
    // }
  });


export default i18n;


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

// // the translations
// // (tip move them in a JSON file and import them,
// // or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// import TranslationEn  from "./api/en.json";
// import TranslationAR  from "./api/ar.json";

// const resources = {
//   en: {
//     translation: TranslationEn
//   },
//   ar: {
//     translation: TranslationAR
//   }
// };

// i18n
//   .use(LanguageDetector) //added
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: localStorage.getItem("lng")||"en",
//     fallbackLng: 'en',
//     defaultNS: 'website',
//     debug: true,
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     react: {
//         useSuspense: false
//     }
//   });

//   export default i18n;









// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// const fallbackLng = ['en'];
// const availableLanguages =['en' , 'ar'];


// const options = {

//   order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],


//   lookupQuerystring: 'lng',
//   lookupCookie: 'i18next',
//   lookupLocalStorage: 'i18nextLng',
//   lookupFromPathIndex: 0,
//   lookupFromSubdomainIndex: 0,


//   caches: ['localStorage', 'cookie'],
//   excludeCacheFor: ['cimode'], 

//   cookieMinutes: 10,
//   cookieDomain: 'myDomain',


//   htmlTag: document.documentElement,


//   checkWhitelist: true
// }

// i18n
// .use(Backend) 
// .use(LanguageDetector)

// .use(initReactI18next)

// .init({
//   fallbackLng,
//   debug: true,
//   whitelist: availableLanguages,
//   detection: options,

//   interpolation: {
//     escapeValue: false
//   },
// });



// export default i18n;