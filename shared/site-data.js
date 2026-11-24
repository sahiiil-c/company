/*
 * ============================================================
 *  MANISHA ENTERPRISES — SITE CONTENT (edit this file only)
 * ============================================================
 *  All three demo designs read from this one file.
 *  Change a phone number, service or review here and every
 *  page updates automatically — no HTML editing needed.
 * ============================================================
 */
window.SITE = {
  name: "Manisha Enterprises",
  tagline: "Your trusted partner for top-quality CCTV solutions",
  promise: "Best Rates. Best Services.",

  contact: {
    phone: "7977465840",             // shown on the site
    phoneIntl: "+917977465840",      // used for tap-to-call
    whatsapp: "917977465840",        // country code + number, no "+" (verify: old site used wa.link/bd0681)
    email: "manishenterprises1125@gmail.com",
    instagram: "https://ig.me/m/enterprises.manisha",
    area: "Vichumbe, Panvel",
    state: "Maharashtra",
    hours: "Open every day, 8:00 AM – 10:00 PM",
    mapQuery: "Vichumbe, Panvel, Maharashtra"
  },

  about: [
    "At Manisha Enterprises, we understand the importance of security and peace of mind. Our dedicated team is committed to providing you with the finest CCTV cameras and installation services at the most competitive rates.",
    "Whether you need surveillance for a home or a commercial establishment, we work closely with you so your security needs are met with precision and care."
  ],

  highlights: [
    { value: "7 Days", label: "Open every day" },
    { value: "8am–10pm", label: "Call anytime in the day" },
    { value: "Home & Biz", label: "Residential & commercial" },
    { value: "Best", label: "Rates in the area" }
  ],

  services: [
    {
      icon: "consult",
      title: "Security Consultation",
      text: "We visit your home, shop or office, check the blind spots and recommend exactly the cameras you need — nothing extra."
    },
    {
      icon: "install",
      title: "Professional Installation",
      text: "Skilled technicians install your CCTV system neatly and correctly, with clean wiring and mobile viewing set up for you."
    },
    {
      icon: "camera",
      title: "Advanced Camera Options",
      text: "HD, night-vision, dome, bullet and Wi-Fi cameras. We help you choose the right model for your budget and space."
    },
    {
      icon: "repair",
      title: "Repair & Maintenance",
      text: "Camera not recording or showing on your phone? We troubleshoot, repair and upgrade existing CCTV setups."
    }
  ],

  // Who we serve — used for "Best for" chips
  segments: ["Home", "Shop", "Office", "Supermarket", "Warehouse", "Industry", "School", "Society"],

  // How a job works — shown as a step timeline
  process: [
    { title: "Call or WhatsApp", text: "Tell us your place and requirement." },
    { title: "Free Site Visit", text: "We inspect and suggest camera points." },
    { title: "Clear Quotation", text: "Transparent price, no hidden charges." },
    { title: "Installation", text: "Neat fitting, tested and handed over." },
    { title: "Mobile Setup", text: "Watch live on your phone, anywhere." }
  ],

  // Keep these matching what clients actually said (from the old site)
  testimonials: [
    { name: "J.V. Patil International School", place: "Alephata, Junnar", text: "Best rates and best service for our school's CCTV." },
    { name: "Terna Public Charitable Trust", place: "Terna Hostel, Nerul", text: "Best rates and good service for our hostel CCTV." },
    { name: "Haj House", place: "Mumbai", text: "Best rates and good service." }
  ],

  // Options for the enquiry form
  enquiryTypes: ["New CCTV installation", "Repair / service", "Upgrade existing system", "Just need a quotation"],
  propertyTypes: ["Home / Flat", "Shop", "Office", "Society", "School", "Warehouse / Industry", "Other"]
};

/* ---------- small helpers shared by all designs ---------- */
window.SITE_HELPERS = {
  telLink: () => "tel:" + SITE.contact.phoneIntl,
  mailLink: (subject) => "mailto:" + SITE.contact.email + (subject ? "?subject=" + encodeURIComponent(subject) : ""),
  waLink: (msg) => "https://wa.me/" + SITE.contact.whatsapp + "?text=" + encodeURIComponent(msg || "Hello " + SITE.name + ", I need CCTV details."),
  mapEmbed: () => "https://maps.google.com/maps?q=" + encodeURIComponent(SITE.contact.mapQuery) + "&z=13&output=embed",
  mapLink: () => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.contact.mapQuery),
  icon: (name) => ({
    consult: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    install: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l13-3 2 6-13 3z"/><path d="M18 10l3-1"/><path d="M8 12.5V17H4"/><circle cx="8" cy="8" r="1"/></svg>',
    repair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 10h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 24 12C24 5.4 18.6 0 12 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>'
  })[name] || ""
};
