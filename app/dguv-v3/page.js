import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'DGUV V3 Prüfungen | Elektroservice Pägelow',
  description: 'Fachgerechte DGUV V3 Prüfungen für ortsveränderliche Geräte und elektrische Anlagen in Banzin und Umgebung.',
};

export default function DguvPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page" style={{ paddingTop: '200px' }}>
        <div className="container mx-auto px-5 max-w-4xl">
          <span className="chip">Sicherheit & Compliance</span>
          <h1 className="text-4xl font-extrabold mb-8 text-slate-900">DGUV V3 Prüfungen</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Die DGUV Vorschrift 3 (ehemals BGV A3) ist eine gesetzliche Unfallverhütungsvorschrift für die Sicherheit 
              elektrischer Anlagen und Betriebsmittel. Als Meisterbetrieb unterstützen wir Unternehmen und 
              öffentliche Einrichtungen bei der rechtssicheren Umsetzung dieser Prüfungen.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Ortsveränderliche Geräte</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Kaffeemaschinen & Wasserkocher</li>
                  <li>• PCs, Monitore & Drucker</li>
                  <li>• Werkzeuge & Kabeltrommeln</li>
                  <li>• Verlängerungskabel</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Ortsfeste Anlagen</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Unterverteilungen</li>
                  <li>• Elektrische Gebäudeinstallation</li>
                  <li>• Fest installierte Maschinen</li>
                  <li>• Blitzschutzanlagen</li>
                </ul>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Warum ist die Prüfung wichtig?</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h4 className="font-bold">Haftungsschutz</h4>
                    <p className="text-slate-600">Im Schadensfall fordern Versicherungen den Nachweis einer ordnungsgemäßen Prüfung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">👷</span>
                  <div>
                    <h4 className="font-bold">Mitarbeiterschutz</h4>
                    <p className="text-slate-600">Prävention von Unfällen durch defekte elektrische Betriebsmittel.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <h4 className="font-bold">Gesetzliche Pflicht</h4>
                    <p className="text-slate-600">Unternehmer sind gesetzlich verpflichtet, die Sicherheit ihrer elektrischen Anlagen zu gewährleisten.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
          
          <div className="bg-[#0f172a] text-white p-10 rounded-3xl text-center shadow-2xl mt-16 relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Prüfung fällig?</h2>
            <p className="mb-8 text-white font-semibold text-lg">Kontaktieren Sie uns für ein unverbindliches Angebot zur DGUV V3 Prüfung Ihrer Betriebsmittel.</p>
            <Link href="/#contact" className="btn btn-primary inline-block hover:scale-105 transition-transform">
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
