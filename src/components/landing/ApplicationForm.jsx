'use client';

import { useState } from 'react';
import FadeIn from '@/components/motion/FadeIn';
import { CheckCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    hauptplattform: 'instagram',
    reichweite: 'micro',
    nische: '',
    erfahrung: 'none',
    herausforderung: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to Google Sheets via Apps Script
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwlylrHHRe50_xjbRcYlqRYVbMzCd-ek99egttYN8Ok2-onhNyj50rZrg3ECPU6d79R/exec';

      const res = await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      // The Apps Script will handle validation server-side
      setSubmitted(true);
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        instagram: '',
        tiktok: '',
        youtube: '',
        hauptplattform: 'instagram',
        reichweite: 'micro',
        nische: '',
        erfahrung: 'none',
        herausforderung: '',
      });
    } catch (err) {
      setError('Verbindungsfehler. Bitte überprüfe deine Internetverbindung und versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="bewerbung" className="py-16 md:py-24 px-4 md:px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">Bewerbung</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Bewirb dich als{' '}
              <span className="italic text-[var(--accent)]">Founding Creator</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Sag uns ein wenig über dich. Der Rest klären wir im Call.
            </p>
          </div>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="bg-white rounded-[var(--radius-lg)] shadow-lg p-8 md:p-12 text-center border-2 border-[var(--accent)]">
              <div className="mb-4"><CheckCircle size={48} style={{ color: 'var(--accent)' }} /></div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
                Vielen Dank für deine Bewerbung!
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Wir schauen uns deine Infos an und melden uns in Kürze mit den Details für deinen
                30-Minuten-Call zurück.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Bist du noch hier? Schau mal in die Über-Sektion.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[var(--radius-lg)] shadow-lg p-8 md:p-10 border border-[var(--border)]"
            >
              {/* Vorname & Nachname */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="vorname" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    Vorname <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                    placeholder="Dein Vorname"
                  />
                </div>
                <div>
                  <label htmlFor="nachname" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    Nachname <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="nachname"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                    placeholder="Dein Nachname"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--text)] mb-2">
                  E-Mail <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                  placeholder="deine@email.de"
                />
              </div>

              {/* Instagram & TikTok */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="instagram" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                    placeholder="@deinhandle"
                  />
                </div>
                <div>
                  <label htmlFor="tiktok" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    TikTok Handle
                  </label>
                  <input
                    type="text"
                    id="tiktok"
                    name="tiktok"
                    value={formData.tiktok}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                    placeholder="@deinhandle"
                  />
                </div>
              </div>

              {/* YouTube */}
              <div className="mb-2">
                <label htmlFor="youtube" className="block text-sm font-semibold text-[var(--text)] mb-2">
                  YouTube Kanal
                </label>
                <input
                  type="text"
                  id="youtube"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                  placeholder="Dein YouTube-Kanal"
                />
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Nicht auf allen Plattformen aktiv? Einfach leer lassen.
              </p>

              {/* Hauptplattform & Reichweite */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="hauptplattform" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    Hauptplattform
                  </label>
                  <select
                    id="hauptplattform"
                    name="hauptplattform"
                    value={formData.hauptplattform}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors bg-white"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="youtube">YouTube</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="reichweite" className="block text-sm font-semibold text-[var(--text)] mb-2">
                    Reichweite
                  </label>
                  <select
                    id="reichweite"
                    name="reichweite"
                    value={formData.reichweite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors bg-white"
                  >
                    <option value="micro">Micro (1k-10k)</option>
                    <option value="small">Small (10k-100k)</option>
                    <option value="medium">Medium (100k-1M)</option>
                    <option value="large">Large (1M+)</option>
                  </select>
                </div>
              </div>

              {/* Nische */}
              <div className="mb-6">
                <label htmlFor="nische" className="block text-sm font-semibold text-[var(--text)] mb-2">
                  Creator Nische
                </label>
                <input
                  type="text"
                  id="nische"
                  name="nische"
                  value={formData.nische}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors"
                  placeholder="z.B. Fitness, Food, Fashion, Bildung..."
                />
              </div>

              {/* Erfahrung mit Brand Deals */}
              <div className="mb-6">
                <label htmlFor="erfahrung" className="block text-sm font-semibold text-[var(--text)] mb-2">
                  Erfahrung mit bezahlten Brand Deals
                </label>
                <select
                  id="erfahrung"
                  name="erfahrung"
                  value={formData.erfahrung}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors bg-white"
                >
                  <option value="none">Keine Erfahrung</option>
                  <option value="one-two">1-2 Deals</option>
                  <option value="three-five">3-5 Deals</option>
                  <option value="regular">Regelmäßig (6+)</option>
                </select>
              </div>

              {/* Herausforderung */}
              <div className="mb-8">
                <label htmlFor="herausforderung" className="block text-sm font-semibold text-[var(--text)] mb-2">
                  Deine größte Herausforderung bei Brand Deals
                </label>
                <textarea
                  id="herausforderung"
                  name="herausforderung"
                  value={formData.herausforderung}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(201,140,131,0.2)] transition-colors resize-none"
                  placeholder="Was ist deine größte Herausforderung, wenn es um Brand Deals geht?"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-4 rounded-[var(--radius-sm)] bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hover:from-[var(--accent-hover)] hover:to-[var(--cocoa)] text-white font-bold rounded-[var(--radius-md)] transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden'}
              </button>

              <p className="text-xs text-[var(--text-muted)] text-center mt-6">
                Kostenlos. Unverbindlich. 30-Minuten-Call nach der Bewerbung.
              </p>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ApplicationForm;
