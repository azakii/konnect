'use client';
import Link from "next/link";
import Image from "next/image";
import konnect from "@/public/assets/images/footerLogo.svg";

import { useRouter } from 'next/navigation'

import { useState, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useTranslations } from 'next-intl';

const Header = () => {
  const router = useRouter();
  const currentLanguage = router.locale;
  const { locales, locale: currentLocale } = router;
  // this state to switch the dropdown
  const [lang, setLang] = useState(currentLocale);

  const t = useTranslations('Index');

  console.log(locales);
  const handleChangeLanguage = (e) => {
      console.log(e)
      setLang(e)
      const selectedLocale = e;

      // i18n.changeLanguage(selectedLocale);
      router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };
  useEffect(() => {
      if (lang === "en") {
          document.body.dir = "ltr";
      } else if (lang === "ar") {
          document.body.dir = "rtl";
      }

  });


  const navLinks = [
    {
      path: "Home",
      display:  `${t("home")}`
    },
    {
      path: "how-it-works",
      display:  `${t("how_it_works")}`
    },
    {
      path: "kreatoe-portal",
      display:  `${t("kreatoe_portal")}`
    },
    {
      path: "guest",
      display:  `${t("guest")}`
    }
  ];
  
  return (
    <>
      <header className="konnectHeader fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
          <Link href="/" className="navbar-brand">
                  <Image
                    src={konnect}
                    className=""
                    width={100}
                    alt="..."
                  />
          </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav">
                <form className="d-flex me-auto pl-5 mb-2 mb-lg-0">
                  <input className="form-control mr-auto mr-sm-2" type="search" placeholder="Search by Destination, Kreator...." aria-label="Search" />
                </form>
              <ul className="navbar-nav">
                {navLinks.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link href={item.path} className={`nav-link`}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
                {/* <select className="select_lan mx-3" onChange={(e) => {
                      handleChangeLng(e.target.value);
                      setCurrentLng(e.target.value);
                 }}>
                  <option value="en">En</option>
                  <option value="ar">عربي</option>
                </select> */}
                <Nav className="me-2">
                <NavDropdown title={lang == "en" ? "EN" : "AR"} id="basic-nav-dropdown2">
                    <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
                        <Image src={UkFlag} width={24} height={13} style={{ marginRight: "10px", marginLeft: "10px" }} alt="" />
                        EN
                    </NavDropdown.Item >
                    <NavDropdown.Item onClick={() => handleChangeLanguage("ar")}>
                        <Image src={saudiArabia} width={24} height={24} style={{ marginRight: "10px", marginLeft: "10px" }} alt="" />
                        AR
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
