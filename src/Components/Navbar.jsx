"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="nav-menu">
      <div className="left">
        <Link href="/">
          <Image
            className="logo"
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="center">
        <ul>
          {links.map((link) => (
            <li
              key={link.name}
              className={link.href === activeLink ? "active-link" : ""}
            >
              <Link
                className={
                  link.href === activeLink ? "text-blue" : "text-black"
                }
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <Link href="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
