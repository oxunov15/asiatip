const translations = {
  uz: {
    title: "Darhol donation oling",
    desc: "Streamer va yaratuvchilar uchun premium platforma",
    get_started: "Boshlash",
    features: "⚡ Xususiyatlar",
    feature1: "Real-time donation ogohlantirishlari"
  },
  ru: {
    title: "Начни получать донаты",
    desc: "Премиум-платформа для стримеров и креаторов",
    get_started: "Начать",
    features: "⚡ Возможности",
    feature1: "Уведомления о донатах в реальном времени"
  },
  kg: {
    title: "Дароо эле донаттарды алыңыз",
    desc: "Стримерлер жана жаратуучулар үчүн премиум платформа",
    get_started: "Баштоо",
    features: "⚡ Өзгөчөлүктөрү",
    feature1: "Реалдуу убакыттагы донат эскертмелери"
  },
  kz: {
    title: "Қазірден бастап донаттар алыңыз",
    desc: "Стримерлерге арналған премиум платформа",
    get_started: "Бастау",
    features: "⚡ Ерекшеліктер",
    feature1: "Нақты уақыттағы донат ескертулері"
  },
  tj: {
    title: "Фавран донат гиред",
    desc: "Платформаи премиум барои стримерҳо ва эҷодкорон",
    get_started: "Оғоз кардан",
    features: "⚡ Хусусиятҳо",
    feature1: "Огоҳсозиҳои донат дар вақти воқеӣ"
  }
};

document.getElementById("langSwitcher").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
