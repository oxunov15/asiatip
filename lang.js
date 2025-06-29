const translations = {
  uz: {
    title: "Darhol Sovg'a oling",
    desc: "Osiyodagi strimerlar va ijodkorlar uchun premium platforma",
    get_started: "Boshlash",
    features: "⚡ Xususiyatlar",
    feature1: "Real-vaqtlik xabarnomalar"
  },
  ru: {
    title: "Начни получать донаты",
    desc: "Премиальная платформа для стримеров и креаторов Азии",
    get_started: "Начать",
    features: "⚡ Возможности",
    feature1: "Уведомления о пожертвованиях в реальном времени"
  },
  kg: {
    title: "Дароо кеңеш алыңыз",
    desc: "Азиядагы стримерлер үчүн премиум платформа",
    get_started: "Баштоо",
    features: "⚡ Мүмкүнчүлүктөр",
    feature1: "Реалдуу убакыт эскертмелери"
  },
  kz: {
    title: "Қазір кеңестерді алыңыз",
    desc: "Азиядағы стримерлерге арналған премиум платформа",
    get_started: "Бастау",
    features: "⚡ Мүмкіндіктер",
    feature1: "Нақты уақыттағы хабарламалар"
  },
  tj: {
    title: "Дарҳол маслиҳат гиред",
    desc: "Платформаи премиум барои стримерҳо ва эҷодкорони Осиё",
    get_started: "Оғоз кардан",
    features: "⚡ Имконот",
    feature1: "Огоҳиҳои вақти воқеӣ"
  }
};

const langSwitcher = document.getElementById('langSwitcher');
langSwitcher.addEventListener('change', () => {
  const lang = langSwitcher.value;
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    el.textContent = translations[lang][key];
  });
});
