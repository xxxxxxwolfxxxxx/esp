import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AGB | Elektroservice Pägelow',
  description: 'Allgemeine Geschäftsbedingungen des Elektroservice Pägelow.',
};

export default function AGBPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page" style={{ paddingTop: '200px' }}>
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-slate-900 font-sans">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-10 font-semibold italic">Stand: April 2026</p>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">1. Geltungsbereich</h3>
              <p className="text-slate-700 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über Lieferungen und Leistungen
                zwischen dem Elektroservice Pägelow (nachfolgend „Auftragnehmer“) und seinen Kunden (nachfolgend „Auftraggeber“).
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">2. Angebote und Vertragsschluss</h3>
              <p className="text-slate-700 leading-relaxed">
                Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung
                des Auftragnehmers oder durch den Beginn der Ausführung der Arbeiten zustande.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">3. Leistungen und Preise</h3>
              <p className="text-slate-700 leading-relaxed">
                Der Umfang der geschuldeten Leistungen ergibt sich aus dem jeweiligen Angebot. Alle Preise verstehen sich
                zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">4. Zahlungstermine</h3>
              <p className="text-slate-700 leading-relaxed">
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern keine
                abweichende Vereinbarung getroffen wurde.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">5. Haftung und Gewährleistung</h3>
              <p className="text-slate-700 leading-relaxed">
                Der Auftragnehmer haftet für Mängel nach den gesetzlichen Bestimmungen. Die Gewährleistungsfrist beträgt
                zwei Jahre bei Neuwaren und ein Jahr bei Gebrauchtwaren.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">6. Schlussbestimmungen</h3>
              <p className="text-slate-700 leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Auftragnehmers, sofern
                der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
