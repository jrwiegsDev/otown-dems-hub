# O'Fallon Dems Club Hub - v1.0

This project is a single-page application (SPA) built to serve as the central information hub for the O'Fallon, IL Democratic Club. It provides a clean, accessible, and responsive interface for members and the public to view upcoming events and organizational information.

**Live Demo:** [https://otown-dems-hub.onrender.com](https://otown-dems-hub.onrender.com) 

---

## Features

* **Interactive Event Calendar:** Utilizes FullCalendar to display all upcoming club events fetched from a central API.
* **Hoverable Tooltips:** Hovering over an event on the calendar reveals a tooltip with more details, such as time and description.
* **Featured Event Banner:** A prominent banner at the top highlights the most urgent or important upcoming event.
* **Responsive Layout:** A modern, multi-column layout built with CSS Grid that adapts to a single column on smaller screens.
* **Light/Dark Mode:** A theme toggle allows users to switch between a light and dark color scheme for better accessibility and user preference.

---

## Tech Stack

* **Frontend:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Styling:** Custom CSS with CSS Variables for theming.
* **Libraries:**
    * [FullCalendar](https://fullcalendar.io/) for the calendar display.
    * [Tippy.js](https://atomiks.github.io/tippyjs/) for tooltips.
    * [Axios](https://axios-http.com/) for API requests.
* **Deployment:** [Render](https://render.com/) (Static Site)

---

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/otown-dems-hub.git](https://github.com/your-username/otown-dems-hub.git)
    cd otown-dems-hub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Backend Server:**
    This project is a frontend application that requires a separate backend server to provide the event data. Before starting this app, you must navigate to the `otown-dems-newsletter/backend` project and start its server (e.g., with `nodemon server.js` or `npm run dev`).

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

