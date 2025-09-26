GDG Vizag Events Page
1. Project Overview
This is a professional, responsive, and interactive webpage designed to display upcoming and past events for a Google Developer Group (GDG) chapter. It was built to demonstrate modern web development practices, focusing on a clean user interface, dynamic content, and an excellent user experience.

This project is fully self-contained and requires no external libraries or frameworks.

2. Screenshots
<img width="1901" height="391" alt="image" src="https://github.com/user-attachments/assets/c6a1f832-45a2-4ec5-a4a3-f8b65746d41f" />
<img width="1901" height="910" alt="image" src="https://github.com/user-attachments/assets/23887990-ce94-4301-a58b-ae915fe3bb41" />


3. Key Features
Dynamic Event Status: The page automatically checks the current date and categorizes events as "Upcoming" or "Past."

Interactive Filtering: Users can easily filter the displayed events to see "Upcoming," "Past," or "All" events with a smooth transition.

Professional UI/UX: The design is clean, modern, and inspired by Google's Material Design principles. It includes a unique "calendar view" on each event card.

Responsive Design: The layout is fully responsive and looks great on all devices, from mobile phones to desktop monitors.

Custom Registration Modal: A non-intrusive, custom-built modal appears for event registration, providing a better user experience than a standard browser alert.

Easy to Customize: Events are managed in a simple array within the script.js file, making it straightforward to add, remove, or update event details.

4. Technologies Used
HTML5: For the core structure and content of the webpage.

CSS3: For all styling, layout, animations, and responsive design.

Vanilla JavaScript (ES6): For DOM manipulation, date logic, event handling, and dynamic content rendering.

5. How to Run
Clone or download the project repository.

Ensure all three files (index.html, style.css, and script.js) are in the same directory.

Open the index.html file in any modern web browser (like Chrome, Firefox, or Edge).

6. Project Structure
/GDG-Events-Page
├── 📄 index.html      # The main HTML file
├── 📄 style.css       # All the CSS styles
└── 📄 script.js       # JavaScript logic and event data

7. How to Customize Events
All event data is stored in an array called events at the top of the script.js file.

Open script.js.

Locate the events array.

To add a new event, copy an existing event object, paste it into the array, and modify its properties (title, date, venue, description, image).

To remove an event, simply delete its corresponding object from the array.

Example Event Object:

{
    title: "Your New Event Title",
    date: "YYYY-MM-DD", // Use this format for correct date parsing
    time: "10:00 AM - 2:00 PM",
    venue: "Your Venue",
    description: "A short, engaging description of your event.",
    image: "https://path/to/your/event-image.jpg",
    link: "#" // Future link for registration
}
