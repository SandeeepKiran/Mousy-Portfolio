/*
 * Page behaviour. Plain JavaScript, no libraries.
 *
 * What this file does:
 *   1. Builds the project cards from js/projects.js.
 *   2. Fades/scales cards in when they scroll into view.
 *   3. Drives the scroll effects: the hero card tilting away, the About
 *      hologram scan (counter, scan line, cards), and the header colours.
 *   4. Highlights the nav link of the section you are looking at.
 *
 * If JavaScript is off, the page still shows all text: the "js" class below
 * is what turns the hidden-until-scrolled states on.
 */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const header = document.querySelector("[data-header]");
  const hero = document.querySelector("[data-hero]");
  const about = document.querySelector("[data-about]");
  const counter = document.querySelector("[data-counter]");
  const percent = document.querySelector("[data-percent]");
  const aboutCards = Array.from(document.querySelectorAll(".holo-card"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));

  // Scan progress (0–1) at which each About card appears.
  const CARD_STEPS = [0.08, 0.35, 0.65];

  /* ---------- 1. Project cards ---------- */

  // Soft background tints for the placeholder picture boxes, so the grid
  // does not look like five identical grey squares.
  const PLACEHOLDER_TINTS = ["#f6c26b", "#7fb2ff", "#79d1c3", "#b9a3f5", "#f59e8b"];

  function createProjectCard(project, index) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.className = "project-card";
    link.href = project.link || "#";

    const media = document.createElement("div");
    media.className = "project-card__media";

    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.imageAlt || "";
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      // No picture yet: show a tinted placeholder box drawn with CSS.
      media.classList.add("project-card__media--placeholder");
      media.style.setProperty("--tint", PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length]);
      const label = document.createElement("span");
      label.className = "project-card__placeholder-label";
      label.textContent = "Image coming soon";
      media.appendChild(label);
    }

    const arrow = document.createElement("span");
    arrow.className = "project-card__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML =
      '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    media.appendChild(arrow);

    link.appendChild(media);
    link.appendChild(createCardText(project));
    item.appendChild(link);
    return item;
  }

  function createSpecialCard(card) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.className = "project-card project-card--special";
    link.href = card.link || "#";

    const media = document.createElement("div");
    media.className = "project-card__media";
    media.innerHTML =
      '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8v32M8 24h32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>';

    link.appendChild(media);
    link.appendChild(createCardText(card));
    item.appendChild(link);
    return item;
  }

  // textContent (not innerHTML) so any text in projects.js is shown as-is
  // and can never break the page.
  function createCardText(data) {
    const text = document.createElement("div");
    text.className = "project-card__text";
    const title = document.createElement("h3");
    title.className = "project-card__title";
    title.textContent = data.title || "";
    text.appendChild(title);
    if (data.description) {
      const desc = document.createElement("p");
      desc.className = "project-card__description";
      desc.textContent = data.description;
      text.appendChild(desc);
    }
    return text;
  }

  function renderProjects() {
    const grid = document.querySelector("[data-project-grid]");
    if (!grid) return;
    const projects = (window.PROJECTS || []).slice(0, 5);
    projects.forEach(function (project, i) {
      grid.appendChild(createProjectCard(project, i));
    });
    if (window.SPECIAL_CARD) {
      grid.appendChild(createSpecialCard(window.SPECIAL_CARD));
    }
  }

  /* ---------- 2. Reveal on scroll ---------- */

  function setUpReveal() {
    const targets = document.querySelectorAll(".project-card, .section-heading, .contact__inner");
    if (!("IntersectionObserver" in window) || reduceMotion.matches) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 3. Scroll effects ---------- */

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  // The hero is a cream "card" that tilts and lifts away as you scroll,
  // uncovering the blue About stage that sits pinned underneath it.
  function updateHero(viewportHeight) {
    if (reduceMotion.matches) {
      hero.style.removeProperty("--lift");
      return;
    }
    const lift = clamp(window.scrollY / viewportHeight, 0, 1);
    hero.style.setProperty("--lift", lift.toFixed(3));
  }

  // The About section is much taller than the screen. Its stage is "sticky",
  // so it stays put while you scroll through that extra height. We turn the
  // scroll position inside the section into a 0–1 "scan" value.
  function updateAbout(viewportHeight) {
    let scan = 1;
    if (!reduceMotion.matches) {
      const rect = about.getBoundingClientRect();
      // Start once the hero has mostly gone; finish a little before the
      // stage un-pins so visitors see the 100 for a moment.
      const start = viewportHeight * 0.6;
      const end = rect.height - viewportHeight * 1.35;
      scan = clamp((-rect.top - start) / (end - start), 0, 1);
    }
    about.style.setProperty("--scan", scan.toFixed(3));

    const value = Math.round(scan * 100);
    counter.textContent = String(value).padStart(3, "0");
    percent.textContent = value + "%";

    aboutCards.forEach(function (card, i) {
      card.classList.toggle("is-visible", scan >= CARD_STEPS[i]);
    });
  }

  // The header switches to a dark style while it sits on top of the blue
  // About stage, so the nav stays readable.
  function updateHeader() {
    const rect = about.getBoundingClientRect();
    const headerMid = 40;
    // The tilted hero card may still cover the header area; wait until it
    // has fully passed above it.
    const heroGone = hero.getBoundingClientRect().bottom < headerMid;
    const onBlue = heroGone && rect.top <= headerMid && rect.bottom >= headerMid;
    header.classList.toggle("site-header--dark", onBlue);
  }

  /* ---------- 4. Active nav link ---------- */

  function updateActiveNav(viewportHeight) {
    const probe = viewportHeight * 0.4;
    let active = "";
    ["about", "projects", "contact"].forEach(function (id) {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      if (rect.top <= probe && rect.bottom > probe) active = id;
    });
    // The About section starts under the hero, so only count it once the
    // hero has scrolled most of the way off.
    if (active === "about" && window.scrollY < hero.offsetHeight * 0.5) active = "";
    navLinks.forEach(function (link) {
      const isActive = link.dataset.nav === active;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  // requestAnimationFrame batches scroll work to once per frame, which keeps
  // scrolling smooth even on slower phones.
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      const vh = window.innerHeight;
      updateHero(vh);
      updateAbout(vh);
      updateHeader();
      updateActiveNav(vh);
      ticking = false;
    });
  }

  /* ---------- Start ---------- */

  renderProjects();
  setUpReveal();

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  reduceMotion.addEventListener("change", onScroll);
  onScroll();
})();
