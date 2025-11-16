// script.js
// This file handles interactive behavior across the Campus Life Super App.

// Wait until the DOM is ready before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  console.log("Campus Life Super App JS loaded.");

  setupDirectionsForm();
  setupHousingButtons();
});

/**
 * Still need to attach a submit handler to the directions form on campus-map.html
 * This is a placeholder for future API logic.
 */
function setupDirectionsForm() {
  const form = document.getElementById("directions-form");
  const buildingInput = document.getElementById("building-input");

  if (!form || !buildingInput) {
    // Not on the campus-map page, so nothing to do here.
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    const building = buildingInput.value.trim();
    if (!building) {
      alert("Please enter a destination building.");
      return;
    }

    // Placeholder behavior for MVP:
    alert(`Directions feature coming soon for: ${building}`);
    console.log(`Directions requested for: ${building}`);

    // TODO: Replace this alert with a real map API call.
  });
}

/**
 * Attach click handlers to housing buttons on housing-services.html
 * This shows basic dynamic content without an API.
 */
function setupHousingButtons() {
  const buttons = document.querySelectorAll(".housing-button");
  const detailsBox = document.getElementById("housing-details");

  if (!buttons.length || !detailsBox) {
    // Not on housing-services page
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
      return "Watkins: Student center with Snappers, Ping Pong, and many other events and games Central location, close to dining and student life.";
    case "Bonner":
      return "Bonner: biggest dorm, great for student atheletes seeking an athlete driven community.";
    case "Greer":
      return "Greer: freshman mens dorm near baseball and football fields with lots of social events.";
    case "McQuiston":
      return "McQuiston: Spacious Honors Housing with modern amenities.";
    case "Pressly":
      return "Pressly: upperclassmen mens dorm near greer for baseball and football fields.";
    case "Kennedy":
      return "Kennedy: upperclassmen mens dorm near Bonner hall for athlete community.";
    case "Carnegie":
      return "Carnegie: freshman womens dorm on Bonner Circle surrounded by academic buildings with lots of social events.";
    case "Robinson":
      return "Robinson: upperclassmen womens on Bonner Circle surrounded by academic buildings.";
    case "Edwards":
      return "Edwards: Honors womens dorm in the center of campus. Nicest housing on the whole campus";
    default:
      return `${hallName}: Hall information coming soon.`;
  }
}
