const events = [
  {
    name: "Tech Meetup 2026",
    date: "March 30, 2026",
    location: "Islamabad",
    description: "A meetup for developers."
  },
  {
    name: "Music Festival",
    date: "April 2, 2026",
    location: "Lahore",
    description: "Enjoy live music performances."
  },
  {
    name: "Startup Pitch Night",
    date: "April 5, 2026",
    location: "Karachi",
    description: "Pitch your ideas to investors."
  },
  {
    name: "Art Exhibition",
    date: "April 10, 2026",
    location: "Rawalpindi",
    description: "Explore modern art and creativity."
  },
  {
    name: "Food Carnival",
    date: "April 12, 2026",
    location: "Faisalabad",
    description: "Taste delicious food from top chefs."
  }
];

const container = document.getElementById("events-container");
const search = document.getElementById("search");

function displayEvents(data) {
  container.innerHTML = "";

  data.forEach((event, index) => {
    const card = `
      <div class="card" style="animation-delay:${index * 0.1}s">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button>Register</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

displayEvents(events);

// SEARCH
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = events.filter(e =>
    e.name.toLowerCase().includes(value)
  );

  displayEvents(filtered);
});