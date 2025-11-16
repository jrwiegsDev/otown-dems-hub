# O'Fallon Area Democratic Club - Community Hub

A comprehensive single-page application (SPA) serving as the public-facing website for the O'Fallon, IL Area Democratic Club. This hub provides members and the public with event information, weekly polls, volunteer opportunities, voter resources, and political action tools.

**Live Site:** [https://otown-dems-hub.onrender.com](https://otown-dems-hub.onrender.com)  
**Backend API:** [otown-dems-newsletter](https://github.com/jrwiegsDev/otown-dems-newsletter)

---

## Overview

This project is the community-facing counterpart to the admin dashboard (otown-dems-newsletter). While admins manage content through the dashboard, this site displays that information to the public in an accessible, engaging format.

---

## Key Features

### Event Management
* **Interactive Calendar:** Full calendar display using FullCalendar with month/week/day views
* **Event Details:** Click events to view detailed information in modals
* **Featured Event Banner:** Highlights the next upcoming event prominently
* **Location Integration:** Links to event locations via Google Maps

### Weekly Poll System
* **Real-time Voting:** Cast votes on current political issues (up to 3 selections)
* **Email Verification:** One vote per email address per week using SHA-256 hashing
* **Dynamic Issues:** Poll topics automatically sync with admin-configured active issues
* **Vote Confirmation:** Visual feedback and prevents duplicate voting

### Community Engagement
* **Mailing List Signup:** Subscribe to the newsletter directly from the site
* **Volunteer Registration:** Sign up to volunteer with contact information
* **Social Media Links:** Quick access to club's social platforms
* **Donation Information:** Support the organization

### Political Action Tools
* **Voter Information:** Registration deadlines, polling locations, voter ID requirements
* **Representative Directory:** Contact info for local, state, and federal representatives
* **Project 2025 Tracker:** Track implementation of Project 2025 policies
* **Congress Work Tracker:** Monitor congressional activity and legislation
* **Government Spending Tracker:** Visualize federal spending patterns
* **Petitions & Calls to Action:** Active campaigns and advocacy opportunities
* **Banned Books Tracker:** Monitor book banning efforts in local schools/libraries
* **Healthcare Action Center:** ACA enrollment info and healthcare advocacy
* **Economic Action Resources:** Cost of living data and economic policy tracking
* **Recognize Fascism Guide:** Educational content on democratic principles
* **No Kings Project:** Supreme Court accountability information
* **Goods Unite Us:** Corporate political spending transparency
* **Pledge to Vote:** Voter commitment campaign

### Site Features
* **Responsive Design:** Fully mobile-optimized layout
* **Dark/Light Theme:** User preference toggle with persistence
* **Live User Counter:** Real-time display of active site visitors
* **Announcement Banner:** Dynamic announcements from admins
* **Mission Statement:** About the organization
* **Footer with Resources:** Quick links to important pages

---

## Tech Stack

### Core
* **React** (v18.2) - UI framework
* **Vite** (v5.2) - Build tool and dev server
* **React Router DOM** (v6.23) - Client-side routing

### UI Components & Libraries
* **FullCalendar** (v6.1) - Interactive event calendar
* **Tippy.js** (v6.3) with React wrapper - Tooltips and popovers
* **React Icons** (v5.2) - Icon library
* **Custom CSS** - Theming with CSS variables

### Data & API
* **Axios** (v1.7) - HTTP client for API requests
* **Validator** (v13.15) - Email validation

### Backend Integration
Connects to the `otown-dems-newsletter` backend API for:
* Event data
* Poll questions and voting
* Announcements
* Volunteer signups
* Newsletter subscriptions

---

## Project Structure

```
otown-dems-hub/
├── src/
│   ├── components/
│   │   ├── WeeklyPoll.jsx           # Poll voting interface
│   │   ├── Events.jsx               # Calendar and event list
│   │   ├── EventDetailModal.jsx     # Event detail popup
│   │   ├── MailingListSignup.jsx    # Newsletter subscription
│   │   ├── VolunteerSignup.jsx      # Volunteer registration
│   │   ├── VoterInformation.jsx     # Voter resources
│   │   ├── Representatives.jsx       # Contact representatives
│   │   ├── Project2025Tracker.jsx   # Policy tracker
│   │   ├── CongressWorkTracker.jsx  # Congressional activity
│   │   ├── SpendingTracker.jsx      # Federal spending
│   │   ├── BannedBooks.jsx          # Book banning tracker
│   │   ├── Healthcare.jsx           # Healthcare resources
│   │   ├── EconomicAction.jsx       # Economic data
│   │   ├── PetitionsAndCalls.jsx    # Advocacy campaigns
│   │   ├── LiveUserCount.jsx        # Active users display
│   │   ├── ThemeToggle.jsx          # Dark/light mode
│   │   ├── Navbar.jsx               # Navigation
│   │   └── Footer.jsx               # Footer links
│   ├── pages/
│   │   └── Home.jsx                 # Main landing page
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # Entry point
├── public/
│   └── assets/                      # Images and static files
├── package.json
├── vite.config.js
└── README.md
```

---

## API Integration

This frontend connects to the backend API at:
* **Development:** `http://localhost:8000`
* **Production:** Your deployed backend URL

### Key API Endpoints Used

**Events:**
* `GET /api/events` - Fetch all events

**Polls:**
* `GET /api/poll/active-issues` - Get current poll questions
* `POST /api/poll/vote` - Submit poll vote
* `POST /api/poll/check-email` - Verify if user already voted

**Community:**
* `POST /api/subscribers` - Newsletter signup
* `POST /api/volunteers` - Volunteer registration

**Announcements:**
* `GET /api/announcements` - Fetch active announcements

---

## Local Development Setup

### Prerequisites
* Node.js (v16 or higher)
* Backend server running (`otown-dems-newsletter`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jrwiegsDev/otown-dems-hub.git
   cd otown-dems-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   Navigate to the `otown-dems-newsletter/backend` directory and run:
   ```bash
   npm run server
   ```
   Backend should be running on `http://localhost:8000`

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

---

## Environment Configuration

Update the API base URL in components to match your backend:

**Development:** `http://localhost:8000`  
**Production:** Update axios calls to use your deployed backend URL

Example in components:
```javascript
const API_URL = import.meta.env.PROD 
  ? 'https://your-backend-url.com' 
  : 'http://localhost:8000';
```

---

## Deployment

### Frontend (Render/Vercel/Netlify)
* **Build Command:** `npm run build`
* **Publish Directory:** `dist`
* **Node Version:** 18+

### Important Notes
* Ensure backend API URL is correctly configured for production
* Enable CORS on backend for your frontend domain
* Set up environment variables if needed

---

## Key Components

### WeeklyPoll.jsx
Handles the weekly political poll:
* Fetches active issues from backend
* Email validation and duplicate vote prevention
* Multi-select (up to 3 issues) with visual feedback
* Responsive card-based layout

### Events.jsx
Displays club events:
* FullCalendar integration with month/week/day views
* Event click handlers to show details
* Responsive calendar sizing
* Tooltips on hover

### VoterInformation.jsx
Comprehensive voter resources:
* Registration information
* Important dates and deadlines
* Polling location finder
* Voter ID requirements

### Project2025Tracker.jsx
Tracks Project 2025 implementation:
* Policy categories
* Implementation status
* Impact assessments
* Source links

---

## Theme System

The site uses CSS variables for theming:

```css
/* Light theme (default) */
--bg-primary: #ffffff;
--text-primary: #333333;
--accent: #0066cc;

/* Dark theme */
--bg-primary: #1a1a1a;
--text-primary: #ffffff;
--accent: #4d94ff;
```

Theme preference is saved to localStorage.

---

## Contributing

This is a project for the O'Fallon Area Democratic Club. For questions or contributions, contact the maintainer.

---

## Related Projects

* **Admin Dashboard:** [otown-dems-newsletter](https://github.com/jrwiegsDev/otown-dems-newsletter) - Backend API and admin interface

---

## License

Private - All Rights Reserved

---

## Contact

**Developer:** jrwiegsDev  
**Organization:** O'Fallon Area Democratic Club  
**Website:** [https://otown-dems-hub.onrender.com](https://otown-dems-hub.onrender.com)

