const problems = [
  { id:1, title:'Inaccurate Batch Weighing', desc:'Batch variations exceed tolerance, causing rework, waste, and quality failures in production.', icon:'fa-balance-scale', solutions:['Precision Batch Scale','Analytical Balance','Auto Batching System'], icons:['⚖️','🔬','⚡'], specs:['±0.001g accuracy','0.0001g readability','Auto-tare & batching'] },
  { id:2, title:'Manual Data Entry Errors', desc:'Paper-based recording creates transcription mistakes, audit failures, and production delays.', icon:'fa-keyboard', solutions:['IoT Smart Terminal','Barcode Label Printer','ERP Data Bridge'], icons:['📡','🏷️','🔗'], specs:['Zero manual entry','Auto barcode print','Live ERP sync'] },
  { id:3, title:'Inventory Tracking Issues', desc:'Unable to track real-time material movements, leading to stock discrepancies and production halts.', icon:'fa-warehouse', solutions:['Wireless Platform Scale','Inventory Dashboard','RFID Weighing System'], icons:['📶','📊','🆔'], specs:['Wireless 100m range','Real-time tracking','RFID integration'] },
  { id:4, title:'Chemical Mixing Inconsistencies', desc:'Imprecise ingredient proportions in chemical formulations lead to product rejections and losses.', icon:'fa-flask', solutions:['Analytical Balance','Multi-range Dispensing Scale','Formula Manager'], icons:['⚗️','🧪','📋'], specs:['0.0001g precision','Auto formula recall','GLP compliant'] },
  { id:5, title:'Production Quality Variations', desc:'Inconsistent weighing data across shifts creates quality gaps and non-conformance reports.', icon:'fa-chart-line', solutions:['Statistical QC Scale','SPC Software Module','Auto Reject System'], icons:['📈','💻','🚫'], specs:['SPC analysis','Cpk tracking','Auto reject gate'] },
  { id:6, title:'Regulatory Compliance Challenges', desc:'Failing to meet FSSAI, BIS, or GMP documentation requirements leads to penalties and shutdowns.', icon:'fa-shield-alt', solutions:['GMP Compliant Balance','Audit Trail Printer','21 CFR Part 11 Scale'], icons:['🛡️','🖨️','📜'], specs:['FDA/GMP ready','Tamper-proof logs','Electronic records'] },
  { id:7, title:'Lack of ERP Integration', desc:'Weighing systems operate in isolation from SAP/Tally, creating duplicate work and reconciliation nightmares.', icon:'fa-plug', solutions:['SAP Integrated Scale','ERP Gateway Module','Cloud API Bridge'], icons:['💼','🔌','☁️'], specs:['SAP/Tally ready','REST API','Real-time push'] },
  { id:8, title:'No Real-Time Monitoring', desc:'Management cannot track production weights, downtime, or efficiency without physical floor visits.', icon:'fa-eye', solutions:['IoT Scale Network','Live Dashboard','Mobile Monitor App'], icons:['🌐','📊','📱'], specs:['5-sec refresh','Multi-site view','iOS & Android'] },
  { id:9, title:'Poor Traceability', desc:'Cannot trace batch ingredients or finished goods backward, causing recall risk and compliance failures.', icon:'fa-search', solutions:['Lot Tracking Scale','Barcode Batch System','Traceability Module'], icons:['🔍','📦','🗂️'], specs:['Full batch history','GS1 barcoding','Recall-ready'] },
  { id:10, title:'Inefficient Warehouse Operations', desc:'Loading, unloading, and dispatch weighing without automation creates throughput bottlenecks.', icon:'fa-truck', solutions:['Floor Scale','Pallet Weighing System','Weighbridge Terminal'], icons:['🏗️','🔧','🚛'], specs:['5 tonne capacity','Forklift-ready','Truck weighing'] },
];

const techFeatures = [
  { name:'IoT Connected Scales', desc:'Real-time data from every scale on your network, accessible anywhere.', icon:'fa-wifi', status:'Live' },
  { name:'Wireless Weighing', desc:'Cut the cables. Industrial-grade wireless up to 100 metres range.', icon:'fa-broadcast-tower', status:'Live' },
  { name:'ERP Integration', desc:'Native connectors for SAP, Oracle, Tally and all major ERP platforms.', icon:'fa-project-diagram', status:'Live' },
  { name:'Mobile App Monitor', desc:'iOS and Android apps for live floor monitoring and alerts.', icon:'fa-mobile-alt', status:'Live' },
  { name:'Cloud Dashboard', desc:'Centralized analytics across plants, shifts, and product lines.', icon:'fa-cloud', status:'Live' },
  { name:'Automated Reporting', desc:'Scheduled PDF and Excel reports delivered to your inbox.', icon:'fa-file-alt', status:'Live' },
  { name:'Data Logging', desc:'Tamper-proof chronological log of every weighment with timestamps.', icon:'fa-database', status:'Live' },
  { name:'Barcode Printing', desc:'Print labels with weight, batch, date, and operator at point of use.', icon:'fa-barcode', status:'Live' },
  { name:'Predictive Maintenance', desc:'AI-based alerts for calibration drift before failures occur.', icon:'fa-brain', status:'Beta' },
  { name:'SAP Integration', desc:'Certified SAP connector with GR/GI, QM, and production order support.', icon:'fa-cogs', status:'Live' },
];

const industries = [
  { name:'Chemical Industry', icon:'⚗️', count:'120+ clients', grad:'linear-gradient(135deg,rgba(244,67,54,0.25),rgba(245,124,0,0.15))' },
  { name:'Pharma Industry', icon:'💊', count:'80+ clients', grad:'linear-gradient(135deg,rgba(124,179,66,0.25),rgba(33,150,243,0.15))' },
  { name:'Food & Beverage', icon:'🌾', count:'95+ clients', grad:'linear-gradient(135deg,rgba(255,193,7,0.2),rgba(245,124,0,0.15))' },
  { name:'Metal Industry', icon:'⚙️', count:'60+ clients', grad:'linear-gradient(135deg,rgba(158,158,158,0.25),rgba(96,125,139,0.15))' },
  { name:'Textile Industry', icon:'🧵', count:'45+ clients', grad:'linear-gradient(135deg,rgba(156,39,176,0.2),rgba(233,30,99,0.15))' },
  { name:'Warehouse & Logistics', icon:'📦', count:'70+ clients', grad:'linear-gradient(135deg,rgba(33,150,243,0.2),rgba(0,188,212,0.15))' },
  { name:'Packaging Industry', icon:'🏭', count:'55+ clients', grad:'linear-gradient(135deg,rgba(255,87,34,0.2),rgba(244,67,54,0.15))' },
  { name:'FMCG Industry', icon:'🛒', count:'75+ clients', grad:'linear-gradient(135deg,rgba(76,175,80,0.2),rgba(139,195,74,0.15))' },
];

const products = [
  { cat:'Laboratory', name:'Analytical Balance', icon:'⚗️', spec:'Readability: 0.0001g\nCapacity: 220g\nGLP/GMP Compliant' },
  { cat:'Precision', name:'Semi-Micro Balance', icon:'🔬', spec:'Readability: 0.01mg\nCapacity: 80g\nDraft Shield Included' },
  { cat:'Industrial', name:'Bench Scale', icon:'⚖️', spec:'Capacity: 30kg\nReadability: 1g\nStainless SS Top' },
  { cat:'Platform', name:'Floor Scale', icon:'🏗️', spec:'Capacity: 2000kg\nReadability: 100g\nDiamond-Check Plate' },
  { cat:'IoT', name:'Smart IoT Scale', icon:'📡', spec:'WiFi + BT + 4G\nCloud Dashboard\nERP Ready' },
  { cat:'Crane', name:'Digital Crane Scale', icon:'🏋️', spec:'Capacity: 10 Tonne\nWireless Remote\nOverload Alarm' },
  { cat:'Weighbridge', name:'Truck Weighbridge', icon:'🚛', spec:'Capacity: 60 Tonne\nConcrete/Pit Type\nAuto Number Plate' },
  { cat:'Wireless', name:'Wireless Platform', icon:'📶', spec:'100m Range\nBattery 20hrs\nIP65 Rated' },
  { cat:'ERP', name:'SAP Scale Terminal', icon:'💼', spec:'Direct SAP GR/GI\nTouch Screen\nPrinter Integrated' },
  { cat:'Compact', name:'Retail Counter Scale', icon:'🛒', spec:'Capacity: 15kg\nDual Display\nBarcode Printer' },
];

const whyItems = [
  { icon:'fa-certificate', title:'BIS Certified', desc:'All products carry Bureau of Indian Standards certification for legal trade.' },
  { icon:'fa-medal', title:'ISO 9001:2015', desc:'Quality management systems certified for manufacturing excellence.' },
  { icon:'fa-tools', title:'Calibration Support', desc:'Factory and on-site NABL-traceable calibration with certificates.' },
  { icon:'fa-headset', title:'AMC Support', desc:'Annual maintenance contracts with guaranteed response SLAs.' },
  { icon:'fa-code', title:'Custom Software', desc:'Bespoke weighing software designed for your specific workflow.' },
  { icon:'fa-satellite-dish', title:'Remote Monitoring', desc:'24/7 system health monitoring from our operations centre.' },
  { icon:'fa-plug', title:'ERP Integration', desc:'Plug-and-play connectivity with all major ERP and MES systems.' },
  { icon:'fa-microchip', title:'IoT Ready', desc:'Every scale ready for industrial IoT deployment out of the box.' },
];

const cases = [
  {
    industry:'Chemical Plant', location:'Vadodara, Gujarat', icon:'⚗️',
    metrics:[{val:'98%',key:'Accuracy'},{val:'40%',key:'Less Waste'},{val:'₹2.1Cr',key:'Annual Savings'}],
    problem:'Batch inconsistencies in resin formulation causing 8% rejection rate and costly rework cycles.',
    solution:'HSCO Precision Batching System with ERP integration and auto-formula recall deployed across 6 batching stations.',
    tags:['Batch Weighing','ERP Integration','Chemical'],
  },
  {
    industry:'Pharma Manufacturer', location:'Hyderabad, Telangana', icon:'💊',
    metrics:[{val:'100%',key:'Compliance'},{val:'60%',key:'Faster Audit'},{val:'0',key:'Deviations'}],
    problem:'FDA audit failures due to manual weighing records, missing traceability, and non-GMP equipment.',
    solution:'GMP-compliant analytical balances with 21 CFR Part 11 audit trail, electronic batch records, and LIMS integration.',
    tags:['GMP Compliance','Pharma','Audit Trail'],
  },
  {
    industry:'FMCG Packaging', location:'Pune, Maharashtra', icon:'🛒',
    metrics:[{val:'35%',key:'Throughput'},{val:'99.8%',key:'Fill Accuracy'},{val:'12 mo',key:'ROI Period'}],
    problem:'Underfill/overfill losses amounting to ₹80L annually with no real-time monitoring across 3 production lines.',
    solution:'Multi-head checkweigher system with live dashboard, shift reports, and automatic reject conveyors.',
    tags:['Checkweighing','FMCG','Automation'],
  },
];

const testimonials = [
  { name:'Rakesh Sharma', role:'Plant Head, Deepak Nitrite', init:'RS', text:'HSCO transformed our batch accuracy from 94% to 99.7%. The ERP integration was seamless and the support team is world-class. Best industrial investment we have made.', stars:5 },
  { name:'Priya Mehta', role:'QA Director, Sun Pharma', init:'PM', text:'Regulatory compliance became effortless after deploying HSCO\'s GMP-compliant balances. The audit trail feature alone saved us three critical FDA observations.', stars:5 },
  { name:'Vijay Nair', role:'Operations Manager, Tata Chemicals', init:'VN', text:'Real-time monitoring across our Mithapur and Soda Ash plants on a single dashboard. HSCO\'s IoT platform is exactly what modern manufacturing needs.', stars:5 },
  { name:'Anita Joshi', role:'CEO, Saras Foods', init:'AJ', text:'The checkweigher system paid for itself in 8 months. Our overfill losses dropped to near zero and our OEE improved by 22%.', stars:5 },
  { name:'Suresh Patel', role:'SCM Head, Reliance Logistics', init:'SP', text:'500 installations managed from a single cloud dashboard. HSCO\'s wireless weighbridges have revolutionised our dispatch efficiency.', stars:5 },
];

// ═══════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════
function renderProblems() {
  const grid = document.getElementById('problemsGrid');
  grid.innerHTML = problems.map((p, i) => `
    <div class="problem-card reveal" style="transition-delay:${i * 0.05}s" onclick="openModal(${p.id-1})">
      <div class="problem-number">0${p.id > 9 ? '' : '0'}${p.id}</div>
      <div class="problem-icon"><i class="fas ${p.icon}"></i></div>
      <div class="problem-title">${p.title}</div>
      <div class="problem-desc">${p.desc}</div>
      <div class="problem-arrow"><i class="fas fa-arrow-right"></i></div>
    </div>
  `).join('');
}

function renderTech() {
  document.getElementById('techGrid').innerHTML = techFeatures.map((t,i)=>`
    <div class="tech-card reveal" style="transition-delay:${i*0.06}s">
      <div class="tech-icon-wrap"><i class="fas ${t.icon}"></i></div>
      <div class="tech-name">${t.name}</div>
      <div class="tech-desc">${t.desc}</div>
      <span class="tech-status">● ${t.status}</span>
    </div>
  `).join('');
}

function renderIndustries() {
  document.getElementById('industryGrid').innerHTML = industries.map((ind,i)=>`
    <div class="industry-card reveal" style="transition-delay:${i*0.07}s">
      <div class="industry-bg">${ind.icon}</div>
      <div class="industry-gradient" style="background:${ind.grad}"></div>
      <div class="industry-content">
        <div class="industry-icon">${ind.icon}</div>
        <div class="industry-name">${ind.name}</div>
        <div class="industry-count">${ind.count}</div>
      </div>
      <div class="industry-arrow"><i class="fas fa-arrow-right"></i></div>
    </div>
  `).join('');
}

function renderProducts() {
  const cards = [...products, ...products].map(p=>`
    <div class="product-card-item">
      <div class="product-shine"></div>
      <div class="product-cat-badge">${p.cat}</div>
      <div class="product-icon-area">${p.icon}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-spec">${p.spec.replace(/\n/g,'<br>')}</div>
      <div class="product-action-row">
        <button class="product-btn-quote" onclick="showToast('Quote request for ${p.name} sent!')">Request Quote</button>
        <div class="product-btn-wa" onclick="window.open('https://wa.me/917045922240?text=Inquiry for ${p.name}','_blank')">
          <i class="fab fa-whatsapp"></i>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('productTrack').innerHTML = cards;
}

function renderWhy() {
  document.getElementById('whyGrid').innerHTML = whyItems.map((w,i)=>`
    <div class="why-card reveal" style="transition-delay:${i*0.06}s">
      <div class="why-icon"><i class="fas ${w.icon}"></i></div>
      <div class="why-title">${w.title}</div>
      <div class="why-desc">${w.desc}</div>
    </div>
  `).join('');
}

function renderCases() {
  document.getElementById('caseGrid').innerHTML = cases.map((c,i)=>`
    <div class="case-card reveal" style="transition-delay:${i*0.1}s">
      <div class="case-header">
        <div class="case-ind-icon">${c.icon}</div>
        <div>
          <div class="case-industry">${c.industry}</div>
          <div class="case-location"><i class="fas fa-map-pin" style="font-size:10px;margin-right:4px;opacity:0.5"></i>${c.location}</div>
        </div>
      </div>
      <div class="case-body">
        <div class="case-row">
          ${c.metrics.map(m=>`<div class="case-metric"><div class="case-metric-val">${m.val}</div><div class="case-metric-key">${m.key}</div></div>`).join('')}
        </div>
        <div style="font-size:11px;letter-spacing:1.5px;color:var(--red);font-family:'Rajdhani',sans-serif;font-weight:700;margin-bottom:4px;">CHALLENGE</div>
        <div class="case-problem">${c.problem}</div>
        <div style="font-size:11px;letter-spacing:1.5px;color:var(--green);font-family:'Rajdhani',sans-serif;font-weight:700;margin-bottom:4px;">SOLUTION</div>
        <div class="case-solution">${c.solution}</div>
        <div style="margin-top:16px">${c.tags.map(t=>`<span class="case-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const cards = [...testimonials, ...testimonials].map(t=>`
    <div class="testi-card">
      <div class="testi-quote-icon">"</div>
      <div class="testi-text">"${t.text}"</div>
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <div class="testi-divider"></div>
      <div class="testi-person">
        <div class="testi-avatar">${t.init}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('testiTrack').innerHTML = cards;
}

// ═══════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════
function openModal(idx) {
  const p = problems[idx];
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSub').textContent = 'Industry Challenge · HSCO Solution Available';
  document.getElementById('modalIcon').innerHTML = `<i class="fas ${p.icon}"></i>`;
  document.getElementById('videoProbDesc').textContent = p.desc;
  document.getElementById('videoInfo').textContent = p.title.toUpperCase() + ' — ANALYSIS';
  document.getElementById('modalSolutions').innerHTML = p.solutions.map((s,i)=>`
    <div class="sol-card">
      <div class="sol-card-icon">${p.icons[i]}</div>
      <div class="sol-card-name">${s}</div>
      <div class="sol-card-feat">${p.specs[i]}</div>
      <button class="sol-card-btn" onclick="showToast('Quote for ${s} requested!')">Request Quote</button>
    </div>
  `).join('');
  document.getElementById('problemModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('problemModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('problemModal').addEventListener('click', function(e){
  if(e.target === this) closeModal();
});

// ═══════════════════════════════════════════════
// HERO CANVAS — Particle Field
// ═══════════════════════════════════════════════
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouseX = 0, mouseY = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticles();
  }

  const COLORS = ['rgba(245,124,0,','rgba(244,67,54,','rgba(192,192,192,','rgba(124,179,66,'];

  function initParticles() {
    particles = [];
    const count = Math.min(120, Math.floor(W * H / 8000));
    for(let i=0; i<count; i++) {
      particles.push({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
        r: Math.random()*2+0.5,
        color: COLORS[Math.floor(Math.random()*COLORS.length)],
        alpha: Math.random()*0.5+0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    // connections
    particles.forEach((p,i)=>{
      particles.slice(i+1).forEach(q=>{
        const dx=p.x-q.x, dy=p.y-q.y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120) {
          ctx.beginPath();
          ctx.strokeStyle=`rgba(245,124,0,${0.06*(1-dist/120)})`;
          ctx.lineWidth=0.5;
          ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.stroke();
        }
      });
      // mouse attract
      const mdx=p.x-mouseX, mdy=p.y-mouseY;
      const md=Math.sqrt(mdx*mdx+mdy*mdy);
      if(md<200) {
        p.vx -= mdx*0.00005;
        p.vy -= mdy*0.00005;
      }
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color+p.alpha+')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e=>{ mouseX=e.clientX; mouseY=e.clientY; });
  resize(); draw();
}

// ═══════════════════════════════════════════════
// CURSOR
// ═══════════════════════════════════════════════
const cursorEl = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');
let cx=0,cy=0,tx=0,ty=0;
document.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;cursorDot.style.left=tx+'px';cursorDot.style.top=ty+'px';});
function animateCursor(){cx+=(tx-cx)*0.12;cy+=(ty-cy)*0.12;cursorEl.style.left=cx+'px';cursorEl.style.top=cy+'px';requestAnimationFrame(animateCursor);}
animateCursor();
document.querySelectorAll('a,button,.problem-card,.industry-card,.product-card-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursorEl.style.transform='translate(-50%,-50%) scale(2)';cursorEl.style.borderColor='var(--red)';});
  el.addEventListener('mouseleave',()=>{cursorEl.style.transform='translate(-50%,-50%) scale(1)';cursorEl.style.borderColor='var(--orange)';});
});

// ═══════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════
function initReveal() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('revealed'); });
  }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal,.reveal-left').forEach(el=>obs.observe(el));
}

// ═══════════════════════════════════════════════
// COUNTER
// ═══════════════════════════════════════════════
function animateCounters() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let cur = 0;
      const step = target / 60;
      const t = setInterval(()=>{
        cur = Math.min(cur+step, target);
        el.textContent = Math.floor(cur).toLocaleString();
        if(cur>=target) clearInterval(t);
      }, 25);
      obs.unobserve(el);
    });
  }, { threshold:0.5 });
  document.querySelectorAll('[data-target]').forEach(el=>obs.observe(el));
}

// ═══════════════════════════════════════════════
// NAVBAR SCROLL
// ═══════════════════════════════════════════════
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY>80);
});

// ═══════════════════════════════════════════════
// LOADER
// ═══════════════════════════════════════════════
function initLoader() {
  setTimeout(()=>{
    document.getElementById('loaderHsco').style.opacity='1';
    document.getElementById('loaderHsco').style.transform='translateY(0)';
  }, 200);
  setTimeout(()=>{
    document.getElementById('loaderX').style.opacity='1';
    document.getElementById('loaderX').style.transform='scale(1)';
  }, 500);
  setTimeout(()=>{
    document.getElementById('loaderMangalam').style.opacity='1';
    document.getElementById('loaderMangalam').style.transform='translateY(0)';
  }, 800);
  setTimeout(()=>{
    document.getElementById('progressFill').style.width='100%';
  }, 900);
  setTimeout(()=>{
    const loader = document.getElementById('loader');
    loader.style.transition='opacity 0.6s, transform 0.6s';
    loader.style.opacity='0';
    loader.style.transform='scale(1.02)';
    setTimeout(()=>{ loader.style.display='none'; animateHero(); }, 600);
  }, 2000);
}

// ═══════════════════════════════════════════════
// HERO ENTRANCE
// ═══════════════════════════════════════════════
function animateHero() {
  const badge = document.getElementById('heroBadge');
  const logos = document.getElementById('heroLogos');
  const title = document.getElementById('heroTitle');
  const sub = document.getElementById('heroSub');
  const btns = document.getElementById('heroBtns');

  [badge,logos,title,sub,btns].forEach((el,i)=>{
    setTimeout(()=>{
      el.style.transition='all 0.8s cubic-bezier(0.4,0,0.2,1)';
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    }, i*150);
  });
}

// ═══════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3500);
}

// ═══════════════════════════════════════════════
// FORM
// ═══════════════════════════════════════════════
function submitForm() {
  const n=document.getElementById('cName').value;
  const c=document.getElementById('cCompany').value;
  const e=document.getElementById('cEmail').value;
  if(!n||!c||!e){ showToast('Please fill all required fields.'); return; }
  showToast('Your inquiry has been submitted! We\'ll respond within 2 hours.');
  ['cName','cCompany','cEmail','cMobile','cIndustry','cReq'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', ()=>{
  renderProblems();
  renderTech();
  renderIndustries();
  renderProducts();
  renderWhy();
  renderCases();
  renderTestimonials();
  initLoader();
  initCanvas();
  initReveal();
  animateCounters();
});