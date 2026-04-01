"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <Image 
          src="/hero.png" 
          alt="Elektroservice Pägelow Hero Background" 
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="chip">Meisterbetrieb seit Generationen</span>
        <h1>Präzision in jeder <span className="text-secondary">Verbindung.</span></h1>
        <p className="hero-subtext">
          Elektroservice Pägelow – Ihr Partner für erstklassige Elektroinstallationen, 
          MSR-Technik und Sicherheit in Banzin und Umgebung.
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn btn-primary">Unsere Leistungen</a>
          <a href="#contact" className="btn btn-outline">Kontakt aufnehmen</a>
        </div>
      </div>
      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          padding-top: 100px;
          max-width: 100%;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(15, 23, 42, 0.9) 30%, rgba(15, 23, 42, 0.4) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 5%;
          color: var(--white);
        }
        .hero h1 {
          font-size: 4.5rem;
          margin-bottom: 24px;
        }
        .text-secondary {
          color: var(--secondary);
        }
        .hero-subtext {
          font-size: 1.25rem;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .hero {
            height: auto;
            min-height: 100vh;
            padding-top: 120px;
            padding-bottom: 60px;
          }
          .hero h1 { font-size: 3rem; }
          .hero-btns { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
