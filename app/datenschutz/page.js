import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutz | Elektroservice Pägelow',
  description: 'Datenschutzerklärung des Elektroservice Pägelow.',
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-slate-900 font-sans">Datenschutzerklärung</h1>
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold mb-2 text-slate-700">Allgemeine Hinweise</h3>
              <p className="text-slate-700 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                aufgeführten Datenschutzerklärung.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">2. Datenerfassung auf unserer Website</h2>
              <h3 className="text-xl font-semibold mb-2 text-slate-700">Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
                Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver
                und sicherer zu machen.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-700">Kontaktformular</h3>
              <p className="text-slate-700 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">3. Ihre Rechte</h2>
              <p className="text-slate-700 leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung
                dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
                unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">4. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-slate-700 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
                Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und
                an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
