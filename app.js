const translations = {
  es: {
    "nav.home":"Inicio","nav.services":"Servicios","nav.ritual":"Ducha Vichy","nav.packages":"Paquetes","nav.gallery":"Galería","nav.info":"Información","nav.contact":"Contacto",
    "actions.book":"Reservar","actions.services":"Ver servicios","actions.whatsapp":"WhatsApp","actions.packages":"Ver paquetes","actions.discover":"Descubrir",
    "hero.eyebrow":"Bienestar frente al mar","hero.title":"Relájate, disfruta y renueva tu energía","hero.text":"Vive una experiencia diseñada para cuidar tu cuerpo y tu mente.",
    "hero2.eyebrow":"Un momento para dos","hero2.title":"Experiencias de relajación en pareja","hero2.text":"Masajes, jacuzzi privado y una atmósfera tranquila para reconectar.",
    "hero3.eyebrow":"Hidroterapia","hero3.title":"El poder restaurador del agua","hero3.text":"Jacuzzi, sales detox y ducha Vichy para revitalizar cuerpo y mente.",
    "values.wellbeing":"Bienestar","values.wellbeingText":"Equilibrio para cuerpo y mente","values.relax":"Relajación","values.relaxText":"Ambientes diseñados para ti","values.renew":"Renovación","values.renewText":"Tratamientos que revitalizan","values.balance":"Balance","values.balanceText":"Armonía y cuidado integral",
    "services.eyebrow":"Menú de bienestar","services.title":"Nuestros servicios","services.text":"Selecciona una categoría para consultar opciones, duración, precio y descripción.",
    "categories.facials":"Faciales","categories.massages":"Masajes","categories.body":"Tratamientos corporales","categories.baths":"Baños y jacuzzi",
    "ritual.eyebrow":"Experiencia de hidroterapia","ritual.title":"Ritual Ducha Vichy","ritual.text":"Una secuencia diseñada para renovar la piel, liberar tensión y completar la experiencia con agua a presión.",
    "ritual.step1":"Vichy Shower + cepillado corporal","ritual.step2":"Exfoliación corporal","ritual.step3":"Exfoliación + masaje + Vichy","ritual.options":"Opciones para la exfoliación",
    "aromas.lavender":"Lavanda","aromas.roses":"Rosas","aromas.coffee":"Café","aromas.orange":"Naranja","aromas.berries":"Frutos rojos","aromas.wine":"Vino",
    "packages.eyebrow":"Para compartir","packages.title":"Paquetes destacados","packages.couple":"En pareja","packages.romanticText":"Masaje relajante, mascarilla hidratante de línea exclusiva y baño detox con sales en jacuzzi.","packages.renewText":"Masaje terapéutico de 50 minutos y baño detox con sales en jacuzzi por 30 minutos.",
    "gallery.eyebrow":"Conoce el espacio","gallery.title":"Galería",
    "info.eyebrow":"Antes de tu visita","info.title":"Información importante","info.intro":"Para disfrutar plenamente tu experiencia, toma en cuenta las siguientes recomendaciones.","info.arrivalTitle":"Llegada anticipada","info.arrivalText":"Te solicitamos llegar al menos 15 minutos antes de tu cita para realizar tu registro y comenzar tu tratamiento puntualmente.","info.swimTitle":"Traje de baño","info.swimText":"El uso de traje de baño es obligatorio para acceder al sauna y al jacuzzi.","info.cancelTitle":"Política de cancelación","info.cancelText":"Solicitamos notificar cualquier cancelación o cambio de horario con un mínimo de 24 horas de anticipación. De lo contrario, se aplicará un cargo equivalente al 50% más IVA del valor del tratamiento no realizado.",
    "contact.eyebrow":"Reserva tu momento","contact.title":"Estamos listos para recibirte","contact.text":"Comunícate por WhatsApp para consultar disponibilidad y confirmar tu tratamiento.",
    "footer.note":"Página informativa. Precios sujetos a confirmación al reservar."
  },
  en: {
    "nav.home":"Home","nav.services":"Services","nav.ritual":"Vichy Shower","nav.packages":"Packages","nav.gallery":"Gallery","nav.info":"Information","nav.contact":"Contact",
    "actions.book":"Book now","actions.services":"View services","actions.whatsapp":"WhatsApp","actions.packages":"View packages","actions.discover":"Discover",
    "hero.eyebrow":"Wellness by the sea","hero.title":"Relax, enjoy and renew your energy","hero.text":"Enjoy an experience designed to care for your body and mind.",
    "hero2.eyebrow":"A moment for two","hero2.title":"Relaxing experiences for couples","hero2.text":"Massages, a private jacuzzi and a peaceful atmosphere to reconnect.",
    "hero3.eyebrow":"Hydrotherapy","hero3.title":"The restorative power of water","hero3.text":"Jacuzzi, detox salts and Vichy shower treatments to revitalize body and mind.",
    "values.wellbeing":"Wellbeing","values.wellbeingText":"Balance for body and mind","values.relax":"Relaxation","values.relaxText":"Spaces designed for you","values.renew":"Renewal","values.renewText":"Treatments that revitalize","values.balance":"Balance","values.balanceText":"Harmony and complete care",
    "services.eyebrow":"Wellness menu","services.title":"Our services","services.text":"Choose a category to view options, duration, price and description.",
    "categories.facials":"Facials","categories.massages":"Massages","categories.body":"Body treatments","categories.baths":"Baths & jacuzzi",
    "ritual.eyebrow":"Hydrotherapy experience","ritual.title":"Vichy Shower Ritual","ritual.text":"A sequence designed to renew the skin, release tension and complete the experience with pressurized water.",
    "ritual.step1":"Vichy Shower + body brushing","ritual.step2":"Body exfoliation","ritual.step3":"Exfoliation + massage + Vichy","ritual.options":"Exfoliation options",
    "aromas.lavender":"Lavender","aromas.roses":"Roses","aromas.coffee":"Coffee","aromas.orange":"Orange","aromas.berries":"Red berries","aromas.wine":"Wine",
    "packages.eyebrow":"To share","packages.title":"Featured packages","packages.couple":"For couples","packages.romanticText":"Relaxing massage, exclusive hydrating mask and detox salt bath in the jacuzzi.","packages.renewText":"50-minute therapeutic massage and a 30-minute detox salt bath in the jacuzzi.",
    "gallery.eyebrow":"Explore our space","gallery.title":"Gallery",
    "info.eyebrow":"Before your visit","info.title":"Important information","info.intro":"To fully enjoy your experience, please keep the following recommendations in mind.","info.arrivalTitle":"Early arrival","info.arrivalText":"Please arrive at least 15 minutes before your appointment to complete check-in and begin your treatment on time.","info.swimTitle":"Swimsuit required","info.swimText":"A swimsuit is required to use the sauna and jacuzzi facilities.","info.cancelTitle":"Cancellation policy","info.cancelText":"Please provide at least 24 hours’ notice for any cancellation or schedule change. Otherwise, a fee equal to 50% of the missed treatment price, plus applicable VAT, will be charged.",
    "contact.eyebrow":"Book your moment","contact.title":"We are ready to welcome you","contact.text":"Message us on WhatsApp to check availability and confirm your treatment.",
    "footer.note":"Informational website. Prices are subject to confirmation when booking."
  }
};

const services = {
  es: {
    facials: [
      {name:"Facial Europeo",desc:"Limpieza facial profunda para refrescar y renovar la piel.",time:"50 min",price:"$100 USD"},
      {name:"Facial hidratante",desc:"Tratamiento para una piel renovada, luminosa e hidratada.",time:"30 min",price:"$55 USD"}
    ],
    massages: [
      {name:"Masaje con piedras calientes",desc:"Calor terapéutico para relajar músculos y aliviar tensión.",time:"60 / 75 min",price:"$120 / $150"},
      {name:"Masaje de tejido profundo",desc:"Presión firme dirigida a capas profundas del músculo.",time:"50 / 75 min",price:"$100 / $150"},
      {name:"Masaje sueco relajante",desc:"Movimientos suaves y fluidos para disminuir el estrés.",time:"50 / 75 min",price:"$90 / $135"},
      {name:"Espalda, cuello y hombros",desc:"Tratamiento focalizado para tensión acumulada.",time:"30 / 45 min",price:"$60 / $70"},
      {name:"Reflexología de manos y pies",desc:"Estimulación de puntos de presión para favorecer el equilibrio.",time:"50 min",price:"$100"},
      {name:"Masaje prenatal",desc:"Masaje suave adaptado para brindar comodidad y relajación.",time:"50 min",price:"$100"},
      {name:"Aromaterapia + masaje sueco",desc:"Masaje relajante acompañado de aceites aromáticos.",time:"50 min",price:"$100"},
      {name:"Drenaje linfático manual Vodder",desc:"Técnica manual suave que favorece el movimiento linfático.",time:"75 min",price:"$160"},
      {name:"Masaje Shiatsu en silla",desc:"Sesión breve para cuello, hombros y espalda alta.",time:"20 / 40 min",price:"$30 / $55"}
    ],
    body: [
      {name:"Exfoliación corporal",desc:"Renueva la superficie de la piel con la opción aromática de tu preferencia.",time:"50 min",price:"$120 aprox."},
      {name:"Ducha Vichy + exfoliación + masaje",desc:"Ritual completo de agua a presión, exfoliación y masaje relajante.",time:"60 min",price:"$160"},
      {name:"Vichy Shower + cepillado corporal",desc:"Hidroterapia con chorros de agua y cepillado para activar y tonificar.",time:"35 min",price:"$90"}
    ],
    baths: [
      {name:"Jacuzzi + terapia detox con sales",desc:"Baño relajante en jacuzzi con sales. Opciones: vino, rosas o frutos rojos.",time:"30 min",price:"$45 USD"}
    ]
  },
  en: {
    facials: [
      {name:"European Facial",desc:"Deep facial cleansing to refresh and renew the skin.",time:"50 min",price:"$100 USD"},
      {name:"Hydrating Facial",desc:"Treatment for renewed, radiant and hydrated skin.",time:"30 min",price:"$55 USD"}
    ],
    massages: [
      {name:"Hot Stone Massage",desc:"Therapeutic heat to relax muscles and ease tension.",time:"60 / 75 min",price:"$120 / $150"},
      {name:"Deep Tissue Massage",desc:"Firm pressure focused on deeper layers of muscle.",time:"50 / 75 min",price:"$100 / $150"},
      {name:"Swedish Relaxing Massage",desc:"Gentle, flowing movements designed to reduce stress.",time:"50 / 75 min",price:"$90 / $135"},
      {name:"Back, Neck & Shoulders",desc:"Focused treatment for accumulated upper-body tension.",time:"30 / 45 min",price:"$60 / $70"},
      {name:"Hands & Feet Reflexology",desc:"Pressure-point stimulation to promote balance and relaxation.",time:"50 min",price:"$100"},
      {name:"Prenatal Massage",desc:"Gentle massage adapted for comfort and relaxation.",time:"50 min",price:"$100"},
      {name:"Aromatherapy Swedish Massage",desc:"Relaxing massage accompanied by aromatic oils.",time:"50 min",price:"$100"},
      {name:"Vodder Manual Lymphatic Drainage",desc:"A gentle manual technique that supports lymphatic flow.",time:"75 min",price:"$160"},
      {name:"Chair Shiatsu Massage",desc:"A short session focused on the neck, shoulders and upper back.",time:"20 / 40 min",price:"$30 / $55"}
    ],
    body: [
      {name:"Body Exfoliation",desc:"Renews the skin surface with your preferred aromatic option.",time:"50 min",price:"Approx. $120"},
      {name:"Vichy Shower + Exfoliation + Massage",desc:"A complete ritual combining pressurized water, exfoliation and massage.",time:"60 min",price:"$160"},
      {name:"Vichy Shower + Body Brushing",desc:"Hydrotherapy with water jets and body brushing to activate and tone.",time:"35 min",price:"$90"}
    ],
    baths: [
      {name:"Jacuzzi + Detox Salt Therapy",desc:"Relaxing jacuzzi bath with salts. Options: wine, roses or red berries.",time:"30 min",price:"$45 USD"}
    ]
  }
};

let lang = localStorage.getItem("spa-lang") || "es";
let activeCategory = "facials";

function applyLanguage(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
  renderServices();
}

function renderServices(){
  const grid = document.getElementById("service-grid");
  grid.innerHTML = services[lang][activeCategory].map(item => `
    <article class="service-card">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="meta"><span>${item.time}</span><span class="price">${item.price}</span></div>
    </article>
  `).join("");
}

document.getElementById("lang-toggle").addEventListener("click",()=>{
  lang = lang === "es" ? "en" : "es";
  localStorage.setItem("spa-lang",lang);
  applyLanguage();
});

document.querySelectorAll(".service-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".service-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderServices();
  });
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = document.querySelector(".hero-dots");
let current = 0;
let timer;
slides.forEach((_,i)=>{
  const dot = document.createElement("button");
  dot.setAttribute("aria-label",`Slide ${i+1}`);
  dot.addEventListener("click",()=>showSlide(i,true));
  dots.appendChild(dot);
});
function showSlide(index,reset=false){
  current = (index+slides.length)%slides.length;
  slides.forEach((s,i)=>s.classList.toggle("active",i===current));
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===current));
  if(reset){ clearInterval(timer); startAuto(); }
}
function startAuto(){ timer = setInterval(()=>showSlide(current+1),5500); }
document.querySelector(".hero-arrow.next").addEventListener("click",()=>showSlide(current+1,true));
document.querySelector(".hero-arrow.prev").addEventListener("click",()=>showSlide(current-1,true));
showSlide(0); startAuto();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click",()=>{
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const galleryItems = [...document.querySelectorAll(".gallery-item")];
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCounter = lightbox.querySelector(".lightbox-counter");
let lightboxIndex = 0;

function showLightboxImage(index){
  lightboxIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[lightboxIndex];
  const sourceImg = item.querySelector("img");
  lightboxImg.src = item.dataset.full;
  lightboxImg.alt = sourceImg.alt;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${galleryItems.length}`;
}

galleryItems.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    showLightboxImage(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}

lightbox.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click",e=>{
  e.stopPropagation();
  showLightboxImage(lightboxIndex - 1);
});
lightbox.querySelector(".lightbox-next").addEventListener("click",e=>{
  e.stopPropagation();
  showLightboxImage(lightboxIndex + 1);
});
lightbox.addEventListener("click",e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener("keydown",e=>{
  if(!lightbox.classList.contains("open")) return;
  if(e.key==="Escape") closeLightbox();
  if(e.key==="ArrowLeft") showLightboxImage(lightboxIndex - 1);
  if(e.key==="ArrowRight") showLightboxImage(lightboxIndex + 1);
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage();
