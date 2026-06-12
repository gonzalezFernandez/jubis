'use strict';

// ================================================================
//  SVG AVATARS  (based on reference photos)
// ================================================================
const AVATARS = {

  muchaga: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="96" width="70" height="24" rx="9" fill="#1a5c1a"/>
    <rect x="37" y="84" width="26" height="16" rx="5" fill="#7a3fb0"/>
    <ellipse cx="50" cy="52" rx="33" ry="37" fill="#9b4dca"/>
    <ellipse cx="50" cy="82" rx="31" ry="19" fill="#f97316"/>
    <rect x="21" y="65" width="58" height="22" rx="11" fill="#f97316"/>
    <ellipse cx="50" cy="68" rx="19" ry="8" fill="#e06500"/>
    <rect x="27" y="36" width="19" height="5.5" rx="3" fill="#6518a0"/>
    <rect x="54" y="36" width="19" height="5.5" rx="3" fill="#6518a0"/>
    <circle cx="37" cy="47" r="8" fill="white"/>
    <circle cx="63" cy="47" r="8" fill="white"/>
    <circle cx="38" cy="48" r="4.5" fill="#120820"/>
    <circle cx="64" cy="48" r="4.5" fill="#120820"/>
    <circle cx="39" cy="46.5" r="1.5" fill="white"/>
    <circle cx="65" cy="46.5" r="1.5" fill="white"/>
    <ellipse cx="50" cy="60" rx="5" ry="6" fill="#8830b8"/>
    <ellipse cx="80" cy="106" rx="13" ry="7.5" fill="#c87820" transform="rotate(-18 80 106)"/>
    <line x1="73" y1="105" x2="87" y2="107" stroke="white" stroke-width="1.5"/>
    <line x1="78" y1="100" x2="76" y2="112" stroke="white" stroke-width="1"/>
    <line x1="82" y1="99" x2="81" y2="113" stroke="white" stroke-width="1"/>
  </svg>`,

  fita: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="92" width="80" height="28" rx="11" fill="#1e1e28"/>
    <ellipse cx="16" cy="72" rx="14" ry="28" fill="#18181f"/>
    <ellipse cx="84" cy="72" rx="14" ry="28" fill="#18181f"/>
    <path d="M10 32 Q10 6 50 4 Q90 6 90 32 Z" fill="#f0f0f4"/>
    <ellipse cx="50" cy="32" rx="43" ry="8.5" fill="#e8e8ec"/>
    <text x="50" y="22" text-anchor="middle" font-size="6" fill="#e63946" font-weight="bold" font-family="Arial">VOLCOM</text>
    <circle cx="50" cy="6" r="3" fill="#ddd"/>
    <path d="M10 40 Q1 49 4 59 Q0 65 6 70" stroke="#4a2e10" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M11 47 Q3 56 5 65" stroke="#6a4418" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M90 40 Q99 49 96 59 Q100 65 94 70" stroke="#4a2e10" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M89 47 Q97 56 95 65" stroke="#6a4418" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="50" cy="61" rx="26" ry="29" fill="#d4a07a"/>
    <ellipse cx="50" cy="80" rx="23" ry="14" fill="#3a2210"/>
    <rect x="29" y="70" width="42" height="14" rx="7" fill="#3a2210"/>
    <rect x="22" y="46" width="23" height="14" rx="6.5" fill="#111"/>
    <rect x="55" y="46" width="23" height="14" rx="6.5" fill="#111"/>
    <rect x="44" y="51" width="12" height="3.5" rx="1.5" fill="#111"/>
    <ellipse cx="28.5" cy="51" rx="5" ry="3" fill="#1e1e1e"/>
    <ellipse cx="62.5" cy="51" rx="5" ry="3" fill="#1e1e1e"/>
    <rect x="7" y="50" width="15" height="2.5" rx="1" fill="#111"/>
    <rect x="78" y="50" width="15" height="2.5" rx="1" fill="#111"/>
    <path d="M22 43 Q33 37 44 42" stroke="#2a1808" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M56 42 Q67 37 78 43" stroke="#2a1808" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="50" cy="66" rx="7" ry="8" fill="#c08060"/>
    <rect x="60" y="78" width="16" height="4" rx="2" fill="#f5f5dc"/>
    <circle cx="77" cy="78" r="3" fill="#ff6600" opacity="0.85"/>
  </svg>`,

  noah: `<svg viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="80" rx="40" ry="18" fill="#7a5618"/>
    <rect x="16" y="103" width="68" height="22" rx="9" fill="#e8e8ec"/>
    <path d="M10 28 Q10 4 50 3 Q90 4 90 28 Z" fill="#f0c000"/>
    <ellipse cx="50" cy="28" rx="44" ry="8.5" fill="#e8b800"/>
    <text x="50" y="20" text-anchor="middle" font-size="5" fill="#1a1a1a" font-weight="bold" font-family="Arial">🤙 SURF CO</text>
    <circle cx="50" cy="5" r="3" fill="#d8a800"/>
    <path d="M10 38 Q1 46 4 56 Q0 62 7 66" stroke="#8B6614" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M11 46 Q3 54 6 62" stroke="#a07820" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M90 38 Q99 46 96 56 Q100 62 93 66" stroke="#8B6614" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M89 46 Q97 54 94 62" stroke="#a07820" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="50" cy="62" rx="31" ry="34" fill="#f0c890"/>
    <ellipse cx="20" cy="64" rx="6.5" ry="8.5" fill="#e0b078"/>
    <ellipse cx="80" cy="64" rx="6.5" ry="8.5" fill="#e0b078"/>
    <circle cx="39" cy="56" r="6.5" fill="white"/>
    <circle cx="61" cy="56" r="6.5" fill="white"/>
    <circle cx="40" cy="57" r="4" fill="#5a84b8"/>
    <circle cx="62" cy="57" r="4" fill="#5a84b8"/>
    <circle cx="40" cy="56" r="1.8" fill="#111"/>
    <circle cx="62" cy="56" r="1.8" fill="#111"/>
    <circle cx="41" cy="55" r="1" fill="white"/>
    <circle cx="63" cy="55" r="1" fill="white"/>
    <path d="M32 49 Q39 46 47 49" stroke="#8B6614" stroke-width="2.5" fill="none"/>
    <path d="M53 49 Q61 46 68 49" stroke="#8B6614" stroke-width="2.5" fill="none"/>
    <ellipse cx="50" cy="66" rx="4.5" ry="5.5" fill="#d8a860"/>
    <path d="M40 74 Q46 77 50 76 Q54 77 60 74" stroke="#a07840" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M39 81 Q50 88 61 81" stroke="#b88850" stroke-width="2" fill="none"/>
    <rect x="74" y="94" width="12" height="19" rx="2.5" fill="#222"/>
    <rect x="75" y="96" width="10" height="15" rx="1.5" fill="#4a7ab5"/>
    <circle cx="80" cy="112" r="1.5" fill="#888"/>
  </svg>`,

  nanduko: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="13" y="96" width="74" height="24" rx="9" fill="#1a1a2e"/>
    <rect x="36" y="82" width="28" height="18" rx="6" fill="#d4906a"/>
    <ellipse cx="50" cy="52" rx="36" ry="36" fill="#d4906a"/>
    <ellipse cx="50" cy="19" rx="38" ry="20" fill="#3a2a18"/>
    <rect x="12" y="15" width="76" height="22" fill="#3a2a18"/>
    <path d="M18 22 Q30 10 50 15 Q70 10 82 22" fill="#2a1a10"/>
    <ellipse cx="18" cy="55" rx="7" ry="9" fill="#c48060"/>
    <ellipse cx="82" cy="55" rx="7" ry="9" fill="#c48060"/>
    <path d="M27 46 Q38 40 49 46" stroke="#2a1808" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M51 46 Q62 40 73 46" stroke="#2a1808" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M24 50 Q20 58 24 67" stroke="#c08060" stroke-width="1.5" fill="none"/>
    <path d="M76 50 Q80 58 76 67" stroke="#c08060" stroke-width="1.5" fill="none"/>
    <path d="M27 43 Q38 36 49 43" stroke="#2a1808" stroke-width="3" fill="none"/>
    <path d="M51 43 Q62 36 73 43" stroke="#2a1808" stroke-width="3" fill="none"/>
    <ellipse cx="50" cy="58" rx="5.5" ry="6" fill="#c07850"/>
    <path d="M27 66 Q50 92 73 66" fill="#c06030"/>
    <ellipse cx="50" cy="74" rx="21" ry="14" fill="#8a1020"/>
    <rect x="32" y="67" width="10" height="11" rx="2.5" fill="white"/>
    <rect x="44" y="66" width="10" height="13" rx="2.5" fill="white"/>
    <rect x="56" y="67" width="10" height="11" rx="2.5" fill="white"/>
    <ellipse cx="50" cy="80" rx="11" ry="5" fill="#e05060"/>
    <path d="M26 70 Q50 84 74 70 Q66 94 50 97 Q34 94 26 70" fill="#2a1a10" opacity="0.38"/>
  </svg>`,

  extraperlo: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,20 16,3 28,16" fill="#ff4444"/>
    <polygon points="36,12 34,0 42,10" fill="#ffcc00"/>
    <polygon points="50,9 50,0 56,9" fill="#44ff88"/>
    <polygon points="64,12 66,0 58,10" fill="#4488ff"/>
    <polygon points="78,20 84,3 72,16" fill="#cc44ff"/>
    <ellipse cx="50" cy="24" rx="40" ry="20" fill="#ff5533"/>
    <rect x="4" y="30" width="7" height="4.5" rx="1.5" fill="#ff6b6b" transform="rotate(35 7 32)"/>
    <rect x="89" y="25" width="7" height="4.5" rx="1.5" fill="#4ecdc4" transform="rotate(-25 92 27)"/>
    <circle cx="12" cy="52" r="4" fill="#ffd93d" opacity="0.9"/>
    <circle cx="88" cy="47" r="3.5" fill="#ff69b4" opacity="0.9"/>
    <ellipse cx="50" cy="64" rx="33" ry="34" fill="#d4a07a"/>
    <path d="M23 48 Q35 40 45 47" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M55 47 Q65 40 77 48" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="37" cy="57" r="9.5" fill="white"/>
    <circle cx="63" cy="57" r="9.5" fill="white"/>
    <circle cx="37" cy="58" r="6" fill="#ff1100"/>
    <circle cx="63" cy="58" r="6" fill="#0055ee"/>
    <circle cx="37" cy="57" r="2.5" fill="#111"/>
    <circle cx="63" cy="57" r="2.5" fill="#111"/>
    <circle cx="38" cy="55.5" r="1.5" fill="white"/>
    <circle cx="64" cy="55.5" r="1.5" fill="white"/>
    <ellipse cx="50" cy="69" rx="5" ry="6" fill="#c08060"/>
    <path d="M28 78 Q50 97 72 78" fill="#cc3344"/>
    <ellipse cx="50" cy="84" rx="19" ry="12" fill="#991122"/>
    <rect x="34" y="78" width="10" height="10" rx="2" fill="white"/>
    <rect x="46" y="77" width="10" height="12" rx="2" fill="white"/>
    <rect x="58" y="78" width="10" height="10" rx="2" fill="white"/>
    <rect x="13" y="104" width="17" height="7" rx="3.5" fill="#ff6b35"/>
    <rect x="70" y="104" width="17" height="7" rx="3.5" fill="#4ecdc4"/>
    <ellipse cx="86" cy="90" rx="9" ry="6.5" fill="#8B4513"/>
    <rect x="84" y="74" width="4" height="19" rx="2" fill="#6B3410"/>
    <line x1="83" y1="76" x2="83" y2="90" stroke="#e8e0cc" stroke-width="0.8"/>
    <line x1="85.5" y1="76" x2="85.5" y2="90" stroke="#e8e0cc" stroke-width="0.8"/>
    <line x1="88" y1="76" x2="88" y2="90" stroke="#e8e0cc" stroke-width="0.8"/>
  </svg>`,
};

// SVG for the Roca Pintada event character
const ROCA_SVG = `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" style="height:80px;display:block;margin:0 auto">
  <path d="M14 28 Q20 5 40 8 Q60 5 66 28" fill="#222"/>
  <path d="M12 26 Q6 32 9 42" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M68 26 Q74 32 71 42" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round"/>
  <ellipse cx="40" cy="36" rx="22" ry="24" fill="#d4906a"/>
  <circle cx="31" cy="32" r="5" fill="white"/>
  <circle cx="49" cy="32" r="5" fill="white"/>
  <circle cx="32" cy="33" r="3" fill="#111"/>
  <circle cx="50" cy="33" r="3" fill="#111"/>
  <path d="M29 44 Q40 52 51 44" fill="#cc3344"/>
  <rect x="20" y="60" width="40" height="30" rx="5" fill="#111"/>
  <text x="40" y="74" text-anchor="middle" font-size="7" fill="#ff4444" font-weight="bold" font-family="Arial">ROCA</text>
  <text x="40" y="83" text-anchor="middle" font-size="6" fill="#ff4444" font-family="Arial">PINTADA</text>
  <ellipse cx="12" cy="74" rx="10" ry="7" fill="#8B4513"/>
  <rect x="9" y="58" width="5" height="20" rx="2" fill="#6B3410"/>
  <line x1="10" y1="62" x2="10" y2="74" stroke="#e0d0b0" stroke-width="0.8"/>
  <line x1="12" y1="62" x2="12" y2="74" stroke="#e0d0b0" stroke-width="0.8"/>
  <line x1="14" y1="62" x2="14" y2="74" stroke="#e0d0b0" stroke-width="0.8"/>
</svg>`;

// ================================================================
//  CHARACTER DEFINITIONS
// ================================================================
const CHARS = {
  muchaga: {
    id: 'muchaga', name: 'Muchaga', role: '🏉 100% Responsable',
    desc: 'Ex jugador de rugby reconvertido en camarero. Sirve cafés, cañas y combinados sin parar. Algo en él ya no está del todo bien.',
    currency: 'Cañas', icon: '🍺', clickText: '¡SIRVE!', clickIcon: '🍺', btnText: '¡A tu servicio!',
    theme: '#e8820a', themeD: '#b06000', themeG: 'rgba(232,130,10,0.25)',
    special: 'whyshkeys',
    upgrades: [
      { id:'cafe',     name:'Café Solo',           icon:'☕', desc:'El del rincón lo pide de siempre.',                   cost:10,    prod:0.1,  cbonus:0,   base:10    },
      { id:'cana',     name:'Grifo de Cerveza',     icon:'🍺', desc:'La caña no para. Ni tú tampoco.',                    cost:80,    prod:0.5,  cbonus:0,   base:80    },
      { id:'jb',       name:'Botella de JB',        icon:'🥃', desc:'Whisky escocés. Para los clásicos.',                 cost:450,   prod:2,    cbonus:1,   base:450   },
      { id:'barril',   name:'Barril de Estrella',   icon:'🛢️', desc:'Cien litros de pura felicidad ajena.',              cost:2200,  prod:10,   cbonus:4,   base:2200  },
      { id:'cocktail', name:'Cócteles Artesanales', icon:'🍹', desc:'Inventos raros que cobras el doble.',                cost:12000, prod:50,   cbonus:12,  base:12000 },
      { id:'dardos',   name:'Tablero de Dardos',    icon:'🎯', desc:'Rafa el Facha no falla ni un dardo. NI UNO.',                         cost:50000, prod:200,  cbonus:40,  base:50000 },
      { id:'maquina',  name:'Máquina Tragaperras',  icon:'🎰', desc:'Tres limones y ruina. El mejor negocio del bar.',   cost:200000,prod:500,  cbonus:90,  base:200000},
    ],
    msgs:['¿Qué va a ser, jefe?','Hoy estamos de oferta en los combinados.','El JB se acaba, hay Dyc de sobra.','Ese del fondo lleva aquí desde las 10 de la mañana.','Con esto aguanto hasta el amanecer.','La barra no se limpia sola... bueno, a veces sí.','WHISKY... perdón. ¿Qué decías?','Otro día más en el paraíso, tío.','El barril vacío es señal de una noche exitosa.','La tragaperras lleva sonando desde las 8 de la mañana.','Tres limones. Siempre tres limones. Siempre no.','El del rincón lleva 4 horas en la tragaperras. Le he puesto el café gratis por lástima.','La máquina da más pasta de lo que parece... pero a mí.','Juro que la última vez que dio el bote fue en el 2003.','Ha metido un billete de 50 en la máquina. Ha salido con 2 euros. Contento está.'],
  },

  fita: {
    id: 'fita', name: 'Fita', role: '🌙 El Guerrero Nocturno',
    desc: 'Fita no duerme, Fita resiste. Su cuerpo es un templo... de vicios.',
    currency: 'Vicios', icon: '💨', clickText: '¡OTRO MÁS!', clickIcon: '🍺', btnText: '¡Ponme una!',
    theme: '#9b42f0', themeD: '#6a18b8', themeG: 'rgba(155,66,240,0.25)',
    special: 'dobletazo',
    upgrades: [
      { id:'birra',  name:'Birra de Lata',       icon:'🍺', desc:'La base de toda buena noche.',                       cost:10,    prod:0.1,  cbonus:0,   base:10    },
      { id:'porro',  name:'Porro Artesanal',      icon:'🌿', desc:'Con sus puntas y todo, como Dios manda.',            cost:80,    prod:0.5,  cbonus:0,   base:80    },
      { id:'tabaco', name:'Tabaco de Liar',       icon:'🚬', desc:'Rollo a rollo, la noche avanza.',                    cost:450,   prod:2,    cbonus:1,   base:450   },
      { id:'cbd',    name:'CBD Premium',           icon:'💚', desc:'Legal y potente. Para los nervios del alma.',        cost:2200,  prod:10,   cbonus:4,   base:2200  },
      { id:'polvo',  name:'Polvo de Limpieza ✨', icon:'🤧', desc:'Mantiene el local muy limpio... toda la noche.',     cost:12000, prod:50,   cbonus:12,  base:12000 },
      { id:'after',  name:'Afterparty VIP',        icon:'🏠', desc:'La after siempre acaba en el tuyo.',                cost:50000, prod:200,  cbonus:40,  base:50000 },
      { id:'talco',  name:'Talco Colombiano ☃️',  icon:'❄️', desc:'El importado de calidad superior. Uso personal.',   cost:200000,prod:500,  cbonus:90,  base:200000},
    ],
    msgs:['Las 4AM son las 4PM del fuerte.','Dormir es de muertos, tío.','El sol sale para todos... yo no lo veo.','¿Cansado? No he oído esa palabra.','Una más y me voy. Llevo 3 horas diciendo esto.','El CBD es medicinal. Te lo juro con la mano en el corazón.','Esta noche sí que sí. DOBLETAZO activado.','La resaca es para los débiles.','El hígado es un órgano resiliente. Lo he leído en algún sitio.'],
  },

  noah: {
    id: 'noah', name: 'Noah', role: '📱 El Scrolleador Profesional',
    desc: 'No lo llamaría adicción sino CONSTANCIA. Full focus en su TDAH.',
    currency: 'Likes', icon: '❤️', clickText: 'SCROLLEAR', clickIcon: '📱', btnText: '¡RETINAS AL FALLO!',
    theme: '#1a9be8', themeD: '#0a70b8', themeG: 'rgba(26,155,232,0.25)',
    special: 'noah',
    upgrades: [
      { id:'datos',     name:'Plan de Datos 5G',     icon:'📶', desc:'Sin wifi no hay vida. Es axiomático.',               cost:10,    prod:0.1,  cbonus:0,   base:10    },
      { id:'insta',     name:'Cuenta de Instagram',  icon:'📸', desc:'Fotos con filtro de sitios donde nunca has estado.', cost:80,    prod:0.5,  cbonus:0,   base:80    },
      { id:'tiktok',    name:'TikTok Viral',          icon:'🎵', desc:'Bailes que no sabes hacer pero intentas.',           cost:450,   prod:2,    cbonus:1,   base:450   },
      { id:'status',    name:'WhatsApp Status',       icon:'💬', desc:'Frases filosóficas a las 3AM.',                      cost:2200,  prod:10,   cbonus:4,   base:2200  },
      { id:'tick',      name:'Perfil Verificado ✅',  icon:'✅', desc:'La palomita azul que lo cambia todo.',               cost:12000, prod:50,   cbonus:12,  base:12000 },
      { id:'influencer',name:'Influencer Local',      icon:'⭐', desc:'Famoso en un radio de 3 km.',                        cost:50000, prod:200,  cbonus:40,  base:50000 },
      { id:'premium',   name:'Suscripción Premium 🔞',icon:'🔥', desc:'Inversión necesaria. Para la investigación, claro.', cost:200000,prod:500,  cbonus:90,  base:200000},
    ],
    msgs:['Scrolleando que es gerundio.','Esta foto tiene buena luz, ¿me pongo aquí?','Le he dado like sin querer. Me muero.','El algoritmo me conoce mejor que mi madre.','Ha abierto el chat y no contesta. ¿QUÉ SIGNIFICA ESO?','Esta canción de TikTok llevo 3 días en la cabeza.','Otro story. ¿Le doy al ❤️ o parece demasiado?','Mis pulgares son atletas de élite.','¡SOCORRO! ...Era una gaviota.','La Voz me llama el Héroe de Salinas. Solo hice mi trabajo.','Hoy el agua está traicionera. Tengo TikTok abierto por si acaso.','El bañista sobrevivió. El artículo en La Voz, también.'],
  },

  diego: {
    id: 'diego', name: 'Diego', role: '🏠 El Cabezapisos', photo: 'vilachu',
    desc: 'Habla sin parar. Sabe el precio del metro cuadrado en Salinas de memoria. Cerdo trufero de primera.',
    currency: 'Palabras', icon: '💬', clickText: '¡YAPEAR!', clickIcon: '🗣️', btnText: '¡A SOLTAR CHAPA!',
    theme: '#e76f51', themeD: '#b5451e', themeG: 'rgba(231,111,81,0.25)',
    special: 'diego',
    upgrades: [
      { id:'movil_agente', name:'Móvil del Agente',    icon:'📱', desc:'Para llamar a la promotora a las 9 de la mañana.',         cost:10,     prod:0.1,  cbonus:0,   base:10     },
      { id:'idealista',    name:'Idealista Premium',   icon:'🏠', desc:'Alertas al instante. Llegas el primero... casi.',          cost:80,     prod:0.5,  cbonus:1,   base:80     },
      { id:'hipoteca',     name:'Hipoteca 30 años',    icon:'🏦', desc:'30 años pagando. El piso es tuyo. Más o menos.',           cost:450,    prod:2,    cbonus:2,   base:450    },
      { id:'arras',        name:'Contrato de Arras',   icon:'📝', desc:'Firmado. Ya no hay vuelta atrás para nadie.',              cost:2200,   prod:10,   cbonus:5,   base:2200   },
      { id:'agente',       name:'Agente Inmobiliario', icon:'🤝', desc:'Contacto en todas las promotoras de Castrillón.',          cost:6000,   prod:28,   cbonus:10,  base:6000   },
      { id:'piso_playa',   name:'Piso Primera Línea',  icon:'🌊', desc:'Vista al mar. Diego yapar con vistas al agua.',            cost:12000,  prod:50,   cbonus:15,  base:12000  },
      { id:'promotora',    name:'Promotora Propia',    icon:'🏗️', desc:'Ya no compra pisos. Los construye y los vende.',          cost:60000,  prod:200,  cbonus:50,  base:60000  },
      { id:'monopolio',    name:'Monopolio Castrillón',icon:'🏆', desc:'Todo el municipio. Cada piso, cada garaje. Tuyo.',         cost:250000, prod:600,  cbonus:120, base:250000 },
    ],
    msgs: [
      '¿Has visto lo que vale el metro cuadrado en Salinas ahora mismo?',
      'Yo es que el alquiler lo veo tirado de precio. Cómprate algo.',
      'Mi hipoteca me sale más barata que un alquiler. Que conste.',
      'El mercado inmobiliario está loco pero hay oportunidades si sabes buscar.',
      'En Castrillón todavía hay suelo disponible. Por ahora.',
      'Idealista me mandó tres alertas esta mañana. Las tres volaron.',
      'Las arras ya están firmadas. Ahora a esperar la notaría.',
      'La playa de Salinas en agosto vale el doble. Inversión pura.',
      'Yo no hablo mucho, hablo lo necesario. Que son muchas cosas.',
      '¿Primera o segunda línea de playa? Primera. Siempre primera.',
      'Una derecha perfecta. El cerdo trufero sabe lo que hace.',
      'Solo cojo derechas. Las izquierdas no existen en mi tabla.',
    ],
  },

  weeman4k: {
    id: 'weeman4k', name: 'Weeman4k', role: '🎬 El Fotógrafo con Problemillas',
    desc: 'Talento sin límites. Agenda sin fondo. Coopers tampoco ayuda.',
    currency: 'Tomas', icon: '🎬', clickText: '¡DISPARA!', clickIcon: '📸', btnText: '¡A GRABAR!',
    theme: '#e0007a', themeD: '#a8005a', themeG: 'rgba(224,0,122,0.25)',
    special: 'weeman4k',
    upgrades: [
      { id:'camara_foto',    name:'Cámara Réflex',      icon:'📷', desc:'F2.8, bokeh garantizado. Arte al cuello.',             cost:10,    prod:0.1,  cbonus:0,   base:10    },
      { id:'camara_video',   name:'Cámara de Vídeo',   icon:'🎥', desc:'24fps. Si no está en RAW no existe.',                 cost:80,    prod:0.5,  cbonus:1,   base:80    },
      { id:'dron',           name:'Dron DJI',           icon:'🚁', desc:'Planos aéreos sin pedir permiso. Artistazo.',          cost:450,   prod:2,    cbonus:2,   base:450   },
      { id:'camara_bodas',   name:'Cámara de Bodas',   icon:'💍', desc:'La que paga el alquiler. Y el dron.',                  cost:2200,  prod:10,   cbonus:5,   base:2200  },
      { id:'crowdfunding',   name:'Crowdfunding',       icon:'💸', desc:'Campaña de financiación. La gente cree en ti. Raro.', cost:6000,  prod:28,   cbonus:10,  base:6000  },
      { id:'gimbal',         name:'Gimbal Movi',        icon:'🎞️', desc:'Estabiliza el plano. Lo inestable es tu vida.',       cost:12000, prod:50,   cbonus:15,  base:12000 },
      { id:'estudio',        name:'Estudio Propio',     icon:'💡', desc:'La guarida. Huele a cable quemado y ambición.',       cost:60000, prod:200,  cbonus:50,  base:60000 },
      { id:'productora',     name:'Weeman4k Films',     icon:'🏆', desc:'Weeman4k Films. El nombre ya lo dice todo.',           cost:250000,prod:600,  cbonus:120, base:250000},
    ],
    msgs:[
      '¿El contrato? Está en proceso.',
      'Coopers, eso no se come. ...Coopers.',
      'Las bodas pagan pero el alma llora un poco.',
      'Plano perfecto. El cliente quería algo más movido.',
      'La batería murió. El momento se perdió para siempre.',
      'El RAW ocupa 4GB. El disco, 4.1GB libres.',
      'Coopers ha encontrado algo en la calle. No quiero saber qué.',
      'El dron lleva tres días calibrándose.',
      'Cliente: ¿puedes hacerlo más viral? Daigo: ...',
      'Lucia Martiño no entiende el arte visual. Nadie lo entiende.',
      'Coopers apesta a jamón otra vez.',
      'Cuatro perfects y la vida tiene sentido.',
      'BRRRRRRRRRRRRRRRRRR',
      'El código era LUCI. Siempre fue LUCI.',
      '¡Que tengo 37 años! Un poco de respeto, coño.',
      'Esto debería ser un SWELL EVENT. Lo debería.',
      'Footage sickness. Se lo diagnosticaron en el Triskel.',
    ],
  },

  nanduko: {
    id: 'nanduko', name: 'Nanduko', role: '💊 El Empresario Independiente',
    desc: 'Cara de siempre estar a punto de cagarse de risa, alma de hombre de negocios. Su empresa de distribución alternativa no falla. La policía, tampoco.',
    currency: 'Pasta', icon: '💵', clickText: '¡TRATO HECHO!', clickIcon: '🤝', btnText: '¡A facturar!',
    theme: '#2ecc71', themeD: '#18a050', themeG: 'rgba(46,204,113,0.22)',
    special: 'nanduko',
    upgrades: [
      { id:'porro',    name:'Porros del Barrio',     icon:'🌿', desc:'El clásico. Lo pides, llega en 10 min.',             cost:10,    prod:0.1,  cbonus:0,   base:10    },
      { id:'pastis',   name:'Pastillas del Club',    icon:'💊', desc:'Cuando la música no pega sola.',                     cost:80,    prod:0.5,  cbonus:0,   base:80    },
      { id:'hachis',   name:'Hachís Marroquí',       icon:'🟫', desc:'Importación directa. Calidad garantizada.',          cost:450,   prod:2,    cbonus:1,   base:450   },
      { id:'especial', name:'Pedido Especial 🤫',    icon:'📦', desc:'No preguntes qué hay dentro. Solo confía.',          cost:2200,  prod:10,   cbonus:4,   base:2200  },
      { id:'red',      name:'Red de Distribución',   icon:'🗺️', desc:'Tienes a los chicos en 5 barrios.',                  cost:12000, prod:50,   cbonus:12,  base:12000 },
      { id:'colombia', name:'Contacto Colombiano',   icon:'✈️', desc:'Vuelos frecuentes. Por motivos de trabajo.',         cost:50000, prod:200,  cbonus:40,  base:50000 },
      { id:'cartel',   name:'Cartel La Peñona 👑',   icon:'👑', desc:'El barrio entero es tuyo, empresario.',              cost:200000,prod:500,  cbonus:90,  base:200000},
    ],
    msgs:['Los negocios van bien, no me quejo.','El cliente siempre tiene razón... más o menos.','Esta tarde tengo varias reuniones de trabajo.','Cara de bueno, mente de empresario nato.','La policía hace rondas. Hay que moverse.','El dinero no da la felicidad pero quita el hambre.','Stock bajo. Hay que reabastecerse urgente.'],
  },

  extraperlo: {
    id: 'extraperlo', name: 'MODO EXTRAPERLO', role: '🎪 Modo Caos Total',
    desc: '¿Por qué elegir uno cuando puedes tenerlos a todos? El modo Extraperlo mezcla todo. Con Roca Pintada suelta por ahí.',
    currency: 'Caos', icon: '🌀', clickText: '¡EXTRÁPERLALO!', clickIcon: '🎪', btnText: '¡PA DENTRO!',
    theme: '#e63946', themeD: '#b01828', themeG: 'rgba(230,57,70,0.28)',
    special: 'extraperlo',
    upgrades: [
      { id:'entrada',    name:'Entrada de Festival',  icon:'🎟️', desc:'La base de todo buen caos.',                        cost:15,    prod:0.2,  cbonus:0,   base:15    },
      { id:'botella',    name:'Botella en Mochila',   icon:'🍾', desc:'El contrabando festivalero básico.',                 cost:100,   prod:1,    cbonus:1,   base:100   },
      { id:'pase',       name:'Pase VIP',             icon:'🏷️', desc:'Acceso a todo menos al backstage.',                  cost:600,   prod:4,    cbonus:2,   base:600   },
      { id:'dj',         name:'Amigo del DJ',         icon:'🎧', desc:'Te pone en la cabina. Casi.',                        cost:3000,  prod:16,   cbonus:6,   base:3000  },
      { id:'promotor',   name:'Promotor del Festival',icon:'📣', desc:'Tu nombre en el cartel... pequeñito.',               cost:15000, prod:70,   cbonus:20,  base:15000 },
      { id:'caos',       name:'Organizador del Caos', icon:'🌀', desc:'Controlas el festival con puño de hierro.',          cost:60000, prod:280,  cbonus:60,  base:60000 },
      { id:'xtraperlo',  name:'El Extraperlo Total',  icon:'👑', desc:'Técnicas, Procedimientos y Roca Pintada a tus pies.',cost:250000,prod:700,  cbonus:120, base:250000},
    ],
    msgs:['¡El festival nunca para!','¿Has visto a Roca Pintada? Andan sueltos por ahí.','Técnicas y Procedimientos en dos horas. ¡Aguanta!','David Moreira está en el backstage. No metas.','La barra ya no tiene cerveza fría. Es la anarquía.','¡El caos es el plan!','Alguien ha montado un after en la tienda del camping.','¿Quién ha organizado esto? ¡Nadie! ¡Por eso mola!'],
  },
};

// ================================================================
//  ACHIEVEMENTS
// ================================================================
const ACHIEVEMENTS = {
  muchaga: [
    { id:'primera_ronda',  icon:'☕', name:'Primera Ronda',       desc:'Sirve tus primeras 50 cañas.',                                cond: s => s.totalCurrency >= 50 },
    { id:'grifo_no_para',  icon:'🍺', name:'El Grifo No Para',    desc:'Compra tu primer grifo de cerveza.',                          cond: s => (s.upgrades.cana||0) >= 1 },
    { id:'maestro_bar',    icon:'🥃', name:'Maestro del Bar',     desc:'500 cañas. Ya eres un profesional.',                          cond: s => s.totalCurrency >= 500 },
    { id:'primera_pelea',  icon:'🥊', name:'Primer Puñetazo',     desc:'Primer altercado en el bar. Normal para un jueves.',          cond: s => (s.achData.fightWins||0) + (s.achData.fightLosses||0) >= 1 },
    { id:'campeon_barra',  icon:'💪', name:'Campeón de la Barra', desc:'Esquiva 5 veces seguidas. Muchaga es ágil a su manera.',      cond: s => (s.achData.fightWins||0) >= 5 },
    { id:'whyshkeys_1',    icon:'🤯', name:'¡WHISKY!',             desc:'Primera vez que gritas WHISKY. Inevitable.',                  cond: s => (s.achData.wskActivations||0) >= 1 },
    { id:'whyshkeys_win',  icon:'🃏', name:'El Dominó de la Paz', desc:'Para tu primera gresca en el dominó. Autoridad moral.',       cond: s => (s.achData.fightWins||0) >= 1 },
    { id:'barril_inf',     icon:'🛢️', name:'El Barril Sin Fondo', desc:'5000 cañas. La leyenda del bar.',                             cond: s => s.totalCurrency >= 5000 },
    { id:'dardos_king',    icon:'🎯', name:'Campeón de los Dardos', desc:'Instala el tablero. Los jubilados ya tienen plan para el día.', cond: s => (s.upgrades.dardos||0) >= 1 },
    { id:'maquina',        icon:'🎰', name:'El Traga Tragado',    desc:'Instala la tragaperras. Tres limones y a llorar.',             cond: s => (s.upgrades.maquina||0) >= 1 },
    { id:'madrugador',     icon:'🌅', name:'El Primero del Bar',  desc:'3 minutos seguidos detrás de la barra.',                      cond: s => (s.achData.timeSec||0) >= 180 },
    { id:'institucion',    icon:'🏆', name:'Institución del Barrio', desc:'50000 cañas. El bar es tuyo.',                             cond: s => s.totalCurrency >= 50000 },
  ],
  fita: [
    { id:'primera_birra',  icon:'🍺', name:'Primera Birra',         desc:'50 vicios acumulados. La noche empieza.',                    cond: s => s.totalCurrency >= 50 },
    { id:'porro_medic',    icon:'💚', name:'El Porro Medicinal',    desc:'Compra CBD. Medicinal. Tú mismo lo dijiste.',                 cond: s => (s.upgrades.cbd||0) >= 1 },
    { id:'dobletazo_1',    icon:'⚡', name:'¡DOBLETAZO!',           desc:'Primer dobletazo. El material funciona.',                    cond: s => (s.achData.dobletazos||0) >= 1 },
    { id:'dobletazo_10',   icon:'⚡⚡', name:'Material de Calidad', desc:'10 dobletazos. El hígado pide la baja.',                     cond: s => (s.achData.dobletazos||0) >= 10 },
    { id:'quies_una',      icon:'👃', name:'¿Quiés una?',           desc:'Acepta la oferta por primera vez. Con confianza.',           cond: s => (s.achData.yeyoWins||0) + (s.achData.yeyoFails||0) >= 1 },
    { id:'triplete',       icon:'🚀', name:'¡TRIPLETE!',            desc:'Consigue 3 TRIPLETES. Fita en modo bestia.',                cond: s => (s.achData.yeyoWins||0) >= 3 },
    { id:'rascadura',      icon:'🧱', name:'Rascadura de Pared',    desc:'Era la pared. La cara lo dice todo.',                        cond: s => (s.achData.yeyoFails||0) >= 1 },
    { id:'noctambulo',     icon:'🌙', name:'Noctámbulo',            desc:'3 minutos. El cuerpo pide más.',                             cond: s => (s.achData.timeSec||0) >= 180 },
    { id:'inmortal',       icon:'💪', name:'El Inmortal',           desc:'5000 vicios. Fita no conoce el límite.',                     cond: s => s.totalCurrency >= 5000 },
    { id:'polvo_total',    icon:'❄️', name:'Polvo Total',           desc:'Compra el Talco Colombiano. Calidad importada.',             cond: s => (s.upgrades.talco||0) >= 1 },
    { id:'ultimo_salir',   icon:'🔑', name:'El Último en Salir',    desc:'5 minutos. ¿Cuándo fue la última vez que dormiste?',         cond: s => (s.achData.timeSec||0) >= 300 },
    { id:'leyenda_noche',  icon:'🦉', name:'Leyenda de La Noche',   desc:'50000 vicios. El sol se asoma y tú sigues aquí.',            cond: s => s.totalCurrency >= 50000 },
  ],
  noah: [
    { id:'primer_like',    icon:'❤️', name:'Primer Like',           desc:'50 likes. El algoritmo te sonríe.',                          cond: s => s.totalCurrency >= 50 },
    { id:'primer_flirt',   icon:'💬', name:'Primer Flirteo',        desc:'Primer intento de ligue. Lo importante es intentarlo.',      cond: s => (s.achData.chicaTotal||0) >= 1 },
    { id:'lothario',       icon:'💘', name:'Lothario del Barrio',   desc:'Liga 3 veces. Noah tiene su público.',                       cond: s => (s.achData.chicaLiga||0) >= 3 },
    { id:'rechazado',      icon:'😬', name:'Los Mocos No Paran',    desc:'Rechazado 5 veces. La estadística es cruel.',                 cond: s => (s.achData.chicaFails||0) >= 5 },
    { id:'farmacia',       icon:'💊', name:'Cliente Habitual',      desc:'Visita la farmacia. El farmacéutico ya te conoce.',           cond: s => (s.achData.farmacia||0) >= 1 },
    { id:'tiktok_addict',  icon:'🎵', name:'TikTok Addict',         desc:'Compra TikTok Viral. Tres horas en un segundo.',             cond: s => (s.upgrades.tiktok||0) >= 1 },
    { id:'verificado',     icon:'✅', name:'Verificado',            desc:'Consigue la palomita azul. Lo cambia todo.',                 cond: s => (s.upgrades.tick||0) >= 1 },
    { id:'screen_time',    icon:'📱', name:'15h de Pantalla',       desc:'Ya llevas 5 minutos scrolleando. Eso en pantalla son 15h.',  cond: s => (s.achData.timeSec||0) >= 300 },
    { id:'sin_std',        icon:'🧬', name:'Dos Veces Curado',      desc:'Visita la farmacia 2 veces. Las consecuencias acumulan.',    cond: s => (s.achData.farmacia||0) >= 2 },
    { id:'viral',          icon:'🚀', name:'¡VIRAL!',               desc:'5000 likes. El influencer que todos quieren ser.',            cond: s => s.totalCurrency >= 5000 },
    { id:'influencer_loc', icon:'⭐', name:'Influencer Local',      desc:'Famoso en 3 km² de radio.',                                  cond: s => (s.upgrades.influencer||0) >= 1 },
    { id:'rey_scroll',     icon:'👑', name:'Rey del Scroll',        desc:'50000 likes. Fenómeno digital, Noah.',                       cond: s => s.totalCurrency >= 50000 },
    { id:'socorrista',     icon:'🏊', name:'Socorrista de Salinas',  desc:'Primer rescate. La Voz de Asturias te pone en portada.',      cond: s => (s.achData.rescates||0) >= 1 },
    { id:'primera_plana',  icon:'📰', name:'Primera Plana',          desc:'3 rescates. Mamá ha recortado el artículo y lo tiene en la nevera.', cond: s => (s.achData.rescates||0) >= 3 },
  ],
  diego: [
    { id:'primera_palabra',  icon:'💬', name:'Primera Chapa',        desc:'50 palabras. El rollo ha empezado y no va a parar.',          cond: s => s.totalCurrency >= 50 },
    { id:'modo_yapping',     icon:'🔥', name:'Modo Yapping',          desc:'Barra de chapa al 80%. Diego en modo cháchara total.',        cond: s => (s.achData.chapaMax||0) >= 80 },
    { id:'yapping_supremo',  icon:'🎙️', name:'Yapping Supremo',      desc:'Activa el Yapping Supremo. ×5. Diego imparable.',             cond: s => (s.achData.yappingSupremos||0) >= 1 },
    { id:'primer_piso',      icon:'🏠', name:'Primer Piso Visitado',  desc:'Primera alerta de Idealista atendida. Llegas el primero.',    cond: s => (s.achData.pisosVisitados||0) >= 1 },
    { id:'salinas_premium',  icon:'⭐', name:'¡Salinas!',             desc:'Visitas un piso en Salinas. Eso no se ve todos los días.',    cond: s => (s.achData.salinasVisitados||0) >= 1 },
    { id:'cerdo_trufero',    icon:'🐷', name:'Cerdo Trufero',         desc:'Surfeas 3 olas derechas. Solo derechas, como Dios manda.',    cond: s => (s.achData.olasDerechas||0) >= 3 },
    { id:'mal_humor',        icon:'😤', name:'Mal Humor',             desc:'Cogiste una izquierda. Error imperdonable.',                  cond: s => (s.achData.olasIzquierdas||0) >= 1 },
    { id:'silencio',         icon:'😶', name:'Silencio Incómodo',     desc:'Diego pierde el hilo. Pasa pocas veces pero pasa.',           cond: s => (s.achData.silenciosIncomodos||0) >= 1 },
    { id:'hipotecado',       icon:'🏦', name:'Hipotecado',            desc:'Firma la hipoteca. 30 años de compromiso.',                   cond: s => (s.upgrades.hipoteca||0) >= 1 },
    { id:'idealista_pro',    icon:'📲', name:'Idealista Pro',         desc:'5 pisos visitados. El agente te llama antes de publicar.',    cond: s => (s.achData.pisosVisitados||0) >= 5 },
    { id:'en_la_zona_diego', icon:'⏱️', name:'En La Zona',           desc:'3 minutos yapando. La chapa no tiene límite.',               cond: s => (s.achData.timeSec||0) >= 180 },
    { id:'monopolio_castri', icon:'🏆', name:'Monopolio Castrillón',  desc:'250000 palabras. Todo el municipio te conoce.',               cond: s => s.totalCurrency >= 250000 },
  ],
  weeman4k: [
    { id:'primera_toma',   icon:'🎬', name:'Primera Toma',         desc:'50 tomas acumuladas. El rodaje ha comenzado.',               cond: s => s.totalCurrency >= 50 },
    { id:'reflex',         icon:'📷', name:'Ojo Artístico',         desc:'Compra la réflex. Ahora sí que eres fotógrafo.',             cond: s => (s.upgrades.camara_foto||0) >= 1 },
    { id:'sin_manchar',    icon:'💩', name:'Sin Manchar',           desc:'Evita 5 cagadas en la calle. La acera te lo agradece.',      cond: s => (s.achData.cagadasEvitadas||0) >= 5 },
    { id:'looteo',         icon:'🍕', name:'Del Mantel Ajeno',      desc:'Primer looteo exitoso. Coopers tiene mucha iniciativa.',     cond: s => (s.achData.looteos||0) >= 1 },
    { id:'triskel',        icon:'🐾', name:'Triskel',               desc:'Lava a Coopers 3 veces. El Triskel ya te conoce.',           cond: s => (s.achData.jamones||0) >= 3 },
    { id:'perfect_1',      icon:'💥', name:'¡PERFECT!',             desc:'Primer punto perfect. La diarrea como arte.',                cond: s => (s.achData.perfectHits||0) >= 1 },
    { id:'ultra',          icon:'⚡', name:'ULTRAPERFECT',          desc:'Activa ULTRAPERFECT. 4 perfects, una leyenda.',              cond: s => (s.achData.ultraActivations||0) >= 1 },
    { id:'papa_rabioso',   icon:'😤', name:'Papá Rabioso',          desc:'Primera vez. Lucia Martiño ya sabe quién es Weeman4k.',         cond: s => (s.achData.papaRabiosoHits||0) >= 1 },
    { id:'dron_rey',       icon:'🚁', name:'Rey del Aire',          desc:'Instala el dron. El barrio visto desde arriba.',             cond: s => (s.upgrades.dron||0) >= 1 },
    { id:'molinillo_1',    icon:'🌀', name:'El Molinillo',          desc:'Primer molinillo completado. Arte en estado puro.',         cond: s => (s.achData.molinillos||0) >= 1 },
    { id:'en_la_zona',     icon:'⏱️', name:'En La Zona',           desc:'3 minutos grabando. El flow está activado.',                 cond: s => (s.achData.timeSec||0) >= 180 },
    { id:'daigo_films',    icon:'🏆', name:'Weeman4k Films',         desc:'50000 tomas. El mundo cinematográfico tiembla.',            cond: s => s.totalCurrency >= 50000 },
    { id:'treinta_y_siete',icon:'🎂', name:'¡Que Tengo 37!',         desc:'37 segundos en el set. La edad del artista en su plenitud.',cond: s => (s.achData.timeSec||0) >= 37 },
    { id:'swell_event',    icon:'🎉', name:'SWELL EVENT',             desc:'5 eventos de Coopers superados. Ha sido un SWELL EVENT.',  cond: s => (s.achData.cooperInteractions||0) >= 5 },
    { id:'footage_sickness',icon:'🤢',name:'Footage Sickness',        desc:'Demasiado metraje. El disco duro llora solo.',              cond: s => s.totalCurrency >= 7500 },
  ],
  nanduko: [
    { id:'primer_trato',   icon:'🤝', name:'Primer Trato',          desc:'50 pasta. El negocio ha comenzado.',                         cond: s => s.totalCurrency >= 50 },
    { id:'reunión_baño',   icon:'🚽', name:'Reunión de Negocios',   desc:'Primera reunión en el baño. El entorno no importa.',         cond: s => (s.achData.banyoWins||0) >= 1 },
    { id:'banyo_pro',      icon:'🤫', name:'Discreto Total',        desc:'3 reuniones en el baño. Eficiencia empresarial.',            cond: s => (s.achData.banyoWins||0) >= 3 },
    { id:'primera_huida',  icon:'🏃', name:'Primera Huida',         desc:'Escapa de la poli. Pies que os quiero.',                     cond: s => (s.achData.policeEscapes||0) >= 1 },
    { id:'sin_rastro',     icon:'👻', name:'Sin Rastro',            desc:'Escapa 5 veces. Nanduko es como el humo.',                   cond: s => (s.achData.policeEscapes||0) >= 5 },
    { id:'pillado',        icon:'👮', name:'Experiencias Formativas',desc:'Que te pillen 3 veces. Forma parte del proceso.',            cond: s => (s.achData.policeCaptures||0) >= 3 },
    { id:'red_activa',     icon:'🗺️', name:'Red Activa',            desc:'Compra la red de distribución. Empresario nato.',            cond: s => (s.upgrades.red||0) >= 1 },
    { id:'colombia',       icon:'✈️', name:'Viaje de Negocios',     desc:'Contacto colombiano activado. Frecuencia mensual.',          cond: s => (s.upgrades.colombia||0) >= 1 },
    { id:'raices_escape', icon:'🛤️', name:'Conozco el Camino',     desc:'Esquiva a la guardia en Raíces. Terreno propio.',            cond: s => (s.achData.raicesEscapes||0) >= 1 },
    { id:'raices_pro',    icon:'🏎️', name:'Piloto de Raíces',      desc:'5 veces sin que te pille la guardia. Eres un fantasma.',     cond: s => (s.achData.raicesEscapes||0) >= 5 },
    { id:'magnate',        icon:'💰', name:'Magnate',               desc:'5000 pasta. El barrio huele a éxito.',                       cond: s => s.totalCurrency >= 5000 },
    { id:'pablo',          icon:'🦁', name:'Pablo Nanduko',         desc:'50000 pasta. El cartel más temido del club.',                cond: s => s.totalCurrency >= 50000 },
  ],
  extraperlo: [
    { id:'bienvenido',     icon:'🎪', name:'Bienvenido al Caos',    desc:'Entra al modo Extraperlo. Sin retorno.',                     cond: s => s.totalClicks >= 1 },
    { id:'roca_1',         icon:'🤜', name:'¡Roca Pintada!',        desc:'Pega a Roca Pintada por primera vez. Por el arte.',          cond: s => (s.achData.rocaHits||0) >= 1 },
    { id:'roca_5',         icon:'🎸', name:'Enemigo del Rock',      desc:'5 encuentros con Roca Pintada. Son persistentes.',           cond: s => (s.achData.rocaHits||0) >= 5 },
    { id:'vasos_1',        icon:'🧼', name:'Limpiabarras',          desc:'Limpia vasos por primera vez. La dignidad es relativa.',     cond: s => (s.achData.vasosLimpiados||0) >= 1 },
    { id:'vasos_5',        icon:'🗑️', name:'Del Contenedor',        desc:'5 rondas de vasos. El olfato ya no funciona.',               cond: s => (s.achData.vasosLimpiados||0) >= 5 },
    { id:'triplete_xp',    icon:'⚡', name:'Triplete Extraperlo',   desc:'Consigue el TRIPLETE en modo caos total.',                   cond: s => (s.achData.yeyoWins||0) >= 1 },
    { id:'festivalero',    icon:'🎡', name:'Festivales Hasta el Alba',desc:'10 minutos en modo Extraperlo. Sobrevives.',               cond: s => (s.achData.timeSec||0) >= 600 },
    { id:'sin_vasos',      icon:'🧹', name:'Ni un Vaso en Pie',       desc:'Limpia 10 rondas de vasos. El suelo ya no se ve.',          cond: s => (s.achData.vasosLimpiados||0) >= 10 },
    { id:'roca_10',        icon:'🎤', name:'Técnicas y Procedimientos',desc:'10 encuentros con Roca Pintada. Ya os conocéis demasiado.', cond: s => (s.achData.rocaHits||0) >= 10 },
    { id:'caos_5k',        icon:'🌀', name:'¡Otra Ronda!',          desc:'5000 caos acumulados. El festival no para.',                 cond: s => s.totalCurrency >= 5000 },
    { id:'pase_vip',       icon:'🏷️', name:'Pase VIP Conseguido',  desc:'Hazte con el pase VIP. Acceso a casi todo.',                 cond: s => (s.upgrades.pase||0) >= 1 },
    { id:'leyenda_xp',     icon:'🏆', name:'Leyenda del Extraperlo',desc:'50000 caos. Técnicas y Procedimientos te piden una foto.',  cond: s => s.totalCurrency >= 50000 },
  ],
};

// ================================================================
//  GAME STATE
// ================================================================
let S = {
  pid: null, currency: 0, totalCurrency: 0, totalClicks: 0, upgrades: {},
  // Muchaga
  wskActive: false, wskEnd: 0, wskCoolEnd: 0,
  pizzaActive: false, pizzaClicked: null, pizzaTimer: null,
  furiaLevel: 0, grescaActive: false, grescaNeed: 0, grescaDone: 0, grescaTimer: null,
  // Fita
  energy: 100, tripleActive: false, tripleEnd: 0,
  yeyoActive: false, debuffEnd: 0, dblCoolEnd: 0,
  chupaActive: false, chupaTimer: null, chupaCorners: null, chupaNeed: 0,
  // Muchaga fight
  fightActive: false, fightTimer: null, fightPunch: null, fightReacted: false,
  // Noah
  app: 'instagram', appLit: 'instagram', chicaActive: false, chicaTimer: null, stdActive: false,
  ahogadoActive: false, ahogadoTimer: null, ahogadoDone: 0, ahogadoNeed: 0, ahogadoTimerEnd: 0, ahogadoBuffEnd: 0, ahogadoDebuffEnd: 0,
  // Diego
  chapa: 0, chapaSilencioActive: false, chapaSilencioEnd: 0, yappingActive: false, yappingEnd: 0,
  idealistaActive: false, idealistaTimer: null, idealistaPiso: null, idealistaBuffEnd: 0, idealistaBuffMult: 1,
  olaActive: false, olaDir: null, olaTimer: null, olaRevealed: false, olaBuffEnd: 0, olaDebuffEnd: 0,
  interrumpidorActive: false, interrumpidorTimer: null, callarBuffEnd: 0,
  salinasConteo: 0,
  // Nanduko
  policeActive: false, policeTimer: null, policeNeed: 0, policeDone: 0,
  banyoActive: false, banyoTimer: null, banyoBuffEnd: 0,
  raicesActive: false, raicesTimer: null, raicesBad: null, raicesDebuffEnd: 0,
  // Weeman4k
  coopersPct: 0, coopersEvent: null, coopersTimer: null,
  coopersLootDone: 0, coopersLootNeed: 0, coopersLootDesc: '',
  coopersJamonDone: 0, coopersJamonNeed: 0,
  diarrea: 0, diarreaReady: false, diarreaTimer: null,
  papaRabioso: false, papaClicks: 0, papaNeed: 0, papaTimer: null,
  ultraActive: false, ultraEnd: 0,
  molinilloActive: false, molinilloDone: 0, molinilloNeed: 0, molinilloTimer: null, molinilloBuffEnd: 0,
  cooperLootBuffEnd: 0, cooperJamonBuffEnd: 0, papaBuffEnd: 0, cagadaDebuffEnd: 0,
  // Extraperlo
  rocaActive: false, rocaTimer: null, rocaNeed: 0, rocaDone: 0,
  vasosActive: false, vasosTimer: null, vasosNeed: 0, vasosDone: 0, vasosFrase: '',
  // Shared tracking for achievements
  achData: {
    wskActivations:0, wskWins:0, dobletazos:0,
    chicaTotal:0, chicaLiga:0, chicaFails:0, farmacia:0,
    policeEscapes:0, policeCaptures:0, rocaHits:0, timeSec:0,
    raicesEscapes:0, raicesCaptures:0,
    cooperInteractions:0, cagadasEvitadas:0, cagadasRecogidas:0,
    looteos:0, jamones:0, perfectHits:0, perfectPoints:0,
    ultraActivations:0, papaRabiosoHits:0, molinillos:0,
    rescates:0,
    chapaMax:0, yappingSupremos:0, silenciosIncomodos:0, pisosVisitados:0, salinasVisitados:0, olasDerechas:0, olasIzquierdas:0,
  },
  achievements: {},
};

// ================================================================
//  INIT
// ================================================================
document.addEventListener('DOMContentLoaded', renderSelection);

const UNLOCK_ORDER = ['muchaga', 'noah', 'diego', 'weeman4k', 'fita', 'nanduko', 'extraperlo'];

function isCharUnlocked(pid) {
  if (localStorage.getItem('penona_unlock_all') === '1') return true;
  const idx = UNLOCK_ORDER.indexOf(pid);
  if (idx <= 0) return true;
  const prevPid = UNLOCK_ORDER[idx - 1];
  const prevSave = loadSave(prevPid);
  const prevAchs = ACHIEVEMENTS[prevPid] || [];
  if (!prevAchs.length) return true;
  const done = prevAchs.filter(a => prevSave && prevSave.achievements && prevSave.achievements[a.id]).length;
  return done >= prevAchs.length;
}

function tryUnlockAll() {
  const input = document.getElementById('unlock-pass');
  if (!input) return;
  if (input.value === 'FITADINAMITA') {
    localStorage.setItem('penona_unlock_all', '1');
    renderSelection();
    toast('¡TODO DESBLOQUEADO! Caos absoluto habilitado.', '🔓');
  } else {
    toast('Contraseña incorrecta.', '❌');
    input.value = '';
  }
}

function resetAll() {
  if (!confirm('¿Resetear TODO? Se borrarán todas las partidas, logros y desbloqueos. Sin vuelta atrás.')) return;
  UNLOCK_ORDER.forEach(pid => {
    try { localStorage.removeItem(`penona_${pid}`); } catch(_) {}
  });
  try { localStorage.removeItem('penona_unlock_all'); } catch(_) {}
  renderSelection();
  toast('Reset completo. Todo borrado.', '🗑️');
}

function renderSelection() {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';

  UNLOCK_ORDER.forEach(pid => {
    const ch       = CHARS[pid];
    const unlocked = isCharUnlocked(pid);
    const card     = document.createElement('div');
    card.className = ch.id === 'extraperlo' ? 'char-card extraperlo-card' : 'char-card';
    if (!unlocked) card.className += ' locked';
    card.style.cssText = `--c-theme:${ch.theme};--c-glow:${ch.themeG};`;

    const photoBlock = ch.id === 'extraperlo'
      ? `<div class="char-avatar-wrap">${AVATARS.extraperlo}</div>`
      : `<img src="assets/${ch.photo || ch.id}.png"
              class="char-photo photo-${ch.id}"
              alt="${ch.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="char-avatar-wrap" style="display:none">${AVATARS[ch.id]}</div>`;

    const save         = loadSave(ch.id);
    const allAchs      = ACHIEVEMENTS[ch.id] || [];
    const unlockedAchs = save ? allAchs.filter(a => save.achievements && save.achievements[a.id]) : [];
    const achDone      = unlockedAchs.length;
    const achTotal     = allAchs.length;

    const achSection = unlocked && achTotal > 0 ? `
      <div class="card-ach-section">
        <div class="card-ach-header">
          <span class="card-ach-label">Logros</span>
          <span class="card-ach-count">${achDone}/${achTotal}</span>
        </div>
        <div class="card-ach-bar-wrap"><div class="card-ach-bar" style="width:${Math.floor((achDone/achTotal)*100)}%"></div></div>
        <div class="card-ach-grid">
          ${allAchs.map(a => {
            const got = save && save.achievements && save.achievements[a.id];
            return `<span class="card-ach-icon${got ? ' got' : ''}" title="${a.name}">${a.icon}</span>`;
          }).join('')}
        </div>
      </div>` : '';

    let bodyHtml;
    if (unlocked) {
      bodyHtml = `
        <div class="char-name">${ch.name}</div>
        <div class="char-role">${ch.role}</div>
        <div class="char-desc">${ch.desc}</div>
        ${achSection}
        <button class="char-btn" onclick="startGame('${ch.id}')">${ch.btnText}</button>`;
    } else {
      const idx      = UNLOCK_ORDER.indexOf(pid);
      const prevPid  = UNLOCK_ORDER[idx - 1];
      const prevCh   = CHARS[prevPid];
      const prevSave = loadSave(prevPid);
      const prevAchs = ACHIEVEMENTS[prevPid] || [];
      const done     = prevAchs.filter(a => prevSave && prevSave.achievements && prevSave.achievements[a.id]).length;
      bodyHtml = `
        <div class="char-name">${ch.name}</div>
        <div class="char-role">${ch.role}</div>
        <div class="char-lock-info">Completa todos los logros de <b>${prevCh.name}</b><br>
          <span class="lock-progress">${done}/${prevAchs.length} logros</span>
        </div>
        <button class="char-btn" disabled>🔒 Bloqueado</button>`;
    }

    const isNew = unlocked && localStorage.getItem(`penona_${pid}_new`) === '1';
    card.innerHTML = `
      <div class="char-photo-container">
        ${photoBlock}
        ${!unlocked ? '<div class="lock-overlay">🔒</div>' : ''}
        ${isNew ? '<div class="char-new-badge">¡NUEVO!</div>' : ''}
      </div>
      <div class="char-card-body">${bodyHtml}</div>
    `;
    grid.appendChild(card);
  });

  // Unlock all password form
  const existing = document.getElementById('unlock-form-wrap');
  if (existing) existing.remove();
  const formWrap = document.createElement('div');
  formWrap.id = 'unlock-form-wrap';
  formWrap.innerHTML = `
    <div class="unlock-form">
      <span class="unlock-label">DESBLOQUEAR TODO:</span>
      <input type="password" id="unlock-pass" class="unlock-input" placeholder="Contraseña..."
             onkeydown="if(event.key==='Enter')tryUnlockAll()">
      <button class="unlock-btn" onclick="tryUnlockAll()">→</button>
    </div>
    <div class="reset-form">
      <button class="reset-btn" onclick="resetAll()">🗑️ Resetear todo</button>
    </div>`;
  document.getElementById('selection-screen').appendChild(formWrap);
}

// ================================================================
//  START / STOP
// ================================================================
let tickId = null, msgId = null, tickN = 0;

function startGame(pid) {
  localStorage.removeItem(`penona_${pid}_new`);
  const ch   = CHARS[pid];
  const save = loadSave(pid);
  let useSave = false;

  if (save && save.totalCurrency > 0) {
    useSave = confirm(`¡${ch.name} tiene partida guardada! (${fmt(save.totalCurrency)} ${ch.currency} acumuladas)\n\n¿Continuar? (Cancelar = empezar de cero)`);
  }

  const baseUpg = Object.fromEntries(ch.upgrades.map(u => [u.id, 0]));

  S = {
    pid,
    currency:      useSave ? (save.currency      || 0) : 0,
    totalCurrency: useSave ? (save.totalCurrency  || 0) : 0,
    totalClicks:   useSave ? (save.totalClicks    || 0) : 0,
    upgrades:      useSave ? { ...baseUpg, ...save.upgrades } : baseUpg,
    wskActive: false, wskEnd: 0, wskCoolEnd: 0,
    pizzaActive: false, pizzaClicked: null, pizzaTimer: null,
    furiaLevel: 0, grescaActive: false, grescaNeed: 0, grescaDone: 0, grescaTimer: null,
    fightActive: false, fightTimer: null, fightPunch: null, fightReacted: false,
    energy:    useSave ? (save.energy ?? 100) : 100,
    tripleActive: false, tripleEnd: 0,
    yeyoActive: false, debuffEnd: 0, dblCoolEnd: 0,
    chupaActive: false, chupaTimer: null, chupaCorners: null, chupaNeed: 0,
    app:       useSave ? (save.app || 'instagram') : 'instagram',
    appLit: 'instagram',
    chicaActive: false, chicaTimer: null, stdActive: false,
    ahogadoActive: false, ahogadoTimer: null, ahogadoDone: 0, ahogadoNeed: 0, ahogadoTimerEnd: 0, ahogadoBuffEnd: 0, ahogadoDebuffEnd: 0,
    chapa: 0, chapaSilencioActive: false, chapaSilencioEnd: 0, yappingActive: false, yappingEnd: 0,
    idealistaActive: false, idealistaTimer: null, idealistaPiso: null, idealistaBuffEnd: 0, idealistaBuffMult: 1,
    olaActive: false, olaDir: null, olaTimer: null, olaRevealed: false, olaBuffEnd: 0, olaDebuffEnd: 0,
    interrumpidorActive: false, interrumpidorTimer: null, callarBuffEnd: 0,
    salinasConteo: 0,
    policeActive: false, policeTimer: null, policeNeed: 0, policeDone: 0,
    banyoActive: false, banyoTimer: null, banyoBuffEnd: 0,
    ligaBuffEnd: 0,
    raicesActive: false, raicesTimer: null, raicesBad: null, raicesDebuffEnd: 0,
    coopersPct: 0, coopersEvent: null, coopersTimer: null,
    coopersLootDone: 0, coopersLootNeed: 0, coopersLootDesc: '',
    coopersJamonDone: 0, coopersJamonNeed: 0,
    diarrea: 0, diarreaReady: false, diarreaTimer: null,
    papaRabioso: false, papaClicks: 0, papaNeed: 0, papaTimer: null,
    ultraActive: false, ultraEnd: 0,
    cooperLootBuffEnd: 0, cooperJamonBuffEnd: 0, papaBuffEnd: 0, cagadaDebuffEnd: 0,
    rocaActive: false, rocaTimer: null, rocaNeed: 0, rocaDone: 0,
    vasosActive: false, vasosTimer: null, vasosNeed: 0, vasosDone: 0, vasosFrase: '',
    achData: useSave && save.achData ? { raicesEscapes:0, raicesCaptures:0, cooperInteractions:0, cagadasEvitadas:0, cagadasRecogidas:0, looteos:0, jamones:0, perfectHits:0, perfectPoints:0, ultraActivations:0, papaRabiosoHits:0, ...save.achData } : {
      wskActivations:0, wskWins:0, dobletazos:0,
      fightWins:0, fightLosses:0,
      yeyoWins:0, yeyoFails:0,
      chicaTotal:0, chicaLiga:0, chicaFails:0, farmacia:0,
      policeEscapes:0, policeCaptures:0, banyoWins:0,
      rocaHits:0, vasosLimpiados:0, timeSec:0,
      raicesEscapes:0, raicesCaptures:0,
      cooperInteractions:0, cagadasEvitadas:0, cagadasRecogidas:0,
      looteos:0, jamones:0, perfectHits:0, perfectPoints:0,
      ultraActivations:0, papaRabiosoHits:0,
      rescates:0,
      chapaMax:0, yappingSupremos:0, silenciosIncomodos:0, pisosVisitados:0, salinasVisitados:0, olasDerechas:0, olasIzquierdas:0,
    },
    achievements: useSave && save.achievements ? save.achievements : {},
  };

  setTheme(ch);
  document.getElementById('hdr-center').textContent = `${ch.name} — ${ch.role}`;
  document.getElementById('hdr-icon').textContent   = ch.icon;

  // In-game avatar: photo for real characters, SVG for Extraperlo
  const avatarEl = document.getElementById('avatar-display');
  if (pid === 'extraperlo') {
    avatarEl.innerHTML = AVATARS.extraperlo;
  } else {
    avatarEl.innerHTML = `
      <img src="assets/${ch.photo || pid}.png"
           class="game-photo photo-${pid}"
           alt="${ch.name}"
           onerror="this.style.display='none';document.getElementById('game-svg-fb').style.display='flex'">
      <div id="game-svg-fb" style="display:none;width:100%;height:100%;align-items:center;justify-content:center">${AVATARS[pid]}</div>
    `;
  }
  _lastStageIdx = -1; // force btn re-render
  document.getElementById('main-btn-icon').textContent = ch.clickIcon;
  document.getElementById('main-btn-text').textContent = ch.clickText;

  renderUpgrades();
  renderSpecial();
  updateDisplays();

  document.getElementById('selection-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');

  tickN = 0;
  if (tickId) clearInterval(tickId);
  tickId = setInterval(tick, 100);
  if (msgId) clearInterval(msgId);
  msgId = setInterval(() => {
    if (S.pid) showMsg(CHARS[S.pid].msgs[Math.floor(Math.random() * CHARS[S.pid].msgs.length)]);
  }, 14000);

  const coopersSlot = document.getElementById('coopers-slot');
  if (pid === 'weeman4k') {
    coopersSlot.style.display = 'flex';
    coopersSlot.innerHTML = `<div class="coopers-column">
      <div class="coopers-widget" id="coopers-widget" onclick="clickCoopers()">
        <div class="coopers-ring" id="coopers-ring">
          <div class="coopers-inner">
            <img src="assets/cupers.png" class="coopers-photo" alt="Coopers"
                 onerror="this.style.display='none'">
          </div>
        </div>
        <span class="coopers-label">COOPERS</span>
      </div>
      <div id="coopers-event-mini" class="coopers-event-mini"></div>
    </div>`;
  } else {
    coopersSlot.style.display = 'none';
    coopersSlot.innerHTML = '';
  }

  showMsg(`¡Bienvenido al Club Jubilados, ${ch.name}!`);
  if (pid === 'muchaga' && !localStorage.getItem('penona_muchaga_tut')) {
    setTimeout(showTutorial, 400);
  }
}

function stopGame() {
  if (tickId) { clearInterval(tickId); tickId = null; }
  if (msgId)  { clearInterval(msgId);  msgId  = null; }
}

function goBack() {
  if (!confirm('¿Seguro que quieres salir? Se perderá la sesión actual.')) return;
  stopGame();
  [S.chicaTimer, S.ahogadoTimer, S.idealistaTimer, S.olaTimer, S.interrumpidorTimer, S.policeTimer, S.rocaTimer, S.fightTimer, S.banyoTimer, S.raicesTimer, S.coopersTimer, S.diarreaTimer, S.papaTimer, S.molinilloTimer].forEach(t => clearTimeout(t));
  document.getElementById('coopers-slot').style.display = 'none';
  clearInterval(holdInterval); holdInterval = null; holdProgress = 0; holdType = null;
  S.pid = null;
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('selection-screen').classList.remove('hidden');
  renderSelection();
  setTheme({ theme:'#ffd93d', themeD:'#e6b800', themeG:'rgba(255,217,61,0.2)' });
}

function setTheme(ch) {
  const r = document.documentElement.style;
  r.setProperty('--theme',      ch.theme);
  r.setProperty('--theme-d',    ch.themeD);
  r.setProperty('--theme-glow', ch.themeG);
}

// ================================================================
//  GAME TICK
// ================================================================
function tick() {
  tickN++;
  if (!S.pid) return;

  let ps = calcPS();

  if (S.pid === 'fita' || S.pid === 'extraperlo') {
    const now = Date.now();
    if (S.tripleActive && now < S.tripleEnd) {
      S.energy = Math.min(100, S.energy + 0.2); // triplete: barra sube sola
    } else {
      if (S.tripleActive) { S.tripleActive = false; renderSpecial(); toast('El TRIPLETE se acabó. Inevitable caída.','💀'); }
      const drain = S.yeyoActive && now < S.debuffEnd ? 0.55 : 0.22; // debuff drains faster
      S.energy = Math.max(0, S.energy - drain);
    }
    ps *= Math.max(0, S.energy / 100);
    if (S.yeyoActive === true && Date.now() >= S.debuffEnd) { S.yeyoActive = false; renderSpecial(); }
  }
  if (S.pid === 'noah' && S.stdActive) ps *= 0.5;
  if (S.pid === 'nanduko' && S.banyoActive) ps *= 0; // reunión en el baño: todo parado
  if (S.pid === 'diego')    tickDiego();
  if (S.pid === 'weeman4k') tickDaigo();

  // Furia y whisky (Muchaga + Extraperlo)
  if (S.pid === 'muchaga' || S.pid === 'extraperlo') {
    S.furiaLevel = Math.min(100, S.furiaLevel + 0.15);
    if (S.wskActive && Date.now() >= S.wskEnd) {
      S.wskActive = false;
      toast('El whisky se ha disipado... momentáneamente.', '😮‍💨');
    }
  }

  const gain = ps / 10;
  S.currency      += gain;
  S.totalCurrency += gain;

  // every second
  if (tickN % 10 === 0) S.achData.timeSec = (S.achData.timeSec || 0) + 1;

  if (tickN % 20 === 0) {   // every 2s
    checkSpecials();
    checkAchievements();
    saveGame();
  }

  updateDisplays();
  if (tickN % 5 === 0 && !holdInterval) renderSpecial();
  if (tickN % 2 === 0)  refreshUpgradeStates();
}

// ================================================================
//  CLICK
// ================================================================
let clickCombo = 0, comboResetTimer = null;

function handleMainClick(e) {
  if (!S.pid) return;
  const ch  = CHARS[S.pid];
  const val = calcPC();
  S.currency      += val;
  S.totalCurrency += val;
  S.totalClicks++;

  const btn = document.getElementById('main-btn');

  // Combo grow effect
  clearTimeout(comboResetTimer);
  clickCombo = Math.min(clickCombo + 1, 30);
  const baseScale  = 1 + Math.min(clickCombo * 0.012, 0.30);
  const punchScale = baseScale * 1.07;
  const glowSize   = Math.min(24 + clickCombo * 4, 110);
  const glowAlpha  = Math.min(0.25 + clickCombo * 0.025, 0.9);

  btn.style.transition = 'transform 0.04s ease-out, box-shadow 0.06s';
  btn.style.transform  = `scale(${punchScale.toFixed(3)})`;
  btn.style.boxShadow  = `0 0 ${glowSize}px var(--theme), 0 0 ${Math.floor(glowSize*1.8)}px var(--theme-glow), inset 0 0 24px rgba(0,0,0,.45)`;

  setTimeout(() => {
    btn.style.transition = 'transform 0.1s ease-out, box-shadow 0.15s';
    btn.style.transform  = `scale(${baseScale.toFixed(3)})`;
  }, 45);

  comboResetTimer = setTimeout(() => {
    clickCombo = 0;
    btn.style.transition = 'transform 0.35s ease-out, box-shadow 0.35s';
    btn.style.transform  = '';
    btn.style.boxShadow  = '';
  }, 650);

  if (S.pid === 'diego') clickDiegoChapa();
  const r = btn.getBoundingClientRect();
  spawnParticle(r.left + r.width/2, r.top + r.height/4, `+${fmt(val)} ${ch.icon}`);
  updateDisplays();
  refreshUpgradeStates();
}

// ================================================================
//  STATS
// ================================================================
function calcPC() {
  let v = 1;
  CHARS[S.pid].upgrades.forEach(u => { v += u.cbonus * (S.upgrades[u.id] || 0); });
  if ((S.pid === 'muchaga' || S.pid === 'extraperlo') && S.wskActive && Date.now() < S.wskEnd) v *= 5;
  if ((S.pid === 'muchaga' || S.pid === 'extraperlo') && S.furiaLevel >= 100) v *= 5;
  if ((S.pid === 'fita' || S.pid === 'extraperlo') && S.tripleActive && Date.now() < S.tripleEnd) v *= 10;
  if (S.pid === 'noah' && S.app === S.appLit) {
    const m = { instagram:2, tiktok:3.5, whatsapp:1.5 };
    v *= m[S.appLit] || 1;
  }
  if ((S.pid === 'nanduko' || S.pid === 'extraperlo') && S.banyoBuffEnd && Date.now() < S.banyoBuffEnd) v *= 4;
  if (S.pid === 'noah' && S.ahogadoBuffEnd && Date.now() < S.ahogadoBuffEnd) v *= 3;
  if (S.pid === 'diego') {
    const c = S.chapa || 0;
    if (S.yappingActive && Date.now() < S.yappingEnd) v *= 5;
    else if (c >= 80) v *= 3;
    else if (c >= 40) v *= 1.5;
    if (S.idealistaBuffEnd && Date.now() < S.idealistaBuffEnd) v *= (S.idealistaBuffMult || 1);
    if (S.olaBuffEnd && Date.now() < S.olaBuffEnd) v *= 2;
    if (S.olaDebuffEnd && Date.now() < S.olaDebuffEnd) v *= 0.5;
    if (S.callarBuffEnd && Date.now() < S.callarBuffEnd) v *= 4;
    if (S.chapaSilencioActive) v *= 0;
  }
  if (S.pid === 'weeman4k') {
    if (S.ultraActive && Date.now() < S.ultraEnd) v *= 10;
    if (S.molinilloBuffEnd && Date.now() < S.molinilloBuffEnd) v *= 5;
    if (S.cooperLootBuffEnd && Date.now() < S.cooperLootBuffEnd) v *= 2;
    if (S.cooperJamonBuffEnd && Date.now() < S.cooperJamonBuffEnd) v *= 1.5;
    if (S.papaBuffEnd && Date.now() < S.papaBuffEnd) v *= 3;
    if (S.cagadaDebuffEnd && Date.now() < S.cagadaDebuffEnd) v *= 0.5;
  }
  return v;
}

function calcPS() {
  let v = 0;
  CHARS[S.pid].upgrades.forEach(u => { v += u.prod * (S.upgrades[u.id] || 0); });
  if ((S.pid === 'muchaga' || S.pid === 'extraperlo') && S.wskActive && Date.now() < S.wskEnd) v *= 5;
  if ((S.pid === 'muchaga' || S.pid === 'extraperlo') && S.furiaLevel >= 100) v *= 5;
  if ((S.pid === 'fita' || S.pid === 'extraperlo') && S.tripleActive && Date.now() < S.tripleEnd) v *= 10;
  if (S.pid === 'noah') {
    if (S.app === S.appLit) {
      const m = { instagram:2, tiktok:3.5, whatsapp:1.5 };
      v *= m[S.appLit] || 1;
    }
    if (S.stdActive) v *= 0.5;
  }
  if (S.pid === 'nanduko' && S.raicesDebuffEnd && Date.now() < S.raicesDebuffEnd) v *= 0.5;
  if ((S.pid === 'nanduko' || S.pid === 'extraperlo') && S.banyoBuffEnd && Date.now() < S.banyoBuffEnd) v *= 4;
  if (S.pid === 'noah' && S.ligaBuffEnd && Date.now() < S.ligaBuffEnd) v *= 5;
  if (S.pid === 'noah' && S.ahogadoBuffEnd && Date.now() < S.ahogadoBuffEnd) v *= 3;
  if (S.pid === 'noah' && S.ahogadoDebuffEnd && Date.now() < S.ahogadoDebuffEnd) v *= 0.4;
  if (S.pid === 'diego') {
    const c = S.chapa || 0;
    if (S.yappingActive && Date.now() < S.yappingEnd) v *= 5;
    else if (c >= 80) v *= 3;
    else if (c >= 40) v *= 1.5;
    if (S.idealistaBuffEnd && Date.now() < S.idealistaBuffEnd) v *= (S.idealistaBuffMult || 1);
    if (S.olaBuffEnd && Date.now() < S.olaBuffEnd) v *= 2;
    if (S.olaDebuffEnd && Date.now() < S.olaDebuffEnd) v *= 0.5;
    if (S.callarBuffEnd && Date.now() < S.callarBuffEnd) v *= 4;
    if (S.chapaSilencioActive) v *= 0;
  }
  if (S.pid === 'weeman4k') {
    if (S.ultraActive && Date.now() < S.ultraEnd) v *= 10;
    if (S.molinilloBuffEnd && Date.now() < S.molinilloBuffEnd) v *= 5;
    if (S.cooperLootBuffEnd && Date.now() < S.cooperLootBuffEnd) v *= 2;
    if (S.cooperJamonBuffEnd && Date.now() < S.cooperJamonBuffEnd) v *= 1.5;
    if (S.papaBuffEnd && Date.now() < S.papaBuffEnd) v *= 3;
    if (S.cagadaDebuffEnd && Date.now() < S.cagadaDebuffEnd) v *= 0.5;
  }
  return v;
}

function earn(amount) {
  S.currency += amount;
  S.totalCurrency += amount;
}

function upgradeCost(u) {
  return Math.ceil(u.base * Math.pow(1.15, S.upgrades[u.id] || 0));
}

// ================================================================
//  UPGRADES
// ================================================================
function renderUpgrades() {
  const ch   = CHARS[S.pid];
  const list = document.getElementById('upgrades-list');
  list.innerHTML = '';
  ch.upgrades.forEach(u => {
    const div  = document.createElement('div');
    div.className = 'upg-item';
    div.id = `upg-${u.id}`;
    const cnt  = S.upgrades[u.id] || 0;
    const cost = upgradeCost(u);
    div.innerHTML = `
      <div class="upg-row1">
        <div class="upg-name">${u.icon} ${u.name}${cnt > 0 ? `<span class="upg-badge">${cnt}</span>` : ''}</div>
        <div class="upg-cost">${fmt(cost)} ${ch.icon}</div>
      </div>
      <div class="upg-desc">${u.desc}</div>
      <div class="upg-bonus">+${u.prod}/s · +${u.cbonus}/click por unidad</div>
    `;
    div.onclick = () => buyUpgrade(u.id);
    list.appendChild(div);
  });
}

function refreshUpgradeStates() {
  updateClickBtn();
  const ch = CHARS[S.pid];
  ch.upgrades.forEach(u => {
    const el = document.getElementById(`upg-${u.id}`);
    if (!el) return;
    const cost = upgradeCost(u);
    el.classList.toggle('upg-can-afford', S.currency >= cost);
    const costEl = el.querySelector('.upg-cost');
    if (costEl) costEl.textContent = `${fmt(cost)} ${ch.icon}`;
    const cnt = S.upgrades[u.id] || 0;
    if (cnt > 0) {
      const b = el.querySelector('.upg-badge');
      if (b) b.textContent = cnt;
      else el.querySelector('.upg-name').insertAdjacentHTML('beforeend', `<span class="upg-badge">${cnt}</span>`);
    }
  });
}

function buyUpgrade(id) {
  const ch = CHARS[S.pid];
  const u  = ch.upgrades.find(x => x.id === id);
  if (!u) return;
  const cost = upgradeCost(u);
  if (S.currency < cost) { toast(`Sin pasta. Faltan ${fmt(cost - S.currency)} ${ch.icon}`, '❌'); return; }
  S.currency -= cost;
  S.upgrades[id]++;
  toast(`${u.icon} ${u.name} x${S.upgrades[id]}`, '✅');
  renderUpgrades();
  updateDisplays();
}

// ================================================================
//  CLICK BUTTON EVOLUTION
// ================================================================
const CLICK_STAGES = {
  muchaga: [
    { at: 0,      icon: '☕',  sz: '3.8rem', extras: [] },
    { at: 60,     icon: '🍺',  sz: '4.2rem', extras: [] },
    { at: 400,    icon: '🍺',  sz: '4.5rem', extras: ['☕'] },
    { at: 1500,   icon: '🥃',  sz: '4.8rem', extras: ['🍺','☕'] },
    { at: 8000,   icon: '🍸',  sz: '5.2rem', extras: ['🥃','🍺','☕'] },
    { at: 40000,  icon: '🛢️', sz: '5.6rem', extras: ['🍸','🥃','🍺','☕'] },
    { at: 180000, icon: '🎰',  sz: '6.0rem', extras: ['🛢️','🍸','🥃','🍺','☕'] },
  ],
  fita: [
    { at: 0,      icon: '🍺',  sz: '3.8rem', extras: [] },
    { at: 60,     icon: '🌿',  sz: '4.2rem', extras: [] },
    { at: 400,    icon: '🚬',  sz: '4.5rem', extras: ['🌿'] },
    { at: 1500,   icon: '💚',  sz: '4.8rem', extras: ['🚬','🌿'] },
    { at: 8000,   icon: '🤧',  sz: '5.2rem', extras: ['💚','🚬','🌿'] },
    { at: 40000,  icon: '❄️',  sz: '5.6rem', extras: ['🤧','💚','🚬','🌿'] },
    { at: 180000, icon: '💨',  sz: '6.0rem', extras: ['❄️','🤧','💚','🚬','🌿'] },
  ],
  noah: [
    { at: 0,      icon: '📱',  sz: '3.8rem', extras: [] },
    { at: 60,     icon: '📸',  sz: '4.2rem', extras: [] },
    { at: 400,    icon: '🎵',  sz: '4.5rem', extras: ['📸'] },
    { at: 1500,   icon: '💬',  sz: '4.8rem', extras: ['🎵','📸'] },
    { at: 8000,   icon: '✅',  sz: '5.2rem', extras: ['💬','🎵','📸'] },
    { at: 40000,  icon: '⭐',  sz: '5.6rem', extras: ['✅','💬','🎵','📸'] },
    { at: 180000, icon: '🔥',  sz: '6.0rem', extras: ['⭐','✅','💬','🎵','📸'] },
  ],
  nanduko: [
    { at: 0,      icon: '🤝',  sz: '3.8rem', extras: [] },
    { at: 60,     icon: '🌿',  sz: '4.2rem', extras: [] },
    { at: 400,    icon: '💊',  sz: '4.5rem', extras: ['🌿'] },
    { at: 1500,   icon: '🟫',  sz: '4.8rem', extras: ['💊','🌿'] },
    { at: 8000,   icon: '📦',  sz: '5.2rem', extras: ['🟫','💊','🌿'] },
    { at: 40000,  icon: '✈️', sz: '5.6rem', extras: ['📦','🟫','💊','🌿'] },
    { at: 180000, icon: '👑',  sz: '6.0rem', extras: ['✈️','📦','🟫','💊','🌿'] },
  ],
  extraperlo: [
    { at: 0,      icon: '🎪',  sz: '3.8rem', extras: [] },
    { at: 80,     icon: '🎟️', sz: '4.2rem', extras: [] },
    { at: 600,    icon: '🎧',  sz: '4.5rem', extras: ['🎟️'] },
    { at: 2500,   icon: '📣',  sz: '4.8rem', extras: ['🎧','🎟️'] },
    { at: 12000,  icon: '🌀',  sz: '5.2rem', extras: ['📣','🎧','🎟️'] },
    { at: 60000,  icon: '👑',  sz: '5.6rem', extras: ['🌀','📣','🎧','🎟️'] },
    { at: 250000, icon: '🔱',  sz: '6.0rem', extras: ['👑','🌀','📣','🎧','🎟️'] },
  ],
};

let _lastStageIdx = -1;
function updateClickBtn() {
  if (!S.pid) return;
  const stages = CLICK_STAGES[S.pid];
  if (!stages) return;

  let idx = 0;
  for (let i = 0; i < stages.length; i++) {
    if (S.totalCurrency >= stages[i].at) idx = i;
    else break;
  }
  if (idx === _lastStageIdx) return; // no change
  _lastStageIdx = idx;
  const stage = stages[idx];

  const iconEl = document.getElementById('main-btn-icon');
  if (iconEl) {
    iconEl.textContent = stage.icon;
    iconEl.style.fontSize = stage.sz;
  }

  // Remove old extras row
  const btn = document.getElementById('main-btn');
  if (!btn) return;
  const old = btn.querySelector('.btn-extras');
  if (old) old.remove();

  if (stage.extras.length > 0) {
    const row = document.createElement('span');
    row.className = 'btn-extras';
    row.innerHTML = stage.extras.map(e => `<span class="btn-extra-icon">${e}</span>`).join('');
    btn.appendChild(row);
  }
}

// ================================================================
//  DISPLAYS
// ================================================================
function updateDisplays() {
  if (!S.pid) return;
  const ps = calcPS(), pc = calcPC();
  document.getElementById('hdr-amount').textContent = fmt(Math.floor(S.currency));
  document.getElementById('hdr-ps').textContent     = `+${fmt(ps)}/s`;
  document.getElementById('stat-pc').textContent    = fmt(pc);
  document.getElementById('stat-ps').textContent    = fmt(ps.toFixed(1));
  document.getElementById('stat-total').textContent = fmt(Math.floor(S.totalCurrency));
  if (S.pid === 'weeman4k') {
    const ring = document.getElementById('coopers-ring');
    if (ring) ring.style.background = `conic-gradient(var(--theme) ${(S.coopersPct||0) * 3.6}deg, rgba(255,255,255,.12) 0deg)`;
  }
}

// ================================================================
//  SPECIAL EVENTS — CHECK
// ================================================================
function checkSpecials() {
  if (!S.pid) return;
  switch (S.pid) {
    case 'muchaga':    checkMucha();   break;
    case 'fita':       checkFita();    break;
    case 'noah':       checkNoah();    break;
    case 'diego':      checkDiego();   break;
    case 'weeman4k':   checkDaigo();   break;
    case 'nanduko':    checkNandu();   break;
    case 'extraperlo': checkXP();      break;
  }
}

function checkDaigo() {
  // placeholder — Daigo events are timer-driven, not polling-driven
}

// ——— MUCHAGA ———
const PUNCH_TYPES = [
  { dir: 'izquierda', icon: '👈', key: 'izq',  msg: '¡Gancho de izquierda! ¡Esquívalo!' },
  { dir: 'derecha',   icon: '👉', key: 'der',  msg: '¡Directo de derecha! ¡Agáchate!' },
  { dir: 'arriba',    icon: '☝️',  key: 'arr',  msg: '¡Uppercut! ¡Para atrás!' },
  { dir: 'abajo',     icon: '👇', key: 'aba',  msg: '¡Barrido! ¡Salta!' },
];

const PIZZA_FRASES = [
  'La cocina está cerrada pero el de la mesa 4 insiste.',
  'Son las 11:58. ¿UNA PIZZA? ¿EN SERIO?',
  '¡Que lleven las pizzas! ¡La cocina está CERRADA!',
  'El grupo del fondo pide 6 hawaianas. A medianoche. Con extra piña.',
  '¡Toda la barra pide pizza! ¡El horno lleva frío dos horas!',
];

function checkMucha() {
  // Pelea cuando furia a tope — muy frecuente
  if (S.furiaLevel >= 100 && !S.fightActive && !S.grescaActive && Math.random() < 0.65) triggerFight();
  // Gresca aleatoria (abuelos peleando)
  if (!S.grescaActive && !S.fightActive && S.totalCurrency > 150 && Math.random() < 0.08) triggerGresca();
  // Pizza aleatoria
  if (!S.pizzaActive && S.totalCurrency > 400 && Math.random() < 0.05) triggerPizza();
}

function triggerPizza() {
  S.pizzaActive  = true;
  S.pizzaClicked = [false, false, false];
  renderSpecial();
  toast('🍕 ¡PEDIDO ESPECIAL! ¡Coge las 3 pizzas!', '🍕');
  showMsg(PIZZA_FRASES[Math.floor(Math.random() * PIZZA_FRASES.length)]);
  clearTimeout(S.pizzaTimer);
  S.pizzaTimer = setTimeout(() => {
    if (S.pizzaActive) {
      S.pizzaActive = false;
      renderSpecial();
      toast('Las pizzas se han enfriado. Oportunidad perdida.', '🥶');
      showMsg('Nadie recogió las pizzas. Se quedan ahí, insultando.');
    }
  }, 15000);
}

function clickPizza(i) {
  if (!S.pizzaActive || !S.pizzaClicked || S.pizzaClicked[i]) return;
  S.pizzaClicked[i] = true;
  if (S.pizzaClicked.every(c => c)) {
    clearTimeout(S.pizzaTimer);
    S.pizzaActive = false;
    S.furiaLevel  = 100;
    renderSpecial();
    toast('🍕🍕🍕 ¡PEDIDO COMPLETADO! ¡FURIA AL MÁXIMO!', '🔥');
    showMsg('¡Tres pizzas cogidas! La furia de Muchaga se dispara al límite. ×5 activado.');
    updateDisplays();
  } else {
    renderSpecial();
  }
}

function clickWiskey() {
  if (S.wskActive || Date.now() < S.wskCoolEnd || S.grescaActive) return;
  S.wskActive   = true;
  S.wskEnd      = Date.now() + 12000;
  S.wskCoolEnd  = S.wskEnd + 45000;
  S.furiaLevel  = Math.min(100, S.furiaLevel + 50);
  S.achData.wskActivations = (S.achData.wskActivations || 0) + 1;
  renderSpecial();
  toast('🥃 ¡WHISKY POR LA MAÑANA! ×5 + furia +50%', '🥃');
  showMsg('Un whisky a las 9 de la mañana. La producción se dispara y la furia también. Cuidado.');
}

function triggerGresca() {
  S.grescaActive = true;
  S.grescaNeed   = 8 + Math.floor(Math.random() * 6);
  S.grescaDone   = 0;
  renderSpecial();
  toast('👴 ¡¡LOS ABUELOS SE ESTÁN PEGANDO!! ¡SEPÁRALOS!', '🃏');
  showMsg('¡Tres abuelos liados a tortas en la mesa del dominó! Fichas por el suelo. ¡Para eso AHORA!');
  clearTimeout(S.grescaTimer);
  S.grescaTimer = setTimeout(() => {
    if (S.grescaActive) {
      S.grescaActive = false;
      S.currency = 0;
      renderSpecial();
      toast('¡Los abuelos han destrozado la caja!💸 Dinero a 0.', '😱');
      showMsg('Los abuelos han arrasado con todo. Hasta el cajón está abierto y vacío.');
      updateDisplays();
    }
  }, 12000);
}

function clickGresca() {
  if (!S.grescaActive) return;
  S.grescaDone++;
  if (S.grescaDone >= S.grescaNeed) {
    clearTimeout(S.grescaTimer);
    S.grescaActive = false;
    const ch     = CHARS[S.pid];
    const reward = Math.max(200, Math.floor(S.totalCurrency * 0.3));
    earn(reward);
    S.achData.fightWins = (S.achData.fightWins || 0) + 1;
    renderSpecial();
    toast(`👴 ¡Abuelos separados! +${fmt(reward)} ${ch.icon}`, '✅');
    showMsg('Los abuelos están en sillas distintas. Te dan las gracias y sacan el monedero.');
    updateDisplays();
  } else {
    const left  = S.grescaNeed - S.grescaDone;
    const cosas = ['¡Suéltalo!','¡QUIETO ABUELO!','¡Esa ficha no es un arma!','¡Los separo a los dos!','¡PARA YA!'];
    showMsg(cosas[Math.floor(Math.random() * cosas.length)] + ` — ${left} más`);
    renderSpecial();
  }
}

function triggerFight() {
  S.fightActive = true; S.fightReacted = false;
  const punch = PUNCH_TYPES[Math.floor(Math.random() * PUNCH_TYPES.length)];
  S.fightPunch = punch;
  renderSpecial(); toast('¡SE LÍA EN EL BAR! ¡REACT!', '🥊');
  showMsg(punch.msg);
  clearTimeout(S.fightTimer);
  S.fightTimer = setTimeout(() => {
    if (S.fightActive && !S.fightReacted) {
      const dmg = Math.max(50, Math.floor(S.currency * 0.25));
      S.currency = Math.max(0, S.currency - dmg);
      S.fightActive = false; S.fightPunch = null;
      S.furiaLevel = 0;
      renderSpecial(); toast(`¡Te ha dado! Furia perdida. -${fmt(dmg)} cañas`, '💥');
      showMsg('¡TOUCHÉ! No reaccionaste. La furia se esfuma junto con el dinero.');
      updateDisplays();
    }
  }, 3500);
}

function clickFight(key) {
  if (!S.fightActive || S.fightReacted) return;
  S.fightReacted = true;
  clearTimeout(S.fightTimer);
  if (key === S.fightPunch.key) {
    const b = Math.max(80, Math.floor(S.currency * 0.3));
    S.currency += b; S.totalCurrency += b; S.achData.fightWins++;
    S.fightActive = false; S.fightPunch = null;
    renderSpecial(); toast(`¡ESQUIVADO! +${fmt(b)} cañas 🥊`, '🎯');
    showMsg('¡Muchaga esquiva como un bailarín borracho! ¡El bar enloquece!');
    updateDisplays();
  } else {
    const dmg = Math.max(30, Math.floor(S.currency * 0.15));
    S.currency = Math.max(0, S.currency - dmg); S.achData.fightLosses++;
    S.fightActive = false; S.fightPunch = null;
    S.furiaLevel = 0;
    renderSpecial(); toast(`¡Mal lado! Furia perdida. -${fmt(dmg)} cañas`, '😵');
    showMsg('Lado equivocado. La furia se esfuma. Toca volver a acumular.');
    updateDisplays();
  }
}


// ——— HOLD MECHANIC (nariz) ———
let holdInterval = null;
let holdProgress = 0; // 0-100
let holdType = null;  // 'yeyo' | 'banyo'

function startHold(type) {
  if (holdInterval || holdType) return;
  holdType = type; holdProgress = 0;
  // Mark nose active without rebuilding DOM
  const nose = document.querySelector('.nose-btn');
  const hint = document.querySelector('.hold-hint');
  const box  = document.querySelector('.yeyo-event');
  if (nose) nose.classList.add('nose-active');
  if (hint) hint.textContent = '¡Aguanta!';
  if (box)  box.classList.add('holding');
  // Listen for release on the document so moving the mouse/finger away doesn't miss it
  document.addEventListener('mouseup',    _onHoldRelease);
  document.addEventListener('touchend',   _onHoldRelease);
  document.addEventListener('touchcancel',_onHoldRelease);
  holdInterval = setInterval(() => {
    holdProgress = Math.min(100, holdProgress + 3.5); // ~2.9s to fill
    const fill = document.querySelector('.hold-fill');
    if (fill) fill.style.width = holdProgress + '%';
    // Ola: reveal direction at 75%
    if (holdType === 'ola' && holdProgress >= 75 && !S.olaRevealed) {
      S.olaRevealed = true;
      const txt = document.querySelector('.ola-reveal-txt');
      if (txt) {
        txt.textContent = S.olaDir === 'derecha' ? '→ ¡ES UNA DERECHA! ¡Aguanta!' : '← ¡ES UNA IZQUIERDA!';
        txt.style.color = S.olaDir === 'derecha' ? '#7dd3fc' : '#ff7744';
        txt.style.fontWeight = '900';
        txt.style.fontSize = '1rem';
      }
    }
    if (holdProgress >= 100) stopHold(true);
  }, 100);
}

function _onHoldRelease() {
  if (holdInterval) stopHold(false);
}

function stopHold(success) {
  document.removeEventListener('mouseup',    _onHoldRelease);
  document.removeEventListener('touchend',   _onHoldRelease);
  document.removeEventListener('touchcancel',_onHoldRelease);
  clearInterval(holdInterval); holdInterval = null;
  if (success) {
    const t = holdType;
    holdProgress = 0; holdType = null;
    if (t === 'yeyo')  resolveYeyo();
    if (t === 'banyo') resolveBanyo();
    if (t === 'ola')   resolveOla();
  } else {
    const t = holdType;
    holdProgress = 0; holdType = null;
    if (t === 'ola') {
      S.olaRevealed = false;
      toast('🌊 Ola perdida. No aguantaste hasta el final.', '🌊');
    } else if (holdProgress > 5) {
      showMsg('Has soltado. Casi... inténtalo otra vez.');
    }
    renderSpecial();
  }
}

// ——— FITA ———
function checkFita() {
  if (!S.yeyoActive && !S.tripleActive && Math.random() < 0.06) triggerYeyo();
  if (!S.chupaActive && !S.tripleActive && S.energy <= 0) triggerChupa();
}

function triggerChupa() {
  S.chupaActive  = true;
  S.chupaCorners = [0, 0, 0, 0];
  S.chupaNeed    = 4;
  renderSpecial();
  toast('🛍️ ¡CHUPA LAS ESQUINAS! ¡Las 4, rápido!', '👅');
  showMsg('Sin energía pero con recursos. Lame las cuatro esquinas de la bolsa y vuelves al tajo.');
  clearTimeout(S.chupaTimer);
  S.chupaTimer = setTimeout(() => {
    if (S.chupaActive) {
      S.chupaActive = false;
      renderSpecial();
      toast('Se acabó la bolsa. Sin triplete.', '😩');
    }
  }, 6000);
}

function clickChupaCorner(idx) {
  if (!S.chupaActive) return;
  if (S.chupaCorners[idx] >= S.chupaNeed) return;
  S.chupaCorners[idx]++;
  const allDone = S.chupaCorners.every(c => c >= S.chupaNeed);
  if (allDone) {
    clearTimeout(S.chupaTimer);
    S.chupaActive  = false;
    S.tripleActive = true;
    S.tripleEnd    = Date.now() + 3000;
    S.energy       = 100;
    S.achData.dobletazos++;
    renderSpecial();
    toast('🛍️✅ ¡TRIPLETE! ×10 durante 3 segundos. ¡Chupa más!', '⚡');
    showMsg('La bolsa funciona. Triplete activado. 3 segundos de gloria total.');
    updateDisplays();
  } else {
    renderSpecial();
  }
}

function triggerYeyo() {
  S.yeyoActive = 'offer';
  renderSpecial();
  toast('¿QUIÉS UNA? 👃 Mantén pulsado la nariz...', '✨');
  showMsg('Un tío de la esquina te ofrece algo de color blanco. Mantén pulsado para aspirar.');
}

function resolveYeyo() {
  holdProgress = 0; holdType = null;
  S.yeyoActive = false;
  if (Math.random() < 0.55) {
    S.achData.yeyoWins++;
    const b = Math.max(200, Math.floor(S.currency * 0.8));
    S.currency += b; S.totalCurrency += b;
    S.tripleActive = true; S.tripleEnd = Date.now() + 15000;
    S.energy = 100; S.achData.dobletazos++;
    renderSpecial(); toast(`¡TRIPLETE! +${fmt(b)} Vicios 🚀 ¡15s de gloria!`, '⚡');
    showMsg('¡TRIPLETE ACTIVADO! La barra aguanta sola. El olfato: perfecto. Fita está ON.');
  } else {
    const dmg = Math.max(50, Math.floor(S.energy * 0.6));
    S.energy = Math.max(0, S.energy - dmg);
    S.debuffEnd = Date.now() + 12000;
    S.achData.yeyoFails++;
    S.yeyoActive = true;
    renderSpecial(); toast('Era rascadura de la pared. Sabor a yeso. -12s debuff 🤢', '🤮');
    showMsg('Era la pared. Literalmente la pared. La energía cae sola.');
  }
  updateDisplays();
}

function clickDobletazo() {
  if (S.tripleActive) { showMsg('¡Ya estás en TRIPLETE tío! No lo necesitas.'); return; }
  if (Date.now() < S.dblCoolEnd) {
    const s = Math.ceil((S.dblCoolEnd - Date.now()) / 1000);
    showMsg(`El DOBLETAZO está en cooldown. ${s}s más.`); return;
  }
  const boost = 28 + Math.floor(Math.random() * 18);
  S.energy = Math.min(100, S.energy + boost);
  S.dblCoolEnd = Date.now() + 15000;
  S.achData.dobletazos++;
  const lines = [
    `DOBLETAZO +${boost}. El "polvo de limpieza" es increíblemente eficaz.`,
    `+${boost} energía. El olfato ha mejorado notablemente.`,
    `¡DOBLETAZO! Talco colombiano, uso medicinal. +${boost}.`,
    `Quizás CBD, quizás otra cosa. +${boost}. SEGUIMOS.`,
  ];
  showMsg(lines[Math.floor(Math.random() * lines.length)]);
  toast(`¡DOBLETAZO! +${boost} energía`, '⚡');
  renderSpecial();
}

// ——— NOAH ———
function checkNoah() {
  if (!S.chicaActive && Math.random() < 0.09) triggerChica();
  if (!S.stdActive && S.totalCurrency > 800 && Math.random() < 0.04) triggerSTD();
  if (!S.ahogadoActive && Math.random() < 0.05) triggerAhogado();
  if (Math.random() < 0.18) {
    const apps = ['instagram', 'tiktok', 'whatsapp'];
    const others = apps.filter(a => a !== S.appLit);
    S.appLit = others[Math.floor(Math.random() * others.length)];
    renderSpecial();
    const names = { instagram:'Instagram', tiktok:'TikTok', whatsapp:'WhatsApp' };
    const mults = { instagram:'×2.0', tiktok:'×3.5', whatsapp:'×1.5' };
    toast(`📲 ¡${names[S.appLit]} encendido! ${mults[S.appLit]}`, '⚡');
  }
}

function triggerChica() {
  S.chicaActive = true; S.achData.chicaTotal++;
  renderSpecial(); showMsg('¡Hay una chica mirándote! ¡Muévete rápido, Noah!');
  clearTimeout(S.chicaTimer);
  S.chicaTimer = setTimeout(() => {
    if (S.chicaActive) {
      S.chicaActive = false; renderSpecial();
      toast('La chica se fue... estabas mirando el móvil.', '💔');
      showMsg('Mirando el móvil mientras la chica se alejaba. Clásico Noah.');
    }
  }, 6000);
}

function clickChica() {
  clearTimeout(S.chicaTimer);
  S.chicaActive = false;
  const ch = CHARS[S.pid];
  if (Math.random() < 0.5) {
    const b = Math.max(50, Math.floor(S.currency * 0.25));
    S.currency += b; S.totalCurrency += b; S.achData.chicaLiga++;
    S.ligaBuffEnd = Date.now() + 10000;
    toast(`💕 ¡LIGA! +${fmt(b)} ${ch.icon} · ×5 durante 10s`, '💕');
    showMsg('¡Le ha dado el Instagram! Bueno, el número no. El Instagram.');
  } else {
    S.achData.chicaFails++;
    toast('Rechazo. Ha dicho que "¿no tenías novia?". No tienes.', '😬');
    showMsg('La próxima vez guarda el teléfono cuando hablas con alguien, Noah.');
  }
  renderSpecial(); updateDisplays();
}

function triggerSTD() {
  S.stdActive = true; renderSpecial();
  toast('⚠️ Picor sospechoso. Visita la farmacia urgente.', '🦠');
  showMsg('Algo no está bien ahí abajo. Las consecuencias de ligar sin criterio.');
}

function clickFarmacia() {
  const ch   = CHARS[S.pid];
  const cost = Math.max(200, Math.floor(S.totalCurrency * 0.1));
  if (S.currency < cost) { toast(`Necesitas ${fmt(cost)} ${ch.icon} para la farmacia`, '💊'); return; }
  S.currency -= cost; S.stdActive = false; S.achData.farmacia++;
  renderSpecial();
  toast('¡Curado! El farmacéutico no ha dicho nada... con la boca.', '💊');
  showMsg('El farmacéutico te ha mirado raro. Normal. Ya estás bien.');
  updateDisplays();
}

const VOZ_HERO = [
  '📰 LA VOZ: "El socorrista de Salinas salva a un bañista en intervención heroica"',
  '📰 LA VOZ: "Noah, guardián de Salinas: rápido, valiente y sin mirar el móvil"',
  '📰 LA VOZ: "Rescate en playa de Salinas: el socorrista que sí estaba en su puesto"',
  '📰 LA VOZ: "El héroe del verano asturiano: Noah al rescate en Salinas"',
];
const VOZ_FAIL = [
  '📰 LA VOZ: "El socorrista de Salinas miraba TikTok mientras un bañista pedía socorro"',
  '📰 LA VOZ: "Polémica en Salinas: ¿dónde estaba el socorrista cuando lo necesitaban?"',
  '📰 LA VOZ: "El Ayuntamiento pide explicaciones al socorrista de Salinas tras el incidente"',
  '📰 LA VOZ: "Bañista sobrevive pese a la ausencia del socorrista: \'Estaba con el móvil\'"',
];

function triggerAhogado() {
  S.ahogadoActive = true;
  S.ahogadoDone = 0;
  S.ahogadoNeed = 12 + Math.floor(Math.random() * 7);
  S.ahogadoTimerEnd = Date.now() + 6000;
  clearTimeout(S.ahogadoTimer);
  S.ahogadoTimer = setTimeout(() => {
    if (S.ahogadoActive) {
      S.ahogadoActive = false;
      S.ahogadoDebuffEnd = Date.now() + 20000;
      renderSpecial();
      const titular = VOZ_FAIL[Math.floor(Math.random() * VOZ_FAIL.length)];
      toast(titular, '📰', 'toast-voz-fail');
      showMsg('El bañista se las apañó solo. La Voz de Asturias ya tiene redactor en camino.');
      updateDisplays();
    }
  }, 6000);
  renderSpecial();
  toast('🌊 ¡¡SE ESTÁ AHOGANDO!! ¡¡AL AGUA AHORA!!', '🌊');
  showMsg('¡Alguien pide socorro en el agua! ¡Mueve los brazos, Noah!');
}

function clickSocorro() {
  if (!S.ahogadoActive) return;
  S.ahogadoDone++;
  if (S.ahogadoDone >= S.ahogadoNeed) {
    clearTimeout(S.ahogadoTimer);
    S.ahogadoActive = false;
    S.achData.rescates = (S.achData.rescates || 0) + 1;
    S.ahogadoBuffEnd = Date.now() + 15000;
    renderSpecial();
    const titular = VOZ_HERO[Math.floor(Math.random() * VOZ_HERO.length)];
    toast(titular, '📰', 'toast-voz-hero');
    showMsg('¡Rescate completado! La Voz de Asturias ya tiene titular para mañana.');
    updateDisplays();
  } else {
    renderSpecial();
  }
}

function switchApp(id) {
  S.app = id; renderSpecial();
  const isLit = id === S.appLit;
  const mults = { instagram:'×2.0', tiktok:'×3.5', whatsapp:'×1.5' };
  const msgs  = {
    instagram: isLit ? `¡Insta encendido! ${mults.instagram} producción activa.` : 'Instagram. Esto no está encendido ahora mismo.',
    tiktok:    isLit ? `¡TikTok encendido! ${mults.tiktok} producción activa.`  : 'TikTok. Pero no es el que brilla ahora.',
    whatsapp:  isLit ? `¡WhatsApp encendido! ${mults.whatsapp} producción activa.` : 'Visto a las 3:47. Y sin bonus.',
  };
  showMsg(msgs[id]);
}

// ——— DIEGO ———
const PISOS_CASTRI = [
  { zona:'Piedrasblancas', icon:'🏘️', tier:'común',      mult:2,   sec:12, price:'165.000€', hab:3 },
  { zona:'Avilés',         icon:'🏙️', tier:'común',      mult:1.8, sec:10, price:'148.000€', hab:2 },
  { zona:'Arnao',          icon:'🌿', tier:'poco común',  mult:2.5, sec:15, price:'190.000€', hab:3 },
  { zona:'Naveces',        icon:'🌾', tier:'poco común',  mult:2.5, sec:15, price:'195.000€', hab:4 },
  { zona:'Bayas',          icon:'🏖️', tier:'raro',        mult:3.5, sec:20, price:'240.000€', hab:3 },
  { zona:'Salinas',        icon:'⭐', tier:'LEGENDARIO',   mult:7,   sec:30, price:'420.000€', hab:3 },
];

function pickPiso() {
  const r = Math.random();
  if (r < 0.28) return PISOS_CASTRI[0];
  if (r < 0.56) return PISOS_CASTRI[1];
  if (r < 0.69) return PISOS_CASTRI[2];
  if (r < 0.81) return PISOS_CASTRI[3];
  if (r < 0.92) return PISOS_CASTRI[4];
  return PISOS_CASTRI[5];
}

function checkDiego() {
  if (!S.idealistaActive && Math.random() < 0.06) triggerIdealista();
  if (!S.olaActive && !holdType && Math.random() < 0.05) triggerOla();
  if (S.yappingActive && !S.interrumpidorActive && (S.yappingEnd - Date.now()) > 3000 && Math.random() < 0.10) triggerInterruptor();
}

function tickDiego() {
  if (S.yappingActive && Date.now() >= S.yappingEnd) {
    S.yappingActive = false;
    S.chapa = 55;
    renderSpecial();
  }
  if (S.chapaSilencioActive && Date.now() >= S.chapaSilencioEnd) {
    S.chapaSilencioActive = false;
    renderSpecial();
    return;
  }
  if (!S.chapaSilencioActive && !S.yappingActive) {
    S.chapa = Math.max(0, (S.chapa || 0) - 0.8);
    if (S.chapa === 0 && !S.chapaSilencioActive) {
      S.chapaSilencioActive = true;
      S.chapaSilencioEnd = Date.now() + 4000;
      S.achData.silenciosIncomodos = (S.achData.silenciosIncomodos || 0) + 1;
      renderSpecial();
      toast('😶 Silencio incómodo... Diego pierde el hilo.', '😶');
    }
  }
}

function clickDiegoChapa() {
  if (S.chapaSilencioActive || S.yappingActive) return;
  S.chapa = Math.min(100, (S.chapa || 0) + 3);
  if (S.chapa > (S.achData.chapaMax || 0)) S.achData.chapaMax = S.chapa;
  if (S.chapa >= 100 && !S.yappingActive) {
    S.yappingActive = true;
    S.yappingEnd = Date.now() + 8000;
    S.achData.yappingSupremos = (S.achData.yappingSupremos || 0) + 1;
    renderSpecial();
    toast('🎙️ ¡YAPPING SUPREMO! ×5 — 8 segundos de gloria verbal total', '🎙️');
  }
}

function triggerIdealista() {
  const piso = pickPiso();
  S.idealistaActive = true;
  S.idealistaPiso = piso;
  S.idealistaBuffMult = piso.mult;
  if (piso.zona === 'Salinas') S.salinasConteo = 0;
  clearTimeout(S.idealistaTimer);
  S.idealistaTimer = setTimeout(() => {
    if (S.idealistaActive) {
      S.idealistaActive = false; S.idealistaPiso = null; S.salinasConteo = 0;
      renderSpecial();
      toast('🏠 Se fue el piso. Lo pillaron antes.', '😤');
    }
  }, piso.sec * 1000);
  renderSpecial();
  const urgencia = piso.tier === 'LEGENDARIO' ? '⭐⭐⭐ ¡¡SALINAS!!' : `📍 ${piso.zona}`;
  toast(`🏠 IDEALISTA: ${urgencia} — ${piso.hab} hab · ${piso.price}`, '🏠');
}

function clickSalinasContra() {
  if (!S.idealistaActive || !S.idealistaPiso || S.idealistaPiso.zona !== 'Salinas') return;
  S.salinasConteo = (S.salinasConteo || 0) + 1;
  if (S.salinasConteo >= 20) clickIdealista();
  else renderSpecial();
}

function clickIdealista() {
  if (!S.idealistaActive || !S.idealistaPiso) return;
  clearTimeout(S.idealistaTimer);
  const piso = S.idealistaPiso;
  S.idealistaActive = false; S.idealistaPiso = null;
  S.achData.pisosVisitados = (S.achData.pisosVisitados || 0) + 1;
  if (piso.zona === 'Salinas') S.achData.salinasVisitados = (S.achData.salinasVisitados || 0) + 1;
  S.idealistaBuffEnd = Date.now() + piso.sec * 1000;
  S.idealistaBuffMult = piso.mult;
  S.chapa = Math.min(100, (S.chapa || 0) + 30);
  renderSpecial();
  const msg = piso.zona === 'Salinas'
    ? `⭐ ¡¡SALINAS LEGENDARIO!! ×${piso.mult} durante ${piso.sec}s — Diego tiene MUCHO que contar`
    : `🏠 Visitado ${piso.zona} · ×${piso.mult} durante ${piso.sec}s`;
  toast(msg, piso.zona === 'Salinas' ? '⭐' : '🏠', piso.zona === 'Salinas' ? 'toast-achievement' : '');
  updateDisplays();
}

function triggerOla() {
  S.olaActive = true;
  S.olaRevealed = false;
  S.olaDir = Math.random() < 0.55 ? 'derecha' : 'izquierda';
  clearTimeout(S.olaTimer);
  S.olaTimer = setTimeout(() => {
    if (S.olaActive && holdType !== 'ola') {
      S.olaActive = false; S.olaDir = null; S.olaRevealed = false;
      renderSpecial();
      toast('🌊 La ola pasó sin que la cogieras.', '🌊');
    }
  }, 9000);
  renderSpecial();
  toast('🌊 ¡OLA LLEGANDO! Mantén pulsado para surfear...', '🌊');
}

function resolveOla() {
  clearTimeout(S.olaTimer);
  const dir = S.olaDir;
  S.olaActive = false; S.olaDir = null; S.olaRevealed = false;
  renderSpecial();
  if (dir === 'derecha') {
    S.achData.olasDerechas = (S.achData.olasDerechas || 0) + 1;
    S.olaBuffEnd = Date.now() + 15000;
    toast('🌊 ¡DERECHA PERFECTA! ×2 durante 15s — cerdo trufero puro', '🌊');
  } else {
    S.achData.olasIzquierdas = (S.achData.olasIzquierdas || 0) + 1;
    S.olaDebuffEnd = Date.now() + 20000;
    toast('😤 ¡¡ERA UNA IZQUIERDA!! Diego de mal humor. ×0.5 durante 20s', '😤');
  }
  updateDisplays();
}

function triggerInterruptor() {
  S.interrumpidorActive = true;
  renderSpecial();
  toast('💬 ¡ALGUIEN TE INTERRUMPE! ¡Manda callar o discute!', '💬');
  clearTimeout(S.interrumpidorTimer);
  S.interrumpidorTimer = setTimeout(() => {
    if (S.interrumpidorActive) {
      S.interrumpidorActive = false;
      S.yappingActive = false;
      S.chapa = 0;
      S.chapaSilencioActive = true;
      S.chapaSilencioEnd = Date.now() + 5000;
      renderSpecial();
      toast('😶 Te cortaron el rollo. Yapping perdido.', '💀');
    }
  }, 4000);
}

function clickCallar() {
  if (!S.interrumpidorActive) return;
  clearTimeout(S.interrumpidorTimer);
  S.interrumpidorActive = false;
  S.callarBuffEnd = Date.now() + 10000;
  renderSpecial();
  toast('🤫 Callado con clase. ×4 durante 10s', '🤫');
}

function clickDiscutir() {
  if (!S.interrumpidorActive) return;
  clearTimeout(S.interrumpidorTimer);
  S.interrumpidorActive = false;
  S.yappingEnd = (S.yappingEnd || Date.now()) + 10000;
  S.chapa = Math.min(100, (S.chapa || 0) + 10);
  renderSpecial();
  toast('💢 ¡DISCUTIDO! Yapping extendido +10s', '💢');
}

function buildDiego(ch) {
  const chapa   = S.chapa || 0;
  const silencio = S.chapaSilencioActive;
  const yapping  = S.yappingActive && Date.now() < S.yappingEnd;
  const yappingSec = yapping ? Math.ceil((S.yappingEnd - Date.now()) / 1000) : 0;

  let chapaClass = 'chapa-fill';
  let chapaLabel = '💬 Calentando el rollo...';
  if (silencio) { chapaClass += ' chapa-silencio'; chapaLabel = '😶 Silencio incómodo...'; }
  else if (yapping) { chapaClass += ' chapa-yapping'; chapaLabel = `🎙️ YAPPING SUPREMO ×5 (${yappingSec}s)`; }
  else if (chapa >= 80) { chapaClass += ' chapa-max'; chapaLabel = `🎙️ MODO YAPPING ×3`; }
  else if (chapa >= 40) { chapaClass += ' chapa-caliente'; chapaLabel = `🔥 Soltando chapa ×1.5`; }

  let html = `<div class="chapa-box">
    <div class="chapa-lbl"><span>${chapaLabel}</span><span>${Math.floor(chapa)}%</span></div>
    <div class="chapa-track"><div class="${chapaClass}" style="width:${Math.min(100,chapa)}%"></div></div>
  </div>`;

  if (S.idealistaActive && S.idealistaPiso) {
    const p = S.idealistaPiso;
    const esSalinas = p.zona === 'Salinas';
    const conteo = S.salinasConteo || 0;
    html += `<div class="idealista-event${esSalinas ? ' salinas-legendario' : ''}">
      <div class="idealista-header">${esSalinas ? '⭐⭐⭐ SALINAS — LEGENDARIO' : `🏠 NUEVO PISO EN IDEALISTA`}</div>
      <div class="idealista-info">${p.icon} ${p.zona} · ${p.hab} hab · ${p.price}</div>
      <div class="idealista-buff">Buff: ×${p.mult} durante ${p.sec}s</div>
      ${esSalinas
        ? `<div class="salinas-contra-lbl">⚡ CONTRAOFERTA: ${conteo}/20 clicks</div>
           <div class="salinas-contra-track"><div class="salinas-contra-fill" style="width:${Math.min(100,conteo/20*100)}%"></div></div>
           <button class="idealista-btn salinas-btn salinas-contra-btn" onclick="clickSalinasContra()">
             ⭐ ¡¡CONTRAOFERTA!! (${conteo}/20)
           </button>`
        : `<button class="idealista-btn" onclick="clickIdealista()">🏠 Visitar piso</button>`
      }
    </div>`;
  }

  if (S.interrumpidorActive) {
    html += `<div class="interruptor-event">
      <div class="interruptor-title">💬 ¡ALGUIEN TE INTERRUMPE!</div>
      <p class="interruptor-hint">Si no reaccionas, el Yapping se va a 0</p>
      <div class="interruptor-btns">
        <button class="callar-btn" onclick="clickCallar()">🤫 CALLAR ×4</button>
        <button class="discutir-btn" onclick="clickDiscutir()">💢 DISCUTIR +10s</button>
      </div>
    </div>`;
  }
  if (S.olaActive) {
    const isHolding = holdType === 'ola';
    const revealed  = S.olaRevealed;
    html += `<div class="ola-event${revealed ? (S.olaDir === 'derecha' ? ' ola-derecha' : ' ola-izquierda') : ' ola-misterio'}">
      <div class="ola-dir ola-reveal-txt">${revealed
        ? (S.olaDir === 'derecha' ? '→ ¡ES UNA DERECHA! ¡Aguanta!' : '← ¡ES UNA IZQUIERDA!')
        : '🌊 ¿Derecha o izquierda? Aguanta para ver...'}</div>
      <div class="surf-track"><div class="surf-fill" style="width:${isHolding ? holdProgress : 0}%"></div></div>
      <div class="nose-wrap"
        onmousedown="startHold('ola')"
        ontouchstart="event.preventDefault();startHold('ola')">
        <span class="nose-btn${isHolding ? ' nose-active' : ''}">🌊</span>
        <span class="hold-hint">${isHolding ? '¡Aguanta!' : 'Mantén pulsado para surfear'}</span>
      </div>
    </div>`;
  }

  if (S.idealistaBuffEnd && Date.now() < S.idealistaBuffEnd) {
    const sec = Math.ceil((S.idealistaBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">🏠 PISO VISITADO — ×${S.idealistaBuffMult} (${sec}s)</div>`;
  }
  if (S.olaBuffEnd && Date.now() < S.olaBuffEnd) {
    const sec = Math.ceil((S.olaBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">🌊 DERECHA PERFECTA — ×2 (${sec}s)</div>`;
  }
  if (S.olaDebuffEnd && Date.now() < S.olaDebuffEnd) {
    const sec = Math.ceil((S.olaDebuffEnd - Date.now()) / 1000);
    html += `<div class="police-calm raices-debuff">😤 Mal humor por izquierda — ×0.5 (${sec}s)</div>`;
  }
  if (S.callarBuffEnd && Date.now() < S.callarBuffEnd) {
    const sec = Math.ceil((S.callarBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">🤫 CALLADO CON CLASE — ×4 (${sec}s)</div>`;
  }

  return html;
}

// ——— NANDUKO ———
function checkNandu() {
  if (S.raicesDebuffEnd && Date.now() >= S.raicesDebuffEnd) { S.raicesDebuffEnd = 0; renderSpecial(); }
  if (!S.policeActive && !S.banyoActive && S.totalCurrency > 150 && Math.random() < 0.08) triggerPolice();
  if (!S.banyoActive && !S.policeActive && S.totalCurrency > 300 && Math.random() < 0.06) triggerBanyo();
  if (!S.raicesActive && !S.policeActive && S.totalCurrency > 100 && Math.random() < 0.10) triggerRaices();
}

function triggerBanyo() {
  S.banyoActive = true;
  renderSpecial(); toast('¡REUNIÓN EN EL BAÑO! 🚽 Mantén pulsado...', '🤫');
  showMsg('El cliente quiere una reunión privada. En el baño. Mantén pulsado la nariz para cerrar el trato.');
  clearTimeout(S.banyoTimer);
  S.banyoTimer = setTimeout(() => {
    if (S.banyoActive) {
      S.banyoActive = false;
      if (holdType === 'banyo') { clearInterval(holdInterval); holdInterval = null; holdType = null; holdProgress = 0; }
      const fine = Math.max(80, Math.floor(S.currency * 0.3));
      S.currency = Math.max(0, S.currency - fine);
      renderSpecial(); toast(`¡Plantón! El cliente se fue. -${fmt(fine)} 💵`, '😤');
      showMsg('El cliente esperó en el baño 20 segundos. Ha perdido la confianza en tu empresa.');
      updateDisplays();
    }
  }, 20000);
}

function resolveBanyo() {
  holdProgress = 0; holdType = null;
  clearTimeout(S.banyoTimer); S.banyoActive = false;
  const b = Math.max(150, Math.floor(S.currency * 0.45));
  S.currency += b; S.totalCurrency += b;
  S.achData.banyoWins++;
  S.banyoBuffEnd = Date.now() + 10000;
  renderSpecial(); toast(`¡Trato cerrado! +${fmt(b)} 💵 × 4 durante 10s 💼`, '🤝');
  showMsg('Reunión productiva. Breve. Discreta. El cliente sale contento y tú también. ×4 activado.');
  updateDisplays();
}

// ——— VIAJE A RAÍCES ———
const RAICES_ROUTES = [
  { id:'raices_viejo',  icon:'🛤️', name:'Raíces Viejo'  },
  { id:'coto_carcedo',  icon:'🌲', name:'Coto Carcedo'  },
  { id:'la_maruca',     icon:'🌊', name:'La Maruca'     },
  { id:'coger_l1',      icon:'🚌', name:'Coger el L1'   },
];

function triggerRaices() {
  S.raicesBad     = RAICES_ROUTES[Math.floor(Math.random() * RAICES_ROUTES.length)].id;
  S.raicesActive  = true;
  renderSpecial();
  toast('🚧 ¡GUARDIA EN CARRETERA! Elige ruta rápido', '🚔');
  showMsg('Control de la Guardia Civil. Raíces Viejo, Coto Carcedo, La Maruca o el L1 — ¿cuál está libre?');
  clearTimeout(S.raicesTimer);
  S.raicesTimer = setTimeout(() => {
    if (S.raicesActive) {
      S.raicesActive = false;
      S.raicesDebuffEnd = Date.now() + 15000;
      S.achData.raicesCaptures = (S.achData.raicesCaptures || 0) + 1;
      S.currency = 0;
      renderSpecial();
      toast('Te quedaste parado. ¡Pillado y desplumado!', '🚔');
      showMsg('No elegiste y la guardia te encontró. Pasta confiscada. Distribución cortada 15 segundos.');
      updateDisplays();
    }
  }, 8000);
}

function clickRaices(routeId) {
  if (!S.raicesActive) return;
  clearTimeout(S.raicesTimer);
  S.raicesActive = false;
  const route = RAICES_ROUTES.find(r => r.id === routeId);
  if (routeId !== S.raicesBad) {
    const reward = 60 + Math.floor(Math.random() * 80);
    earn(reward);
    S.achData.raicesEscapes = (S.achData.raicesEscapes || 0) + 1;
    renderSpecial();
    toast(`${route.icon} ¡${route.name} despejado! +${reward} pasta 💸`, '✅');
    showMsg(`${route.name} estaba libre. Conoces el terreno mejor que ellos.`);
    updateDisplays();
  } else {
    S.raicesDebuffEnd = Date.now() + 15000;
    S.achData.raicesCaptures = (S.achData.raicesCaptures || 0) + 1;
    S.currency = 0;
    renderSpecial();
    toast(`🚔 Control en ${route.icon} ${route.name}. ¡Pasta confiscada!`, '😬');
    showMsg(`${route.name} tenía control esta noche. Te han vaciado los bolsillos. 15 segundos fuera de juego.`);
    updateDisplays();
  }
}

function triggerPolice() {
  S.policeActive = true; S.policeNeed = 8 + Math.floor(Math.random() * 8); S.policeDone = 0;
  const isNandu = S.pid === 'nanduko';
  renderSpecial(); toast(isNandu ? '¡¡LA GUARDIA!! ¡CORRE NANDUKO!' : '¡¡POLICÍA DEL BODYBOARD!! ¡CORRE!', '🚨');
  showMsg(isNandu ? '¡La guardia! ¡Pies para qué os quiero! ¡Muévete, empresario!' : '¡Maderos del bodyboard! ¡Pies para qué os quiero! ¡Muévete!');
  clearTimeout(S.policeTimer);
  S.policeTimer = setTimeout(() => {
    if (S.policeActive) {
      const fine = Math.max(100, Math.floor(S.currency * 0.4));
      S.currency = Math.max(0, S.currency - fine); S.policeActive = false; S.achData.policeCaptures++;
      renderSpecial(); toast(`¡Pillado! Multa de ${fmt(fine)} 💵`, '👮');
      showMsg('Te han pillado con el género. La próxima vez corre más.'); updateDisplays();
    }
  }, 10000);
}

function clickPolice() {
  if (!S.policeActive) return;
  S.policeDone++;
  if (S.policeDone >= S.policeNeed) {
    clearTimeout(S.policeTimer); S.policeActive = false;
    const b = Math.max(50, Math.floor(S.currency * 0.2));
    S.currency += b; S.totalCurrency += b; S.achData.policeEscapes++;
    renderSpecial(); toast(`¡Escapado! Adrenalina: +${fmt(b)} 💵`, '🏃');
    showMsg('La adrenalina es parte del negocio. Nanduko escapa de nuevo.'); updateDisplays();
  } else { renderSpecial(); }
}

const VASOS_FRASES = [
  'Este vaso tiene algo flotando. No preguntes qué.',
  'Huele a contenedor de reciclaje en verano.',
  '¿Eso de abajo es hielo... o una colilla de los 90?',
  'El cubanito del fondo tiene su propio ecosistema.',
  'Tres horas después del cierre y aquí están los vasos. Dignos de estudio científico.',
  'Hay una cerveza con más vida dentro que mucha gente del bar.',
  'Pegajoso. Por dentro, por fuera, y en el alma.',
  'El que dejó esto tenía síndrome de Diógenes pero solo con vasos.',
  'Se escucha un "glup" sospechoso cuando lo inclinas.',
  'Este vaso ha visto cosas que te harían llorar.',
];

// ——— EXTRAPERLO ———
function checkXP() {
  const tc = S.totalCurrency;
  // Fita — yeyo offer
  if (!S.yeyoActive && !S.tripleActive && Math.random() < 0.06) triggerYeyo();
  // Muchaga — furia/pelea + gresca + pizza + whisky
  if (S.furiaLevel >= 100 && !S.fightActive && !S.grescaActive && Math.random() < 0.65) triggerFight();
  if (!S.fightActive && S.furiaLevel < 100 && tc > 200 && Math.random() < 0.05) triggerFight();
  if (!S.grescaActive && !S.fightActive && tc > 150 && Math.random() < 0.07) triggerGresca();
  if (!S.pizzaActive && tc > 400 && Math.random() < 0.05) triggerPizza();
  // Noah — chica + STD
  if (!S.chicaActive && Math.random() < 0.07) triggerChica();
  if (!S.stdActive && tc > 400 && Math.random() < 0.04) triggerSTD();
  // Nanduko — policía + baño
  if (!S.policeActive && tc > 200 && Math.random() < 0.07) triggerPolice();
  if (!S.banyoActive && !S.policeActive && tc > 300 && Math.random() < 0.05) triggerBanyo();
  // Extraperlo-specific
  if (!S.rocaActive && Math.random() < 0.10) triggerRoca();
  if (!S.vasosActive && Math.random() < 0.12) triggerLimpiarVasos();
}

function triggerLimpiarVasos() {
  S.vasosActive = true; S.vasosNeed = 5 + Math.floor(Math.random() * 6); S.vasosDone = 0;
  S.vasosFrase = VASOS_FRASES[Math.floor(Math.random() * VASOS_FRASES.length)];
  renderSpecial(); toast('¡¡HAY VASOS QUE LIMPIAR!! ¡Salen del contenedor!', '🍺');
  showMsg('Uf. Alguien tiene que limpiar esto. Y ese alguien eres tú.');
  clearTimeout(S.vasosTimer);
  S.vasosTimer = setTimeout(() => {
    if (S.vasosActive) {
      S.vasosActive = false; renderSpecial();
      toast('Los vasos se han quedado ahí. El contenedor gana.', '🗑️');
      showMsg('Nadie los limpió. Siguen ahí, en todo su esplendor asqueroso.');
    }
  }, 20000);
}

function clickVaso() {
  if (!S.vasosActive) return;
  S.vasosDone++;
  if (S.vasosDone >= S.vasosNeed) {
    clearTimeout(S.vasosTimer); S.vasosActive = false;
    S.achData.vasosLimpiados = (S.achData.vasosLimpiados || 0) + 1;
    const reward = 80 + Math.floor(Math.random() * 80);
    earn(reward);
    renderSpecial();
    toast(`¡Vasos limpios! +${reward} Caos 🧼`, '✨');
    showMsg('Manos en remojo, pero el Caos sube. Dignidad: -10. Puntos: +' + reward + '.');
  } else {
    S.vasosFrase = VASOS_FRASES[Math.floor(Math.random() * VASOS_FRASES.length)];
    showMsg('🍺 ' + S.vasosFrase);
    renderSpecial();
  }
}

function triggerRoca() {
  S.rocaActive = true; S.rocaNeed = 6 + Math.floor(Math.random() * 6); S.rocaDone = 0;
  renderSpecial(); toast('¡¡ROCA PINTADA EN EL ESCENARIO!! ¡¡ALERTA!!', '🎸');
  showMsg('¡Roca Pintada suelta! ¡Hay que hacer algo! ¡No pueden tocar sin consecuencias!');
  clearTimeout(S.rocaTimer);
  S.rocaTimer = setTimeout(() => {
    if (S.rocaActive) {
      S.rocaActive = false; renderSpecial();
      toast('Roca Pintada ha tocado su set completo. Horror sonoro.', '🎶');
      showMsg('Roca Pintada se ha salido con la suya. Que Dios nos pille confesados.');
    }
  }, 8000);
}

function clickRoca() {
  if (!S.rocaActive) return;
  S.rocaDone++;
  if (S.rocaDone >= S.rocaNeed) {
    clearTimeout(S.rocaTimer); S.rocaActive = false;
    S.achData.rocaHits++;
    const ch = CHARS[S.pid];
    const b  = Math.max(200, Math.floor(S.currency * 0.4));
    S.currency += b; S.totalCurrency += b;
    renderSpecial();
    const msgs = ['¡Roca Pintada ha salido volando del escenario!','¡Roca Pintada ha cancelado su actuación indefinidamente!','¡El guitarrista de Roca Pintada pide perdón llorando!'];
    toast(`¡${msgs[Math.floor(Math.random()*msgs.length)]} +${fmt(b)} ${ch.icon}`, '🤜');
    showMsg('El festival aplaude. Roca Pintada promete no volver. Por ahora.');
    updateDisplays();
  } else { renderSpecial(); }
}

// ================================================================
//  RENDER SPECIAL AREA
// ================================================================
function renderSpecial() {
  const area = document.getElementById('special-area');
  if (!area || !S.pid) return;
  const ch = CHARS[S.pid];
  let content = '';
  switch (S.pid) {
    case 'muchaga':    content = buildWSK(ch);     break;
    case 'fita':       content = buildDobletazo(); break;
    case 'noah':       content = buildNoah(ch);    break;
    case 'diego':      content = buildDiego(ch);   break;
    case 'weeman4k':   content = buildDaigo(ch);   break;
    case 'nanduko':    content = buildNandu();      break;
    case 'extraperlo': content = buildXP(ch);       break;
  }
  area.innerHTML = content + buildCompletionBanner();
}

// ================================================================
//  DAIGO
// ================================================================
const LUCIA_RANTS = [
  'Lucia Martiño no entiende el arte visual.',
  'La escena de surf asturiana necesita VISIÓN.',
  '¡LUCIA MARTIÑO POR FAVOR, DÉJAME TRABAJAR!',
  'El surf no es solo deporte, es ARTE.',
  'He grabado mil bodas, puedo grabar un tubo.',
];
const COOPERS_LOOTS = ['🍕 Pizza de La Luna', '🍔 Hamburguesa del suelo', '🍳 La cocina del bar La Luna'];

function tickDaigo() {
  // Diarrea bar fills
  if (!S.diarreaReady) {
    S.diarrea = Math.min(100, (S.diarrea || 0) + 1.5);
    if (S.diarrea >= 100) {
      S.diarreaReady = true;
      toast('💥 ¡DIARREA EXPLOSIVA! ¡PULSA AHORA!', '💥');
      clearTimeout(S.diarreaTimer);
      S.diarreaTimer = setTimeout(() => {
        if (S.diarreaReady) {
          S.diarreaReady = false;
          S.diarrea = 0;
          triggerPapaRabioso('Se escapó la diarrea. Crimen artístico imperdonable.');
        }
      }, 4000);
    }
  }
  // Coopers progress
  S.coopersPct = (S.coopersPct || 0) + 2;
  if (S.coopersPct >= 100) {
    S.coopersPct = 0;
    if (!S.coopersEvent) triggerCoopersEvent();
  }
}

function renderCoopersEventMini() {
  const el = document.getElementById('coopers-event-mini');
  if (!el) return;
  if (!S.coopersEvent) { el.innerHTML = ''; return; }
  if (S.coopersEvent === 'cagar') {
    el.innerHTML = `<div class="mini-event mini-cagar">💩 <span>¡NO PULSES!</span></div>`;
  } else if (S.coopersEvent === 'lootear') {
    const pct = Math.floor(((S.coopersLootDone||0) / (S.coopersLootNeed||1)) * 100);
    el.innerHTML = `<div class="mini-event mini-loot">
      <span>🍕 ${S.coopersLootDone}/${S.coopersLootNeed}</span>
      <div class="mini-bar"><div class="mini-fill" style="width:${pct}%"></div></div>
    </div>`;
  } else if (S.coopersEvent === 'jamon') {
    const pct = Math.floor(((S.coopersJamonDone||0) / (S.coopersJamonNeed||1)) * 100);
    el.innerHTML = `<div class="mini-event mini-jamon">
      <span>🐷 ${S.coopersJamonDone}/${S.coopersJamonNeed}</span>
      <div class="mini-bar"><div class="mini-fill" style="width:${pct}%"></div></div>
    </div>`;
  }
}

function triggerCoopersEvent() {
  const rand = Math.random();
  if (rand < 0.33) {
    S.coopersEvent = 'cagar';
    renderCoopersEventMini();
    toast('💩 ¡Coopers va a cagar! ¡NO lo recojas!', '💩');
    clearTimeout(S.coopersTimer);
    S.coopersTimer = setTimeout(() => {
      if (S.coopersEvent === 'cagar') {
        S.achData.cagadasEvitadas = (S.achData.cagadasEvitadas || 0) + 1;
        S.coopersEvent = null;
        earn(Math.floor(calcPC() * 5));
        toast('💩 Coopers dejó su obra en la acera. Bien hecho.', '✅');
        renderCoopersEventMini();
      }
    }, 5000);
  } else if (rand < 0.66) {
    S.coopersEvent = 'lootear';
    S.coopersLootDone = 0;
    S.coopersLootNeed = 8 + Math.floor(Math.random() * 5);
    S.coopersLootDesc = COOPERS_LOOTS[Math.floor(Math.random() * COOPERS_LOOTS.length)];
    renderCoopersEventMini();
    toast(`🍕 ¡Coopers encontró: ${S.coopersLootDesc}! ¡Dale!`, '🍕');
    clearTimeout(S.coopersTimer);
    S.coopersTimer = setTimeout(() => {
      if (S.coopersEvent === 'lootear') {
        S.coopersEvent = null;
        renderCoopersEventMini();
        triggerPapaRabioso('Coopers tiró el botín. Lamentable pérdida gastronómica.');
      }
    }, 6000);
  } else {
    S.coopersEvent = 'jamon';
    S.coopersJamonDone = 0;
    S.coopersJamonNeed = 10 + Math.floor(Math.random() * 5);
    renderCoopersEventMini();
    toast('🐷 ¡Coopers apesta a jamón! ¡A bañarle!', '🐷');
    clearTimeout(S.coopersTimer);
    S.coopersTimer = setTimeout(() => {
      if (S.coopersEvent === 'jamon') {
        S.coopersEvent = null;
        renderCoopersEventMini();
        toast('Coopers sigue apestando. Que se note en el barrio.', '😮‍💨');
      }
    }, 7000);
  }
}

function clickCoopers() {
  if (S.pid !== 'weeman4k') return;
  S.achData.cooperInteractions = (S.achData.cooperInteractions || 0) + 1;

  if (S.coopersEvent === 'cagar') {
    clearTimeout(S.coopersTimer);
    S.coopersEvent = null;
    S.achData.cagadasRecogidas = (S.achData.cagadasRecogidas || 0) + 1;
    S.cagadaDebuffEnd = Date.now() + 10000;
    toast('💩 Recogiste la mierda. Brillante movida, Daigo.', '💩');
    renderCoopersEventMini(); updateDisplays();
  } else if (S.coopersEvent === 'lootear') {
    S.coopersLootDone++;
    if (S.coopersLootDone >= S.coopersLootNeed) {
      clearTimeout(S.coopersTimer);
      S.coopersEvent = null;
      S.achData.looteos = (S.achData.looteos || 0) + 1;
      S.cooperLootBuffEnd = Date.now() + 8000;
      toast('🍕 ¡LOOTEO COMPLETO! ×2 durante 8s', '🍕');
      renderCoopersEventMini(); updateDisplays();
    } else { renderCoopersEventMini(); }
  } else if (S.coopersEvent === 'jamon') {
    S.coopersJamonDone++;
    if (S.coopersJamonDone >= S.coopersJamonNeed) {
      clearTimeout(S.coopersTimer);
      S.coopersEvent = null;
      S.achData.jamones = (S.achData.jamones || 0) + 1;
      S.cooperJamonBuffEnd = Date.now() + 12000;
      toast('🐾 ¡Coopers limpio! ×1.5 durante 12s', '🐾');
      renderCoopersEventMini(); updateDisplays();
    } else { renderCoopersEventMini(); }
  }
}

function clickPerfect() {
  if (!S.diarreaReady) return;
  clearTimeout(S.diarreaTimer);
  S.diarreaReady = false;
  S.diarrea = 0;
  S.achData.perfectPoints = (S.achData.perfectPoints || 0) + 1;
  S.achData.perfectHits   = (S.achData.perfectHits   || 0) + 1;

  if (S.achData.perfectPoints >= 4) {
    S.achData.perfectPoints = 0;
    S.ultraActive = true;
    S.ultraEnd = Date.now() + 12000;
    S.achData.ultraActivations = (S.achData.ultraActivations || 0) + 1;
    triggerMolinillo();
    toast('⚡ ULTRAPERFECT ×10 — 12 segundos de gloria total', '⚡');
    showMsg('ULTRAPERFECT. El universo te debe esto.');
  } else {
    const pts = S.achData.perfectPoints;
    toast(`💥 PERFECT! ${pts}/4 puntos acumulados`, '💥');
    showMsg(`Perfect ${pts}/4. ${4 - pts} más para ULTRAPERFECT.`);
  }
  renderSpecial(); updateDisplays();
}

function triggerPapaRabioso(motivo) {
  if (S.papaRabioso) return;
  S.papaRabioso = true;
  S.papaClicks  = 0;
  S.papaNeed    = 10;
  renderSpecial();
  toast(`😤 PAPÁ RABIOSO — ${LUCIA_RANTS[Math.floor(Math.random() * LUCIA_RANTS.length)]}`, '😤');
  showMsg(motivo || 'El hate es energía. Hay que soltarlo.');
  clearTimeout(S.papaTimer);
  S.papaTimer = setTimeout(() => {
    if (S.papaRabioso) {
      S.papaRabioso = false;
      toast('El papá rabioso se calmó. Sin buff.', '😮‍💨');
      renderSpecial();
    }
  }, 5000);
}

function clickPapa() {
  if (!S.papaRabioso) return;
  S.papaClicks++;
  if (S.papaClicks === 1) S.achData.papaRabiosoHits = (S.achData.papaRabiosoHits || 0) + 1;
  if (S.papaClicks >= S.papaNeed) {
    clearTimeout(S.papaTimer);
    S.papaRabioso = false;
    S.papaBuffEnd = Date.now() + 8000;
    toast('😤✅ ¡HATE SOLTADO! ×3 durante 8s. Lucia lo notará.', '😤');
    showMsg('El hate es energía. Daigo lo sabe mejor que nadie.');
    renderSpecial(); updateDisplays();
  } else { renderSpecial(); }
}

function triggerMolinillo() {
  S.molinilloActive = true;
  S.molinilloDone   = 0;
  S.molinilloNeed   = 15 + Math.floor(Math.random() * 6);
  renderSpecial();
  toast('🌀 BRRRRRRRRRRRR — ¡MOLINILLO! ¡Dale o pierdes el ULTRAPERFECT!', '🌀');
  clearTimeout(S.molinilloTimer);
  S.molinilloTimer = setTimeout(() => {
    if (S.molinilloActive) {
      S.molinilloActive = false;
      S.ultraActive     = false;
      S.ultraEnd        = 0;
      renderSpecial();
      toast('🌀❌ Molinillo fallado. ULTRAPERFECT cancelado.', '💀');
      showMsg('El molinillo no es para todo el mundo. Entrenamiento requerido.');
    }
  }, 4000);
}

function clickMolinillo() {
  if (!S.molinilloActive) return;
  S.molinilloDone++;
  if (S.molinilloDone >= S.molinilloNeed) {
    clearTimeout(S.molinilloTimer);
    S.molinilloActive   = false;
    S.molinilloBuffEnd  = Date.now() + 8000;
    S.achData.molinillos = (S.achData.molinillos || 0) + 1;
    renderSpecial();
    toast('🌀✅ ¡MOLINILLO COMPLETADO! ×5 adicional durante 8s', '🌀');
    showMsg('El molinillo en su máximo esplendor. Daigo, eres único.');
    updateDisplays();
  } else { renderSpecial(); }
}

function buildDaigo(ch) {
  let html = '';

  // Diarrea bar
  const dp = Math.min(100, S.diarrea || 0);
  const dClass = dp >= 80 ? 'diarrea-fill-crit' : dp >= 50 ? 'diarrea-fill-high' : 'diarrea-fill';
  const pts = S.achData.perfectPoints || 0;
  html += `<div class="diarrea-section">
    <div class="diarrea-header">
      <span>💥 Diarrea Explosiva</span>
      <span class="perfect-dots">${'💩'.repeat(pts)}${'💨'.repeat(4-pts)}</span>
    </div>
    <div class="diarrea-track"><div class="${dClass}" style="width:${dp}%"></div></div>
    ${S.diarreaReady ? `<button class="perfect-btn" onclick="clickPerfect()">💥 ¡PERFECT!</button>` : ''}
  </div>`;

  // Papá rabioso
  if (S.papaRabioso) {
    const pP = Math.floor(((S.papaClicks||0) / S.papaNeed) * 100);
    html += `<div class="papa-event">
      <h4>😤 PAPÁ RABIOSO</h4>
      <p>${LUCIA_RANTS[(S.papaClicks||0) % LUCIA_RANTS.length]}</p>
      <div class="papa-track"><div class="papa-fill" style="width:${pP}%"></div></div>
      <button class="papa-btn" onclick="clickPapa()">😤 ¡SOLTAR EL HATE!</button>
    </div>`;
  }

  // Active buff/debuff indicators
  if (S.ultraActive && Date.now() < S.ultraEnd) {
    html += `<div class="wsk-active">⚡ ULTRAPERFECT ×10 (${Math.ceil((S.ultraEnd-Date.now())/1000)}s)</div>`;
  }
  if (S.molinilloActive) {
    const pM = Math.floor(((S.molinilloDone||0) / S.molinilloNeed) * 100);
    html += `<div class="papa-event molinillo-event">
      <h4>🌀 ¡HACER EL MOLINILLO!</h4>
      <p>${S.molinilloDone}/${S.molinilloNeed} — ¡Dale o pierdes el ULTRAPERFECT!</p>
      <div class="papa-track"><div class="molinillo-fill" style="width:${pM}%"></div></div>
      <button class="molinillo-btn" onclick="clickMolinillo()">🌀 ¡GI-RA!</button>
    </div>`;
  }
  if (S.molinilloBuffEnd && Date.now() < S.molinilloBuffEnd) {
    html += `<div class="wsk-active">🌀 MOLINILLO ×5 (${Math.ceil((S.molinilloBuffEnd-Date.now())/1000)}s)</div>`;
  }
  if (S.cooperLootBuffEnd && Date.now() < S.cooperLootBuffEnd) {
    html += `<div class="wsk-active">🍕 LOOTEO ×2 (${Math.ceil((S.cooperLootBuffEnd-Date.now())/1000)}s)</div>`;
  }
  if (S.cooperJamonBuffEnd && Date.now() < S.cooperJamonBuffEnd) {
    html += `<div class="wsk-active">🐾 OLORCILLO ×1.5 (${Math.ceil((S.cooperJamonBuffEnd-Date.now())/1000)}s)</div>`;
  }
  if (S.papaBuffEnd && Date.now() < S.papaBuffEnd) {
    html += `<div class="wsk-active">😤 HATE SOLTADO ×3 (${Math.ceil((S.papaBuffEnd-Date.now())/1000)}s)</div>`;
  }
  if (S.cagadaDebuffEnd && Date.now() < S.cagadaDebuffEnd) {
    html += `<div class="police-calm" style="color:#ff6644">💩 Mierda en la mano ×0.5 (${Math.ceil((S.cagadaDebuffEnd-Date.now())/1000)}s)</div>`;
  }

  if (!S.coopersEvent && !S.papaRabioso && !S.diarreaReady) {
    html += `<div class="police-calm">🎬 En rodaje... Coopers espera su momento.</div>`;
  }

  return html;
}

function buildWSK(ch) {
  let html = '';

  // Medidor de furia
  const fPct  = Math.floor(S.furiaLevel);
  const fCrit = fPct >= 80;
  const fMid  = fPct >= 50 && !fCrit;
  const furiaMult = fPct >= 100 ? ' <span style="color:#ff5500;font-weight:900">×5</span>' : '';
  html += `<div class="furia-box">
    <div class="furia-lbl"><span>💢 Furia${furiaMult}</span><span>${fPct}%</span></div>
    <div class="furia-track"><div class="furia-fill${fCrit?' furia-critical':fMid?' furia-mid':''}" style="width:${Math.min(fPct,100)}%"></div></div>
  </div>`;

  // Pelea (furia a tope)
  if (S.fightActive && S.fightPunch) {
    const p = S.fightPunch;
    html += `<div class="fight-event">
      <h4>🥊 ¡TE VIENEN A PEGAR!</h4>
      <p class="fight-sub">Golpe desde <b>${p.dir}</b> ${p.icon}</p>
      <div class="fight-btns">
        ${PUNCH_TYPES.map(pt => `<button class="fight-btn${pt.key===p.key?' fight-correct':''}" onclick="clickFight('${pt.key}')">${pt.icon} ${pt.dir}</button>`).join('')}
      </div>
    </div>`;
  }

  // Pizzas (3 targets)
  if (S.pizzaActive && S.pizzaClicked) {
    html += `<div class="pizza-event">
      <div class="pizza-header"><span>🍕 PEDIDO ESPECIAL</span><span class="pizza-mult">→ FURIA 100%</span></div>
      <div class="pizza-sub">¡Coge las 3 pizzas antes de que se enfríen!</div>
      <div class="pizza-targets">
        ${[0,1,2].map(i => S.pizzaClicked[i]
          ? `<span class="pizza-target pizza-done">✅</span>`
          : `<button class="pizza-target" onclick="clickPizza(${i})">🍕</button>`
        ).join('')}
      </div>
    </div>`;
  }

  // Gresca abuelos
  if (S.grescaActive) {
    const pct = Math.floor((S.grescaDone / S.grescaNeed) * 100);
    html += `<div class="gresca-event">
      <h4>👴 ¡¡LOS ABUELOS SE ESTÁN PEGANDO!!</h4>
      <p>${S.grescaDone}/${S.grescaNeed} — ¡sepáralos ya o pierdes todo!</p>
      <div class="gresca-track"><div class="gresca-fill" style="width:${pct}%"></div></div>
      <button class="gresca-btn" onclick="clickGresca()">👐 ¡SEPÁRALOS!</button>
    </div>`;
  }

  // Whisky por la mañana
  if (S.wskActive && Date.now() < S.wskEnd) {
    const sec = Math.ceil((S.wskEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">🥃 WHISKY ACTIVO — ×5 (${sec}s)</div>`;
  } else if (Date.now() >= S.wskCoolEnd) {
    html += `<button class="whyshkeys-btn" onclick="clickWiskey()">🥃 WHISKY POR LA MAÑANA</button>`;
  } else {
    const cd = Math.ceil((S.wskCoolEnd - Date.now()) / 1000);
    html += `<div class="whyshkeys-hint">🥃 Cargando whisky... ${cd}s</div>`;
  }

  return html;
}

function buildDobletazo() {
  const pct    = S.energy;
  const crit   = pct < 20;
  const triple = S.tripleActive && Date.now() < S.tripleEnd;
  const debuff = S.yeyoActive === true && Date.now() < S.debuffEnd;
  const offer  = S.yeyoActive === 'offer';
  const triSec = triple ? Math.ceil((S.tripleEnd - Date.now()) / 1000) : 0;
  const onCD   = Date.now() < S.dblCoolEnd;
  const cdSec  = onCD ? Math.ceil((S.dblCoolEnd - Date.now()) / 1000) : 0;

  let barClass = 'energy-fill';
  if (triple) barClass += ' triple';
  else if (debuff) barClass += ' debuff';
  else if (crit) barClass += ' crit';

  let label = triple ? `⚡⚡⚡ TRIPLETE ×10 (${triSec}s)` : debuff ? '🤢 INTOXICADO — energía en caída libre' : '⚡ Energía Nocturna';

  let html = `<div class="energy-box">
    <div class="energy-lbl"><span>${label}</span><span>${Math.floor(pct)}%</span></div>
    <div class="energy-track"><div class="${barClass}" style="width:${pct}%"></div></div>`;

  if (!triple && !debuff) {
    html += `<button class="dobletazo-btn${onCD?' dbl-cd':''}" onclick="clickDobletazo()" ${onCD?'disabled':''}>
      ${onCD ? `⏳ ${cdSec}s` : '⚡ DOBLETAZO'}
    </button>`;
  }
  if (crit && !triple) html += `<div class="energy-warn">⚠️ ¡Fita se desploma! ¡Haz algo YA!</div>`;
  if (pct <= 0)        html += `<div class="energy-warn" style="color:#ff2222">💤 K.O. Producción = 0.</div>`;
  html += `</div>`;

  if (S.chupaActive) {
    const c = S.chupaCorners;
    const n = S.chupaNeed;
    const corners = [0,1,2,3].map(i => {
      const pct = Math.min(100, Math.floor(c[i] / n * 100));
      const done = c[i] >= n;
      return `<button class="chupa-corner${done ? ' licked' : ''}" onclick="clickChupaCorner(${i})">
        <div class="corner-fill-bg"><div class="corner-fill-bar" style="height:${pct}%"></div></div>
        <span class="corner-icon">${done ? '✅' : '👅'}</span>
      </button>`;
    });
    html += `<div class="chupa-event">
      <h4>🛍️ ¡CHUPA LAS ESQUINAS!</h4>
      <p>Lame las 4 antes de que se acabe → TRIPLETE ×10</p>
      <div class="chupa-bolsa">${corners.join('')}</div>
    </div>`;
  }

  // ¿QUIÉS UNA? — hold nariz
  if (offer) {
    const isHolding = holdType === 'yeyo';
    html += buildHoldNose('yeyo', '¿QUIÉS UNA?', 'Mantén pulsado la nariz para aspirar. Puede salir bien... o ser rascadura de pared.', isHolding);
  }

  return html;
}

function buildHoldNose(type, title, subtitle, isHolding) {
  const pct = (holdType === type) ? Math.floor(holdProgress) : 0;
  return `<div class="yeyo-event${isHolding ? ' holding' : ''}">
    <h4>${title}</h4>
    <p class="yeyo-sub">${subtitle}</p>
    <div class="hold-track"><div class="hold-fill" style="width:${pct}%"></div></div>
    <div class="nose-wrap"
      onmousedown="startHold('${type}')"
      ontouchstart="event.preventDefault();startHold('${type}')">
      <span class="nose-btn${isHolding ? ' nose-active' : ''}">👃</span>
      <span class="hold-hint">${isHolding ? '¡Aguanta!' : 'Mantén pulsado'}</span>
    </div>
  </div>`;
}

function buildNoah(ch) {
  const APPS = [
    {id:'instagram', icon:'📸', name:'Insta',   m:'×2.0'},
    {id:'tiktok',    icon:'🎵', name:'TikTok',  m:'×3.5'},
    {id:'whatsapp',  icon:'💬', name:'Whats',   m:'×1.5'},
  ];
  let html = '<div class="app-switcher">';
  APPS.forEach(a => {
    const isActive = S.app === a.id;
    const isLit    = S.appLit === a.id;
    html += `<button class="app-btn${isActive?' app-active':''}${isLit?' app-lit':''}" onclick="switchApp('${a.id}')">
      ${a.icon}
      <small>${a.name}</small>
      <small class="app-mult">${isLit ? a.m : '—'}</small>
    </button>`;
  });
  html += '</div>';
  const litApp = APPS.find(a => a.id === S.appLit);
  const onCorrect = S.app === S.appLit;
  html += `<div class="app-status ${onCorrect ? 'app-status-ok' : 'app-status-warn'}">
    ${onCorrect ? `✅ ${litApp.icon} activo — ${litApp.m}` : `⚡ Cambia a ${litApp.icon} ${litApp.name} para el bonus`}
  </div>`;
  if (S.ahogadoActive) {
    const pct = Math.floor((S.ahogadoDone / S.ahogadoNeed) * 100);
    const secsLeft = Math.max(0, Math.ceil((S.ahogadoTimerEnd - Date.now()) / 1000));
    html += `<div class="ahogado-event">
      <div style="font-size:2.2rem">🌊🏊</div>
      <h4>¡¡SE ESTÁ AHOGANDO!!</h4>
      <p>${S.ahogadoDone}/${S.ahogadoNeed} — ${secsLeft}s</p>
      <div class="ahogado-track"><div class="ahogado-fill" style="width:${pct}%"></div></div>
      <button class="socorro-btn" onclick="clickSocorro()">🏊 ¡AL AGUA!</button>
    </div>`;
  }
  if (S.chicaActive) html += `<div class="chica-event"><div style="font-size:2rem">👩‍🦰</div><h4>¡CHICA A LA VISTA!</h4><p>Te está mirando. ¡Habla ahora o nunca!</p><button class="chica-btn" onclick="clickChica()">💬 ¡LIGAR AHORA!</button></div>`;
  if (S.ahogadoBuffEnd && Date.now() < S.ahogadoBuffEnd) {
    const sec = Math.ceil((S.ahogadoBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">📰 HÉROE DE SALINAS — ×3 (${sec}s)</div>`;
  }
  if (S.ligaBuffEnd && Date.now() < S.ligaBuffEnd) {
    const sec = Math.ceil((S.ligaBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">💕 EN MODO LIGUE — ×5 (${sec}s)</div>`;
  }
  if (S.ahogadoDebuffEnd && Date.now() < S.ahogadoDebuffEnd) {
    const sec = Math.ceil((S.ahogadoDebuffEnd - Date.now()) / 1000);
    html += `<div class="police-calm raices-debuff">📰 Mala prensa en La Voz — producción ×0.4 (${sec}s)</div>`;
  }
  if (S.stdActive) {
    const cost = Math.max(200, Math.floor(S.totalCurrency * 0.1));
    html += `<div class="std-event"><h5>🦠 Picor Sospechoso</h5><p>Producción -50%. Las consecuencias de ligar sin criterio.</p><button class="farmacia-btn" onclick="clickFarmacia()">💊 Farmacia (${fmt(cost)} ${ch.icon})</button></div>`;
  }
  return html;
}

function buildNandu() {
  let html = '';

  if (S.policeActive) {
    const pct = Math.floor((S.policeDone / S.policeNeed) * 100);
    html += `<div class="police-event"><h4>🚨 ¡¡LA GUARDIA!! 🚔</h4><p>¡CORRE! ${S.policeDone}/${S.policeNeed} pasos</p><div class="police-track"><div class="police-fill" style="width:${pct}%"></div></div><button class="flee-btn" onclick="clickPolice()">¡¡CORRE!! 🏃</button></div>`;
  }

  if (S.banyoActive) {
    const isHolding = holdType === 'banyo';
    html += buildHoldNose('banyo', '🚽 REUNIÓN EN EL BAÑO', 'El cliente espera dentro. Todo está en pausa. Mantén pulsado para cerrar el trato.', isHolding);
  }

  if (S.raicesActive) {
    html += `<div class="raices-event">
      <h4>🚧 ¡¡GUARDIA EN CARRETERA!!</h4>
      <p>Elige ruta para llegar a Raíces. ¡Solo una está vigilada!</p>
      <div class="raices-btns">
        ${RAICES_ROUTES.map(r => `<button class="raices-btn" onclick="clickRaices('${r.id}')">${r.icon}<span>${r.name}</span></button>`).join('')}
      </div>
    </div>`;
  }

  if (S.banyoBuffEnd && Date.now() < S.banyoBuffEnd) {
    const sec = Math.ceil((S.banyoBuffEnd - Date.now()) / 1000);
    html += `<div class="wsk-active">💼 REUNIÓN PRODUCTIVA — ×4 (${sec}s)</div>`;
  }

  if (S.raicesDebuffEnd && Date.now() < S.raicesDebuffEnd) {
    const sec = Math.ceil((S.raicesDebuffEnd - Date.now()) / 1000);
    html += `<div class="police-calm raices-debuff">🚔 Guardia en el barrio — distribución al 50% (${sec}s)</div>`;
  }

  if (!S.policeActive && !S.banyoActive && !S.raicesActive && !(S.raicesDebuffEnd && Date.now() < S.raicesDebuffEnd)) {
    const hint = S.totalCurrency < 150 ? 'Empieza a distribuir para que los maderos te pongan en el radar...' : 'Calma chicha... por ahora. Los agentes hacen sus rondas.';
    html += `<div class="police-calm">🕵️ ${hint}</div>`;
  }

  return html;
}

function buildXP(ch) {
  let html = '';

  // Energy bar + ¿quiés una? offer (Fita)
  html += buildDobletazo();

  // Furia (Muchaga/Extraperlo)
  if (S.furiaLevel > 0 || S.pid === 'extraperlo') {
    const fPct  = Math.floor(S.furiaLevel);
    const fCrit = fPct >= 80;
    const fMid  = fPct >= 50 && !fCrit;
    const furiaMult = fPct >= 100 ? ' <span style="color:#ff5500;font-weight:900">×5</span>' : '';
    html += `<div class="furia-box">
      <div class="furia-lbl"><span>💢 Furia${furiaMult}</span><span>${fPct}%</span></div>
      <div class="furia-track"><div class="furia-fill${fCrit?' furia-critical':fMid?' furia-mid':''}" style="width:${Math.min(fPct,100)}%"></div></div>
    </div>`;
  }

  // Pelea (furia / random)
  if (S.fightActive && S.fightPunch) {
    const p = S.fightPunch;
    html += `<div class="fight-event">
      <h4>🥊 ¡TE VIENEN A PEGAR!</h4>
      <p class="fight-sub">Golpe desde <b>${p.dir}</b> ${p.icon}</p>
      <div class="fight-btns">
        ${PUNCH_TYPES.map(pt => `<button class="fight-btn${pt.key===p.key?' fight-correct':''}" onclick="clickFight('${pt.key}')">${pt.icon} ${pt.dir}</button>`).join('')}
      </div>
    </div>`;
  }

  // Pizzas — 3 targets
  if (S.pizzaActive && S.pizzaClicked) {
    html += `<div class="pizza-event">
      <div class="pizza-header"><span>🍕 PEDIDO ESPECIAL</span><span class="pizza-mult">→ FURIA 100%</span></div>
      <div class="pizza-sub">¡Coge las 3 pizzas antes de que se enfríen!</div>
      <div class="pizza-targets">
        ${[0,1,2].map(i => S.pizzaClicked[i]
          ? `<span class="pizza-target pizza-done">✅</span>`
          : `<button class="pizza-target" onclick="clickPizza(${i})">🍕</button>`
        ).join('')}
      </div>
    </div>`;
  }

  // Gresca abuelos
  if (S.grescaActive) {
    const pctG = Math.floor((S.grescaDone / S.grescaNeed) * 100);
    html += `<div class="gresca-event">
      <h4>👴 ¡¡LOS ABUELOS SE ESTÁN PEGANDO!!</h4>
      <p>${S.grescaDone}/${S.grescaNeed} — ¡sepáralos ya o pierdes todo!</p>
      <div class="gresca-track"><div class="gresca-fill" style="width:${pctG}%"></div></div>
      <button class="gresca-btn" onclick="clickGresca()">👐 ¡SEPÁRALOS!</button>
    </div>`;
  }

  // Whisky
  if (S.wskActive && Date.now() < S.wskEnd) {
    const secW = Math.ceil((S.wskEnd - Date.now()) / 1000);
    html += `<div class="wsk-active" style="margin-top:0.4rem">🥃 WHISKY ACTIVO — ×5 (${secW}s)</div>`;
  } else if (Date.now() >= S.wskCoolEnd) {
    html += `<button class="whyshkeys-btn" style="margin-top:0.4rem" onclick="clickWiskey()">🥃 WHISKY POR LA MAÑANA</button>`;
  } else {
    const cdW = Math.ceil((S.wskCoolEnd - Date.now()) / 1000);
    html += `<div class="whyshkeys-hint" style="margin-top:0.3rem">🥃 Cargando whisky... ${cdW}s</div>`;
  }

  // Chica (Noah)
  if (S.chicaActive) html += `<div class="chica-event"><div style="font-size:1.8rem">👩‍🦰</div><h4>¡CHICA A LA VISTA!</h4><p>Ligar también es arte.</p><button class="chica-btn" onclick="clickChica()">💬 ¡LIGAR!</button></div>`;

  // Picor sospechoso / STD (Noah)
  if (S.stdActive) {
    const cost = Math.max(200, Math.floor(S.totalCurrency * 0.1));
    html += `<div class="std-event"><h5>🦠 Picor Sospechoso</h5><p>Producción -50%. Las consecuencias de ligar sin criterio.</p><button class="farmacia-btn" onclick="clickFarmacia()">💊 Farmacia (${fmt(cost)} ${ch.icon})</button></div>`;
  }

  // Policía (Nanduko)
  if (S.policeActive) {
    const pct = Math.floor((S.policeDone / S.policeNeed) * 100);
    html += `<div class="police-event"><h4>🚨 ¡POLICÍA DEL BODYBOARD!</h4><p>${S.policeDone}/${S.policeNeed} pasos</p><div class="police-track"><div class="police-fill" style="width:${pct}%"></div></div><button class="flee-btn" onclick="clickPolice()">¡HUIR! 🏃</button></div>`;
  }

  // Reunión en el baño (Nanduko)
  if (S.banyoActive) {
    const isHolding = holdType === 'banyo';
    html += buildHoldNose('banyo', '🚽 REUNIÓN EN EL BAÑO', 'El cliente espera dentro. Todo está en pausa. Mantén pulsado para cerrar el trato.', isHolding);
  }

  // Roca Pintada (Extraperlo)
  if (S.rocaActive) {
    const pct = Math.floor((S.rocaDone / S.rocaNeed) * 100);
    html += `<div class="roca-event">
      <div class="roca-progress">${ROCA_SVG}</div>
      <h4>🎸 ¡¡ROCA PINTADA!!</h4>
      <p>¡Están subiendo al escenario! ${S.rocaDone}/${S.rocaNeed}</p>
      <div class="police-track"><div class="police-fill" style="width:${pct}%;background:linear-gradient(90deg,#cc44ff,#ff44cc)"></div></div>
      <button class="roca-btn" onclick="clickRoca()">🤜 ¡PEGAR A ROCA PINTADA!</button>
    </div>`;
  }

  // Limpiar vasos (Extraperlo)
  if (S.vasosActive) {
    const pct = Math.floor((S.vasosDone / S.vasosNeed) * 100);
    html += `<div class="vasos-event">
      <h4>🍺 LIMPIAR VASOS</h4>
      <div class="vasos-sub">${S.vasosFrase}</div>
      <div class="vasos-track"><div class="vasos-fill" style="width:${pct}%"></div></div>
      <small style="color:#666;font-size:0.68rem;display:block;margin-bottom:0.4rem">${S.vasosDone}/${S.vasosNeed} vasos</small>
      <button class="vasos-btn" onclick="clickVaso()">🧼 ¡LIMPIAR VASO!</button>
    </div>`;
  }

  const anyActive = S.pizzaActive || S.wskActive || S.grescaActive || S.fightActive || S.chicaActive || S.stdActive ||
                    S.policeActive || S.banyoActive || S.rocaActive || S.vasosActive;
  if (!anyActive) html += `<div class="police-calm">🎪 El caos se toma un descanso... brevemente.</div>`;

  return html;
}

// ================================================================
//  ACHIEVEMENTS
// ================================================================
function checkAchievements() {
  if (!S.pid) return;
  const list = ACHIEVEMENTS[S.pid] || [];
  list.forEach(a => {
    if (!S.achievements[a.id] && a.cond(S)) {
      S.achievements[a.id] = true;
      toast(`🏆 LOGRO: ${a.name}\n${a.desc}`, '🏆', 'toast-achievement');
    }
  });
  if (list.length && list.every(a => S.achievements[a.id])) {
    const idx = UNLOCK_ORDER.indexOf(S.pid);
    const nextPid = UNLOCK_ORDER[idx + 1];
    if (nextPid && !localStorage.getItem(`penona_${nextPid}_new`)) {
      localStorage.setItem(`penona_${nextPid}_new`, '1');
      const nextCh = CHARS[nextPid];
      toast(`🔓 ¡${nextCh.name} DESBLOQUEADO! Vuelve al menú.`, '🎉');
    }
  }
}

function buildCompletionBanner() {
  const list = ACHIEVEMENTS[S.pid] || [];
  if (!list.length || !list.every(a => S.achievements[a.id])) return '';
  const idx    = UNLOCK_ORDER.indexOf(S.pid);
  const next   = UNLOCK_ORDER[idx + 1] ? CHARS[UNLOCK_ORDER[idx + 1]] : null;
  const nextLine = next
    ? `<div class="completion-next">${next.icon} <b>${next.name}</b> desbloqueado</div>`
    : `<div class="completion-next">🏆 Leyenda total de La Peñona</div>`;
  return `<div class="completion-banner">
    <div class="completion-title">✅ ¡LOGROS COMPLETADOS!</div>
    ${nextLine}
  </div>`;
}

function toggleAchievements() {
  const overlay = document.getElementById('ach-overlay');
  const isHidden = overlay.classList.contains('hidden');
  if (isHidden) { renderAchievements(); overlay.classList.remove('hidden'); }
  else overlay.classList.add('hidden');
}

function renderAchievements() {
  const list = document.getElementById('ach-list');
  if (!list || !S.pid) return;
  const achs = ACHIEVEMENTS[S.pid] || [];
  list.innerHTML = '';
  achs.forEach(a => {
    const unlocked = !!S.achievements[a.id];
    const item = document.createElement('div');
    item.className = `ach-item ${unlocked ? 'unlocked' : ''}`;
    item.innerHTML = `
      <div class="ach-icon">${unlocked ? a.icon : '🔒'}</div>
      <div class="ach-info">
        <div class="ach-name ${unlocked ? '' : 'locked-name'}">${unlocked ? a.name : '???'}</div>
        <div class="ach-desc">${unlocked ? a.desc : 'Sigue jugando para desbloquear este logro.'}</div>
      </div>
      <div class="ach-check">${unlocked ? '✅' : ''}</div>
    `;
    list.appendChild(item);
  });
  const total   = achs.length;
  const done    = achs.filter(a => S.achievements[a.id]).length;
  document.querySelector('.ach-header span').textContent = `🏆 Logros (${done}/${total})`;
  if (done === total && total > 0) {
    const footer = document.createElement('div');
    footer.className = 'ach-complete-footer';
    footer.innerHTML = `
      <div class="ach-complete-banner">🎉 ¡TODOS LOS LOGROS COMPLETADOS!</div>
      <button class="ach-finish-btn" onclick="finishAndExit()">🏠 Volver al menú principal</button>
    `;
    list.appendChild(footer);
  }
}

function finishAndExit() {
  toggleAchievements();
  goBack();
}

// ================================================================
//  HELPERS
// ================================================================
function fmt(n) {
  n = +n;
  if (n >= 1e12) return (n/1e12).toFixed(1) + 'B';
  if (n >= 1e9)  return (n/1e9).toFixed(1)  + 'MM';
  if (n >= 1e6)  return (n/1e6).toFixed(1)  + 'M';
  if (n >= 1e3)  return (n/1e3).toFixed(1)  + 'K';
  return Math.floor(n).toString();
}

function showMsg(text) {
  const el = document.getElementById('msg-box');
  if (el) el.textContent = `💬 ${text}`;
}

const TOAST_MAX = 2;

function toast(text, icon = '📢', type = '') {
  const container = document.getElementById('toast-container');
  const visible = Array.from(container.children).filter(el => !el.classList.contains('toast-hide'));
  for (let i = 0; i <= visible.length - TOAST_MAX; i++) visible[i]._dismiss();

  const el = document.createElement('div');
  el.className = 'toast-item' + (type ? ' ' + type : '');
  el.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${text}</span><span class="toast-icon" style="visibility:hidden">${icon}</span>`;
  container.appendChild(el);

  const dismiss = () => {
    clearTimeout(tmr);
    el.classList.add('toast-hide');
    setTimeout(() => el.remove(), 200);
  };
  el._dismiss = dismiss;
  el.onclick = dismiss;
  const tmr = setTimeout(dismiss, 3200);
}

function spawnParticle(x, y, text) {
  const c = document.getElementById('particles');
  const p = document.createElement('div');
  p.className  = 'particle';
  p.textContent = text;
  p.style.left  = `${x + (Math.random()*40-20)}px`;
  p.style.top   = `${y}px`;
  p.style.color  = getComputedStyle(document.documentElement).getPropertyValue('--theme').trim() || '#ffd93d';
  c.appendChild(p);
  setTimeout(() => p.remove(), 1000);
}

// ================================================================
//  SAVE / LOAD
// ================================================================
function saveGame() {
  if (!S.pid) return;
  try {
    localStorage.setItem(`penona_${S.pid}`, JSON.stringify({
      currency: S.currency, totalCurrency: S.totalCurrency, totalClicks: S.totalClicks,
      upgrades: S.upgrades, energy: S.energy, app: S.app,
      achData: S.achData, achievements: S.achievements,
    }));
  } catch(_) {}
}

function loadSave(pid) {
  try { return JSON.parse(localStorage.getItem(`penona_${pid}`)); } catch(_) { return null; }
}

// ── TUTORIAL ─────────────────────────────────────────────────────────────────
const TUT_STEPS = [
  { icon: '🍺',  title: '¡Sirve cañas!',        desc: 'Pulsa el botón grande para ganar cañas. Más clicks, más pasta.' },
  { icon: '🛒',  title: 'Compra mejoras',        desc: 'Invierte en mejoras para ganar cañas automáticamente, sin parar.' },
  { icon: '⚡',  title: 'Mecánicas especiales',  desc: 'Cuando salte una mecánica, actúa rápido para llevarte el bono.' },
  { icon: '🏆',  title: 'Consigue logros',       desc: 'Completa todos los logros de Muchaga para desbloquear el siguiente personaje.' },
];
let _tutStep = 0;

function showTutorial() {
  _tutStep = 0;
  _renderTutStep();
  document.getElementById('tutorial-overlay').classList.remove('hidden');
}

function _renderTutStep() {
  const s = TUT_STEPS[_tutStep];
  const isLast = _tutStep === TUT_STEPS.length - 1;
  document.getElementById('tut-body').innerHTML = `
    <div class="tut-icon">${s.icon}</div>
    <div class="tut-title">${s.title}</div>
    <div class="tut-desc">${s.desc}</div>
  `;
  document.getElementById('tut-dots').innerHTML = TUT_STEPS.map((_, i) =>
    `<span class="tut-dot${i === _tutStep ? ' active' : ''}"></span>`
  ).join('');
  document.getElementById('tut-btn').textContent = isLast ? '¡A CURRAR! 🍺' : 'Siguiente →';
}

function tutNext() {
  if (_tutStep < TUT_STEPS.length - 1) {
    _tutStep++;
    const body = document.getElementById('tut-body');
    body.classList.add('tut-fade');
    setTimeout(() => { _renderTutStep(); body.classList.remove('tut-fade'); }, 180);
  } else {
    localStorage.setItem('penona_muchaga_tut', '1');
    document.getElementById('tutorial-overlay').classList.add('hidden');
  }
}
