"use client";

import React, { useState } from 'react';

const services = [
  {
    title: "Installation & Planung",
    desc: "Neubau, Altbausanierung und komplexe Industrie-Installationen aus einer Hand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "MSR-Technik",
    desc: "Mess-, Steuerungs- und Regelungstechnik für effiziente Gebäudesteuerung.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "DGUV V3 Prüfungen",
    desc: "Rechtssichere Prüfung Ihrer elektrischen Anlagen und Betriebsmittel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    link: "/dguv-v3",
  },
  {
    title: "Beleuchtungssysteme",
    desc: "Moderne LED-Konzepte für Arbeitsplätze, Hallen und Außenbereiche.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    title: "Baustromservice",
    desc: "Vermietung und Installation von Baustromverteilern für Ihr Bauprojekt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: "Antennen & SAT",
    desc: "Installation und Wartung moderner Kommunikations- und Empfangsanlagen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="section-header">
          <span className="chip">Unsere Kompetenzen</span>
          <h2>Umfassender Service für <span className="accent">jeden Bedarf.</span></h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card ${activeIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="icon-wrap">{s.icon}</div>
              <div className="card-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.link && (
                  <a href={s.link} className="card-link">Mehr erfahren →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: linear-gradient(180deg, #0f172a 0%, #0a1628 100%);
          max-width: 100%;
          padding: 100px 5%;
        }
        .services-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-header h2 {
          color: #ffffff;
          font-size: 2.5rem;
          margin-top: 12px;
        }
        .accent {
          color: #fbbf24;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .service-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .service-card.active {
          background: rgba(251, 191, 36, 0.07);
          border-color: rgba(251, 191, 36, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        .icon-wrap {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: rgba(251, 191, 36, 0.12);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fbbf24;
          transition: background 0.3s ease;
        }
        .icon-wrap svg {
          width: 24px;
          height: 24px;
        }
        .service-card.active .icon-wrap {
          background: rgba(251, 191, 36, 0.22);
        }
        .card-content h3 {
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .card-content p {
          color: #94a3b8;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .card-link {
          display: inline-block;
          margin-top: 12px;
          color: #fbbf24;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
        }
        .card-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .section-header h2 {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
