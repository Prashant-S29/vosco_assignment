# Vocso Assignment

## Important Note
We cannot run this project in production without using a proxy server. In production, our fetch API call to MagicBricks is facing a 403 Forbidden error. Below is the error log:
```typescript
{
  status: 403,
  statusText: 'Forbidden',
  headers: {
    server: 'AkamaiGHost',
    'mime-version': '1.0',
    'content-type': 'text/html',
    'content-length': '398',
    expires: 'Sun, 16 Feb 2025 15:43:14 GMT',
    date: 'Sun, 16 Feb 2025 15:43:14 GMT',
    connection: 'close'
  },
  bodyUsed: false,
  ok: false,
  redirected: false,
  type: 'default',
  url: 'https://www.magicbricks.com/new-projects-jaipur'
}
```
---

## Repository Setup
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vocso-real-estate.git
cd vocso-real-estate
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Create Environment Variables
- Create a `.env` file in the root directory.
- Follow the instructions provided in `.env.example` to set all required environment variables.

### 4. Run the Development Server
```bash
npm run dev
```
---

## Description
### Next.js Assignment: Real Estate Project Listing for MagicBricks

**Objective:**
Build a Next.js application that fetches and displays real estate projects in real-time by scraping data from MagicBricks. The URL of the project should follow the pattern `/city/[cityName]`, and the app should display the scraped listings incrementally alongside an interactive map showing project locations using the PositionStack API.

### Project Requirements:
* **Dynamic Routing:** (`/city/[cityName]`)
  * Fetch project data from MagicBricks based on the city name from the URL.
  * Example URL: `https://www.magicbricks.com/new-projects-Hyderabad`
* **Display Project Details:**
  * Project Name
  * Location
  * Price Range
  * Builder Name
  * Coordinates (latitude, longitude)
* **Interactive Map:**
  * Use the PositionStack API to get coordinates.
  * Display markers with project details using Leaflet.js.
  * Clicking a marker shows project info.
* **Real-Time Updates:**
  * Show a loading spinner during scraping.
  * Display projects incrementally as fetched.

### API Integration:
* Use the PositionStack API for geocoding.
* Implement real-time loading or mock the scraper.

### Technical Stack:
* **Frontend:** Next.js, Tailwind CSS (optional), Leaflet.js
* **Backend:** Next.js API routes for scraping and geocoding
* **State Management:** Context API, Zustand, or Redux

---

## Submission Requirements
### 1. GitHub Repository:
- Well-structured project with a `README.md`
- Include setup instructions and assumptions.
### 2. Deployment:
- Deploy on Vercel or any other platform.
- Share the deployed link.
### 3. Screen Recording:
- Show dynamic routing, real-time scraping, incremental loading, and map integration.

### Evaluation Criteria:
* **Functionality:** Real-time scraping and project display
* **Map Integration:** Accurate and interactive markers
* **Code Quality:** Clean, modular, and documented code
* **UI/UX:** Visual appeal and error handling
* **Deployment:** Functional and accessible deployment

# Resources

## Design Inspiration
- [Hero Section by Rafi Rohmat - Dribbble](https://dribbble.com/shots/23106183-Garment-Real-Estate-Landing-Page)
- [City Page by Conceptzilla - Dribbble](https://dribbble.com/shots/24377202-Real-Estate-Property-Listing-Website-Design)
- [Interactive Map by PositionStack](http://positionstack.com/)

