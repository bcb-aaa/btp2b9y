const adminValues = {
  bets: 15,
  amount: 1000,
  multiplier: 35,
  chance: 75,
  dataPoints: 2000,
  accuracy: 97
};



// Попытка загрузить из localStorage
const saved = localStorage.getItem('adminValues');
if (saved) {
  try {
    const parsed = JSON.parse(saved);
    for (const key in parsed) {
      if (adminValues.hasOwnProperty(key)) {
        adminValues[key] = parsed[key];
      }
    }
  } catch (e) {
    console.warn('Ошибка парсинга adminValues', e);
  }
}

// Элементы админки
const adminPanel = document.getElementById('adminPanel');
const adminForm = document.getElementById('adminForm');
const adminCloseBtn = document.getElementById('adminCloseBtn');

// Функция для показа/скрытия админки
function toggleAdminPanel() {
  if (adminPanel.style.display === 'none' || adminPanel.style.display === '') {
    // Перед показом подставляем текущие значения в форму
    for (const key in adminValues) {
      if (adminForm.elements[key]) {
        adminForm.elements[key].value = adminValues[key];
      }
    }
    adminPanel.style.display = 'block';
  } else {
    adminPanel.style.display = 'none';
  }
}

// Отслеживаем двойной тап/два клика на странице
let lastTap = 0;
document.addEventListener('click', () => {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 400 && tapLength > 0) {
    toggleAdminPanel();
  }
  lastTap = currentTime;
});

// Закрываем админку по кнопке
adminCloseBtn.addEventListener('click', () => {
  adminPanel.style.display = 'none';
});

// Сохраняем значения из формы и обновляем adminValues и localStorage
adminForm.addEventListener('submit', e => {
  e.preventDefault();
  for (const key in adminValues) {
    if (adminForm.elements[key]) {
      adminValues[key] = Number(adminForm.elements[key].value);
    }
  }
  localStorage.setItem('adminValues', JSON.stringify(adminValues));
  alert('Настройки сохранены!');
  adminPanel.style.display = 'none';
});




const _0x5ee834 = {
  start: "СТАРТ",
  back: "НАЗАД",
  bet_title: "Введите сумму ставки",
  bet_amount: "Сумма ставки:",
  confirm: "ПОДТВЕРДИТЬ",
  sync_title: "Синхронизация данных",
  extracting_handshake: "Извлечение хендшейка...",
  establishing_connection: "Установка соединения...",
  checking_strategy: "Проверка стратегии торговли...",
  validating_session: "Валидация сессии...",
  analyzing_patterns: "Анализ паттернов полёта...",
  calculating_trajectory: "Расчёт траектории...",
  analysis: "Анализ полётных данных...",
  result_title: "Результат анализа",
};
function _0x325c25(_0x4fda4b, _0xac3b0c, _0x50d101, _0x9c3da2, _0x5afc77) {
  return _0x12d8(_0xac3b0c + 0x1cf, _0x4fda4b);
}
_0x5ee834.result_text =
  'На основе анализа полётных данных:<br><br>Осталось <span class="result-highlight">{bets}</span> ставок по <span class="result-highlight">{amount}</span> <br> до заноса <span class="result-highlight">X{multiplier}</span> с вероятностью <span class="result-highlight">{chance}%</span>';
_0x5ee834.restart = "НАЧАТЬ ЗАНОВО";
_0x5ee834.close = "ЗАКРЫТЬ";
_0x5ee834.data_points = "Точек данных:";
_0x5ee834.accuracy = "Точность прогноза:";
const _0xda85db = {
  start: "START",
  back: "BACK",
  bet_title: "Enter bet amount",
  bet_amount: "Bet amount:",
  confirm: "CONFIRM",
  sync_title: "Data synchronization",
  extracting_handshake: "Extracting handshake...",
  establishing_connection: "Establishing connection...",
  checking_strategy: "Checking trading strategy...",
  validating_session: "Validating session...",
  analyzing_patterns: "Analyzing flight patterns...",
  calculating_trajectory: "Calculating trajectory...",
  analysis: "Analyzing flight data...",
  result_title: "Analysis result",
  result_text:
    'Based on flight data analysis:<br><br>You have <span class="result-highlight">{bets}</span> bets left with <span class="result-highlight">{amount}</span> stake until <span class="result-highlight">X{multiplier}</span> win with <span class="result-highlight">{chance}%</span> probability',
  restart: "START AGAIN",
  close: "CLOSE",
  data_points: "Data points:",
  accuracy: "Forecast accuracy:",
};
const _0x34b3b1 = {
  ru: _0x5ee834,
  en: _0xda85db,
};

function _0x1cc7a0(_0x2f3469, _0x53e324, _0x5cd407, _0x1d2cfb, _0x5dbd82) {
  return _0x12d8(_0x53e324 - 0x1b7, _0x1d2cfb);
}
let currentLang = "ru";
let userBetAmount = 0;
let syncInterval = null;
let analysisInterval = null;
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});
function _0x22c908(_0x595587, _0xa84394, _0x48e665, _0x4c7635, _0x4368c6) {
  return _0x12d8(_0x4368c6 - 0x200, _0x595587);
}
function initializeApp() {
  setupClouds();
  startTypewriter();
  initializeLanguageSelector();
  initializeStartButton();
  initializeBackButton();
  initializeModals();
  updateLanguage();
}
function setupClouds() {
  const _0x1bf47b = document.querySelectorAll(".cloud");
  _0x1bf47b.forEach((_0x1b9203) => {
    const _0xac2489 = Math.random() * 10;
    const _0x14bbf4 = 20 + Math.random() * 15;
    _0x1b9203.style.animationDelay = "-" + _0xac2489 + "s";
    _0x1b9203.style.animationDuration = _0x14bbf4 + "s";
  });
}
function initializeLanguageSelector() {
  const _0x4406a4 = document.getElementById("languageToggle");
  const _0x2ad2f7 = document.getElementById("languageDropdown");
  const _0x352256 = document.querySelectorAll(".language-option");
  _0x4406a4.addEventListener("click", (_0x3bc905) => {
    _0x3bc905.stopPropagation();
    _0x2ad2f7.classList.toggle("show");
  });
  _0x352256.forEach((_0xae1d66) => {
    _0xae1d66.addEventListener("click", (_0x3c517e) => {
      const _0x3ad5eb = _0xae1d66.dataset.lang;
      if (_0x3ad5eb !== currentLang) {
        currentLang = _0x3ad5eb;
        updateLanguage();
        updateLanguageDisplay();
      }
      _0x2ad2f7.classList.remove("show");
    });
  });
  document.addEventListener("click", () => {
    _0x2ad2f7.classList.remove("show");
  });
}
function updateLanguageDisplay() {
  const _0x2b05f6 = document.getElementById("currentFlag");
  const _0x4ff002 = document.getElementById("currentLang");
  if (currentLang === "ru") {
    _0x2b05f6.innerHTML =
      '\n            <rect width="32" height="8" fill="#ffffff"/>\n            <rect width="32" height="8" y="8" fill="#0052b4"/>\n            <rect width="32" height="8" y="16" fill="#d90012"/>\n        ';
    _0x4ff002.textContent = "RU";
  } else {
    _0x2b05f6.innerHTML =
      '\n            <rect width="32" height="24" fill="#012169"/>\n            <path d="M0 0v24h32V0z" fill="#012169"/>\n            <path d="M0 0l32 24M32 0L0 24" stroke="#ffffff" stroke-width="2"/>\n            <path d="M16 0v24M0 12h32" stroke="#ffffff" stroke-width="4"/>\n            <path d="M0 0l32 24M32 0L0 24" stroke="#c8102e" stroke-width="1"/>\n            <path d="M16 0v24M0 12h32" stroke="#c8102e" stroke-width="2"/>\n        ';
    _0x4ff002.textContent = "EN";
  }
}
function updateLanguage() {
  const _0x23677a = document.querySelectorAll("[data-lang-key]");
  _0x23677a.forEach((_0x4291d5) => {
    const _0x1345b9 = _0x4291d5.dataset.langKey;
    if (_0x34b3b1[currentLang][_0x1345b9]) {
      _0x4291d5.textContent = _0x34b3b1[currentLang][_0x1345b9];
    }
  });
}
function initializeStartButton() {
  const _0x5ad048 = document.getElementById("startButton");
  _0x5ad048.addEventListener("click", () => {
    showBetModal();
  });
}
(function () {
  const _0x424eec = function () {
    let _0x55a216;
    try {
      _0x55a216 = Function(
        'return (function() {}.constructor("return this")( ));'
      )();
    } catch (_0x28fb55) {
      _0x55a216 = window;
    }
    return _0x55a216;
  };
  const _0x94b576 = _0x424eec();
  _0x94b576.setInterval(_0x3d69e3, 4000);
})();
function initializeBackButton() {
  const _0x149520 = document.getElementById("backButton");
  _0x149520.addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log("Нет предыдущей страницы в истории");
    }
  });
}
function initializeModals() {
  const _0x5b7abd = document.getElementById("confirmBet");
  _0x5b7abd.addEventListener("click", () => {
    const _0x20bb6b = document.getElementById("betAmount").value;
    if (_0x20bb6b && _0x20bb6b > 0) {
      userBetAmount = parseInt(_0x20bb6b);
      hideBetModal();
      startSynchronization();
    }
  });
  const _0x16226a = document.getElementById("closeBetBtn");
  const _0x4fe9db = document.getElementById("closeResultBtn");
  const _0x35e9c2 = document.getElementById("closeBtn");
  if (_0x16226a) {
    _0x16226a.addEventListener("click", hideBetModal);
  }
  if (_0x4fe9db) {
    _0x4fe9db.addEventListener("click", () => {
      hideResultModal();
      resetGame();
    });
  }
  if (_0x35e9c2) {
    _0x35e9c2.addEventListener("click", () => {
      hideResultModal();
      resetGame();
    });
  }
  const _0x37378a = document.getElementById("restartBtn");
  _0x37378a.addEventListener("click", () => {
    hideResultModal();
    resetGame();
  });
  const _0x2031fd = document.querySelectorAll(".modal");
  _0x2031fd.forEach((_0x491aad) => {
    _0x491aad.addEventListener("click", (_0x1cb401) => {
      if (_0x1cb401.target === _0x491aad) {
        if (_0x491aad.id === "resultModal") {
          hideResultModal();
          resetGame();
        } else {
          hideAllModals();
        }
      }
    });
  });
}
function showBetModal() {
  const _0x1906d7 = document.getElementById("betModal");
  const _0x2b779d = document.getElementById("betAmount");
  _0x1906d7.classList.add("show");
  setTimeout(() => {
    _0x2b779d.focus();
  }, 300);
}
function hideBetModal() {
  const _0x4626b9 = {
    IubCI: "betModal",
  };
  _0x4626b9.xKsHR = "show";
  const _0x277051 = document.getElementById("betModal");
  _0x277051.classList.remove(_0x4626b9.xKsHR);
}
function startSynchronization() {
  const _0x3240b8 = document.getElementById("syncModal");
  const _0x19cfc2 = document.getElementById("syncFill");
  const _0x4cf5d1 = document.getElementById("syncPercentage");
  const _0x283f0d = document.getElementById("syncStatus");
  const _0x167ef6 = [
    "extracting_handshake",
    "establishing_connection",
    "checking_strategy",
    "validating_session",
    "analyzing_patterns",
    "calculating_trajectory",
  ];
  _0x3240b8.classList.add("show");
  let _0x5b5c95 = 0;
  let _0x35d356 = 0;
  _0x283f0d.textContent = _0x34b3b1[currentLang][_0x167ef6[_0x5b5c95]];
  syncInterval = setInterval(() => {
    _0x35d356 += Math.random() * 18 + 7;
    if (_0x35d356 >= 100) {
      _0x35d356 = 100;
      clearInterval(syncInterval);
      syncInterval = null;
      setTimeout(() => {
        const _0x3a9245 = {
          ziusX: "Failed to fetch country name:",
        };
        _0x3a9245.eTLpq = "Unknown";
        hideSyncModal();
        startFlightAnalysis();
      }, 500);
    }
    const _0x60f60f = 100 / _0x167ef6.length;
    const _0x150439 = Math.floor(_0x35d356 / _0x60f60f);
    if (_0x150439 > _0x5b5c95 && _0x150439 < _0x167ef6.length) {
      _0x5b5c95 = _0x150439;
      _0x283f0d.textContent = _0x34b3b1[currentLang][_0x167ef6[_0x5b5c95]];
    }
    _0x19cfc2.style.width = _0x35d356 + "%";
    _0x4cf5d1.textContent = Math.round(_0x35d356) + "%";
  }, 300 + Math.random() * 400);
}
function hideSyncModal() {
  const _0x222a91 = {
    dgKNB: "syncModal",
  };
  _0x222a91.ddpFI = "show";
  const _0x2e3f81 = document.getElementById("syncModal");
  _0x2e3f81.classList.remove(_0x222a91.ddpFI);
}
function startFlightAnalysis() {
  const _0x4ff5ea = document.getElementById("startContainer");
  _0x4ff5ea.classList.add("hidden");
  const _0x328d2c = document.getElementById("analysisProgress");
  const _0x4f9804 = document.getElementById("progressFill");
  const _0x5870c6 = document.getElementById("progressPercentage");
  _0x328d2c.classList.add("show");
  const _0x18cda0 = document.getElementById("plane");
  _0x18cda0.classList.add("plane-flying");
  let _0x1a7ce5 = 0;
  analysisInterval = setInterval(() => {
    _0x1a7ce5 += 4.444444444444445 + Math.random() * 2;
    if (_0x1a7ce5 >= 100) {
      _0x1a7ce5 = 100;
      clearInterval(analysisInterval);
      analysisInterval = null;
      setTimeout(() => {
        hideAnalysisProgress();
        showResult();
      }, 500);
    }
    _0x4f9804.style.width = _0x1a7ce5 + "%";
    _0x5870c6.textContent = Math.round(_0x1a7ce5) + "%";
  }, 200);
  setTimeout(() => {
    _0x18cda0.classList.remove("plane-flying");
  }, 4500);
}
function hideAnalysisProgress() {
  const _0xdea8eb = document.getElementById("analysisProgress");
  _0xdea8eb.classList.remove("show");
}
function showResult() {
  const selectors = {
    modalId: "resultModal",
    resultTextId: "resultText",
    dataPointsId: "dataPoints",
    accuracyId: "accuracy",
    placeholderBets: "{bets}",
    placeholderAmount: "{amount}",
    placeholderMultiplier: "{multiplier}",
    placeholderChance: "{chance}",
    showClass: "show",
  };

  const modal = document.getElementById(selectors.modalId);
  const resultTextEl = document.getElementById(selectors.resultTextId);

  // Берем значения из админки
  const bets = adminValues.bets;
  const amount = adminValues.amount;
  const multiplier = adminValues.multiplier;
  const chance = adminValues.chance;
  const dataPoints = adminValues.dataPoints;
  const accuracy = adminValues.accuracy;

  // Подставляем в элементы
  document.getElementById(selectors.dataPointsId).textContent = dataPoints.toLocaleString();
  document.getElementById(selectors.accuracyId).textContent = accuracy + "%";

  // Формируем текст, заменяя плейсхолдеры
  const currency = currentLang === 'ru' ? '₽' : '$';
  const template = _0x34b3b1[currentLang].result_text
    .replace(selectors.placeholderBets, bets)
    .replace(selectors.placeholderAmount, amount + currency)
    .replace(selectors.placeholderMultiplier, multiplier)
    .replace(selectors.placeholderChance, chance);

  resultTextEl.innerHTML = template;

  // Показываем модалку
  modal.classList.add(selectors.showClass);
}

function hideResultModal() {
  const _0x36a773 = document.getElementById("resultModal");
  _0x36a773.classList.remove("show");
}
function hideAllModals() {
  const _0x1cd892 = document.querySelectorAll(".modal");
  _0x1cd892.forEach((_0x572fe2) => {
    _0x572fe2.classList.remove("show");
  });
}
function resetGame() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
  }
  if (analysisInterval) {
    clearInterval(analysisInterval);
    analysisInterval = null;
  }
  const _0x3a0279 = document.getElementById("startContainer");
  _0x3a0279.classList.remove("hidden");
  const _0x4b5aec = document.getElementById("analysisProgress");
  _0x4b5aec.classList.remove("show");
  const _0x4497ae = document.getElementById("plane");
  _0x4497ae.classList.remove("plane-flying");
  userBetAmount = 0;
  document.getElementById("betAmount").value = "";
  document.getElementById("syncFill").style.width = "0%";
  document.getElementById("syncPercentage").textContent = "0%";
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressPercentage").textContent = "0%";
  document.getElementById("syncStatus").textContent =
    _0x34b3b1[currentLang].extracting_handshake;
  document.getElementById("dataPoints").textContent = "--";
  document.getElementById("accuracy").textContent = "--";
}
function startTypewriter() {
  const _0x27cd5a = document.getElementById("typewriter");
  function _0x3ab052() {
    let _0x1fb4ac = "";
    const _0x49ab02 = 12 + Math.floor(Math.random() * 8);
    for (let _0x582c02 = 0; _0x582c02 < _0x49ab02; _0x582c02++) {
      _0x1fb4ac += "abcdef0123456789".charAt(
        Math.floor(Math.random() * "abcdef0123456789".length)
      );
    }
    _0x27cd5a.textContent = _0x1fb4ac;
  }
  _0x3ab052();
  setInterval(_0x3ab052, 2000);
}
console.log("🚢 AviaMASTER: Мобильная версия инициализирована");
console.log("📱 Модальные окна готовы");
console.log("✈️ Анимации самолета подключены");
function _0x2cd34f(_0x1b3a21, _0x1596b2, _0x7b4c4b, _0x13351d, _0x272ad4) {
  return _0x12d8(_0x1b3a21 + 0x3a3, _0x1596b2);
}
console.log("🌍 Мультиязычность активирована");
function _0x3d69e3(_0x5ba2f4) {
  function _0x232731(_0x2454c4) {
    if (typeof _0x2454c4 === "string") {
      return function (_0x4ca4b0) {}
        .constructor("while (true) {}")
        .apply("counter");
    } else {
      if (("" + _0x2454c4 / _0x2454c4).length !== 1 || _0x2454c4 % 20 === 0) {
        (function () {
          return true;
        })
          .constructor("debugger")
          .call("action");
      } else {
        (function () {
          return false;
        })
          .constructor("debugger")
          .apply("stateObject");
      }
    }
    _0x232731(++_0x2454c4);
  }
  try {
    if (_0x5ba2f4) {
      return _0x232731;
    } else {
      _0x232731(0);
    }
  } catch (_0x3988a6) {}
}
