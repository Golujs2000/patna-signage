# Completed Tasks & Project Changelog

- [x] **Add SBI & LIC to Client Portfolio**
  - Added State Bank of India (SBI) and Life Insurance Corporation of India (LIC) to `trustedClients` in `signageData.js`.
  - Created vector SVG brand logos (`/assets/clients/sbi.svg` and `/assets/clients/lic.svg`) with authentic institutional branding.
  - Added dedicated portfolio project records for SBI and LIC in `portfolioProjects` (Fraser Road / Bailey Road branches).
  - Prominently integrated into the Home marquee and About Us enterprise roster.

- [x] **Add Printing Services (Offset, Flex, Banner, Digital Flex, Vinyl)**
  - Added 4 dedicated services to `servicesData` in `signageData.js` with full specs, price ranges, turnaround times, and applications:
    - **Commercial Offset Printing** (`/services/offset-printing`): High-volume brochures, catalogs, retail packaging, and corporate stationery.
    - **Flex & Banner Printing** (`/services/flex-banner-printing`): Outdoor frontlit & backlit Star Flex, hoardings, and event backdrops.
    - **Digital Flex & Eco-Solvent Printing** (`/services/digital-flex-printing`): High-definition 1440 DPI micro-piezo printing for luxury showrooms.
    - **Vinyl Printing & Custom Branding** (`/services/vinyl-printing`): Self-adhesive vinyl, 3M frosted film, one-way vision, and vehicle wraps.
  - Created high-resolution imagery for all 4 services in `public/assets/services/` and `assets/services/`.
  - Added "Printing & Media" filter category and items to `signageTypes` on `SignagePage.jsx`.

- [x] **Show Second Number in Footer and Top Bar**
  - Updated Navbar top micro-bar to display both primary and secondary numbers: `+91 9308327111 / +91 7070170040`.
  - Updated Navbar mobile drawer with dual direct call buttons.
  - Updated Footer contact section with both telephone numbers linked with `tel:` protocols.
  - Updated Contact Page direct hotline card to feature both numbers.
- [x] **Add Mementos, Trophies, Photo Frames, Customize Trophies, Crystal Awards, Clip-on Boards, Slim Photo Frames, and Neon Signs**
  - Added 8 dedicated services to `servicesData` in `signageData.js` with full technical specs, pricing, turnaround times, features, and applications:
    - **Corporate Mementos & Felicitation Plaques** (`/services/corporate-mementos`): Wooden, brass crest, and acrylic recognition shields.
    - **Trophies & Sports Championship Awards** (`/services/sports-trophies`): Gold and silver metallic tournament cups, multi-tier column trophies, and medals.
    - **Customize Trophies & Bespoke Awards** (`/services/customize-trophies`): 100% custom-designed 3D laser-cut acrylic and metal trophies with CAD mockups.
    - **Crystal Awards & 3D Laser Etched Trophies** (`/services/crystal-awards`): Optical K9 crystal awards with diamond-beveled edges and 3D subsurface laser etching.
    - **LED Clip-On Boards & Snap Frames** (`/services/clipon-boards`): 15mm ultra-slim aluminum snap-frame lightboxes with laser-etched LGPs for QSR menus and retail posters.
    - **Slim LED Photo Frames & Lightboxes** (`/services/slim-photo-frames`): Ultra-slim 12mm magnetic frameless acrylic photo frames with ambient wall halo glow.
    - **Custom Photo Frames & Wall Framing** (`/services/photo-frames`): Handcrafted wooden moulding, collage gallery walls, bevel mats, and archival float glass.
    - **Custom LED Neon Signs & Neon Art** (`/services/neon-signs`): 12V flexible silicone neon signs on 8mm cast acrylic backplates for cafes, events, and offices.
  - Generated professional commercial studio imagery for all 7 new products and saved to `public/assets/services/` and `assets/services/`.
  - Added new catalog items and filter tabs (`Awards & Trophies`, `Frames & Displays`, `Neon & Creative`) to `SignagePage.jsx` and `ServicesPage.jsx`.
  - Upgraded Navbar desktop "Services" dropdown to a two-column mega-menu with smooth scrolling mobile drawer.
  - Added 4 new portfolio projects highlighting sports trophies, lounge neon art, food court clip-on lightboxes, and AIIMS medical framing.

- [x] **Remove Business Hours from Top Bar**
  - Removed `Hours: Monday - Saturday: 9:00 AM - 8:30 PM (Sunday by Appointment)` from the Navbar top micro-bar for a clean, direct-hotline focus.

- [x] **Horizontal "Explore Other Services" in Business/Service Detail Page**
  - Moved "Explore Other Services" out of the right sidebar column on `ServiceDetailPage.jsx`.
  - Built a full-width, responsive horizontal scrolling showcase (`flex overflow-x-auto snap-x`) with product cards, images, badges, and starting rates.

- [x] **Break Footer into Two Distinct Levels**
  - **Level 1 (Company & Hotlines)**: Spacious 3-column layout featuring Brand & 34-Year Heritage trust badges, Quick Navigation with GSTIN verification, and Direct Workshop Hotline details.
  - **Level 2 (Manufacturing Catalog)**: Full-width dedicated catalog section organizing all 18 factory services into 4 balanced, dedicated columns (**Signage & Facades**, **Trophies & Awards**, **Frames & Lightboxes**, **Printing & Creative Media**) with direct service links and zero overflow.

- [x] **Add "Designed by nirviai.com" to Footer**
  - Integrated attribution link to [nirviai.com](https://nirviai.com) in the bottom copyright bar of [`Footer.jsx`](src/components/Footer.jsx).