"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-section">
          <Image 
            src="/logo.png" 
            alt="Elektroservice Pägelow Logo" 
            width={64} 
            height={64} 
            className="logo-img"
          />
          <div className="logo-text">
            <span className="brand-name">ELEKTROSERVICE</span>
            <span className="brand-sub">PÄGELOW</span>
          </div>
        </Link>
        <ul className="nav-links">
          {isHome ? (
            <>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#services">Leistungen</Link></li>
              <li><Link href="/dguv-v3">DGUV V3</Link></li>
              <li><Link href="#contact" className="nav-cta">Anfrage senden</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Leistungen</Link></li>
              <li><Link href="/dguv-v3">DGUV V3</Link></li>
              <li><Link href="/#contact" className="nav-cta">Anfrage senden</Link></li>
            </>
          )}
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
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: auto;
          width: 48px;
          border-radius: 8px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .brand-name {
          font-weight: 800;
          color: white;
          font-size: 1.25rem;
          letter-spacing: 0.5px;
        }
        .brand-sub {
          color: #fbbf24;
          font-size: 1rem;
          font-weight: 600;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
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
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
