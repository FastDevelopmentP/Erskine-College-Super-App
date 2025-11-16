// script.js
// Interactivity and API calls for the Campus Life Super App.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Campus Life Super App JS loaded.");

  setupDirectionsForm();
  setupHousingButtons();
  setupThemeToggle();
  setupScrollReveal();
  loadDueWestWeather();
});

// -------------------------------
// Directions form (Campus Map)
// -------------------------------
function setupDirectionsForm() {
  const form = document.getElementById("directions-form");
  const buildingInput = document.getElementById("building-input");
  const mapFrame = document.getElementById("campus-map-frame");
  const statusLine = document.getElementById("directions-status");

  // If we're not on the Campus Map page, stop.
  if (!form || !buildingInput || !mapFrame) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const building = buildingInput.value.trim();
    if (!building) {
      alert("Please enter a destination building or hall.");
      return;
    }

    // Build a Google Maps search query centered on Erskine.
    const query = encodeURIComponent(`${building}, Erskine College, Due West SC`);

    // Tell the embedded map to show that search.
    mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;

    if (statusLine) {
      statusLine.textContent = `Showing map results for: ${building}`;
    }

    console.log(`Updated map for destination: ${building}`);
  });
}

// -------------------------------
// Housing buttons (Housing page)
// -------------------------------
function setupHousingButtons() {
  const buttons = document.querySelectorAll(".housing-button");
  const detailsBox = document.getElementById("housing-details");

  // Not on the housing page
  if (!buttons.length || !detailsBox) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const hallName = button.dataset.hall;
      const message = getHallMessage(hallName);
      detailsBox.textContent = message;
    });
  });
}

function getHallMessage(hallName) {
  switch (hallName) {
    case "Watkins":
      return "Watkins: Student center with Snappers, ping pong, and frequent events in a central campus location.";
    case "Bonner":
      return "Bonner: Biggest dorm on campus, popular with student-athletes and a lively community.";
    case "Greer":
      return "Greer: Freshman men’s dorm near the baseball and football fields with lots of social events.";
    case "McQuiston":
      return "McQuiston: Honors housing with quieter hall culture and easy access to academics.";
    case "Pressly":
      return "Pressly: Upperclassmen men’s hall near Greer and the athletic fields.";
    case "Kennedy":
      return "Kennedy: Upperclassmen men’s hall close to Bonner and other athlete housing.";
    case "Carnegie":
      return "Carnegie: Freshman women’s dorm on Bonner Circle, surrounded by academic buildings.";
    case "Robinson":
      return "Robinson: Upperclassmen women’s dorm on Bonner Circle, close to classes and chapel.";
    case "Edwards":
      return "Edwards: Honors women’s housing in the center of campus, often considered the nicest housing on campus.";
    default:
      return `${hallName}: Hall information coming soon.`;
  }
}

// -------------------------------
// Theme toggle (light / dark)
// -------------------------------
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const stored = localStorage.getItem("clsa-theme");
  const initialMode = stored === "dark" ? "dark" : "light";
  applyTheme(initialMode);
  updateThemeButtonLabel(toggleBtn, initialMode);

  toggleBtn.addEventListener("click", () => {
    const current = document.body.classList.contains("theme-dark")
      ? "dark"
      : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    updateThemeButtonLabel(toggleBtn, next);
    localStorage.setItem("clsa-theme", next);
  });
}

function applyTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.remove("theme-dark");
  }
}

function updateThemeButtonLabel(button, mode) {
  button.textContent = mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// -------------------------------
// Scroll reveal animation
// -------------------------------
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

// -------------------------------
// API #2: OpenWeatherMap (Due West)
// -------------------------------
// Your actual key from the screenshot:
const OPEN_WEATHER_KEY = "1c8ea16fb18b366d2b65d4136fe77cd7";

function loadDueWestWeather() {
  const weatherBox = document.getElementById("weather-box");
  if (!weatherBox) return; // only on pages with weather

  // If you ever blank this out for GitHub, this guard will show a message instead of erroring.
  if (!OPEN_WEATHER_KEY || OPEN_WEATHER_KEY === "YOUR_OPENWEATHER_API_KEY_HERE") {
    weatherBox.innerHTML = `
      <p class="mb-0 text-muted">
        Add your OpenWeatherMap API key in <code>script.js</code> to load live weather.
      </p>
    `;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Due%20West,US&units=imperial&appid=${OPEN_WEATHER_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Weather request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const feelsLike = Math.round(data.main.feels_like);
      const desc =
        data.weather && data.weather[0]
          ? data.weather[0].description
          : "Current conditions";

      weatherBox.innerHTML = `
        <p class="mb-1">
          <strong>${temp}°F</strong> — ${desc}
        </p>
        <p class="mb-0 text-muted">
          Feels like ${feelsLike}°F in Due West right now.
        </p>
      `;
    })
    .catch((error) => {
      console.error("Weather error:", error);
      weatherBox.innerHTML = `
        <p class="mb-0 text-muted">
          Weather data is unavailable right now. Check back later or verify your API key.
        </p>
      `;
    });
}
