"use client";

import React, { useState } from 'react';

const services = [
  {
    title: "Installation & Planung",
    desc: "Neubau, Altbausanierung und komplexe Industrie-Installationen aus einer Hand.",
    icon: "⚡"
  },
  {
    title: "MSR-Technik",
    desc: "Mess-, Steuerungs- und Regelungstechnik für effiziente Gebäudesteuerung.",
    icon: "⚙️"
  },
  {
    title: "DGUV V3 Prüfungen",
    desc: "Rechtssichere Prüfung Ihrer elektrischen Anlagen und Betriebsmittel.",
    icon: "🛡️",
    link: "/dguv-v3"
  },
  {
    title: "Beleuchtungssysteme",
    desc: "Moderne LED-Konzepte für Arbeitsplätze, Hallen und Außenbereiche.",
    icon: "💡"
  },
  {
    title: "Baustromservice",
    desc: "Vermietung und Installation von Baustromverteilern für Ihr Bauprojekt.",
    icon: "🏗️"
  },
  {
    title: "Antennen & SAT",
    desc: "Installation und Wartung moderner Kommunikations- und Empfangsanlagen.",
    icon: "📡"
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="chip">Unsere Kompetenzen</span>
        <h2>Umfassender Service für <span className="text-primary-accent">jeden Bedarf.</span></h2>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={i}
            className={`service-card ${activeIndex === i ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <div className="desc-wrapper">
              <p>{s.desc}</p>
              {s.link && (
                <a href={s.link} className="card-link">Mehr erfahren →</a>
              )}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .services {
          background-color: var(--white);
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .text-primary-accent {
          color: var(--primary);
          opacity: 0.8;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .service-card {
          padding: 40px;
          background: #f8fafc;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          cursor: default;
          overflow: hidden;
        }
        .service-card.active {
          background: var(--white);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
          border-color: var(--secondary);
        }
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .service-card h3 {
          margin-bottom: 0;
          color: var(--primary);
          transition: margin-bottom 0.3s ease;
        }
        .service-card.active h3 {
          margin-bottom: 14px;
        }
        .desc-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .service-card.active .desc-wrapper {
          max-height: 200px;
          opacity: 1;
        }
        .desc-wrapper p {
          color: var(--text-muted);
        }
        .card-link {
          display: inline-block;
          margin-top: 12px;
          color: var(--secondary);
          font-weight: 700;
          text-decoration: none;
        }
        .card-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          /* Auf Mobile immer offen */
          .service-card .desc-wrapper {
            max-height: 200px;
            opacity: 1;
          }
          .service-card h3 {
            margin-bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
