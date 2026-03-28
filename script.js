const events = [
  {
    name: "Tech Meetup 2026",
    date: "March 30, 2026",
    location: "Islamabad",
    description: "A meetup for developers.",
    image: "images/event1.jpg"
  },
  {
    name: "Music Festival",
    date: "April 2, 2026",
    location: "Lahore",
    description: "Enjoy live music performances.",
    image: "images/event2.jpg"
  },
  {
    name: "Startup Pitch Night",
    date: "April 5, 2026",
    location: "Karachi",
    description: "Pitch your ideas to investors.",
    image: "images/event3.jpg"
  },
  {
    name: "Art Exhibition",
    date: "April 10, 2026",
    location: "Rawalpindi",
    description: "Explore modern art and creativity.",
    image: "images/event4.jpg"
  },
  {
    name: "Food Carnival",
    date: "April 12, 2026",
    location: "Faisalabad",
    description: "Taste delicious food from top chefs.",
    image: "images/event5.jpg"
  }
];

/* =========================
   DOM ELEMENTS
========================= */
const container = document.getElementById("events-container");
const search = document.getElementById("search");

/* =========================
   FUNCTIONS
========================= */

// Render events dynamically
function displayEvents(data) {
  container.innerHTML = "";

  data.forEach((event, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.background = `url('${event.image}') no-repeat center center`;
    card.style.backgroundSize = "cover";
    card.style.animationDelay = `${index * 0.1}s`;

    
    card.innerHTML = `
        <div class="card-content">
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button>Register</button>
        </div>
        <img src="${event.image}" alt="${event.name}" style="display:none;" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Filter events based on search input
function filterEvents(query) {
  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(query.toLowerCase())
  );
  displayEvents(filtered);
}

/* =========================
   INITIALIZATION
========================= */

// Display all events on page load
displayEvents(events);

// Add search functionality
search.addEventListener("input", (e) => {
  filterEvents(e.target.value);
});