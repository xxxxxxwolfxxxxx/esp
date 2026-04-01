import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | Elektroservice Pägelow',
  description: 'Rechtliche Informationen zum Elektroservice Pägelow.',
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page" style={{ paddingTop: '200px' }}>
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Impressum</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6 font-semibold">Angaben gemäß § 5 TMG</p>
            
            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Betreiber der Website:</h3>
              <p className="text-slate-700 leading-relaxed">
                Elektroservice Pägelow<br />
                Inhaber: Torsten Pägelow<br />
                Vellahner Weg 6<br />
                19260 Banzin
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Kontakt:</h3>
              <p className="text-slate-700 leading-relaxed">
                Telefon: +49 (0)38848 21163<br />
                Mobil: +49 (0)172 314 86 34<br />
                E-Mail: esp@banzin.de
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Steuernummer:</h3>
              <p className="text-slate-700 leading-relaxed">
                087/255/00840<br />
                Finanzamt Hagenow
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Verantwortlicher gemäß § 55 Abs. 2 RStV:</h3>
              <p className="text-slate-700 leading-relaxed">Torsten Pägelow, Vellahner Weg 6, 19260 Banzin</p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Streitschlichtung:</h3>
              <p className="text-slate-700 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" className="text-sky-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
