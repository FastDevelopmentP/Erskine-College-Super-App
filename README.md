# Erskine-College-Super-App
Campus Life Super App

The Campus Life Super App is a multi-page website designed to centralize useful resources for Erskine College students. It provides access to campus navigation, weather information, housing details, and academic support. The project demonstrates practical front-end development skills, including DOM manipulation, API integration, responsive design, and UI organization.

Project Description and Purpose

This project was built to simulate a realistic student campus resource app. Its purpose is to gather essential Erskine-related tools into one place so students can quickly access maps, weather, housing information, and advising support. It also serves as a demonstration of core web development practices covered in the course, including layouts, reusable components, JavaScript functionality, and API usage.

Technologies Used

Languages and Frameworks


HTML5

CSS3 (with custom styling)

JavaScript (ES6)

Bootstrap 5.3

APIs

Google Maps Embed API

OpenWeatherMap API

Tools

Visual Studio Code

Live Server Extension

Git and GitHub

Chrome Developer Tools


Project structure
/
├── index.html
├── campus-map.html
├── housing-services.html
├── academic-support.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── ace-logo.jpg
    ├── erskine-seal.jpg
    └── other assets


Feature List and How to Use Them
1. Interactive Campus Map

Located on the Campus Map page.
A Google Map embeded with manual scrolling, zooming, panning, and viewing campus locations. This helps students navigate the Erskine College area.

2. Real-Time Weather Information

The weather feature loads the current temperature, weather description, and “feels like” temperature for Due West, SC using the OpenWeatherMap API. It updates automatically when the page loads.

3. Quick Directions Input

A text input allows the user to enter a building or hall name.
At this stage, it displays a placeholder message through JavaScript. It is prepared to be expanded into a full walking-directions system using the Google Directions API.

4. Housing Information Page

Users can click on residence hall buttons to instantly load hall descriptions without leaving the page. This is powered by event listeners in JavaScript.

5. Academic Support Page

Contains links and guidance for advising, tutoring, and study-related resources.
Layout is streamlined for clarity and accessibility.

6. Dark/Light Theme Toggle

Every page includes a theme toggle in the navbar.
The setting is saved using localStorage, so the user’s preference remains consistent across all pages.

7. Scroll-Reveal Animations

Sections fade in as the user scrolls, using the IntersectionObserver API.
This creates a smoother visual experience without affecting usability.

Future Improvements and Stretch Goals

The following additions could expand the project in future iterations:

Integrating the Google Directions API to generate actual walking routes

Adding a dining hall menu

Creating a campus events feed or calendar integration

Adding user authentication and personalized campus tools

Creating a searchable directory for buildings or departments

Adding hall photos or image galleries to the housing page

Improving accessibility testing (ARIA labels, tab order, contrast)

Notes

This project was created for educational purposes to demonstrate modern front-end development concepts such as layout design, client-side logic, API integration, and responsive UI patterns.
