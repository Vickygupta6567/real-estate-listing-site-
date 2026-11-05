const P=[
{id:1,t:"3 BHK Apartment near Metro",c:"Gurugram",l:"Sector 56",ty:"Apartment",p:9500000,a:1450,b:3,ba:2,d:"Bright east-facing flat on the 8th floor with a modular kitchen, two covered parking slots and 24x7 security."},
{id:2,t:"Spacious Family Villa",c:"Panipat",l:"Model Town",ty:"Villa",p:14500000,a:2800,b:4,ba:4,d:"Independent 2-storey villa with a garden, car porch, solar water heater and a quiet tree-lined street."},
{id:3,t:"Residential Plot, Corner",c:"Panipat",l:"Sector 25",ty:"Plot",p:4800000,a:1800,b:0,ba:0,d:"East-facing corner plot with a 40 ft road, all approvals clear and ready for registry."},
{id:4,t:"2 BHK Budget Flat",c:"Sonipat",l:"Kundli",ty:"Apartment",p:3200000,a:900,b:2,ba:2,d:"Affordable flat close to the highway with a park, lift and a school within walking distance."},
{id:5,t:"Shop in Main Market",c:"Karnal",l:"Sector 13 Market",ty:"Commercial",p:7800000,a:520,b:0,ba:1,d:"Ground-floor shop with wide frontage on a busy road, ideal for retail or a clinic."},
{id:6,t:"Luxury 4 BHK Penthouse",c:"Noida",l:"Sector 150",ty:"Apartment",p:38500000,a:3400,b:4,ba:5,d:"Top-floor penthouse with a private terrace, club access and a view of the green belt."},
{id:7,t:"Modern Duplex Villa",c:"Gurugram",l:"Sohna Road",ty:"Villa",p:26000000,a:3100,b:4,ba:4,d:"Gated-community duplex with a home office, double-height living room and a private lawn."},
{id:8,t:"1 BHK Starter Home",c:"Panipat",l:"Samalkha",ty:"Apartment",p:1800000,a:520,b:1,ba:1,d:"Compact, well-planned flat for first-time buyers, ready to move in."},
{id:9,t:"Farmland Plot",c:"Karnal",l:"Nilokheri Road",ty:"Plot",p:6200000,a:4500,b:0,ba:0,d:"Large open plot with road access and canal water nearby, good for a farmhouse."},
{id:10,t:"Office Space, 2nd Floor",c:"Delhi",l:"Rohini Sector 9",ty:"Commercial",p:21000000,a:1600,b:0,ba:2,d:"Ready office with a reception, cabin, pantry and power backup in a prime commercial block."},
{id:11,t:"3 BHK Builder Floor",c:"Delhi",l:"Dwarka",ty:"Apartment",p:15800000,a:1350,b:3,ba:3,d:"Stilt-parking builder floor with a lift, a balcony on both sides and a metro station 500 m away."},
{id:12,t:"Bungalow with Lawn",c:"Sonipat",l:"Rai",ty:"Villa",p:11800000,a:2200,b:3,ba:3,d:"Single-floor bungalow on a large plot with a porch, servant room and room to extend."}
];
const PAL=[["#f7b267","#14342f","#e8e0cf","#b8472a"],["#9ec5d6","#2d5a4f","#ece4d2","#c2602f"],["#f4a6a0","#3a3f5c","#efe6d4","#d4a24a"],["#b9d8a8","#264d44","#f1e8d6","#a8432b"],["#c9b6e4","#35405c","#ebe2d0","#c85c3b"]];
function art(p){const c=PAL[p.id%5],[sky,wall,gr,acc]=c;let s=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${sky}'/><stop offset='1' stop-color='#fffaf0'/></linearGradient></defs><rect width='600' height='400' fill='url(#g)'/><circle cx='${460+p.id*5}' cy='80' r='36' fill='#fff7d6'/><rect y='300' width='600' height='100' fill='${gr}'/>`;
const win=(x,y,w,h)=>`<rect x='${x}' y='${y}' width='${w}' height='${h}' fill='#fff7d6' stroke='${wall}' stroke-width='3'/>`;
if(p.ty=="Apartment"){const fl=p.id%2?5:4;s+=`<rect x='190' y='${300-fl*52}' width='220' height='${fl*52}' fill='${wall}'/>`;for(let r=0;r<fl;r++)for(let k=0;k<3;k++)s+=win(210+k*65,(300-fl*52)+14+r*52,40,30);s+=`<rect x='275' y='262' width='50' height='38' fill='${acc}'/><rect x='80' y='230' width='80' height='70' fill='${wall}' opacity='.55'/><rect x='440' y='210' width='90' height='90' fill='${wall}' opacity='.55'/>`}
else if(p.ty=="Villa"){s+=`<rect x='150' y='190' width='300' height='110' fill='${wall}'/><polygon points='130,190 300,100 470,190' fill='${acc}'/>${win(180,215,60,50)}${win(360,215,60,50)}<rect x='270' y='230' width='60' height='70' fill='#fff7d6' stroke='#fff' stroke-width='3'/><circle cx='80' cy='270' r='30' fill='#5c8a5a'/><rect x='76' y='290' width='8' height='12' fill='#4a3a2a'/><circle cx='520' cy='265' r='34' fill='#4f7f50'/><rect x='516' y='290' width='8' height='12' fill='#4a3a2a'/>`}
else if(p.ty=="Commercial"){s+=`<rect x='120' y='150' width='360' height='150' fill='${wall}'/><rect x='120' y='150' width='360' height='24' fill='${acc}'/>${win(145,195,80,60)}${win(260,195,80,60)}<rect x='375' y='205' width='70' height='95' fill='#fff7d6' stroke='#fff' stroke-width='3'/>`}
else{s+=`<polygon points='100,320 500,320 440,260 160,260' fill='${wall}' opacity='.28'/><rect x='185' y='255' width='230' height='6' fill='${acc}'/>`;for(let i=0;i<8;i++)s+=`<rect x='${185+i*32}' y='235' width='5' height='28' fill='${wall}'/>`;s+=`<rect x='290' y='170' width='6' height='70' fill='#4a3a2a'/><rect x='250' y='150' width='96' height='40' fill='#fff' stroke='${acc}' stroke-width='4'/><text x='298' y='177' font-size='20' font-weight='700' text-anchor='middle' fill='${acc}' font-family='sans-serif'>FOR SALE</text>`}
return "data:image/svg+xml,"+encodeURIComponent(s+"</svg>")}
const inr=n=>n>=1e7?"₹"+(n/1e7).toFixed(2).replace(/\.?0+$/,"")+" Cr":"₹"+(n/1e5).toFixed(n%1e5?1:0).replace(/\.0$/,"")+" Lakh";
const $=id=>document.getElementById(id);
let favs=[];try{favs=JSON.parse(localStorage.getItem("favs")||"[]")}catch(e){}
let showSaved=false;
function saveFavs(){try{localStorage.setItem("favs",JSON.stringify(favs))}catch(e){}$("favCount").textContent=favs.length}
const cities=[...new Set(P.map(x=>x.c))].sort();
$("city").innerHTML='<option value="">All locations</option>'+cities.map(c=>`<option>${c}</option>`).join("");
$("prop").innerHTML='<option value="">General inquiry</option>'+P.map(x=>`<option value="${x.id}">${x.t} – ${x.l}, ${x.c}</option>`).join("");
$("heroImg").src=art({id:2,ty:"Villa"});
function filtered(){const q=$("q").value.toLowerCase().trim(),c=$("city").value,t=$("type").value,a=+$("area").value,b=+$("beds").value,mx=+$("price").value;
let r=P.filter(x=>(!q||(x.t+x.l+x.c).toLowerCase().includes(q))&&(!c||x.c==c)&&(!t||x.ty==t)&&x.a>=a&&x.b>=b&&x.p<=mx&&(!showSaved||favs.includes(x.id)));
const s=$("sort").value;if(s=="lo")r.sort((x,y)=>x.p-y.p);if(s=="hi")r.sort((x,y)=>y.p-x.p);if(s=="big")r.sort((x,y)=>y.a-x.a);return r}
function render(){$("priceOut").textContent=inr(+$("price").value);const r=filtered();
$("count").textContent=r.length+(r.length==1?" property found":" properties found");
$("listTitle").textContent=showSaved?"Your saved properties":"Available properties";
$("savedBtn").style.background=showSaved?"var(--brick)":"";
$("grid").innerHTML=r.length?r.map(x=>`<article class="card"><div class="ph"><img src="${art(x)}" alt="${x.ty} in ${x.l}, ${x.c}" loading="lazy"><span class="tag">${x.ty}</span><button class="fav ${favs.includes(x.id)?"on":""}" data-f="${x.id}" aria-label="${favs.includes(x.id)?"Remove from":"Add to"} favourites" aria-pressed="${favs.includes(x.id)}">${favs.includes(x.id)?"♥":"♡"}</button></div><div class="cb"><div class="price">${inr(x.p)}</div><h3>${x.t}</h3><div class="loc">${x.l}, ${x.c}</div><div class="meta"><span>${x.a.toLocaleString("en-IN")} sq ft</span>${x.b?`<span>${x.b} bed</span><span>${x.ba} bath</span>`:""}</div><button class="btn" data-v="${x.id}">View details</button></div></article>`).join(""):`<div class="empty"><h3>${showSaved?"No saved properties yet":"No properties match these filters"}</h3><p style="margin-top:8px;color:var(--mute)">${showSaved?"Tap the heart on any listing to save it here.":"Try a higher budget or clear a filter."}</p></div>`}
["q","city","type","area","beds","price","sort"].forEach(i=>$(i).addEventListener("input",render));
$("reset").onclick=()=>{["q","city","type","sort"].forEach(i=>$(i).value="");$("area").value=0;$("beds").value=0;$("price").value=6e7;showSaved=false;render()};
$("savedBtn").onclick=()=>{showSaved=!showSaved;render();$("listings").scrollIntoView()};
function toggleFav(id){favs=favs.includes(id)?favs.filter(x=>x!=id):[...favs,id];saveFavs();render();if($("modal").classList.contains("open"))openModal(id)}
function openModal(id){const x=P.find(p=>p.id==id),on=favs.includes(id);$("mbox").innerHTML=`<button class="close" aria-label="Close">×</button><img src="${art(x)}" alt="${x.ty} in ${x.l}"><div class="mbody"><div class="price">${inr(x.p)}</div><h2 style="font-size:1.6rem">${x.t}</h2><div class="loc">${x.l}, ${x.c}</div><div class="meta"><span><b>${x.a.toLocaleString("en-IN")}</b> sq ft</span><span><b>₹${Math.round(x.p/x.a).toLocaleString("en-IN")}</b> per sq ft</span>${x.b?`<span><b>${x.b}</b> bedrooms</span><span><b>${x.ba}</b> bathrooms</span>`:""}<span>${x.ty}</span></div><p>${x.d}</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" data-q="${x.id}">Inquire about this property</button><button class="btn alt" data-f="${x.id}">${on?"♥ Saved":"♡ Save property"}</button></div></div>`;$("modal").classList.add("open")}
document.addEventListener("click",e=>{const f=e.target.closest("[data-f]"),v=e.target.closest("[data-v]"),q=e.target.closest("[data-q]");
if(f)toggleFav(+f.dataset.f);else if(v)openModal(+v.dataset.v);else if(q){$("modal").classList.remove("open");$("prop").value=q.dataset.q;$("inquiry").scrollIntoView();$("name").focus()}
else if(e.target.classList.contains("close")||e.target==$("modal"))$("modal").classList.remove("open")});
document.addEventListener("keydown",e=>{if(e.key=="Escape")$("modal").classList.remove("open")});
const setErr=(k,m)=>document.querySelector(`[data-e=${k}]`).textContent=m;
$("form").addEventListener("submit",e=>{e.preventDefault();let ok=true;
const n=$("name").value.trim(),ph=$("phone").value.replace(/\s|-/g,""),em=$("email").value.trim(),m=$("msg").value.trim();
setErr("name",n.length<2?(ok=false,"Enter your full name."):"");
setErr("phone",/^(\+91)?[6-9]\d{9}$/.test(ph)?"":(ok=false,"Enter a valid 10-digit mobile number."));
setErr("email",/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)?"":(ok=false,"Enter a valid email address."));
setErr("msg",m.length<10?(ok=false,"Write at least 10 characters."):"");
if(!ok)return;
try{const l=JSON.parse(localStorage.getItem("inquiries")||"[]");l.push({name:n,phone:ph,email:em,property:$("prop").value,message:m,date:new Date().toISOString()});localStorage.setItem("inquiries",JSON.stringify(l))}catch(x){}
$("done").innerHTML=`<div class="ok" role="status">Thanks ${n.split(" ")[0]}, your inquiry is sent. We will call you within one working day.</div>`;e.target.reset()});
saveFavs();render();
