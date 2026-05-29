 /* ── THEME TOGGLE ── */
 /* ── THEME TOGGLE ── */
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

// 1. Start with dark mode enabled by default
let dark = true; 

// 2. Instantly apply dark theme and set the button to the Sun icon
html.setAttribute('data-theme', 'dark');
if (themeBtn) themeBtn.textContent = '☀️';

// 3. Handle user clicks to toggle back and forth
themeBtn.addEventListener('click', () => {
  dark = !dark;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

/* ── SCROLL PROGRESS ── */
const progressEl = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const p = (h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight);
  progressEl.style.transform = `scaleX(${p})`;
}, { passive: true });

/* ── MOUSE GLOW (smooth follow) ── */
const glow = document.getElementById('mouseGlow');
let mx = 0, my = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; glow.style.opacity = '1'; });
document.addEventListener('mouseleave', () => glow.style.opacity = '0');
(function animGlow() {
  cx += (mx - cx) * 0.1; cy += (my - cy) * 0.1;
  glow.style.left = cx + 'px'; glow.style.top = cy + 'px';
  requestAnimationFrame(animGlow);
})();

/* ── MAGNETIC HOVER ── */
document.querySelectorAll('.mag-el').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.35;
    const dy = (e.clientY - r.top - r.height / 2) * 0.35;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0,0)';
  });
});

/* ── FLOATING DOCK ACTIVE ── */
const sections = ['hero', 'about', 'services', 'skills', 'projects', 'contact'];
const dockItems = document.querySelectorAll('.dock-item');
const obs2 = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      dockItems.forEach(d => d.classList.remove('active'));
      const match = document.querySelector(`.dock-item[data-section="${e.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) obs2.observe(el);
});

/* ── FADE-UP OBSERVER ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
  });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* ── MODAL ── */
const projects = [
  { 
    num: "Project 01", 
    title: "Smartist Attendance System", 
    desc: "A futuristic employee attendance and roster management platform designed to modernize traditional attendance systems. Built with a clean, performance-focused dashboard that makes workforce tracking feel effortless.", 
    features: ["Employee attendance tracking", "Admin dashboard & analytics", "Shift & roster management", "Modern glassmorphism UI", "Responsive layout system", "Performance-focused design"], 
    techs: ["Flutter", "Dart", "Firebase", "Responsive UI"], 
    gradient: "linear-gradient(135deg,#0071e3,#34c759)",
    images: ["images/smartist.png", "images/smartist-2.png"]
  },
  { 
    num: "Project 02", 
    title: "Billing Web app for Optical Clinics", 
    desc: "A modern billing and management platform built for optical clinics and lens shops. Designed to simplify invoice generation, customer records, lens tracking, and payment management with a clean, responsive interface optimized for daily clinic operations.", 
    features: ["Whatsapp and Email sending system", "User authentication", "Dashboard interface"], 
    techs: ["Flutter Web+app (android and ios)", "Firebase", "Dart","sql database" ], 
    gradient: "linear-gradient(135deg,#5e5ce6,#0071e3)",
    images: ["images/lensshop-1.web.app.mp4", "images/lensshop-2.jpeg"], // Added comma here
    link: "https://lensshop-1.web.app/" 
  }, 
  {
  num: "Project 03",
  title: "Naivaidya NGO Website",
  desc: "A modern NGO platform built for Naivaidya to create social impact through technology — featuring donation systems, volunteer engagement, awareness campaigns, and an AI-powered assistant that helps users instantly connect with NGO services and information.",

  features: [
    "Responsive NGO website",
    "Donation & fundraising sections",
    "Volunteer registration system",
    "Awareness & campaign showcase",
    "AI chatbot for user assistance",
    "AI agents for automated support",
    "Real-time enquiry handling",
    "Modern animated UI/UX",
    "SEO optimized architecture",
    "Docker-based deployment",
    "Fast hosting with Nginx"
  ],

  techs: [
    "Flutter Web",
    "Firebase",
    "JavaScript",
    "HTML/CSS",
    "AI Chatbot Integration",
    "AI Agents",
    "Linux Server",
    "Docker",
    "Nginx",
    "GitHub"
  ],

  gradient: "linear-gradient(135deg,#34c759,#0071e3)",
  images: ["images/naivaidya.mp4", "images/naivaidya-1.png"],
      link: "https://naivaidya.com/" 
 // Added comma here

},
  
    { 
        num: "Project 04", 
        title: "Gargi Digital E-Commerce Portal", 
        desc: "An ongoing modern e-commerce platform for digital products and smart business solutions featuring payment gateway integration, REST API CRUD operations, real-time database management, secure checkout, and advanced admin controls.", 
        features: ["Payment gateway integration", "REST API CRUD operations", "Real-time database management", "Secure checkout", "Advanced admin controls"], 
        techs: ["Flutter Web", "REST API", "Postman", "CRUD Operations", "Payment Gateway"], 
        gradient: "linear-gradient(135deg,#ff375f,#5e5ce6)" ,
        images: ["images/gargi-1.mp4", "images/gargi.png"],
        link: "https://gargidigital.com/"
    },

    {
    num: "Project 05",
    title: "Smart RFID Gate System",

    desc: "An advanced ESP32 and RFID-based smart gate automation system designed for schools and institutions to automate attendance tracking, monitor student entry and exit, and improve campus security. The system uses RFID smart cards, IoT connectivity, cloud synchronization, and real-time parent notifications to create a secure and efficient digital attendance ecosystem.",

    features: [
        "RFID smart card authentication",
        "ESP32 microcontroller logic",
        "Automated entry & exit attendance",
        "Real-time attendance tracking",
        "WiFi cloud synchronization",
        "Parent notification system",
        "Admin dashboard monitoring",
        "Attendance history reports",
        "Student safety monitoring",
        "REST API integration",
        "IoT-based smart automation",
        "Real-time database updates",
        "LED & buzzer status indicators",
        "Secure access control system"
    ],

    techs: [
        "ESP32",
        "MFRC522 RFID Module",
        "RFID Smart Cards",
        "Flutter",
        "Flutter Web",
        "Dart",
        "REST API",
        "Postman",
        "CRUD Operations",
        "WiFi IoT",
        "Cloud Database",
        "Real-Time Database",
        "Admin Dashboard",
        "Nginx",
        "Docker",
        "Linux Server",
        "GitHub"
    ],

    architecture: [
        "RFID Card",
        "RFID Reader",
        "ESP32 Controller",
        "WiFi Communication",
        "Cloud Server",
        "Admin Dashboard",
        "Parent Notification System"
    ],

    hardware: [
        "ESP32 Development Board",
        "MFRC522 RFID Reader",
        "RFID Smart Cards",
        "Power Supply",
        "Buzzer",
        "LED Indicators",
        "Display Screen"
    ],

    workflow: [
        "Student approaches smart gate",
        "RFID card detected automatically",
        "ESP32 processes card UID",
        "Attendance logic executed",
        "Data sent through WiFi",
        "Cloud server updates records",
        "Dashboard reflects real-time logs",
        "Parent receives instant notification"
    ],

    gradient: "linear-gradient(135deg,#00c9ff,#92fe9d)",

    images: [
        "images/rifid-1.mp4",
        "images/rfid.png"
    ],

    link: "https://smartcard-876e7.web.app/"
},
{
    num: "Project 06",

    title: "Smart Salon Booking App",

    desc: "A modern salon management and appointment booking platform designed for salons, beauty studios, and grooming businesses. The application provides real-time appointment scheduling, customer management, online payment integration, service tracking, staff management, and an advanced admin dashboard for seamless business operations.",

    features: [
        "Online appointment booking",
        "Real-time slot management",
        "Customer & staff management",
        "Service & pricing management",
        "Payment gateway integration",
        "REST API CRUD operations",
        "Secure authentication system",
        "Salon admin dashboard",
        "Booking status tracking",
        "Push notification support",
        "Responsive mobile & web UI",
        "Analytics & revenue reports"
    ],

    techs: [
        "Flutter",
        "Flutter Web",
        "REST API",
        "Postman",
        "CRUD Operations",
        "Payment Gateway",
        "Real-Time Database",
        "Admin Dashboard",
        "Firebase Auth",
        "Docker",
        "Nginx",
        "Linux Server"
    ],

    gradient: "linear-gradient(135deg,#ff758c,#ff7eb3)",

    images: [
        "images/salon.mp4",],

 }

  

];

function openModal(i) {
  const p = projects[i];
  const overlay = document.getElementById('modalOverlay');
  const area = document.getElementById('modalImgArea');
  
  // Update Text
  document.getElementById('modalNum').textContent = p.num;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalFeats').innerHTML = p.features.map(f => `<div class="modal-feat-item"><span class="modal-feat-dot"></span>${f}</div>`).join('');
  document.getElementById('modalTechs').innerHTML = p.techs.map(t => `<span class="proj-tech">${t}</span>`).join('');
  
  // Set fallback gradient background
  area.style.background = p.gradient;
  area.style.backgroundSize = '300% 300%';
  
  // 1. Create a swipeable gallery container if it doesn't exist yet
  let imgGallery = area.querySelector('.img-gallery');
  if (!imgGallery) {
    imgGallery = document.createElement('div');
    imgGallery.className = 'img-gallery';
    imgGallery.style.display = 'flex';
    imgGallery.style.width = '100%';
    imgGallery.style.height = '100%';
    imgGallery.style.overflowX = 'auto'; 
    imgGallery.style.overflowY = 'hidden';
    imgGallery.style.scrollSnapType = 'x mandatory'; 
    imgGallery.style.scrollbarWidth = 'none'; 
    area.insertBefore(imgGallery, area.firstChild);
    
    const style = document.createElement('style');
    style.innerHTML = `.img-gallery::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(style);
  }
  
  // Clear old images and old arrows
  imgGallery.innerHTML = '';
  area.querySelectorAll('.nav-arrow').forEach(btn => btn.remove());
  
  let ph = area.querySelector('.modal-img-placeholder');
  
  // 2. Add images/videos to gallery
  if (p.images && p.images.length > 0) {
    if (ph) ph.style.display = 'none';
    
    p.images.forEach(mediaSrc => {
      const isVideo = mediaSrc.toLowerCase().endsWith('.mp4') || mediaSrc.toLowerCase().endsWith('.webm');
      let mediaEl;
      
      if (isVideo) {
        mediaEl = document.createElement('video');
        mediaEl.src = mediaSrc;
        mediaEl.autoplay = true;  
        mediaEl.loop = true;      
        mediaEl.muted = true;     
        mediaEl.playsInline = true;
      } else {
        mediaEl = document.createElement('img');
        mediaEl.src = mediaSrc;
      }

      mediaEl.style.flex = '0 0 100%'; 
      mediaEl.style.width = '100%';
      mediaEl.style.height = '100%';
      mediaEl.style.objectFit = 'cover';
      mediaEl.style.objectPosition = 'top';
      mediaEl.style.scrollSnapAlign = 'start'; 
      
      imgGallery.appendChild(mediaEl);
    });

    // 3. IF THERE IS MORE THAN 1 IMAGE, ADD ARROWS
    if (p.images.length > 1) {
      const leftBtn = document.createElement('button');
      leftBtn.className = 'nav-arrow left-arrow';
      leftBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;
      leftBtn.onclick = () => imgGallery.scrollBy({ left: -imgGallery.clientWidth, behavior: 'smooth' });

      const rightBtn = document.createElement('button');
      rightBtn.className = 'nav-arrow right-arrow';
      rightBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
      rightBtn.onclick = () => imgGallery.scrollBy({ left: imgGallery.clientWidth, behavior: 'smooth' });

      area.appendChild(leftBtn);
      area.appendChild(rightBtn);
    }
  } else {
    // Show placeholder if no images
    if (!ph) {
      ph = document.createElement('div');
      ph.className = 'modal-img-placeholder';
      ph.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Add your project image</span>`;
      area.insertBefore(ph, area.querySelector('.modal-close'));
    }
    ph.style.display = 'flex';
  }
  
  // 4. LIVE LINK BUTTON LOGIC
  const modalBody = document.querySelector('.modal-body');
  const oldBtn = modalBody.querySelector('.modal-link-btn');
  if (oldBtn) oldBtn.remove(); // clear out previous button
  
  if (p.link) {
    const linkBtn = document.createElement('a');
    linkBtn.href = p.link;
    linkBtn.target = '_blank'; // Opens in new tab
    linkBtn.className = 'modal-link-btn mag-el'; 
    linkBtn.innerHTML = `Visit Live Site <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    modalBody.appendChild(linkBtn);
  }
  
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
/* ── CONTACT FORM TO GOOGLE SHEETS ── */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIqpoadL1sGgy1OA491OFkuIypq8f7q2N3BVNwCbmTO_e9lPTiV4fEtn6y9M7EklPl/exec';
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
  e.preventDefault();
  submitBtn.textContent = 'Sending…';
  submitBtn.style.opacity = '0.7';
  submitBtn.style.pointerEvents = 'none';

  fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
    .then(() => {
      // With no-cors we can't confirm the script ran — but the request reached Google.
      // If rows aren't appearing, the issue is in Apps Script deployment, not here.
      submitBtn.textContent = 'Message Sent! ✅';
      submitBtn.style.background = 'var(--green)';
      submitBtn.style.color = '#fff';
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.background = 'var(--text)';
        submitBtn.style.color = 'var(--bg)';
        submitBtn.style.opacity = '1';
        submitBtn.style.pointerEvents = 'auto';
        form.reset();
      }, 3000);
    })
    .catch(err => {
      console.error('Network error:', err.message);
      submitBtn.textContent = 'Network Error. Try Again.';
      submitBtn.style.background = '#ff3b30';
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.background = 'var(--text)';
        submitBtn.style.opacity = '1';
        submitBtn.style.pointerEvents = 'auto';
      }, 3000);
    });
});