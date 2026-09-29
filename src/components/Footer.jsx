import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { companyInfo, navLinks, servicesData } from '../data/signageData';

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] border-t-2 border-brand-red text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
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
              Bihar’s premier signage & printing facility since 1990. In-house CNC routing, 1.5kW fiber laser cutting, HP Latex 570 printing, and automatic channel letter bending.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-white font-bold text-sm">{companyInfo.experienceYears}</div>
                <div className="text-[10px] text-slate-400">Years (1990)</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-brand-red font-bold text-sm">{companyInfo.projectsCompleted}</div>
                <div className="text-[10px] text-slate-400">Projects Done</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-brand-gold font-bold text-sm">{companyInfo.warrantyYears}</div>
                <div className="text-[10px] text-slate-400">Warranty</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2.5">
              Explore Pages
            </h3>
            <ul className="space-y-2.5 text-xs">
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
              <li>
                <Link 
                  to="/contact"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1.5 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                  Request Free Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Individual Service Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-brand-gold pl-2.5">
              Individual Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link 
                    to={`/services/${s.slug}`}
                    className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-white/40 pl-2.5">
              Patna Workshop
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-white hover:text-brand-red font-semibold">
                  {companyInfo.phoneDisplay}
                </a>
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

            <div className="mt-5 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
              <div className="text-[11px] text-slate-300">
                <span className="text-white font-semibold block">{companyInfo.gstStatus}</span>
                GSTIN: {companyInfo.gstNumber} • B2B Invoicing
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved. Patna, Bihar.
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
