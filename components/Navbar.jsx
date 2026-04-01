"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#services">Leistungen</Link></li>
          <li><Link href="/#dguv">DGUV V3</Link></li>
          <li><Link href="/#contact" className="nav-cta">Anfrage senden</Link></li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 5%;
          z-index: 1000;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          padding: 12px 5%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
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
          width: 64px;
          border-radius: 10px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .brand-name {
          font-weight: 800;
          color: var(--white);
          font-size: 1.5rem;
          letter-spacing: 1px;
        }
        .brand-sub {
          color: var(--secondary);
          font-size: 1rem;
          font-weight: 600;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .nav-links :global(a) {
          color: var(--white);
          font-weight: 600;
          font-size: 0.9375rem;
        }
        .nav-links :global(a):hover {
          color: var(--secondary);
        }
        .nav-links :global(.nav-cta) {
          background: var(--secondary);
          color: var(--primary) !important;
          padding: 10px 20px;
          border-radius: 8px;
        }
        .nav-links :global(.nav-cta):hover {
          background: var(--white);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
