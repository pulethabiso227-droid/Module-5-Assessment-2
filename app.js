const V=[
{id:1,name:"2019 Toyota Corolla 1.8 XS",type:"Sedan",price:219900,km:68000,tr:"Automatic",fuel:"Petrol",col:"#c9ced3",f:1,d:"One owner, full service history, reverse camera."},
{id:2,name:"2020 VW Polo Hatch 1.0 TSI",type:"Hatchback",price:239900,km:52000,tr:"Manual",fuel:"Petrol",col:"#b3261e",f:1,d:"Apple CarPlay, rear park sensors, balance of maker’s plan."},
{id:3,name:"2018 Ford Ranger 3.2 XLT 4x4",type:"Bakkie",price:429900,km:97000,tr:"Automatic",fuel:"Diesel",col:"#1f4e8c",f:1,d:"Towbar, tonneau cover and bed liner. Serviced on schedule."},
{id:4,name:"2021 Hyundai Tucson 2.0 Premium",type:"SUV",price:389900,km:41000,tr:"Automatic",fuel:"Petrol",col:"#2e2e33",f:0,d:"Panoramic roof, leather seats, adaptive cruise control."},
{id:5,name:"2017 BMW 320i M Sport",type:"Sedan",price:279900,km:88000,tr:"Automatic",fuel:"Petrol",col:"#e8e8e8",f:0,d:"M Sport package, navigation, new tyres fitted."},
{id:6,name:"2022 Suzuki Swift 1.2 GL",type:"Hatchback",price:189900,km:23000,tr:"Manual",fuel:"Petrol",col:"#d88a00",f:0,d:"Low mileage and very economical. Still under warranty."},
{id:7,name:"2019 Toyota Fortuner 2.8 GD-6",type:"SUV",price:519900,km:74000,tr:"Automatic",fuel:"Diesel",col:"#6b7a52",f:0,d:"Seven seats, full service history, roof rails."},
{id:8,name:"2020 Isuzu D-Max 1.9 LS",type:"Bakkie",price:339900,km:63000,tr:"Manual",fuel:"Diesel",col:"#8a8f94",f:0,d:"Canopy fitted, tidy interior, great fuel economy."}
];
const B={
Sedan:{b:"M26 146 L34 118 Q60 108 118 102 L152 70 Q160 64 180 64 L246 64 Q266 64 280 78 L304 102 Q352 108 368 122 L376 146Z",w:"M160 74 L178 72 L196 72 L196 100 L128 100Z M206 72 L246 72 Q260 72 270 82 L288 100 L206 100Z"},
Hatchback:{b:"M26 146 L32 116 Q54 108 106 102 L146 68 Q154 62 176 62 L262 62 Q290 66 304 100 L354 108 Q374 116 376 146Z",w:"M158 72 L180 70 L196 70 L196 100 L128 100Z M206 70 L260 70 Q276 76 288 100 L206 100Z"},
SUV:{b:"M26 146 L30 108 L118 100 L140 58 L300 58 L336 100 L370 110 L378 146Z",w:"M150 68 L196 68 L196 98 L128 98Z M206 68 L292 68 L322 98 L206 98Z"},
Bakkie:{b:"M26 146 L30 112 L66 106 L100 102 L124 66 Q130 62 150 62 L194 62 L206 102 L372 106 L378 146Z",w:"M136 72 L158 70 L184 70 L190 100 L116 100Z"}
};
const R=n=>"R "+n.toLocaleString("en-ZA").replace(/,/g," ");
function wheel(x){return `<circle cx="${x}" cy="148" r="29" fill="#1b1d1f"/><circle cx="${x}" cy="148" r="15" fill="#aeb4b8"/><circle cx="${x}" cy="148" r="5" fill="#1b1d1f"/>`}
function side(v){const t=B[v.type];return `<svg viewBox="0 0 400 200" role="img" aria-label="${v.name}, side view"><ellipse cx="200" cy="178" rx="170" ry="9" fill="#000" opacity=".18"/><path d="${t.b}" fill="${v.col}"/><path d="${t.w}" fill="#8fb4c4" opacity=".9"/><path d="${t.b}" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="2"/><rect x="26" y="136" width="352" height="8" fill="#000" opacity=".25"/>${wheel(104)}${wheel(298)}<rect x="360" y="116" width="14" height="8" rx="2" fill="#fff6c8"/><rect x="26" y="116" width="8" height="8" rx="2" fill="#e5483d"/></svg>`}
function front(v){return `<svg viewBox="0 0 400 200" role="img" aria-label="${v.name}, front view"><ellipse cx="200" cy="178" rx="130" ry="9" fill="#000" opacity=".18"/><rect x="110" y="60" width="180" height="60" rx="26" fill="${v.col}"/><path d="M128 66 Q200 52 272 66 L280 108 L120 108Z" fill="#8fb4c4"/><rect x="92" y="104" width="216" height="58" rx="16" fill="${v.col}" stroke="#000" stroke-opacity=".25" stroke-width="2"/><rect x="104" y="112" width="42" height="16" rx="6" fill="#fff6c8"/><rect x="254" y="112" width="42" height="16" rx="6" fill="#fff6c8"/><rect x="156" y="120" width="88" height="20" rx="4" fill="#1b1d1f"/><rect x="170" y="144" width="60" height="14" rx="2" fill="#f4c20d"/><rect x="82" y="132" width="20" height="40" rx="4" fill="#1b1d1f"/><rect x="298" y="132" width="20" height="40" rx="4" fill="#1b1d1f"/></svg>`}
function inside(v){return `<svg viewBox="0 0 400 200" role="img" aria-label="${v.name}, interior"><rect width="400" height="200" fill="#2b3234"/><path d="M0 120 Q200 80 400 120 L400 200 L0 200Z" fill="#171c1d"/><rect x="40" y="70" width="320" height="10" rx="5" fill="#3a4547"/><circle cx="130" cy="130" r="48" fill="none" stroke="#0c0f10" stroke-width="12"/><circle cx="130" cy="130" r="10" fill="#0c0f10"/><circle cx="130" cy="106" r="14" fill="#0c0f10"/><rect x="224" y="96" width="110" height="52" rx="8" fill="#0a1214"/><rect x="232" y="104" width="94" height="36" rx="4" fill="#2d7f8f" opacity=".75"/><circle cx="110" cy="92" r="14" fill="#0a1214" stroke="#5fd0c0" stroke-width="2"/><circle cx="150" cy="92" r="14" fill="#0a1214" stroke="#f4c20d" stroke-width="2"/></svg>`}
const views=[side,front,inside],names=["Side","Front","Interior"];
function gallery(v){const g=document.createElement("div");g.className="gal";
g.innerHTML=`<div class="main">${side(v)}</div><div class="thumbs"></div>`;
const th=g.querySelector(".thumbs"),mn=g.querySelector(".main");
views.forEach((fn,i)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label",names[i]+" photo");b.setAttribute("aria-pressed",i==0);b.innerHTML=fn(v);
b.onclick=()=>{mn.innerHTML=fn(v);th.querySelectorAll("button").forEach((x,j)=>x.setAttribute("aria-pressed",j==i))};th.appendChild(b)});
return g}
function card(v,full){const c=document.createElement("article");c.className="card";
if(full)c.appendChild(gallery(v));else{const m=document.createElement("div");m.className="gal";m.innerHTML=side(v);c.appendChild(m)}
const b=document.createElement("div");b.className="body";
b.innerHTML=`${v.f?'<span class="tag">Featured</span>':''}<h3>${v.name}</h3><div class="price">${R(v.price)}</div>
<ul class="spec"><li><b>${v.km.toLocaleString("en-ZA").replace(/,/g," ")} km</b></li><li><b>${v.tr}</b></li><li><b>${v.fuel}</b></li><li><b>${v.type}</b></li></ul>
${full?`<p style="margin:0;color:var(--muted)">${v.d}</p>`:""}
<div style="margin-top:auto;padding-top:6px"><a class="btn" style="background:var(--ink);color:var(--bg)" href="contact.html?car=${v.id}">Enquire</a></div>`;
c.appendChild(b);return c}
const ha=document.getElementById("heroArt");if(ha)ha.innerHTML=side({name:"Featured car",type:"SUV",col:"#f4c20d"});
const feat=document.getElementById("featured");if(feat)V.filter(v=>v.f).forEach(v=>feat.appendChild(card(v,false)));
const list=document.getElementById("list"),chips=document.getElementById("chips");
function render(t){list.innerHTML="";V.filter(v=>t=="All"||v.type==t).forEach(v=>list.appendChild(card(v,true)));
chips.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.textContent==t))}
if(chips)["All",...Object.keys(B)].forEach(t=>{const b=document.createElement("button");b.type="button";b.textContent=t;b.onclick=()=>render(t);chips.appendChild(b)});
if(list)render("All");
const sel=document.getElementById("v");if(sel)V.forEach(v=>{const o=document.createElement("option");o.value=v.id;o.textContent=v.name;sel.appendChild(o)});
if(sel){const q=new URLSearchParams(location.search).get("car");if(q)sel.value=q}
const cf=document.getElementById("cf");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();
const n=document.getElementById("n").value.trim(),em=document.getElementById("e").value.trim(),m=document.getElementById("m").value.trim(),er=document.getElementById("err");
if(!n||!/^\S+@\S+\.\S+$/.test(em)||!m){er.textContent="Enter your name, a valid email address and a message.";return}
const box=document.getElementById("formBox");box.innerHTML=`<div class="ok" role="status"><h3 style="font-size:30px;margin-bottom:8px">Message sent</h3><p style="margin:0">Thanks, ${n.replace(/[<>&]/g,"")}. We’ll reply to ${em.replace(/[<>&]/g,"")} within one working day.</p></div>`});
