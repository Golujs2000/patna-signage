import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { companyInfo } from '../data/signageData';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

export default function ContactPage() {
  const localities = [
    { name: 'Boring Road', pin: '800001' },
    { name: 'Bailey Road', pin: '800014' },
    { name: 'Fraser Road', pin: '800001' },
    { name: 'Kankarbagh', pin: '800020' },
    { name: 'Danapur Cantt', pin: '801503' },
    { name: 'Patliputra Colony', pin: '800013' },
    { name: 'Exhibition Road', pin: '800001' },
    { name: 'Anisabad', pin: '800002' },
    { name: 'Rajendra Nagar', pin: '800016' },
    { name: 'Saguna More', pin: '801503' },
    { name: 'Ashiana Nagar', pin: '800025' },
    { name: 'Transport Nagar / Zero Mile', pin: '800007' }
  ];

  const nearbyDistricts = ['Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Begusarai', 'Purnea'];

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://patnasignage.com/contact#webpage",
        "url": "https://patnasignage.com/contact",
        "name": "Contact Patna Signage - Factory Workshop Address & Phone",
        "description": "Contact Patna Signage. Office & workshop located Near Canara Bank, B1, Capital Tower, Fraser Rd, Patna. Call +91 99052 79579 for free laser site survey.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://patnasignage.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://patnasignage.com/contact" }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "PATNA SIGNAGE",
        "telephone": "+919905279579",
        "email": "patnasignage786@gmail.com",
        "hasMap": "https://www.google.com/maps/place/PATNA+SIGNAGE/@25.6073388,85.1362679,17z",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Canara Bank, B1, Capital Tower, Fraser Rd",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.6073388,
          "longitude": 85.1362679
        },
        "openingHours": "Mo-Sa 09:00-20:30"
      }
    ]
  };

  return (
    <div className="space-y-16 pb-20">
      <SEO
        title="Contact Patna Signage | Workshop Address, Phone & Free Site Survey"
        description="Get in touch with Patna Signage. Office located Near Canara Bank, B1, Capital Tower, Fraser Rd, Patna. Call +91 99052 79579 for free laser site survey."
        canonicalUrl="/contact"
        keywords="contact patna signage, sign board shop patna, signage phone number patna, sign board manufacturer address patna, fraser road sign board"
        schema={contactSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Connect Directly With Our Patna Workshop</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Patna Signage
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Need an instant quotation, physical sample demonstration, or free laser site measurement anywhere in Patna? Reach out directly to our engineering desk.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Workshop Info & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Factory & Head Office Information
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 border border-brand-red/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Workshop Address:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {companyInfo.address}
                    </span>
                    <span className="text-[11px] text-brand-red font-semibold mt-1 block">
                      (Direct factory floor visits welcome during business hours)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0 border border-amber-200/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Direct Phone / Hotline:</strong>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                      className="text-slate-900 hover:text-brand-red font-extrabold text-sm block mt-0.5"
                    >
                      {companyInfo.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-500">Available 9:00 AM to 8:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-200/50">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Instant WhatsApp Desk:</strong>
                    <a
                      href={companyInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline font-bold block mt-0.5"
                    >
                      Chat with Signage Engineer on WhatsApp
                    </a>
                    <span className="text-[11px] text-slate-500">Fast photo & architectural drawing review</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-200/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Email:</strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-slate-700 hover:text-brand-red font-medium block mt-0.5"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 shrink-0 border border-purple-200/50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Operating Working Hours:</strong>
                    <span className="text-slate-600 block mt-0.5">{companyInfo.hours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Service Coverage Area with PIN codes */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-md">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Patna Localities & Postal Codes for Free Surveys</span>
              </h3>
              <p className="text-xs text-slate-500">
                Our technicians visit the following areas with laser measuring meters:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {localities.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] flex justify-between items-center"
                  >
                    <span className="text-slate-800 font-medium">{loc.name}</span>
                    <span className="text-brand-red font-mono text-[10px] font-bold">{loc.pin}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                <strong className="text-slate-800">Also servicing:</strong> {nearbyDistricts.join(', ')}
              </div>
            </div>

            {/* Embedded Google Map (Exact PATNA SIGNAGE Location) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-72">
              <iframe
                title="PATNA SIGNAGE Google Business Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9270927880025!2d85.1362679!3d25.607338799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590cad331c07%3A0x5736c6c58c592ab1!2sPATNA%20SIGNAGE!5e0!3m2!1sen!2sin!4v1790653290806!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-6">
            <QuoteForm />
          </div>

        </div>
      </section>

    </div>
  );
}
