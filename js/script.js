// script.js 
// Handles interactive behavior across the Campus Life Super App.

const THEME_STORAGE_KEY = "campus-life-theme";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Campus Life Super App JS loaded.");

  setupDirectionsForm();
  setupHousingButtons();
  setupThemeToggle();
  setupScrollReveal();
});

/**
 * Attach a submit handler to the directions form on campus-map.html.
 * Currently a placeholder for future map API logic.
 */
function setupDirectionsForm() {
  const form = document.getElementById("directions-form");
  const buildingInput = document.getElementById("building-input");

  if (!form || !buildingInput) {
    // Not on the campus-map page.
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    const building = buildingInput.value.trim();
    if (!building) {
      alert("Please enter a destination building.");
      return;
    }

    alert(`Directions feature coming soon for: ${building}`);
    console.log(`Directions requested for: ${building}`);

    // TODO: Replace alert with a real map API call.
  });
}

/**
 * Attach click handlers to housing buttons on housing-services.html.
 * Shows basic dynamic content without an API.
 */
function setupHousingButtons() {
  const buttons = document.querySelectorAll(".housing-button");
  const detailsBox = document.getElementById("housing-details");

  if (!buttons.length || !detailsBox) {
    // Not on housing-services page.
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const hallName = button.dataset.hall;
      const message = getHallMessage(hallName);
      detailsBox.textContent = message;
    });
  });
}

/**
 * Return a short description for each hall.
 * This could later be replaced by data from an API or JSON file.
 */
function getHallMessage(hallName) {
  switch (hallName) {
    case "Watkins":
      return "Watkins: Student center with Snappers, ping pong, and frequent events in a central location close to dining and student life.";
    case "Bonner":
      return "Bonner: Largest dorm; great for student-athletes seeking an athlete-driven community.";
    case "Greer":
      return "Greer: Freshman men's dorm near the baseball and football fields with lots of social events.";
    case "McQuiston":
      return "McQuiston: Spacious Honors housing with modern amenities.";
    case "Pressly":
      return "Pressly: Upperclassmen men's dorm near Greer and the fields.";
    case "Kennedy":
      return "Kennedy: Upperclassmen men's dorm near Bonner with a strong athlete community.";
    case "Carnegie":
      return "Carnegie: Freshman women's dorm on Bonner Circle, surrounded by academic buildings and social events.";
    case "Robinson":
      return "Robinson: Upperclassmen women's dorm on Bonner Circle near classroom buildings.";
    case "Edwards":
      return "Edwards: Honors women's dorm in the center of campus—often considered the nicest housing on campus.";
    default:
      return `${hallName}: Hall information coming soon.`;
  }
}

/**
 * Theme toggle: switches between light and dark mode.
 * Saves the user's preference in localStorage.
 */
function setupThemeToggle() {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) {
    return;
  }

  // Apply saved preference on load
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
    toggleButton.textContent = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("theme-dark");
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}

/**
 * Scroll reveal: fades in elements with the .reveal-on-scroll class
 * when they come into view.
 */
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}
