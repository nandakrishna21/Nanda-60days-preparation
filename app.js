/* 60-Day Dashboard - frontend only, localStorage */
const PLAN=[
{d:1,ph:"Phase 1 (1-14)",govt:"Quant: Number System+HCF/LCM 30Q | Reas: Blood Relation 20Q | Eng: Tenses | GA: Ancient History + CA 7 days",py:"Setup Python+VS Code, variables, datatypes",dsa:"Big-O + Arrays intro (max/min/reverse)",dn:3,ai:"—",proj:"GitHub repo + README skeleton",done:"50Q solved, code runs"},
{d:2,ph:"Phase 1 (1-14)",govt:"Simplification/BODMAS | Direction Sense | Articles+Prepositions | AP Geo districts/rivers",py:"Operators + if-else + loops",dsa:"Arrays: reverse/rotate",dn:3,ai:"—",proj:"CLI Quiz v0.1 - 5 GK Qs",done:"Push to Git"},
{d:3,ph:"Phase 1 (1-14)",govt:"Percentages | Coding-Decoding | SVA | Polity Preamble+FR",py:"Functions + strings",dsa:"Strings: palindrome/anagram",dn:3,ai:"Prompt: explain answer simply",proj:"—",done:"3 string codes"},
{d:4,ph:"Phase 1 (1-14)",govt:"Ratio-Proportion | Series | Error Spotting 20Q | Modern 1857-1947",py:"Lists/tuples/sets/dicts",dsa:"HashMap: Two-Sum",dn:3,ai:"—",proj:"—",done:"Dict programs"},
{d:5,ph:"Phase 1 (1-14)",govt:"Averages+Alligation | Analogies | Vocab 30+Idioms | Banking CRR/SLR",py:"Dict/set + file handling",dsa:"Frequency count",dn:2,ai:"—",proj:"—",done:"File quiz load"},
{d:6,ph:"Phase 1 (1-14)",govt:"Profit-Loss | Syllogism basics | Cloze | Geo physical + CA weekly",py:"Exceptions + modules + OOP-1",dsa:"Sorting: bubble/selection",dn:2,ai:"AI vs ML vs LLM notes 30m",proj:"—",done:"OOP Quiz class"},
{d:7,ph:"Phase 1 (1-14)",govt:"REVISION + MOCK1 50Q Quant+Reas | AP History Satavahana-Vijayanagara | Error book",py:"OOP-2 + venv + GitHub push",dsa:"Revise Week1 unsolved",dn:0,ai:"—",proj:"Push CLI to GitHub",done:"Mock analysis done"},
{d:8,ph:"Phase 1 (1-14)",govt:"SI-CI | Inequalities (Bank) | Para Jumbles | Polity Parliament+President",py:"Git branching + SQL intro",dsa:"Linear + Binary search",dn:3,ai:"—",proj:"—",done:"SQL SELECT 10Q"},
{d:9,ph:"Phase 1 (1-14)",govt:"Time-Work | Linear seating | RC 2 | Physics motion (RRB)",py:"Postgres install + CREATE/SELECT",dsa:"Insertion sort",dn:2,ai:"Pandas CSV marks",proj:"—",done:"DB table created"},
{d:10,ph:"Phase 1 (1-14)",govt:"Time-Speed-Distance | Circular seating | Syn-Ant 30 | AP Bifurcation 2014",py:"JOINs + Aggregates + HTTP/REST/JSON",dsa:"Two Pointers intro",dn:3,ai:"—",proj:"—",done:"API GET test"},
{d:11,ph:"Phase 1 (1-14)",govt:"Mensuration 2D | Puzzles-1 | One-word | Economy GDP/inflation",py:"FastAPI first GET + /docs",dsa:"Sliding window fixed",dn:3,ai:"Prompt JSON output",proj:"—",done:"/docs opens"},
{d:12,ph:"Phase 1 (1-14)",govt:"Mensuration 3D+DI basics | Puzzles-2 | Active-Passive | RBI/Budget",py:"FastAPI CRUD in-memory",dsa:"Stack: valid parentheses",dn:2,ai:"—",proj:"—",done:"CRUD in docs"},
{d:13,ph:"Phase 1 (1-14)",govt:"Algebra basics | Input-Output | Direct-Indirect | Chemistry periodic (RRB)",py:"Validation + error handling",dsa:"Queue revision",dn:2,ai:".env safety",proj:"—",done:"422 test passes"},
{d:14,ph:"Phase 1 (1-14)",govt:"MOCK2 100Q SSC pattern + Monthly CA + AP schemes Nadu-Nedu",py:"Env vars + local run",dsa:"Mixed 5Q revision",dn:5,ai:"—",proj:"Quiz API v0.2",done:"Score + error log"},
{d:15,ph:"Phase 2 (15-30)",govt:"DI Tables+Bar | Assumption | Fillers Bank | Medieval History",py:"Postgres + FastAPI connect",dsa:"Linked List traverse",dn:2,ai:"—",proj:"Questions table",done:"DB connect works"},
{d:16,ph:"Phase 2 (15-30)",govt:"Number Series (Bank) | Direction adv | Para summary | AP Economy Polavaram",py:"CRUD Postgres",dsa:"Recursion fact/fib",dn:3,ai:"—",proj:"—",done:"CRUD persists"},
{d:17,ph:"Phase 2 (15-30)",govt:"Quadratic Eq | Blood+Direction 30Q | Grammar test | Biology cell",py:"Auth hashing+JWT theory",dsa:"Recursion palindrome",dn:2,ai:"Gemini free API test",proj:"—",done:"JWT understood"},
{d:18,ph:"Phase 2 (15-30)",govt:"P&C basics | Critical Reasoning | RC Bank | Judiciary",py:"Login/signup API",dsa:"Binary Search classic",dn:3,ai:"—",proj:"—",done:"Login returns token"},
{d:19,ph:"Phase 2 (15-30)",govt:"Probability | Data Sufficiency | Error 30Q | Banking accounts",py:"Postman + pytest intro",dsa:"Trees traversals",dn:2,ai:"—",proj:"—",done:"3 API tests"},
{d:20,ph:"Phase 2 (15-30)",govt:"Mixtures+Partnership | Alphanumeric | Vocab 50 | AP Culture",py:"HTML + CSS flexbox",dsa:"Trees max-depth",dn:2,ai:"Prompt for explanation",proj:"—",done:"Static page built"},
{d:21,ph:"Phase 2 (15-30)",govt:"MOCK3 Bank prelims 100Q + formula revision",py:"CSS responsive + JS fetch",dsa:"Revise BS+Trees",dn:0,ai:"—",proj:"Backend push",done:"Mock analysis"},
{d:22,ph:"Phase 2 (15-30)",govt:"Geometry triangles | Puzzles adv | Tenses 40Q | Rivers/soils",py:"JS DOM + React Vite setup",dsa:"Graphs BFS/DFS concept",dn:2,ai:"—",proj:"—",done:"Vite runs"},
{d:23,ph:"Phase 2 (15-30)",govt:"Trigonometry | Seating mixed | Idioms 50 | Physics light",py:"React components/props/state",dsa:"Arrays sprint",dn:4,ai:"—",proj:"—",done:"Component renders"},
{d:24,ph:"Phase 2 (15-30)",govt:"Height-Distance | Syllogism adv | One-word 50 | AP schemes 25-26",py:"Hooks useState/useEffect",dsa:"Strings revision",dn:3,ai:"Design /explain",proj:"—",done:"Hook fetch works"},
{d:25,ph:"Phase 2 (15-30)",govt:"DI Pie+Line | Coding adv | Active-Passive | NITI/Economy",py:"React fetch FastAPI",dsa:"Hashmap revision",dn:3,ai:"—",proj:"—",done:"List from API"},
{d:26,ph:"Phase 2 (15-30)",govt:"DI mixed 20Q | Ranking/Calendar | RC3+PJ | Digital banking",py:"CORS + display quiz",dsa:"Stack/Queue revision",dn:3,ai:"AI timeout handling",proj:"—",done:"Quiz displays"},
{d:27,ph:"Phase 2 (15-30)",govt:"Speed 40Q+40Q | Vocab test | Chem metals/vitamins",py:"Login page + token store",dsa:"Linked List revision",dn:2,ai:"—",proj:"—",done:"Protected route"},
{d:28,ph:"Phase 2 (15-30)",govt:"MOCK4 APPSC Gr2 Paper1 + AP 50Q drill",py:"Quiz attempt page",dsa:"Mixed 5Q",dn:5,ai:"—",proj:"v0.5 demo video",done:"Attempt saves"},
{d:29,ph:"Phase 2 (15-30)",govt:"Quant/Reas/Eng 50Q each revision + History",py:"Frontend+backend validation",dsa:"Two-pointer/sliding",dn:4,ai:"—",proj:"—",done:"Validation works"},
{d:30,ph:"Phase 2 (15-30)",govt:"MOCK5 SSC Tier1 full + 3h analysis + error book",py:"Security env+CORS+limit",dsa:"Mistakes revision",dn:0,ai:"—",proj:"Integrated demo",done:"Score graph up"},
{d:31,ph:"Phase 3 (31-45)",govt:"Adv DI | High puzzles | Bank RC | Polity full",py:"React Router protected routes",dsa:"Rotated Binary Search",dn:2,ai:"—",proj:"—",done:"Routing works"},
{d:32,ph:"Phase 3 (31-45)",govt:"Geometry circles | Course of Action | Essay format | AP 26 districts",py:"Attempts/results tables",dsa:"Level order",dn:2,ai:"—",proj:"—",done:"Results stored"},
{d:33,ph:"Phase 3 (31-45)",govt:"Mensuration adv | Machine Input | Letter format | Science 50Q",py:"pytest 3 tests",dsa:"Shortest path concept",dn:1,ai:"AI Explain button UI",proj:"Explain button",done:"Tests pass"},
{d:34,ph:"Phase 3 (31-45)",govt:"Number system adv | Venn | Vocab+Grammar 50Q | Budget 2026",py:"Loading/error UI",dsa:"Sliding adv",dn:3,ai:"—",proj:"—",done:"UX polished"},
{d:35,ph:"Phase 3 (31-45)",govt:"SI-CI adv | Assertion-Reason | Comp adv | CA 3 months",py:"/explain Gemini backend",dsa:"Subsets",dn:1,ai:"AI cost/limits notes",proj:"—",done:"Explain returns"},
{d:36,ph:"Phase 3 (31-45)",govt:"Time-Work pipes | Puzzles timed | Error 50Q | AP Panchayati",py:"Validation + JWT refresh",dsa:"Permutations",dn:1,ai:"—",proj:"—",done:"Refresh works"},
{d:37,ph:"Phase 3 (31-45)",govt:"MOCK6 Bank mains 100Q + analysis",py:"Mobile responsive",dsa:"Trees/graphs revise",dn:0,ai:"—",proj:"Friend demo",done:"Feedback noted"},
{d:38,ph:"Phase 3 (31-45)",govt:"Probability adv | Seating adv | Phrasal 50Q | Maps",py:"requirements + .env.example",dsa:"Mock 5 mixed",dn:5,ai:"—",proj:"README update",done:"Docs clear"},
{d:39,ph:"Phase 3 (31-45)",govt:"DI timed | Blood-Dir mixed | Sectional 60Q | Phy+Chem 50Q",py:"Deploy Render+Vercel",dsa:"Arrays/Strings timed",dn:5,ai:"—",proj:"Live URL works",done:"Deployed"},
{d:40,ph:"Phase 3 (31-45)",govt:"Algebra adv | Critical puzzles | RC timed | AP History 50Q",py:"Fix CORS deployed",dsa:"Hashmap timed",dn:4,ai:"—",proj:"—",done:"Frontend-backend live"},
{d:41,ph:"Phase 3 (31-45)",govt:"Geometry test | Reasoning 50Q | Grammar test | Economy+Static",py:"E2E signup-quiz-explain",dsa:"Stack/Queue timed",dn:3,ai:"Test 10 AI outputs",proj:"—",done:"E2E passes"},
{d:42,ph:"Phase 3 (31-45)",govt:"MOCK7 RRB NTPC 100Q Science heavy",py:"Bugfix + screenshots",dsa:"Weak revise",dn:0,ai:"—",proj:"2-min demo",done:"Video recorded"},
{d:43,ph:"Phase 3 (31-45)",govt:"Formulas + Tricks + Vocab 200 + Fin Awareness",py:"Pagination + search",dsa:"Binary Search timed",dn:3,ai:"—",proj:"—",done:"Search works"},
{d:44,ph:"Phase 3 (31-45)",govt:"PYQ SSC 2024 + Bank 2024 + APPSC Gr2 2023",py:"Admin add-questions",dsa:"Trees timed",dn:3,ai:"—",proj:"—",done:"Admin adds Q"},
{d:45,ph:"Phase 3 (31-45)",govt:"MOCK8 Mixed 100Q + analysis",py:"Release v1.0",dsa:"Mixed 6Q",dn:6,ai:"—",proj:"Release notes",done:"v1.0 tagged"},
{d:46,ph:"Phase 4 (46-60)",govt:"Tier2 adv maths | High puzzles | Mains precis | CA Aug-Sep 2026",py:"Backend tests re-run, freeze",dsa:"Arrays/strings patterns",dn:0,ai:"—",proj:"Freeze features",done:"No new bugs"},
{d:47,ph:"Phase 4 (46-60)",govt:"DI PYQ 3 sets | Seating PYQ | RC PYQ | AP schemes",py:"Resume + project link",dsa:"Hash/sliding patterns",dn:0,ai:"—",proj:"README interview",done:"Resume updated"},
{d:48,ph:"Phase 4 (46-60)",govt:"MOCK9 SSC CGL Tier1 2026 pattern",py:"LinkedIn + demo video",dsa:"10 DSA 60m timed",dn:10,ai:"—",proj:"Share demo",done:"Time mgmt drill"},
{d:49,ph:"Phase 4 (46-60)",govt:"Weak from Mock9 only (no new)",py:"Fix feedback issues",dsa:"Fix unsolved list",dn:0,ai:"—",proj:"—",done:"Weak cleared"},
{d:50,ph:"Phase 4 (46-60)",govt:"Bank DI 2 sets | Puzzles 3 | Bank Eng 50Q | Banking CA",py:"API docs + user guide",dsa:"Trees/graphs weak",dn:0,ai:"—",proj:"—",done:"Docs done"},
{d:51,ph:"Phase 4 (46-60)",govt:"MOCK10 IBPS PO prelims + speed tricks",py:"Cleanup comments",dsa:"10 easy 60m",dn:10,ai:"—",proj:"—",done:"Speed up"},
{d:52,ph:"Phase 4 (46-60)",govt:"REVISION: formulas + notes + error 1-50",py:"No new code",dsa:"Flashcards only",dn:0,ai:"—",proj:"—",done:"Rested + revised"},
{d:53,ph:"Phase 4 (46-60)",govt:"SSC PYQ 2023 + Static 100Q",py:"Deploy check",dsa:"PYQ DSA 5Q",dn:5,ai:"—",proj:"—",done:"Deploy healthy"},
{d:54,ph:"Phase 4 (46-60)",govt:"MOCK11 APPSC Group2 + AP 100Q",py:"README final",dsa:"Stacks/queues",dn:0,ai:"—",proj:"—",done:"AP ready"},
{d:55,ph:"Phase 4 (46-60)",govt:"Mixed 100Q+50Q+50Q + Science 100Q",py:"5m demo talk",dsa:"Mixed 6Q timed",dn:6,ai:"—",proj:"Checklist",done:"Talk ready"},
{d:56,ph:"Phase 4 (46-60)",govt:"MOCK12 RRB NTPC full",py:"Backup + DB export",dsa:"Weak zero",dn:0,ai:"—",proj:"—",done:"Backup done"},
{d:57,ph:"Phase 4 (46-60)",govt:"Only error book + vocab 300 + formulas",py:"Typos only",dsa:"3 easy confidence",dn:3,ai:"—",proj:"—",done:"Confident"},
{d:58,ph:"Phase 4 (46-60)",govt:"MOCK13 Mixed best simulation 8am",py:"No code - rest",dsa:"No new",dn:0,ai:"—",proj:"—",done:"Sleep early"},
{d:59,ph:"Phase 4 (46-60)",govt:"MOCK14 APPSC+RRB mixed final",py:"Portfolio polish",dsa:"Pattern sheet",dn:0,ai:"—",proj:"—",done:"Weak cleared"},
{d:60,ph:"Phase 4 (46-60)",govt:"FINAL: rapid revision + score graph + Next 30-day plan",py:"Pin GitHub + final demo",dsa:"Celebrate 80+ probs",dn:0,ai:"—",proj:"Plan next phase",done:"Done! Celebrate"}
];

const KEY="sixtyDayTrackerV1";
const THEME_KEY="sixtyDayTheme";
const WEEKS=[{n:"W1",a:1,b:7},{n:"W2",a:8,b:14},{n:"W3",a:15,b:21},{n:"W4",a:22,b:28},{n:"W5",a:29,b:35},{n:"W6",a:36,b:42},{n:"W7",a:43,b:49},{n:"W8",a:50,b:56},{n:"W9",a:57,b:60}];

function load(){try{const s=localStorage.getItem(KEY);if(s){return JSON.parse(s)}}catch(e){}const o={};PLAN.forEach(p=>{o[p.d]={status:"Pending",hrs:"",att:"",cor:"",mock:"",dsa:"",conf:"",mis:"",next:""}});return o}
let state=load();
function save(){localStorage.setItem(KEY,JSON.stringify(state));renderStats()}
function phaseClass(ph){return ph.includes("1-14")?"p1":ph.includes("15-30")?"p2":ph.includes("31-45")?"p3":"p4"}

// Theme
function applyTheme(){const t=localStorage.getItem(THEME_KEY)||"light";document.body.classList.toggle("dark",t==="dark");const b=document.getElementById("themeBtn");if(b)b.textContent=t==="dark"?"☀️ Light":"🌙 Dark"}
function toggleTheme(){const cur=localStorage.getItem(THEME_KEY)||"light";localStorage.setItem(THEME_KEY,cur==="dark"?"light":"dark");applyTheme()}

function renderStats(){
const vals=Object.values(state);
const done=vals.filter(v=>v.status==="Done").length;
const hrs=vals.reduce((a,v)=>a+(parseFloat(v.hrs)||0),0);
const att=vals.reduce((a,v)=>a+(parseInt(v.att)||0),0);
const cor=vals.reduce((a,v)=>a+(parseInt(v.cor)||0),0);
const dsa=vals.reduce((a,v)=>a+(parseInt(v.dsa)||0),0);
const mocks=vals.map(v=>parseFloat(v.mock)).filter(x=>!isNaN(x));
const avg=mocks.length?(mocks.reduce((a,b)=>a+b,0)/mocks.length).toFixed(1):"—";
const acc=att?Math.round(cor/att*100)+"%":"—";
let streak=0;for(let i=60;i>=1;i--){if(state[i]&&state[i].status==="Done")streak++;else if(i<60||state[i].status!=="Pending")break;}
let cur=PLAN.find(p=>state[p.d].status!=="Done");
document.getElementById("stats").innerHTML=
`<div class="card stat"><b>${Math.round(done/60*100)}%</b><span>Completion (${done}/60)</span></div>
<div class="card stat"><b>${hrs.toFixed(1)}h</b><span>Total hours</span></div>
<div class="card stat"><b>${att}</b><span>Questions attempted</span></div>
<div class="card stat"><b>${acc}</b><span>Accuracy (${cor}/${att})</span></div>
<div class="card stat"><b>${dsa}</b><span>DSA solved (target 80+)</span></div>
<div class="card stat"><b>${avg}</b><span>Avg mock score</span></div>
<div class="card stat"><b>${streak}🔥</b><span>Streak days</span></div>
<div class="card stat"><b>Day ${cur?cur.d:"60 ✓"}</b><span>${cur?"Next: "+cur.govt.slice(0,38)+"…":"All done!"}</span></div>`;
document.getElementById("overallBar").style.width=(done/60*100)+"%";
document.getElementById("overallTxt").textContent=done+"/60 days done • "+hrs.toFixed(1)+"h • "+att+" Qs • DSA "+dsa;
const phases=[["Phase 1 (1-14)",1,14],["Phase 2 (15-30)",15,30],["Phase 3 (31-45)",31,45],["Phase 4 (46-60)",46,60]];
document.getElementById("phaseBars").innerHTML=phases.map(([n,a,b])=>{let dd=0;for(let i=a;i<=b;i++)if(state[i].status==="Done")dd++;let pct=Math.round(dd/(b-a+1)*100);return `<div class="card"><b>${n}</b><div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div><div class="small" style="margin-top:6px">${dd}/${b-a+1} • ${pct}%</div></div>`}).join("");
// Mock chart
let mh=vals.map((v,i)=>({d:i+1,m:parseFloat(v.mock)})).filter(x=>!isNaN(x.m));
document.getElementById("mockChart").innerHTML=mh.length?mh.map(x=>`<div style="display:flex;align-items:center;gap:8px;margin:4px 0"><span class="small" style="width:46px">D${x.d}</span><div class="bar" style="flex:1"><i style="width:${Math.min(100,x.m)}%"></i></div><b style="font-size:12px">${x.m}</b></div>`).join(""):"<span class='small'>No mocks yet — add scores in Tracker.</span>";
// Weekly bar chart (NEW)
const weekly=WEEKS.map(w=>{let dd=0,hh=0,qq=0;for(let i=w.a;i<=w.b;i++){const s=state[i];if(!s)continue;if(s.status==="Done")dd++;hh+=parseFloat(s.hrs)||0;qq+=parseInt(s.att)||0}return {...w,dd,total:w.b-w.a+1,hh,qq}});
const maxH=Math.max(1,...weekly.map(w=>w.hh));
document.getElementById("weeklyChart").innerHTML=weekly.map(w=>{const pct=Math.round(w.dd/w.total*100);return `<div class="weekly-row"><span class="wlabel">${w.n} D${w.a}-${w.b}</span><div class="bar" style="flex:1"><i style="width:${pct}%;background:${pct===100?"var(--green)":pct>=60?"var(--brand)":"var(--orange)"}"></i></div><span class="small" style="min-width:110px">${w.dd}/${w.total} • ${w.hh.toFixed(1)}h • ${w.qq}Q</span></div><div class="bar" style="flex:1;margin:2px 0 6px 64px;height:6px;opacity:.7"><i style="width:${Math.round(w.hh/maxH*100)}%"></i></div>`}).join("");
let weak=PLAN.filter(p=>state[p.d].mis).slice(-8).reverse();
document.getElementById("weakList").innerHTML=weak.length?weak.map(p=>`<div>• <b>D${p.d}</b> — ${state[p.d].mis}</div>`).join(""):"<span>No mistakes logged yet. Add in Tracker → Mistakes.</span>";
}

let viewMode="single", selDay=1, selWeek="W1", collapseAll=false;
function getToday(){const t=PLAN.find(p=>state[p.d].status!=="Done");return t?t.d:60}
function weekRange(w){const m={W1:[1,7],W2:[8,14],W3:[15,21],W4:[22,28],W5:[29,35],W6:[36,42],W7:[43,49],W8:[50,56],W9:[57,60]};return m[w]||[1,7]}

function dayCard(p, open){
const s=state[p.d];
const summary=`<span class="small">${p.govt.slice(0,60)}… | ${state[p.d].status}</span>`;
return `<details class="day" ${open?"open":""}><summary class="day-head" style="cursor:pointer;list-style:none"><div><span class="badge ${phaseClass(p.ph)}">${p.ph}</span> <b>Day ${p.d}</b> <span class="small">${p.done}</span><br/>${open?"":summary}</div><select data-k="status" data-d="${p.d}" style="border:1px solid var(--line);border-radius:8px;padding:6px;background:var(--card);color:var(--ink)" onclick="event.stopPropagation()" onchange="event.stopPropagation()">${["Pending","In Progress","Done","Skipped"].map(o=>`<option ${s.status===o?"selected":""}>${o}</option>`).join("")}</select></summary>
<div class="day-body"><div><ul><li><b>Govt:</b> ${p.govt}</li><li><b>Python:</b> ${p.py}</li><li><b>DSA (${p.dn}):</b> ${p.dsa}</li><li><b>AI:</b> ${p.ai} | <b>Project:</b> ${p.proj}</li></ul><div class="toolbar"><button class="btn ghost" onclick="markDone(${p.d})">✅ Mark Done + Next</button></div></div>
<div class="inputs">
<label>Actual hrs<input type="number" min="0" max="14" step="0.5" data-k="hrs" data-d="${p.d}" value="${s.hrs}"/></label>
<label>Attempted<input type="number" min="0" data-k="att" data-d="${p.d}" value="${s.att}"/></label>
<label>Correct<input type="number" min="0" data-k="cor" data-d="${p.d}" value="${s.cor}"/></label>
<label>Mock score<input type="number" min="0" max="200" data-k="mock" data-d="${p.d}" value="${s.mock}"/></label>
<label>DSA solved<input type="number" min="0" data-k="dsa" data-d="${p.d}" value="${s.dsa}"/></label>
<label>Confidence 1-5<select data-k="conf" data-d="${p.d}"><option value="">—</option>${[1,2,3,4,5].map(o=>`<option ${s.conf==o?"selected":""}>${o}</option>`).join("")}</select></label>
<label style="grid-column:1/-1">Mistakes / weak areas<input data-k="mis" data-d="${p.d}" value="${(s.mis||"").replace(/"/g,"&quot;")}" placeholder="e.g. DI calc slow | silly sign error"/></label>
<label style="grid-column:1/-1">Next day priority<input data-k="next" data-d="${p.d}" value="${(s.next||"").replace(/"/g,"&quot;")}" placeholder="e.g. Revise Time-Work + Binary Search"/></label>
</div></div></details>`}

function markDone(d){state[d].status="Done";save();if(d<60){selDay=d+1;const vd=document.getElementById("vDay");if(vd)vd.value=String(selDay)}renderDays();window.scrollTo({top:0,behavior:"smooth"})}

function renderDays(){
const fp=document.getElementById("fPhase").value,fs=document.getElementById("fStatus").value,q=document.getElementById("fSearch").value.toLowerCase();
const box=document.getElementById("days");
let list=PLAN.filter(p=>(!fp||p.ph===fp)&&(!fs||state[p.d].status===fs)&&(!q||(p.govt+p.py+p.dsa+p.ai+p.proj).toLowerCase().includes(q)));
// view mode narrowing (single/week ignore phase/status, respect search only)
if(viewMode==="single"){list=PLAN.filter(p=>p.d===selDay&&(!q||(p.govt+p.py+p.dsa+p.ai+p.proj).toLowerCase().includes(q)))}
if(viewMode==="week"){const[a,b]=weekRange(selWeek);list=PLAN.filter(p=>p.d>=a&&p.d<=b&&(!q||(p.govt+p.py+p.dsa+p.ai+p.proj).toLowerCase().includes(q)))}
let n=list.length;
if(!n){box.innerHTML="<div class='card'>No days match. Clear filters or pick another day/week.</div>";document.getElementById("countTxt").textContent="0 shown";return}
const openDefault=viewMode!=="all"||!collapseAll;
box.innerHTML=(viewMode==="all"&&!q?`<div class="toolbar"><span class="small">Quick jump:</span>${PLAN.map(p=>`<a href="#day-${p.d}" onclick="jumpDay(${p.d});return false" class="kbd" style="text-decoration:none"> ${p.d} </a>`).join("")}</div>`:"")+list.map(p=>`<span id="day-${p.d}"></span>`+dayCard(p, viewMode!=="all"?true:!collapseAll)).join("");
document.getElementById("countTxt").textContent=(viewMode==="single"?`Day ${selDay}/60 • Single view — no scrolling! Use Prev/Next/Today.` : viewMode==="week"?`${selWeek} • ${n} days • Week view.` : n+"/60 days shown • Collapsible — click header to expand.")+" • Tip: update daily 5:15pm";
box.querySelectorAll("[data-k]").forEach(el=>{el.addEventListener("change",e=>{const d=e.target.dataset.d,k=e.target.dataset.k;state[d][k]=e.target.value;save();if(k==="status")renderDays();})});
}
function jumpDay(d){selDay=d;viewMode="single";document.getElementById("vMode").value="single";document.getElementById("vDay").value=String(d);syncViewUI();renderDays();document.getElementById("p-tracker").scrollIntoView()}
function syncViewUI(){document.getElementById("vDay").style.display=viewMode==="single"?"":"none";document.getElementById("vWeek").style.display=viewMode==="week"?"":"none";document.getElementById("btnPrev").style.display=viewMode==="all"?"none":"";document.getElementById("btnNext").style.display=viewMode==="all"?"none":""}

document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("tabs").addEventListener("click",e=>{if(e.target.tagName!=="BUTTON")return;document.querySelectorAll("#tabs button").forEach(b=>b.classList.remove("active"));e.target.classList.add("active");document.querySelectorAll("section.page").forEach(s=>s.classList.remove("active"));document.getElementById("p-"+e.target.dataset.p).classList.add("active")});
["fPhase","fStatus","fSearch"].forEach(id=>document.getElementById(id).addEventListener("input",renderDays));
// new nav controls
const vd=document.getElementById("vDay");vd.innerHTML=PLAN.map(p=>`<option value="${p.d}">Day ${p.d} — ${p.done.slice(0,22)}</option>`).join("");
selDay=getToday();vd.value=String(selDay);
document.getElementById("vMode").addEventListener("change",e=>{viewMode=e.target.value;syncViewUI();renderDays()});
vd.addEventListener("change",e=>{selDay=parseInt(e.target.value);renderDays()});
document.getElementById("vWeek").addEventListener("change",e=>{selWeek=e.target.value;renderDays()});
document.getElementById("btnPrev").onclick=()=>{if(viewMode==="week"){const order=["W1","W2","W3","W4","W5","W6","W7","W8","W9"];let i=Math.max(0,order.indexOf(selWeek)-1);selWeek=order[i];document.getElementById("vWeek").value=selWeek}else{selDay=Math.max(1,selDay-1);vd.value=String(selDay)}renderDays();window.scrollTo({top:0,behavior:"smooth"})};
document.getElementById("btnNext").onclick=()=>{if(viewMode==="week"){const order=["W1","W2","W3","W4","W5","W6","W7","W8","W9"];let i=Math.min(8,order.indexOf(selWeek)+1);selWeek=order[i];document.getElementById("vWeek").value=selWeek}else{selDay=Math.min(60,selDay+1);vd.value=String(selDay)}renderDays();window.scrollTo({top:0,behavior:"smooth"})};
document.getElementById("btnToday").onclick=()=>{selDay=getToday();vd.value=String(selDay);if(viewMode==="all"){viewMode="single";document.getElementById("vMode").value="single";syncViewUI()}renderDays();window.scrollTo({top:0,behavior:"smooth"})};
document.getElementById("btnCollapse").onclick=(e)=>{collapseAll=!collapseAll;e.target.textContent=collapseAll?"Expand all":"Collapse all";renderDays()};
document.getElementById("btnReset").onclick=()=>{if(confirm("Reset all 60 days progress?")){localStorage.removeItem(KEY);state=load();renderStats();renderDays()}};
document.getElementById("themeBtn").onclick=toggleTheme;
function download(name,text,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click()}
document.getElementById("btnExportJSON").onclick=()=>download("sixty-day-tracker.json",JSON.stringify({exported:new Date().toISOString(),state,plan:PLAN},null,2),"application/json");
document.getElementById("btnExportCSV").onclick=()=>{let rows=[["Day","Phase","Govt","Python","DSA","DSA_target","AI","Project","Status","Actual_Hrs","Attempted","Correct","Mock","DSA_solved","Confidence","Mistakes","Next"]];PLAN.forEach(p=>{const s=state[p.d];rows.push([p.d,'"'+p.ph+'"','"'+p.govt.replace(/"/g,"'")+'"','"'+p.py.replace(/"/g,"'")+'"','"'+p.dsa.replace(/"/g,"'")+'"',p.dn,'"'+p.ai+'"', '"'+p.proj+'"',s.status,s.hrs,s.att,s.cor,s.mock,s.dsa,s.conf,'"'+(s.mis||"").replace(/"/g,"'")+'"', '"'+(s.next||"").replace(/"/g,"'")+'"'])});download("sixty-day-tracker.csv",rows.map(r=>r.join(",")).join("\n"),"text/csv")};
document.getElementById("importFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const j=JSON.parse(r.result);if(j.state){state=j.state;save();renderDays();alert("Imported!")}else alert("Invalid file")}catch(err){alert("Invalid JSON")}};r.readAsText(f)});
applyTheme();renderStats();syncViewUI();renderDays();
});
