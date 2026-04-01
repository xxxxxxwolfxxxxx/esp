"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Elektroservice Pägelow. Alle Rechte vorbehalten.</p>
        <div className="footer-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/agb">AGB</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 40px 5%;
          background: #0a1120;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        .footer-links :global(a) {
          color: #f8fafc;
          font-weight: 500;
        }
        .footer-links :global(a:hover) {
          color: #fbbf24;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .footer-container { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
