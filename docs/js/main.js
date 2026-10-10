/* ===========================================================
   main.js — builds shared layout (nav, sidebar, footer), fills
   lists/cards from SITE data, and runs the scroll behaviours.
   =========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const { nav, links, socials, projects, tables } = SITE;
const page = document.body.dataset.page;   // home | about | recruiter | project | construction
const params = new URLSearchParams(location.search);
const projectHref = (p, from) => `project.html?p=${p.slug}${from ? "&from=" + from : ""}`;
const img = (src, alt = "") => `<img src="${src}" alt="${alt}" onerror="this.remove()">`;

/* ---------- 1. Shared layout ---------- */
const btn = {
    recruiter: `<a class="btn" href="recruiter.html">Recruiter Mode</a>`,
    exit: `<a class="btn" href="index.html">Exit</a>`
}[document.body.dataset.button] || "";
const activeKey = { recruiter: "work" }[page] || page;
const nextKey = { home: "work", recruiter: "work", project: "work" }[page] || page;
const next = nav[(nav.findIndex(n => n.key === nextKey) + 1) % nav.length];   // "Next page" target

document.body.insertAdjacentHTML("afterbegin", `
  ${page === "project" ? "" : `<nav class="nav staff">${nav.map(n => `<a href="${n.href}" data-key="${n.key}">${n.label}</a>`).join("")}</nav>`}
  <aside class="side ${btn ? "" : "no-btn"}">
    <a class="av" href="index.html">${img(SITE.avatar, SITE.fullName)}</a>
    <div class="name">${SITE.name}</div>
    <ul class="links">${Object.entries(links).map(([k, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${k} <i class="bi bi-arrow-up-right"></i></a></li>`).join("")}</ul>
    <a class="mail" href="mailto:${SITE.email}">${SITE.email}</a>${btn}
  </aside>`);

document.body.insertAdjacentHTML("beforeend", `
  <footer class="foot">
    <div class="foot-bar staff">
      <a href="${next.href}">NEXT PAGE <i class="bi bi-arrow-right"></i> ${next.label}</a>
      <a href="#top"><i class="bi bi-arrow-up"></i> BACK TO TOP</a>
    </div>
    <div class="foot-main">
      <a class="brand" href="index.html"><span class="av">${img(SITE.avatar)}</span>${SITE.name}</a>
      <div class="socials">${socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="bi ${s.icon}"></i></a>`).join("")}
        <small>© ${SITE.year} ${SITE.fullName}</small></div>
    </div>
  </footer>`);

/* ---------- 2. Lists & cards from data ---------- */
const row = (title, sub, meta, href) => {
    const tag = href ? `a href="${href}"` : "div";
    return `<${tag} class="row"><span><strong>${title}</strong>${sub ? `<small>${sub}</small>` : ""}</span><em>${meta || ""}</em></${href ? "a" : "div"}>`;
};
// Any element with data-table="name" is filled from SITE.tables[name]
$$("[data-table]").forEach(el => el.innerHTML = tables[el.dataset.table].map(e => row(...e)).join(""));
$$("[data-list=projects]").forEach(el => el.innerHTML = projects.map(p => row(p.title, p.sub, p.meta, projectHref(p, el.dataset.from))).join(""));
$$("[data-cards]").forEach(el => el.innerHTML = projects.map(p => `<a class="card" href="${projectHref(p, el.dataset.from)}">${img(p.thumb, p.title)}<span>${p.title}</span></a>`).join(""));

/* ---------- 3. Nav highlight + scroll-spy (home → work) ---------- */
const setActive = k => $$(".nav a").forEach(a => a.classList.toggle("active", a.dataset.key === k));
setActive(activeKey);
if (page === "home") {
    const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-50% 0px -50% 0px" });
    $$("#home, #work").forEach(s => spy.observe(s));
}

/* ---------- 4. Project page (one template, many projects) ---------- */
if (page === "project") {
    const p = projects.find(x => x.slug === params.get("p")) || projects[0];
    const back = params.get("from") === "recruiter" ? "recruiter.html" : "index.html#work";
    const block = b => typeof b === "string" ? `<p>${b}</p>` : `<figure>${img(b.img, b.alt)}</figure>`;
    document.title = `${p.title} — ${SITE.name}`;
    $("main").innerHTML =
        `<a class="back" href="${back}"><i class="bi bi-arrow-left"></i> BACK TO ALL WORK</a>
     <div class="info">${p.info.map(([k, v]) => `<div><small>${k}</small>${v}</div>`).join("")}</div>` +
        p.sections.map((s, i) => `<section id="s${i + 1}">${s.label ? `<small class="label">${s.label}</small>` : ""}<h2>${s.heading}</h2>${s.content.map(block).join("")}</section>`).join("");

    // Numbered rail on the left; the number for the section in view lights up
    document.body.insertAdjacentHTML("afterbegin", `<nav class="rail">${p.sections.map((_, i) => `<a href="#s${i + 1}">${i + 1}</a>`).join("")}</nav>`);
    const nums = $$(".rail a");
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && nums.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id))), { rootMargin: "-35% 0px -60% 0px" });
    $$("main section").forEach(s => io.observe(s));
    nums[0]?.classList.add("on");
}