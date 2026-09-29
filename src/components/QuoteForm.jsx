import React, { useState } from 'react';
import { Send, CheckCircle, Calculator, PhoneCall } from 'lucide-react';
import { companyInfo, servicesData } from '../data/signageData';

export default function QuoteForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    signType: preselectedService || 'LED Signage & Backlit Letters',
    width: '',
    height: '',
    location: 'Patna',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp message
    const msg = `*New Signage Quotation Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service / Type:* ${formData.signType}%0A` +
      `*Dimensions:* ${formData.width || 'Not specified'} ft x ${formData.height || 'Not specified'} ft%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Details:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/919905279579?text=${msg}`;
    
    // Redirect after slight delay so user sees confirmation
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
        <Calculator className="w-4 h-4 text-brand-gold" />
        <span>Instant Quotation & Free Site Visit</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        Get an Estimate for Your Sign Board
      </h3>
      <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
        Fill out your requirements below. Our fabrication engineers in Patna will inspect your specs and provide an exact quote within 30 minutes.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center space-y-3">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
          <h4 className="text-lg font-bold text-slate-900">Inquiry Received!</h4>
          <p className="text-xs text-slate-600">
            Redirecting to WhatsApp to send your specifications directly to our engineering desk...
          </p>
          <a
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold mt-2 shadow-md shadow-emerald-600/20"
          >
            Open WhatsApp Now
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Mobile Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98XXXXXXXX"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Signage Type / Service</label>
              <select
                name="signType"
                value={formData.signType}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Custom Project / Other">Custom Project / Other</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Location in Patna / Bihar</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Boring Road, Patna"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Approx. Width (ft)</label>
              <input
                type="number"
                name="width"
                step="0.5"
                value={formData.width}
                onChange={handleChange}
                placeholder="e.g. 12"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Approx. Height (ft)</label>
              <input
                type="number"
                name="height"
                step="0.5"
                value={formData.height}
                onChange={handleChange}
                placeholder="e.g. 4"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">Project Notes (Optional)</label>
            <textarea
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about your brand name, preferred colors, lighting style..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm transition-all shadow-lg shadow-brand-red/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Submit for Instant WhatsApp Estimate</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <PhoneCall className="w-3.5 h-3.5 text-brand-gold" />
            <span>Or call us immediately at <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-slate-900 hover:text-brand-red hover:underline font-bold">{companyInfo.phoneDisplay}</a></span>
          </div>
        </form>
      )}
    </div>
  );
}
