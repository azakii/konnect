'use client';
import Link from "next/link";
import Image from "next/image";
import konnect from "../../../../public/assets/images/Logoheader.png";
import { useRouter } from 'next/navigation'

const navLinks = [
  {
    path: "Home",
    display: "Home",
  },
  {
    path: "how-it-works",
    display: "How it works",
  },
  {
    path: "kreatoe-portal",
    display: "Kreatoe Portal",
  },
  {
    path: "guest",
    display: "Guest",
  }
];

const Header = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  
  return (
    <>
      <header className="konnectHeader fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
          <Link href="/homepage" className="navbar-brand">
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
                    <Link href={item.path} className={`nav-link ${currentRoute === item.path ? 'active' : 'xxx'}`}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
