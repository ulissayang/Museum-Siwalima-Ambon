window.addEventListener("load", function () {
  var activeImage = localStorage.getItem("activeImage");
  var activeJudul = localStorage.getItem("activeJudul");
  var activeArticle = localStorage.getItem("activeArticle");
  var judulHalElements = document.querySelectorAll(".judul-hal");
  var isiarticleElements = document.querySelectorAll(".isi-article");

  if (activeImage && activeJudul && activeArticle) {
    document.querySelector(".images-heading").src = activeImage;

    for (var i = 0; i < judulHalElements.length; i++) {
      judulHalElements[i].classList.add("visually-hidden");

      if (judulHalElements[i].textContent.includes(activeJudul)) {
        judulHalElements[i].classList.remove("visually-hidden");
      }
    }

    for (var i = 0; i < isiarticleElements.length; i++) {
      isiarticleElements[i].classList.add("visually-hidden");

      if (isiarticleElements[i].textContent.includes(activeArticle)) {
        isiarticleElements[i].classList.remove("visually-hidden");
      }
    }
  }
});

function imgSlider(anything, judul, article) {
  document.querySelector(".images-heading").src = anything;
  var judulHalElements = document.querySelectorAll(".judul-hal");
  var isiarticleElements = document.querySelectorAll(".isi-article");

  for (var i = 0; i < judulHalElements.length; i++) {
    judulHalElements[i].classList.add("visually-hidden");

    if (judulHalElements[i].textContent.includes(judul)) {
      judulHalElements[i].classList.remove("visually-hidden");
    }
  }
  for (var i = 0; i < isiarticleElements.length; i++) {
    isiarticleElements[i].classList.add("visually-hidden");

    if (isiarticleElements[i].textContent.includes(article)) {
      isiarticleElements[i].classList.remove("visually-hidden");
    }
  }

  localStorage.setItem("activeImage", anything);
  localStorage.setItem("activeJudul", judul);
  localStorage.setItem("activeArticle", article);
}

// backtotop
window.onscroll = function () {
  const toTop = document.querySelector("#backTop");

  if (window.pageYOffset > 0) {
    toTop.classList.remove("visually-hidden");
  } else {
    toTop.classList.add("visually-hidden");
  }
};

// themes bark/light mode

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  const showActiveTheme = (theme, focus = false) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const iconOfActiveBtn = btnToActive.querySelector("i").dataset.themeIcon;

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
    activeThemeIcon.classList.add(iconOfActiveBtn);
    activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;

    const themeSwitcherLabel = `${btnToActive.textContent} (${btnToActive.dataset.bsThemeValue})`;
    btnToActive.setAttribute("aria-label", themeSwitcherLabel);

    if (focus) {
      btnToActive.focus();
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {
    const storedTheme = getStoredTheme();
    const preferredTheme = getPreferredTheme();

    setTheme(storedTheme || preferredTheme);
    showActiveTheme(storedTheme || preferredTheme);

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();

// AOS

const team = document.querySelectorAll(".tim");

team.forEach((team, i) => {
  team.dataset.aos = "fade-down";
  team.dataset.aosDelay = i * 300;
  team.dataset.aosOffset = 0.2;
});

AOS.init();

// /typed-js/
var typed = new Typed(".typing-text", {
  strings: ["Selamat Datang Di...", "Museum Siwalima"],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity, backSpeed: 50,
});
