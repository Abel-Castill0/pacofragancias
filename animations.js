/* animations.js — Paco Fragancias
   Scroll suave (Lenis), animaciones GSAP/ScrollTrigger,
   counter de stats, magnetic buttons y stagger de cards.
   Sin React, sin build step — vanilla JS puro.
*/
(function () {
  "use strict";

  /* ─── Ejecutar cuando el DOM está listo ──────────────────── */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initLenis();
    initScrollAnimations();
    initCounters();
    initMagneticButtons();
    initCardStagger();
  });

  /* ══════════════════════════════════════════════════════════
     1. LENIS — Smooth Scroll
     Lenis intercepta los eventos de rueda/touch y aplica su
     propia curva de easing, dando el efecto "buttery smooth"
     característico de sitios como Linear o Vercel.
     Se integra con el ticker de GSAP para que ScrollTrigger
     calcule posiciones con el offset real de Lenis.
  ══════════════════════════════════════════════════════════ */
  function initLenis() {
    if (typeof Lenis === "undefined") return;

    var lenis = new Lenis({
      duration: 1.15,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.4,
    });

    window.__paco_lenis = lenis;

    /* scroll-behavior: smooth nativo conflicta con Lenis */
    document.documentElement.style.scrollBehavior = "auto";

    /* Parchar window.scrollTo para que navigateTo() use Lenis */
    var _orig = window.scrollTo.bind(window);
    window.scrollTo = function (xOrOpts, y) {
      if (xOrOpts && typeof xOrOpts === "object" && "top" in xOrOpts) {
        lenis.scrollTo(xOrOpts.top || 0, { duration: 0.85 });
      } else {
        _orig(xOrOpts, y);
      }
    };

    /* Integrar con GSAP ticker */
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      /* Fallback sin GSAP */
      (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
    }
  }

  /* ══════════════════════════════════════════════════════════
     2. SCROLL ANIMATIONS — GSAP ScrollTrigger
     Anima secciones estáticas cuando entran al viewport.
     Solo targets que NO usan el IntersectionObserver existente
     (.reveal-item → .visible), para no duplicar efectos.
  ══════════════════════════════════════════════════════════ */
  function initScrollAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    var defaults = { ease: "power3.out", duration: 0.9 };

    /* Section headers — fade up */
    gsap.utils.toArray(".section-header").forEach(function (el) {
      gsap.from(el, Object.assign({}, defaults, {
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        y: 44,
        opacity: 0,
      }));
    });

    /* Trust cards — stagger escalonado */
    var trustCards = gsap.utils.toArray(".trust-card");
    if (trustCards.length) {
      gsap.from(trustCards, {
        scrollTrigger: { trigger: ".trust-grid", start: "top 84%", toggleActions: "play none none none" },
        y: 56, opacity: 0, scale: 0.96,
        duration: 0.72, stagger: 0.13, ease: "power3.out",
        clearProps: "transform",
      });
    }

    /* Review cards */
    var reviewCards = gsap.utils.toArray(".review-card");
    if (reviewCards.length) {
      gsap.from(reviewCards, {
        scrollTrigger: { trigger: ".reviews-carousel", start: "top 84%", toggleActions: "play none none none" },
        y: 38, opacity: 0,
        duration: 0.6, stagger: 0.09, ease: "power3.out",
        clearProps: "transform",
      });
    }

    /* Stats bar */
    gsap.from(".stats-inner", {
      scrollTrigger: { trigger: ".stats-bar", start: "top 92%", toggleActions: "play none none none" },
      y: 26, opacity: 0, duration: 0.75, ease: "power3.out",
    });

    /* TikTok cards */
    var tiktokCards = gsap.utils.toArray(".tiktok-card");
    if (tiktokCards.length) {
      gsap.from(tiktokCards, {
        scrollTrigger: { trigger: ".tiktok-grid", start: "top 85%", toggleActions: "play none none none" },
        y: 40, opacity: 0, scale: 0.97,
        duration: 0.65, stagger: 0.1, ease: "power3.out",
        clearProps: "transform",
      });
    }

    /* Footer */
    gsap.from(".footer-brand", {
      scrollTrigger: { trigger: ".footer", start: "top 90%", toggleActions: "play none none none" },
      y: 28, opacity: 0, duration: 0.7, ease: "power3.out",
    });
    gsap.from(".footer-col", {
      scrollTrigger: { trigger: ".footer", start: "top 88%", toggleActions: "play none none none" },
      y: 28, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
    });
  }

  /* ══════════════════════════════════════════════════════════
     3. COUNTER ANIMATION
     Los números de .stat-number cuentan desde 0 cuando
     el usuario hace scroll hasta ellos. Maneja prefijos
     (ej: "⭐ "), sufijos (ej: "+", "%") y decimales.
  ══════════════════════════════════════════════════════════ */
  function initCounters() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    document.querySelectorAll(".stat-number").forEach(function (el) {
      var original = el.textContent.trim();
      /* Captura: (prefijo)(número)(sufijo) */
      var match = original.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)(.*)$/);
      if (!match) return;

      var prefix   = match[1];
      var numStr   = match[2].replace(/,/g, "");
      var suffix   = match[3];
      var target   = parseFloat(numStr);
      var isFloat  = numStr.indexOf(".") !== -1;
      var decimals = isFloat ? numStr.split(".")[1].length : 0;
      var obj = { val: 0 };

      gsap.to(obj, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
        val: target,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: function () {
          var v = obj.val;
          var display = isFloat
            ? v.toFixed(decimals)
            : (target >= 1000 ? Math.floor(v).toLocaleString("es-PE") : String(Math.floor(v)));
          el.textContent = prefix + display + suffix;
        },
        onComplete: function () {
          el.textContent = original; /* restaura exactamente el original */
        },
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     4. MAGNETIC BUTTONS
     El botón principal sigue el cursor con una resistencia
     del 25%, creando una atracción magnética sutil.
     Al salir, vuelve a su posición con spring easing.
     Solo en desktop (pointer: fine) para no afectar mobile.
  ══════════════════════════════════════════════════════════ */
  function initMagneticButtons() {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    var STRENGTH = 0.25;

    document.querySelectorAll(".btn-gold").forEach(function (btn) {
      var rect;

      btn.addEventListener("mouseenter", function () {
        rect = btn.getBoundingClientRect();
        btn.style.transition = "transform 0.08s linear, box-shadow var(--t-spring)";
      });

      btn.addEventListener("mousemove", function (e) {
        if (!rect) return;
        var x = (e.clientX - rect.left  - rect.width  / 2) * STRENGTH;
        var y = (e.clientY - rect.top   - rect.height / 2) * STRENGTH;
        btn.style.transform = "translate(" + x + "px," + (y - 3) + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        rect = null;
        btn.style.transition = "transform 0.5s cubic-bezier(.25,.8,.25,1.2), box-shadow var(--t-spring)";
        btn.style.transform = "";
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     5. CARD STAGGER — MutationObserver
     Detecta cuándo los grids dinámicos reciben nuevas cards
     (tras cambiar el filtro) y las anima escalonadas.
     Usa MutationObserver en lugar de hooks en script.js
     para no tocar la lógica de negocio existente.
  ══════════════════════════════════════════════════════════ */
  function initCardStagger() {
    if (typeof gsap === "undefined") return;

    var configs = [
      { id: "featuredGrid", sel: ".product-card" },
      { id: "catalogGrid",  sel: ".product-card" },
      { id: "promoGrid",    sel: ".promo-card"   },
    ];

    function animateCards(container, sel) {
      var cards = container.querySelectorAll(sel);
      if (!cards.length) return;
      gsap.fromTo(cards,
        { y: 30, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity" }
      );
    }

    configs.forEach(function (cfg) {
      var el = document.getElementById(cfg.id);
      if (!el) return;

      /* Animar contenido que ya existe al cargar (featuredGrid) */
      if (el.children.length) animateCards(el, cfg.sel);

      new MutationObserver(function (mutations) {
        var hasAdded = mutations.some(function (m) { return m.addedNodes.length > 0; });
        if (hasAdded) animateCards(el, cfg.sel);
      }).observe(el, { childList: true });
    });
  }

})();
