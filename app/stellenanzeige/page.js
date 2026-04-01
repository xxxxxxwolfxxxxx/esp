import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Stellenanzeige – Elektroinstallateur | Elektroservice Pägelow',
  description: 'Wir suchen Verstärkung: Elektroinstallateur zur Festanstellung bei Elektroservice Pägelow in Banzin.',
};

export default function StellenanzeigePage() {
  return (
    <>
      <Navbar />
      <div className="legal-page" style={{ paddingTop: '160px' }}>
        <div className="container mx-auto px-5 max-w-3xl">

          <span className="chip">Wir stellen ein</span>
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900">Elektroinstallateur</h1>
          <p className="text-lg text-slate-500 mb-12">Festanstellung · Banzin und Umgebung</p>

          <div className="grid gap-8 mb-12">

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold mb-4 text-slate-800">Deine Aufgaben</h2>
              <ul className="space-y-2 text-slate-600">
                <li>⚡ Elektroinstallationen im Neu- und Altbau</li>
                <li>⚡ Wartung und Instandhaltung elektrischer Anlagen</li>
                <li>⚡ DGUV V3 Prüfungen an Betriebsmitteln und Anlagen</li>
                <li>⚡ MSR-Technik und Gebäudesteuerung</li>
                <li>⚡ Baustromversorgung und Beleuchtungsinstallationen</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold mb-4 text-slate-800">Was du mitbringst</h2>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Abgeschlossene Ausbildung als Elektroinstallateur oder Elektroniker für Energie- und Gebäudetechnik</li>
                <li>✓ Selbstständige und zuverlässige Arbeitsweise</li>
                <li>✓ Führerschein Klasse B</li>
                <li>✓ Teamgeist und Freude an der Arbeit</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-xl font-bold mb-4 text-slate-800">Was wir bieten</h2>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Unbefristete Festanstellung in einem familiären Meisterbetrieb</li>
                <li>✓ Abwechslungsreiche Aufgaben in der Region</li>
                <li>✓ Flache Hierarchien und kurze Entscheidungswege</li>
                <li>✓ Faire Vergütung</li>
              </ul>
            </div>

          </div>

          <div className="bg-[#0f172a] text-white p-10 rounded-3xl text-center shadow-2xl">
            <h2 className="text-2xl font-extrabold mb-4 text-white">Interesse?</h2>
            <p className="mb-2 text-white text-lg">Ruf uns einfach an oder schreib eine E-Mail – kein langes Bewerbungsschreiben nötig.</p>
            <p className="mb-8 text-slate-300">Wir freuen uns auf dich.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+493884821163" className="btn btn-primary inline-block">
                📞 038848 21163
              </a>
              <a href="mailto:esp@banzin.de" className="btn btn-outline inline-block">
                ✉ esp@banzin.de
              </a>
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Oder nutze unser <Link href="/#contact" className="underline hover:text-slate-600">Kontaktformular</Link>.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}
