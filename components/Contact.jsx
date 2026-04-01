"use client";

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <span className="chip">Kontakt</span>
          <h2>Lassen Sie uns über Ihr <span className="text-secondary">Projekt sprechen.</span></h2>
          <p>Haben Sie Fragen oder benötigen Sie ein unverbindliches Angebot? Wir sind für Sie da.</p>
          
          <div className="info-items">
            <div className="info-item">
              <strong>Adresse:</strong>
              <p>Vellahner Weg 6, 19260 Banzin</p>
            </div>
            <div className="info-item">
              <strong>Telefon:</strong>
              <p>+49 (0)38848 21163</p>
            </div>
            <div className="info-item">
              <strong>Mobil:</strong>
              <p>+49 (0)172 314 86 34</p>
            </div>
            <div className="info-item">
              <strong>E-Mail:</strong>
              <p>esp@banzin.de</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form glass">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Ihr Name" />
          </div>
          <div className="form-group">
            <label>E-Mail</label>
            <input type="email" placeholder="ihre@mail.de" />
          </div>
          <div className="form-group">
            <label>Nachricht</label>
            <textarea placeholder="Wie können wir helfen?" rows={5}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Anfrage senden</button>
        </form>
      </div>
      
      <style jsx>{`
        .contact-section {
          background-color: var(--primary);
          color: var(--white);
          max-width: 100%;
          padding: 100px 5%;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .contact-info h2 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .info-items {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .info-item strong {
          display: block;
          color: var(--secondary);
          margin-bottom: 4px;
        }
        .contact-form {
          padding: 40px;
          border-radius: 24px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
          color: var(--white);
          outline: none;
          transition: var(--transition);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--secondary);
          background: rgba(255,255,255,0.1);
        }
        @media (max-width: 968px) {
          .contact-container { grid-template-columns: 1fr; gap: 40px; }
          .info-items { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
