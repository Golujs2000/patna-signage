import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { companyInfo, navLinks, servicesData } from '../data/signageData';

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] border-t-2 border-brand-red text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LEVEL 1: Primary Company Identity, Navigation & Direct Workshop Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Factory Heritage */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group" aria-label="Patna Signage Home">
              <img 
                src={companyInfo.logoLight || "/assets/patna-signage-logo-light.svg"} 
                alt="Patna Signage - Signage | Branding | Fabrication" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                style={{ height: '52px', maxWidth: '280px', display: 'block' }}
              />
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{companyInfo.tagline}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Bihar’s premier signage & printing facility since 1990. In-house CNC routing, 1.5kW fiber laser cutting, HP Latex 570 printing, and automatic channel letter bending. Direct factory supply across Bihar & Jharkhand.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center flex-1">
                <div className="text-white font-bold text-sm">{companyInfo.experienceYears}</div>
                <div className="text-[10px] text-slate-400">Years (1990)</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center flex-1">
                <div className="text-brand-red font-bold text-sm">{companyInfo.projectsCompleted}</div>
                <div className="text-[10px] text-slate-400">Projects</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center flex-1">
                <div className="text-brand-gold font-bold text-sm">{companyInfo.warrantyYears}</div>
                <div className="text-[10px] text-slate-400">Warranty</div>
              </div>
            </div>
          </div>

          {/* Quick Links & Pages */}
          <div className="lg:pl-8">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2.5">
              Explore Pages
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="col-span-2 pt-2">
                <Link 
                  to="/contact"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1.5 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  Request Free Site Visit & Measurement
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-brand-gold shrink-0" />
              <div className="text-[11px] text-slate-300">
                <span className="text-white font-semibold block">{companyInfo.gstStatus}</span>
                GSTIN: {companyInfo.gstNumber} • Official B2B Tax Invoicing
              </div>
            </div>
          </div>

          {/* Contact Details & Direct Hotlines */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-white/40 pl-2.5">
              Patna Workshop & Hotlines
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-white font-semibold">
                  <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-red transition-colors">
                    {companyInfo.phoneDisplay}
                  </a>
                  <span className="hidden sm:inline text-slate-600">/</span>
                  <a href={`tel:${companyInfo.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-brand-red transition-colors">
                    {companyInfo.secondaryPhoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* LEVEL 2: All 18 Manufacturing Services in 4 Organized Columns */}
        <div className="py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <h3 className="text-white text-sm font-bold uppercase tracking-wider">
                Our Complete Manufacturing & Visual Branding Services
              </h3>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              18 Factory-Direct Formats Across Bihar & Jharkhand
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
            
            {/* Category 1: Outdoor Signage & Facades */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-l-2 border-brand-red pl-2">
                Signage & Facades
              </h4>
              <ul className="space-y-2">
                {[
                  { title: "LED Signage & Backlit", slug: "led-signage" },
                  { title: "3D Letters (SS & Acrylic)", slug: "3d-letters" },
                  { title: "ACP Signage & Cladding", slug: "acp-signage" },
                  { title: "Glow Sign Boards", slug: "glow-sign-boards" },
                  { title: "Shop Front Facades", slug: "shop-front-signage" }
                ].map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Trophies, Mementos & Awards */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-l-2 border-brand-gold pl-2">
                Trophies & Awards
              </h4>
              <ul className="space-y-2">
                {[
                  { title: "Corporate Mementos & Plaques", slug: "corporate-mementos" },
                  { title: "Sports Championship Trophies", slug: "sports-trophies" },
                  { title: "Customize 3D Bespoke Awards", slug: "customize-trophies" },
                  { title: "K9 Optical Crystal Awards", slug: "crystal-awards" }
                ].map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-brand-red shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Display Frames & Lightboxes */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-l-2 border-brand-red pl-2">
                Frames & Lightboxes
              </h4>
              <ul className="space-y-2">
                {[
                  { title: "LED Clip-On Snap Frames", slug: "clipon-boards" },
                  { title: "Slim LED Photo Frames", slug: "slim-photo-frames" },
                  { title: "Custom Photo Frames & Framing", slug: "photo-frames" },
                  { title: "Corporate Wayfinding & Totems", slug: "corporate-signage" }
                ].map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 4: Commercial Printing & Neon */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-l-2 border-brand-gold pl-2">
                Printing & Creative Media
              </h4>
              <ul className="space-y-2">
                {[
                  { title: "Commercial Offset Printing", slug: "offset-printing" },
                  { title: "Flex & Banner Printing", slug: "flex-banner-printing" },
                  { title: "Digital 1440 DPI Eco-Flex", slug: "digital-flex-printing" },
                  { title: "Self-Adhesive Vinyl Branding", slug: "vinyl-printing" },
                  { title: "Custom LED Neon Signs", slug: "neon-signs" }
                ].map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-brand-red shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved. Patna, Bihar.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Designed by{' '}
              <a 
                href="https://nirviai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white font-semibold transition-colors underline decoration-brand-gold/40 hover:decoration-white"
              >
                nirviai.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <Link to="/signage" className="hover:text-white">Signage Catalog</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/projects" className="hover:text-white">Portfolio</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
