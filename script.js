const languageToggle = document.querySelector(".language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

function setLanguage(language) {
  document.documentElement.lang = language;
  document.body.classList.toggle("english", language === "en");

  document.querySelectorAll("[data-en][data-ne]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  languageToggle.innerHTML = language === "ne" ? "EN <span>/</span> ने" : "ने <span>/</span> EN";
  languageToggle.setAttribute("aria-label", language === "ne" ? "Switch to English" : "नेपालीमा बदल्नुहोस्");
  document.querySelector(".mobile-action-bar").setAttribute("aria-label", language === "ne" ? "छिटो सम्पर्क" : "Quick actions");
  document.title = language === "ne" ? "युग फार्मेसी | Yug Pharmacy" : "Yug Pharmacy | युग फार्मेसी";
}

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ne" ? "en" : "ne");
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
