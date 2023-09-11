"use client";
import { useEffect } from "react";
import { Header, Footer }  from "@/app/components/index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
