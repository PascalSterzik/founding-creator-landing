'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/FadeIn';

const ApplicationForm = () => {
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

      // Use URLSearchParams (form-urlencoded) instead of JSON
      // With mode: 'no-cors', the browser restricts Content-Type to form-urlencoded,
      // so JSON bodies get stripped. URLSearchParams works correctly.
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });
      params.append('timestamp', new Date().toISOString());

      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      // With no-cors mode, we can't read the response, so we assume success
      // Redirect to thank-you page
      window.location.href = '/danke';
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

              {/* Submit Button - 3D CTA Style */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-4 rounded-full text-white font-bold text-base overflow-hidden cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(180deg, #d4a099 0%, var(--accent) 40%, #b5736a 100%)',
                  boxShadow: '0 8px 24px rgba(201, 140, 131, 0.35), 0 3px 6px rgba(201, 140, 131, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  letterSpacing: '0.5px',
                }}
                whileHover={!isSubmitting ? {
                  scale: 1.02,
                  boxShadow: '0 12px 36px rgba(201, 140, 131, 0.45), 0 4px 8px rgba(201, 140, 131, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -2px 3px rgba(0, 0, 0, 0.15)',
                } : {}}
                whileTap={!isSubmitting ? {
                  scale: 0.98,
                  boxShadow: '0 2px 8px rgba(201, 140, 131, 0.3), inset 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 1px rgba(255, 255, 255, 0.1)',
                } : {}}
              >
                <span className="absolute inset-x-0 top-0 h-[45%] rounded-t-full pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, transparent 100%)' }} />
                <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)' }} animate={{ x: ['100%', '-100%'] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
                <span className="relative" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>
                  {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden'}
                </span>
              </motion.button>
            </form>
          </FadeIn>
      </div>
    </section>
  );
};

export default ApplicationForm;
