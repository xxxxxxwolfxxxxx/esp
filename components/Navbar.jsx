"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = isHome ? [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Leistungen' },
    { href: '/dguv-v3', label: 'DGUV V3' },
    { href: '/stellenanzeige', label: 'Jobs' },
    { href: '#contact', label: 'Anfrage senden', cta: true },
  ] : [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Leistungen' },
    { href: '/dguv-v3', label: 'DGUV V3' },
    { href: '/stellenanzeige', label: 'Jobs' },
    { href: '/#contact', label: 'Anfrage senden', cta: true },
  ];

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-section">
          <span className="logo-img-wrap">
            <Image
              src="/logo.png"
              alt="Elektroservice Pägelow Logo"
              width={150}
              height={100}
              className="logo-img"
            />
          </span>
          <div className="logo-text">
            <span className="brand-name">ELEKTROSERVICE</span>
            <span className="brand-sub">PÄGELOW</span>
          </div>
        </Link>

        {/* Desktop-Links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={l.cta ? 'nav-cta' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger-Button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile-Menü */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={l.cta ? 'nav-cta' : ''} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 12px 5%;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: #0f172a;
          backdrop-filter: blur(10px);
          padding: 8px 5%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-img-wrap {
          display: flex;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
        }
        .logo-img {
          width: 150px !important;
          height: auto !important;
          border-radius: 8px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          white-space: nowrap;
        }
        .brand-name {
          font-weight: 800;
          color: white;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
        }
        .brand-sub {
          color: #fbbf24;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
          list-style: none;
        }
        :global(.nav-links a) {
          color: white;
          font-weight: 600;
          font-size: 0.9375rem;
        }
        :global(.nav-links a:hover) {
          color: #fbbf24;
        }
        :global(.nav-links .nav-cta) {
          background: #fbbf24;
          color: #0f172a !important;
          padding: 10px 20px;
          border-radius: 8px;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
        }
        .hamburger span {
          display: block;
          width: 26px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile-Menü */
        .mobile-menu {
          display: none;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
          background: #0f172a;
        }
        .mobile-menu.open {
          max-height: 400px;
        }
        .mobile-menu ul {
          list-style: none;
          padding: 16px 5% 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        :global(.mobile-menu a) {
          display: block;
          padding: 12px 0;
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        :global(.mobile-menu a:hover) {
          color: #fbbf24;
        }
        :global(.mobile-menu .nav-cta) {
          background: #fbbf24;
          color: #0f172a !important;
          padding: 12px 20px;
          border-radius: 8px;
          text-align: center;
          margin-top: 8px;
          border-bottom: none !important;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
          .logo-text { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
