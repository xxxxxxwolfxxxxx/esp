"use client";

import React from 'react';

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
    icon: "🛡️"
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
  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="chip">Unsere Kompetenzen</span>
        <h2>Umfassender Service für <span className="text-primary-accent">jeden Bedarf.</span></h2>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {s.title === "DGUV V3 Prüfungen" && (
              <a href="/dguv-v3" className="text-secondary font-bold mt-4 inline-block hover:underline">
                Mehr erfahren →
              </a>
            )}
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
          transition: var(--transition);
        }
        .service-card:hover {
          background: var(--white);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
          border-color: var(--secondary);
        }
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .service-card h3 {
          margin-bottom: 16px;
          color: var(--primary);
        }
        .service-card p {
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
