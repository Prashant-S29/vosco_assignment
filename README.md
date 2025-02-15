# Vocso Assignment

## Description

Next.js Assignment: Real Estate Project Listing for MagicBricks

**Objective**

Build a Next.js application that fetches and displays real estate projects in real-time by scraping data from MagicBricks. The URL of the project should follow the pattern `/city/[cityName]`, and the app should display the scraped listings incrementally alongside an interactive map showing project locations using the PositionStack API.

---

**Assignment Details**

### Project Requirements:

*   Use dynamic routing (`/city/[cityName]`) to fetch project data for the specified city from MagicBricks.
*   Scrape data in real-time from a URL like:

    *   `https://www.magicbricks.com/new-projects-[cityName]`
    *   Example: `https://www.magicbricks.com/new-projects-Hyderabad`
*   Display the following details for each project:

    *   Project Name
    *   Location
    *   Price Range
    *   Builder Name
    *   Coordinates (latitude, longitude)
*   Use the PositionStack API to geocode project locations and plot them on an interactive map.

### Features to Include:

*   **Dynamic Routing:**

    *   Extract the city name from the URL (e.g., `/city/Hyderabad`) and use it to determine the MagicBricks scraping URL.
*   **Real-Time Data Updates:**

    *   Display a loading spinner or progress bar while scraping.
    *   Show projects incrementally as they are retrieved.
*   **Interactive Map:**

    *   Use the PositionStack API to fetch latitude and longitude for each project's location.
    *   Display project markers on a map using Leaflet.js or another map library.
    *   Clicking on a marker should show a popup with the project's details (name, price, and builder).

### API Integration:

*   Use PositionStack API (`https://positionstack.com`) to geocode the project locations.
*   Mock the scraper if scraping is challenging, but implement the real-time incremental data loading.

### Technical Requirements:

*   **Frontend:** Next.js, Tailwind CSS (optional), Leaflet.js/Google Maps for the map.
*   **Backend/API:** Use Next.js API routes to handle scraping and geocoding logic.
*   **State Management:** Use Context API, Zustand, or Redux for managing real-time data.

---

**Submission Requirements**

### GitHub Repository:

*   Include a well-structured project with a `README.md` explaining:

    *   How to set up and run the project.
    *   Any assumptions or decisions made during development.
### Deployed Version:

*   Deploy the application using Vercel (preferred) or any other platform.
*   Share the deployed link.
### Screen Recording:

*   Provide a short video walkthrough (2-3 minutes) showing:

    *   The dynamic routing.
    *   Real-time scraping and incremental loading.
    *   Map integration and interactivity.

---

**Timeframe**

Complete and submit the project within 24 hours of receiving the assignment.

---

**Evaluation Criteria**

### Functionality:

*   Does the app fetch and display real estate project data for the given city?
*   Are projects displayed incrementally as they are scraped?
### Map Integration:

*   Is the map functional and interactive with accurate project markers?
### Code Quality:

*   Is the code clean, modular, and well-documented?
*   Are best practices followed for scraping, API integration, and state management?
### UI/UX:

*   Is the app visually appealing and user-friendly?
*   Are loading states and errors handled gracefully?
### Deployment:

*   Is the deployed app fully functional and accessible?
